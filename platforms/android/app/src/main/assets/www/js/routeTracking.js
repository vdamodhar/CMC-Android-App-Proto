var trackingIntervalLoop;
var trackingIntervalTime = 1000 * 5;
var trackedPoints;
var watchPositionGPS;
var trackLat, trackLon;
function trackMyRoute(type){

    $("#trackingstatus").css('display','block');
    $("#route_data").css("display", "block");
     $(".ui-resizable-n").show();
    $("#route_data_tab").css("display", "block");
    $("#footer").css("display", "block");
    $("#footer").css("height", "165px");
    startTracking();
    saveNavigationInfo();
    trackingIntervalLoop = setInterval(saveNavigationInfo, trackingIntervalTime);
}

function startTracking(){

    if(navigator.geolocation) {
    watchPositionGPS = navigator.geolocation.watchPosition(trackPosition, onError, {
            timeout: 30000,
            enableHighAccuracy: true
        });
    }
}

function trackPosition(position){
    trackLon = parseFloat(position.coords.longitude);
    trackLat = parseFloat(position.coords.latitude);
    shipPosition =  [trackLon,trackLat];
    distanceShipCoordinates = [trackLon,trackLat];
     if(wpArr.length<2){
     var travelledDistance, speed, shipRotation;
     var features = trackedJSONObject.features;
     var length = features.length;

     if(length>1){
         travelledDistance = 0;
         for(var i = 0; i<length-1; i++){
             var p0 = turf.point(features[i].geometry.coordinates)
             var p1 = turf.point(features[i+1].geometry.coordinates)
             travelledDistance+= turf.distance(p0, p1, distanceSelectedValue);
         }

         var p2 = turf.point(features[length-2].geometry.coordinates);
         var p3 = turf.point(features[length-1].geometry.coordinates);
         var time = (features[length-1].properties.time - features[length-2].properties.time) / 1000;
         var currentDistance = turf.distance(p2, p3, distanceSelectedValue);

         speed = ((currentDistance / time) * 3600).toFixed(2);

         shipRotation = turf.bearing(p2,p3);

         if(shipRotation < 0)
         shipRotation = shipRotation + 360;

     }else{
         travelledDistance = 0;
         speed = 0;
         shipRotation = 0;
     }

     if (vesselLayer) {
         map.removeLayer(vesselLayer);
     }

     var point_feature = new ol.Feature({});
     var point_geom = new ol.geom.Point(ol.proj.transform([trackLon, trackLat], prj2, prj1));
     point_feature.setGeometry(point_geom);
     point_feature.setProperties({
         'id': 0,
         'name': '',
         'rotation': shipRotation
     });

     var style = new ol.style.Style({
         stroke: new ol.style.Stroke({
             color: "transparent",
             width: 0
         }),
         fill: new ol.style.Fill({
             color: "transparent"
         }),
         image: new ol.style.Icon({
             src: 'images/boats.svg',
             rotateWithView: true,
             anchor: [32, 16],
             scale:0.1,
             anchorXUnits: 'pixels',
             anchorYUnits: 'pixels',
             rotation: Math.radians(shipRotation-90)
         })
     });

     point_feature.setStyle(style);
     vesselVector = new ol.source.Vector();
     vesselVector.addFeature(point_feature);

     vesselLayer = new ol.layer.Vector({
         source: vesselVector
     });

     map.addLayer(vesselLayer);
     gpsMarker.setPosition(undefined);

     var positionInLatLon = ol.coordinate.toStringHDMS([trackLon,trackLat]).split(" ");

     var latText = "";
     var lonText = "";

     if($("#selectPositions").val() == "dm"){
         latText = shipPosition[1] +" " +positionInLatLon[3];
         lonText = shipPosition[0] +" " +positionInLatLon[7];
     }else{
         latText = positionInLatLon[0] + " " + positionInLatLon[1] + " " + positionInLatLon[2] + " " + positionInLatLon[3];
         lonText = positionInLatLon[4] + " " + positionInLatLon[5] + " " + positionInLatLon[6] + " " + positionInLatLon[7];
     }

     $("#traveleddistance").html(travelledDistance.toFixed(4) + " " + intialUnits[distanceSelectedValue]);
     $("#shippositionlat").html(latText);
     $("#shippositionlon").html(lonText);
     $("#shipspeed").html(speed + " " + intialUnits[distanceSelectedValue] + "/h");
     $("#course").html(shipRotation.toFixed(2) + "&#176;");
     $("#nextwaypointdistance").html('NA');
     $("#nextwaypointcourse").html('NA');
     $("#nextwaypointnumber").html('NA');
     $("#totaltime").html('NA');
     $("#route_xtl").html('NA');
     $("#route_xtr").html('NA');
     $("#route_name").html('Track');
     $("#routedistance").html('NA');
     $("#traveleddistance_tab").html(travelledDistance.toFixed(4) + " " + intialUnits[distanceSelectedValue]);
     $("#shippositionlat_tab").html(latText);
     $("#shippositionlon_tab").html(lonText);
     $("#shipspeed_tab").html(speed + " " + intialUnits[distanceSelectedValue] + "/h");
     $("#course_tab").html(shipRotation.toFixed(2) + "&#176;");
     $("#totaltime_tab").html('NA');
     $("#route_xtl_tab").html('NA');
     $("#route_xtr_tab").html('NA');
     $("#route_name_tab").html('Track');
     $("#nextwaypointdistance_tab").html('NA');
     $("#nextwaypointcourse_tab").html('NA');
     $("#nextwaypointnumber_tab").html('NA');
     $("#nextwaypointposition").html('NA');
     $("#routedistance_tab").html('NA');
     $("#gpsError").html("");
     $("#gpsError_tab").html("");
     $("#gpssignal").hide();
     //code for ship distance frequently update
     if (measureDistanceShipStatus) {
         if (selectedCoordinatesForDistance != undefined && selectedCoordinatesForDistance.length > 0) {
             removeGraphics();
             redrawDistanceFromShip();
         }
     }
    }

    //code for north up or head up
    loadTheMapMode();
    if (!isMapModeNorthUp) {
        map.getView().rotate(0);
        map.getView().rotate(Math.radians(-shipRotation));
        map.getView().setCenter(ol.proj.transform(shipPosition, prj2, prj1));
        rotateCompass();
    } else {
        var size = map.getSize();
        var mapExtentPolygon = ol.geom.Polygon.fromExtent(map.getView().calculateExtent([size[0]-60, size[1]-60]));
        var p10 = turf.point(ol.proj.transform([trackLon,trackLat], prj2, prj3));
        if (turf.inside(p10, turf.polygon(mapExtentPolygon.getCoordinates()))) {} else {
            map.getView().setCenter(ol.proj.transform(shipPosition, prj2, prj1));
        }
        map.getView().rotate(0);
        rotateCompass();
    }
}

