var drawSource, drawLayer;
var drawInteraction;
var geometryType = 'Point';
var featureIntrest = "fishing";
var featureId;
var featureStatus = 'NOLIKE';
var addPointStatus = false;
var addPolygonStatus = false;
var cameraImage,galleryImage;

$(document).ready(function() {
    drawSource = new ol.source.Vector();
    drawLayer = new ol.layer.Vector({
        source: drawSource,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffcc33',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#ffcc33'
                })
            })
        })
    });
    map.addLayer(drawLayer);

    addFeaturesToMap();

        map.on('click', function(evt) {
            if(drawStatus && !addPointStatus && !addPolygonStatus) {
                removeObjectPopup();
                showFeatureAttributePopup(evt);
            }
        });

        $("#editform_div").click( function(event) {
        	  if (!event.target.matches('.dropbtn')) {
        	    var dropdowns = document.getElementsByClassName("dropdown-content");
        	    var i;
        	    for (i = 0; i < dropdowns.length; i++) {
        	      var openDropdown = dropdowns[i];
        	      if (openDropdown.classList.contains('show')) {
        	        openDropdown.classList.remove('show');
        	      }
        	    }
            }
        });
});

function addDrawInteraction(geoType) {

    if (drawStatus) {
        if (drawInteraction)
            map.removeInteraction(drawInteraction);

        drawInteraction = new ol.interaction.Draw({
            source: drawSource,
            type: geoType
        });

        map.addInteraction(drawInteraction);

        drawInteraction.on('drawend', function(evt) {
            addFeatureOFF();
            showFeatureAttributeEditPopUp(evt);
        });
    }
}

function addPointON() {
    if (addPointStatus) {
        removeInteractions();
        addPointOFF();
    } else {
        addDrawInteraction('Point');
        geometryType = 'Point';
        $("#add_point").css("background", "#FF8C00");
        addPointStatus = true;
        addPolygonOFF();
        drawSource.clear();

    }
}

function addPointOFF() {
    addPointStatus = false;
    $("#add_point").css("background", "#2c3e50");
}

function addPolygonON() {
    if (addPolygonStatus) {
        removeInteractions();
        addPolygonOFF();
    } else {
        addDrawInteraction('Polygon');
        geometryType = 'Polygon';
        $("#add_polygon").css("background", "#FF8C00");
        addPolygonStatus = true;
        addPointOFF();
        drawSource.clear();
    }
}

function addPolygonOFF() {
    addPolygonStatus = false;
    $("#add_polygon").css("background", "#2c3e50");
}

function removeInteractions() {
    map.removeInteraction(drawInteraction);
    drawSource.clear();
}

function addFeatureOFF() {
    map.removeInteraction(drawInteraction);
    $("#add_point").css("background", "#2c3e50");
    $("#add_polygon").css("background", "#2c3e50");
}

function showFeatureAttributePopup(evt) {
    measureTooltipElement.innerHTML = "";
    $("#deleteFeature").hide();
    var features = [];
    map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        features.push(feature);
    });

    if (features.length > 0 && features[0].values_.feature_interest) {

        featureId = parseInt(features[0].id_.split(".")[1]);
        var feature_interest = features[0].values_.feature_interest;

        var dt = new Date(features[0].values_.updatedon);
        var newdate = ((dt.getUTCDate() < 10) ? '0' : '') + dt.getUTCDate() + '/' + (((dt.getUTCMonth() + 1) < 10) ? '0' : '') + (dt.getUTCMonth() + 1) + '/' + dt.getUTCFullYear();

        $("#postedcomment").html(features[0].values_.comment);
        $("#postedimage").attr('src','');
        $("#postedroute").html("");
        $("#postedbyimage").attr('src', webserviceurl + "users/" + features[0].values_.username + "/profilepic");
        $("#postedbyusername").html(features[0].values_.username);
        $("#posteddate").html(newdate);

        if(localStorage.getItem("username") == features[0].values_.username){
            $("#deleteFeature").show();
        }

        getRatingsOfFeature();
        getFilesOfFeature();
        measureTooltipElement.innerHTML = $("#infoobject").html();
        measureTooltip.setPosition(evt.coordinate);
        map.getView().animate({
            center: evt.coordinate,
            duration: 500
        });
    }
}

function saveFeature() {
    var notes = $("#commenttext").val();

    if(notes.length>=5){
    var ol3Geom = drawSource.getFeatures()[drawSource.getFeatures().length - 1].getGeometry().transform(prj3, prj2);
    var format = new ol.format.WKT();
    var wktRepresenation = format.writeGeometry(ol3Geom);
    var data = {
        "username": localStorage.getItem("username"),
        "comment": notes,
        "location": wktRepresenation,
        "type": geometryType,
        "featureInterest": featureIntrest
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": webserviceurl + "features",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
        "processData": false,
        "data": JSON.stringify(data)
    };

    $.ajax(settings).done(function(response) {
            addPointOFF();
            addPolygonOFF();

            featureId = response;

            if(galleryImage)
            uploadImageFileToFeature();

            if(cameraImage)
            uploadCameraImageToFeature();

            if(uploadRouteFileURL)
            uploadRouteFileToFeature();

            removeObjectPopup();
            addFeaturesToMap();
            jAlert("Successfully saved Overlay Info", "User Overlay");
            featureIntrest = "fishing";

    });
    }else{
         jAlert("Please enter a minimum of 5 characters", "User Overlay");
    }
}

function showFeatureAttributeEditPopUp(evt) {

    if (evt.target.type_ == "Point") {
        geometryType = 'Point';
        var coordinate = evt.feature.getGeometry().getCoordinates();
        measureTooltip.setPosition(coordinate);
        measureTooltipElement.innerHTML = $("#userobject").html();
        map.getView().animate({
            center: coordinate,
            duration: 500
        });
    } else {
        geometryType = 'Polygon';
        measureTooltipElement.innerHTML = $("#userobject").html();
        var coordinate = evt.feature.getGeometry().getInteriorPoint().getCoordinates();
        measureTooltip.setPosition(coordinate);
        map.getView().animate({
            center: coordinate,
            duration: 500
        });
    }
}

function showDetails(activity) {
   featureIntrest = activity;
   $("#imgget_activity").attr("src", "./images/polygonimg/Emoji/" + activity + ".svg");
   $("#myDropdown").removeClass("show");
}

function deleteFeature() {

    jConfirm('Are you sure want to Delete Feature?', 'Delete Feature', function(confirmed) {
        if (confirmed) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": webserviceurl + "features/" + featureId,
                "method": "DELETE",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                    "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
                },
                "processData": false
            }

            $.ajax(settings).done(function(response) {
                if(wpArr.length > 1)
                clearRoute();
                addFeaturesToMap();
                removeObjectPopup();
            });
        }
    });
}

function addFeaturesToMap(){

    if (pointEntitySource) {
        pointEntitySource.clear();
    }

    $.ajax({
        url: geoserverurl + 'ows?service=WFS&version=1.0.0&request=GetFeature&typeName='+workspace+':feature_entity&outputFormat=application/json&srsname='+prj1+'&',
        type: "GET",
        async: false
    }).done(function(response) {
        if(response.features){
            pointEntitySource.addFeatures(new ol.format.GeoJSON().readFeatures(response));

            var features = pointEntitySource.getFeatures();
            var length = features.length;

            for(var i = 0;  i < length; i++ ){
            getFeatureTypeStyle(features[i]);
            }
        }
    });
}

function openselectimage() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown1").classList.remove("show");
}

function openAttachments() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown").classList.remove("show");
}

function openGallery() {
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("myDropdown").classList.remove("show");
}

$("#userobject").click(function(){
	 $("#myDropdown").removeClass("show");
     $("#myDropdown1").removeClass("show");
});

$("#profile").click(function(){
	 $("#myDropdown2").removeClass("show");
});

$(".dropdown").click(function(e){
	  e.stopPropagation();
	  e.preventDefault();
	  $("#myDropdown2").removeClass("show");
});

function getFeatureTypeStyle(feature){
    var imageName = feature.values_.feature_interest;
        var pointsrc = 'images/polygonimg/Emoji/'+imageName+'.svg';
    var img = new Image();
    img.onload = function() {

        // canvas image source for pattern:
        var svgCanvas = document.createElement("canvas");
        svgCanvas.width = this.width;
        svgCanvas.height = this.height;

        // draw in the SVG to canvas
        var svgCtx = svgCanvas.getContext("2d");
        svgCtx.drawImage(this, 0, 0, 120, 120);

        // use canvas as image source instead
        var pattern = svgCtx.createPattern(svgCanvas, 'repeat');

           var style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(255,0,0,0.5)',
                    width: 2,
                    lineDash : [ 10, 10 ],
                    lineCap : "square"
               }),
               fill: new ol.style.Fill({
                    color: pattern
              }),
               image: new ol.style.Icon({
                   src: pointsrc,
                   scale: 0.3
                 })
               });
           feature.setStyle(style);
    };
    img.src = 'images/polygonimg/Emoji/'+imageName+'_40.svg';
    
}