function saveNavigationInfo(){
    if(trackLon && trackLat){
        var feature = {
              "type": "Feature",
              "properties": {"time": new Date().getTime() },
              "geometry": {
                "type": "Point",
                "coordinates": [ trackLon , trackLat]
              }
         };

         trackedJSONObject.features.push(feature);
         trackedPoints = JSON.stringify(trackedJSONObject);
    }
}

function saveTrack(){

    var filename = $("#trackfilename").val();
    if(filename==""){
        jAlert("Please enter a filename", "Save Track");
    }else{
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    trackFileName = localStorage.getItem("username")+"_"+day+"-"+month+"-"+year+"_"+filename+".geojson";
    document.addEventListener("deviceready", readyforSaveTrack, false);
    }
}

function readyforSaveTrack(){
     window.resolveLocalFileSystemURL(folderpath, gotTrackFS, fail);
}

function gotTrackFS(fileSystem) {
    fileSystem.getDirectory("NaAVIC/Tracks", {
        create: true
    }, gotTrackDir, fail);
}

function gotTrackDir(dirEntry) {
    dirEntry.getFile(trackFileName, {
        create: true,
        exclusive: false
    }, gotTrackFileCreate, fail);
}

function fail(error) {
    console.log("error" + error.code)
}

function gotTrackFileCreate(fileEntry) {

    fileEntry.createWriter(function(fileWriter) {
        fileWriter.onwriteend = function(e) {
            jAlert("Successfully saved Track", "Tracking");
            closeTrackFileName();
            window.resolveLocalFileSystemURL('cdvfile://localhost/persistent/Android/data/com.iict.naavic/NaAVIC/Tracks/'+trackFileName,  onTrackSuccess , fail);
            clearInterval(trackingIntervalLoop);
            navigator.geolocation.clearWatch(watchPositionGPS);
            $("#trackingstatus").css('display','none');
            $("#route_data").css("display", "none");
            $("#route_data_tab").css("display", "none");
            $("#footer").css("display", "block");
            $("#footer").css("height", "1px");

            map.removeLayer(vesselLayer);
        };

        fileWriter.onerror = function(e) {
            jAlert('Failed to save track','Track');
        };

        var blob = new Blob([trackedPoints], {
            type: 'text/plain'
        });
        fileWriter.write(blob);
    }, fail);
}

function onTrackSuccess(fileEntry) {
     var username = localStorage.getItem("username");
     var postUrl = webserviceurl + "routes/" + username + "/files";
     var fileURL = fileEntry.toURL();

     var success = function (r) {
         console.log("Successful upload...");
         console.log("Code = " + r.responseCode);
     }

     var fail = function (error) {
         jAlert("Failed to upload file to server" + error.code,"Track");
     }

     var options = new FileUploadOptions();
     options.fileKey = "file";
     options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
     options.mimeType = "application/vnd.geo+json";
     var ft = new FileTransfer();
     ft.upload(fileURL, encodeURI(postUrl), success, fail, options);
}