function changeRatingOfFeature(value){

    if(featureStatus == value){
        featureStatus = 'NOLIKE';
    }else{
        featureStatus = value;
    }

    var data = {
            "username": localStorage.getItem("username"),
            "featureId": featureId,
            "featurestatus": featureStatus,
       };

       var settings = {
           "async": true,
           "crossDomain": true,
           "url": webserviceurl + "feature/"+featureId+"/ratings",
           "method": "POST",
           "headers": {
               "content-type": "application/json",
               "cache-control": "no-cache",
               "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
           },
           "processData": false,
           "data": JSON.stringify(data)
       };

    $.ajax(settings).done(function(response) {
         getRatingsOfFeature();
    });
}

function getRatingsOfFeature(){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": webserviceurl + "feature/" + featureId + '/ratings/'+ localStorage.getItem("username"),
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
        "processData": false
    }

    $.ajax(settings).done(function(response) {
           $(".likescount").html(response.likes);
           $(".dislikescount").html(response.dislikes);
           featureStatus = response.featurestatus;
           if(featureStatus == "NOLIKE"){
               $(".likethumb").css('color','#fff');
               $(".dislikethumb").css('color','#fff');
           } else if(featureStatus == "LIKE"){
                $(".likethumb").css('color','#00adef');
                $(".dislikethumb").css('color','#fff');
           } else if(featureStatus == "DISLIKE"){
                $(".likethumb").css('color','#fff');
                $(".dislikethumb").css('color','#00adef');
           }
    });
}

function removeObjectPopup(){
    measureTooltip.setPosition(undefined);
    clearAttachments();
    removeInteractions();
    addPolygonOFF();
    addPointOFF();
}

function changePostionOfPopup(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(drawPosition, onError, {
            timeout: 60000,
            enableHighAccuracy: true
        });
    }
}

function drawPosition(position) {
    var lon = parseFloat(position.coords.longitude);
    var lat = parseFloat(position.coords.latitude);
    var location = ol.proj.transform([lon, lat], prj2, prj1);
        map.getView().setCenter(location);
}

function uploadCameraImageToFeature(){
    var postUrl = webserviceurl+"features/"+featureId+"/files";
    var fileURL = uploadCameraImageURL;

    var success = function (r) {
        galleryImage = false;
        cameraImage = false;
    }

    var fail = function (error) {
     alert("An error has occurred: Code = " + JSON.stringify(error));
    }

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "image/jpg";
    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI(postUrl), success, fail, options);
}

function uploadImageFileToFeature(){

    var serviceurl = webserviceurl+"features/"+featureId+"/files";
    var form = new FormData();
    form.append("file", uploadFileImageObject.files[0]);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": serviceurl,
      "method": "POST",
      "headers": {
        "cache-control": "no-cache",
        "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {
         galleryImage = false;
         cameraImage = false;
    }).fail(function(response){
        galleryImage = false;
        cameraImage = false;
    });
}

function uploadRouteFileToFeature(){
    var postUrl = webserviceurl+"features/"+featureId+"/files";
    var fileURL = uploadRouteFileURL;

    var success = function (r) {
    uploadRouteFileURL = undefined;
    }

    var fail = function (error) {
     uploadRouteFileURL = undefined;
    }

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI(postUrl), success, fail, options);
}

var uploadRouteFileURL;

function getRouteFilePath(fileEntry){
    openAttachments();
    uploadRouteFileURL = fileEntry.toURL();
    $("#selectedroutefilename").html(uploadRouteFileURL.substr(uploadRouteFileURL.lastIndexOf('/') + 1));
    $("#selectedroutefilenametag").show();
}

var uploadFileImageObject;

function getFileImageFilePath(){
    openAttachments();
    uploadFileImageObject = document.getElementById('objectphotofile');
    var filename = uploadFileImageObject.value.replace("C:\\fakepath\\","");
    $("#selectedimagefilename").html(filename);
    $("#selectedimagefilenametag").show();
    cameraImage = false;
    galleryImage = true;
}

function openCameraAndGetFilePath(){
     openAttachments();
     navigator.camera.getPicture(getCameraImageFilePath, fail, { quality: 20,
     destinationType: Camera.DestinationType.FILE_URI });
}

var uploadCameraImageURL;

function getCameraImageFilePath(imageData) {
    window.resolveLocalFileSystemURL(imageData,  function(fileEntry){
    uploadCameraImageURL = fileEntry.toURL();
    $("#selectedimagefilename").html(uploadCameraImageURL.substr(uploadCameraImageURL.lastIndexOf('/') + 1));
    $("#selectedimagefilenametag").show();
    cameraImage = true;
    galleryImage = false;
    } , fail);
 }

function clearAttachments(){
    removeRouteFile();
    removeImageFile();
    uploadRouteFileURL = undefined;
    cameraImage = false;
    galleryImage = false;
}

function getFilesOfFeature(){

   var settings = {
        "async": true,
        "crossDomain": true,
        "url": webserviceurl + "features/" + featureId + '/files',
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
        "processData": false
    }

    // $.ajax(settings).done(function(response) {
    //     console.log("response",response);
    //     console.log("length",response.length);
    //       if(response.length>0)
    //       for(var i = 0; i < response.length;i++){
    //          if(response[i].includes('.jpg') || response[i].includes('.png') || response[i].includes('.jpeg')){
    //             $("#postedimage").attr("src",response[i]);
    //          }else if(response[i].includes('.rtz') || response[i].includes('.kml') || response[i].includes('.geojson')){
    //             $("#postedroute").attr("routepath",response[i]);
    //             $("#postedroute").html(response[i].substr(response[i].lastIndexOf('/') + 1));
    //          }
    //       }
    // });

    $.ajax(settings).done(function(responseXML) {
        console.log("responseXML",responseXML);
        var urls = []; // Array to store extracted URLs
        
        // Parse the XML response
        $(responseXML).find('item').each(function() {
            urls.push($(this).text()); // Extract URL and push to the array
        });

        // Process the extracted URLs
        /*for (var i = 0; i < urls.length; i++) {
            if (urls[i].includes('.jpg') || urls[i].includes('.png') || urls[i].includes('.jpeg')) {
                $("#postedimage").attr("src", urls[i]);
            } else if (urls[i].includes('.rtz') || urls[i].includes('.kml') || urls[i].includes('.geojson')) {
                $("#postedroute").attr("routepath", urls[i]);
                $("#postedroute").html(urls[i].substr(urls[i].lastIndexOf('/') + 1));
            }
        }*/

        // added loadermask and timout to render feature file
         $(".loadermask").show();
         setTimeout(function() {
            for (var i = 0; i < urls.length; i++) {
                if (urls[i].includes('.jpg') || urls[i].includes('.png') || urls[i].includes('.jpeg')) {
                    $("#postedimage").attr("src", urls[i]);
                } else if (urls[i].includes('.rtz') || urls[i].includes('.kml') || urls[i].includes('.geojson')) {
                    $("#postedroute").attr("routepath", urls[i]);
                    $("#postedroute").html(urls[i].substr(urls[i].lastIndexOf('/') + 1));
                }
            }
         $(".loadermask").hide();
          }, 7000);// 7000 ms delay

    });




   
}

function loadRouteonMap(){
    var fileurl = $("#postedroute").attr("routepath");
    var filename = fileurl.substr(fileurl.lastIndexOf('/') + 1);
    readXMLContent(fileurl,filename);
}

/* Function to Read XML Content and Returns xmlDoc Object */
function readXMLContent(file,filename) {
	$.ajax({
        type: "GET",
        url: file,
        async:false,
        success: function(response){
            if(filename.includes(".rtz")){
               convertXMLToJSON(response);
            }else if(filename.includes(".kml")){
               convertKMLToJSON(response);
            }else if(filename.includes('geojson')){
               loadTrackOnMap(response);
            }
      },
      error: function() {
        alert("An error occurred while processing XML file.");
      }
    });
}

function removeRouteFile(){
    $("#selectedroutefilename").html("");
    $("#selectedroutefilenametag").hide();
    uploadRouteFileURL = undefined;
}

function removeImageFile(){
    $("#selectedimagefilename").html("");
    $("#selectedimagefilenametag").hide();
    galleryImage = false;
    cameraImage = false;
}