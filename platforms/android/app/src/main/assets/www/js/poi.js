var poiSource , poiSource_new;
var pointFeatures = [], pointFeatures_new = [];
var reviewsObject;
var poiId;
var Clusters_db, Clusters_new;
$(function(){
    updateDate();
    poiSource = new ol.source.Vector();
    $("#mosthelpreviews").css("height", $(window).height() - 120);
    ////// start the web worker as the browser is feezing when downloading //////
    if (window.Worker) {
        var inputs={'url': geoserverurl + 'ows?service=WFS&version=1.0.0&request=GetFeature&typeName=' + workspace + ':point_of_interest_view&outputFormat=application/json&srsname='+prj1};
        //var inputs={'url': geoserverurl + 'ows?service=WFS&version=1.0.0&request=GetFeature&typeName=' + workspace + ':poi_view_min&outputFormat=application/json&srsname='+prj1};
        var myWorker = new Worker("./js/poi_worker.js");
        // Sending message as an array to the worker
        myWorker.postMessage(inputs);
        console.log('Message posted to worker');
        myWorker.onmessage = function(e) {
            if(e.data == ""){
            setTimeout(function(){ document.getElementById('pageload').style.display = 'none'; }, 10000);
            }else{
            var response=JSON.parse(e.data);
            if(response.features.length>0){
            pointFeatures = response.features;
           console.log("pointFeatures.length  :: "+pointFeatures.length);
             var feature;
             var coordinates;
             var point_feature;
             var location;
             var point_geom;
             var notes;
             var style;
            for(var i = 0; i < pointFeatures.length; i++){
           // for(var i = 0; i < 150000; i++){
                //console.log("feature count "+i);
                feature = JSON.parse(pointFeatures[i].properties.poi);
                //var feature = jQuery.parseJSON(JSON.stringify(pointFeatures[i].properties));
                coordinates = feature.mapLocation;
                point_feature = new ol.Feature({ });
                location = ol.proj.transform([parseFloat(coordinates.longitude), parseFloat(coordinates.latitude)], ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:900913'));
                point_geom = new ol.geom.Point(location);
                point_feature.setGeometry(point_geom);
                /*notes = "";
                if(feature.hasOwnProperty('notes')){
                    notes = feature.notes[0].value;
                }*/
                    //point_feature.setProperties({'id':feature.id, 'name':feature.name, 'poiType' : feature.poiType,'notes' : notes , 'datelastmodified' : feature.dateLastModified });
                     point_feature.setProperties({'id':feature.id, 'poiType' : feature.poiType, 'datelastmodified' : feature.dateLastModified });
                     // point_feature.setProperties({'id':feature.id, 'poiType' : feature.poiType, 'datelastmodified' : feature.dateLastModified });
                style = new ol.style.Style({
                   image: new ol.style.Icon({
                       src: 'images/activecaptain/activecaptain_flag_know_'+feature.poiType.toLowerCase()+'.png',
                      // src: 'images/activecaptain/activecaptain_flag_know_hazard_new.png',
                       size: [36,36],
                       scale: 1
                   })
                });
               point_feature.setStyle(style);
               poiSource.addFeature(point_feature);
            }

            Clusters_db = new ol.layer.Vector({
                source: poiSource,
                title : 'Point Of Interest',
                minResolution : 0.298,
                maxResolution : 152.746,
                declutter: true
            });

            map.addLayer(Clusters_db);
            console.log("Clusters_db layer addded to map");
            layerSwitcher.renderPanel();
            setTimeout(function(){ document.getElementById('pageload').style.display = 'none'; }, 5000);
            }
        };
        }
        
    }

     
/////// end of web worker //////////////////
    setTimeout(function(){ updatePOIdata() }, 15000);
    setInterval(function(){ updatePOIdata() }, 1000*60*15);
});

function updatePOIdata(){

    $.ajax({
        url: webserviceurl+'activecaptain/points-of-interest/date-last-modified',
        type: "GET",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
    }).done(function(response) {
        if(response.result.length>0){
            console.log("data-last-modified",response);

        if(Clusters_new){
            map.removeLayer(Clusters_new);
            poiSource_new.clear();
        }

        poiSource_new = new ol.source.Vector();
        pointFeatures_new = response.result;

        for(var i = 0; i < pointFeatures_new.length; i++){
            var feature = pointFeatures_new[i].pointOfInterest;
            if(feature.status == "Visible"){
                var coordinates = feature.mapLocation;
                var point_feature = new ol.Feature({ });
                var location = ol.proj.transform([parseFloat(coordinates.longitude), parseFloat(coordinates.latitude)], ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:900913'));
                var point_geom = new ol.geom.Point(location);
                point_feature.setGeometry(point_geom);
                var notes = "";
                if(feature.hasOwnProperty('notes')){
                    notes = feature.notes[0].value;
                }
                point_feature.setProperties({'id':feature.id, 'name':feature.name, 'poiType' : feature.poiType, /*'averagerating': pointFeatures[i].averagerating , 'reviewcount':pointFeatures[i].reviewcount,*/ 'notes' : notes , 'datelastmodified' : feature.dateLastModified });
                var style = new ol.style.Style({
                   image: new ol.style.Icon({
                       src: 'images/activecaptain/activecaptain_flag_know_'+feature.poiType.toLowerCase()+'.png',
                       size: [36,36],
                       scale: 1
                   })
                });

                point_feature.setStyle(style);
                poiSource_new.addFeature(point_feature);
            }else{
                var featuress = poiSource.getFeatures();
                for(var j = 0; j < featuress.length; j++){
                    if(featuress[j].getProperties().id == feature.id){
                        poiSource.removeFeature(featuress[j]);
                        break;
                    }
                }
            }
        }

        Clusters_new = new ol.layer.Vector({
            source: poiSource_new,
            minResolution : 0.298,
            maxResolution : 152.746,
            declutter: true
        });
        map.addLayer(Clusters_new);
        }
    });
}

function displayPoi(evt,feature){
    $('.loadermask').show();
    measureTooltipElement.innerHTML = "";
    closepopup();
    var prop = feature.getProperties();
    $("#poiname").html(prop.name);
    $("#poinametwo").html(prop.name);
    $("#poitype").html(prop.poiType);
    $("#poitypetwo").html(prop.poiType);

    poiId = prop.id;

    $.ajax({
        url: webserviceurl+'points-of-interest/'+ poiId +'/reviews',
         // url: webserviceurl+'activecaptain/points-of-interest/'+ poiId +'/reviews',
        type: "GET",
        /*headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },*/
    }).done(function(response) {
        if(isReview(prop.poiType) && response.length > 0){

            reviewsObject = response;
            var reviewcount =  response.length;

            var totalRatingValue = 0;

            for(var i = 0; i < reviewcount; i++){
                totalRatingValue = totalRatingValue + response[i].rating;
            }

            var averagerating = totalRatingValue/reviewcount;

            $("#poireviewcount").html("(" + reviewcount + ")");
            $("#poireviewcounttwo").html("(" + reviewcount + ")");
            $("#poireviewcountthree").html("(" + reviewcount + ")");
            $("#poireviewcountfour").html("(" + reviewcount + ")");
            $("#poireviewcountfive").html("(" + reviewcount + ")");
            var prcnt = ( averagerating * 100 ) / 5;
            $("#poiratingvalue").css('width',prcnt+"%");
            $("#poiratingvaluetwo").css('width',prcnt+"%");
            $("#poiratingvaluethree").css('width',prcnt+"%");
            $("#poiratingvaluefour").css('width',prcnt+"%");
            $("#poiratingvaluefive").css('width',prcnt+"%");

            $("#poireviewcount").show();
            $("#poireviewcounttwo").show();
            $("#poireviewcountthree").show();
            $("#poireviewcountfour").show();
            $("#poireviewcountfive").show();

            $("#poiratingvalue").show();
            $("#poiratingvaluetwo").show();
            $("#poiratingvaluethree").show();
            $("#poiratingvaluefour").show();
            $("#poiratingvaluefive").show();

            $("#poiratingvalue").next().show();
            $("#poiratingvaluetwo").next().show();
            $("#poiratingvaluethree").next().show();
            $("#poiratingvaluefour").next().show();
            $("#poiratingvaluefive").next().show();
            $("#poimoreinfo").css("top","15px");
        }else{
            reviewsObject = undefined;
            $("#poireviewcount").hide();
            $("#poireviewcounttwo").hide();
            $("#poireviewcountthree").hide();
            $("#poireviewcountfour").hide();
            $("#poireviewcountfive").hide();

            $("#poiratingvalue").hide();
            $("#poiratingvaluetwo").hide();
            $("#poiratingvaluethree").hide();
            $("#poiratingvaluefour").hide();
            $("#poiratingvaluefive").hide();

            $("#poiratingvalue").next().hide();
            $("#poiratingvaluetwo").next().hide();
            $("#poiratingvaluethree").next().hide();
            $("#poiratingvaluefour").next().hide();
            $("#poiratingvaluefive").next().hide();
            $("#poimoreinfo").css("top","-18px");
        }
            $("#poimoreinfo").attr('onclick','showFullInfo('+prop.id+',"'+prop.poiType+'")');

            measureTooltipElement.innerHTML = $("#poiobject").html();
            measureTooltip.setPosition(evt.coordinate);
            map.getView().animate({
                center: evt.coordinate,
                duration: 500
            });
            closepopup();

            setTimeout(function(){ $('.loadermask').hide(); }, 500);
    });
}

function showFullInfo(id,type){
if(localStorage.getItem('username') && localStorage.getItem('password')){
    $('.loadermask').show();
    $.ajax({
        url: webserviceurl+'activecaptain/points-of-interest/'+id ,
        type: "GET",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
    }).done(function(response) {
        if(response.pointOfInterest){
        $("#poidetails").show();
        if(response.hasOwnProperty('pointOfInterest')){
            if(response.pointOfInterest.hasOwnProperty('notes')){
                $("#poisummarynotes").show();
                $("#poisummarynotes").html(response.pointOfInterest.notes[0].value);
            }else{
                $("#poisummarynotes").hide();
            }
            $("#dateLastModified").html(dateFormat(response.pointOfInterest.dateLastModified));
            var latlon = ol.coordinate.toStringHDMS([response.pointOfInterest.mapLocation.longitude, response.pointOfInterest.mapLocation.latitude]);
            $("#poilatitude").html(latlon);
        }

        if(response.hasOwnProperty('business')){
            var bsprop = response.business;

            $("#public").html("");
            $("#seasonal").html("");

            $("#public").html(bsprop.public);
            $("#seasonal").html(bsprop.seasonal);
            if(bsprop.cash == "Unknown" && bsprop.check == "Unknown" && bsprop.credit == "Unknown"){
                $("#paymentoptions").html('Unknown');
            }else{
                var paymenttext = "";

                if(bsprop.cash=="Yes"){
                    paymenttext = "Cash";
                }

                if(bsprop.check=="Yes"){
                    if(paymenttext == ""){
                        paymenttext+= "Check";
                    }else{
                        paymenttext+= ", Check";
                    }
                }

                if(bsprop.credit=="Yes"){
                    if(paymenttext == ""){
                        paymenttext+= "Credit";
                    }else{
                        paymenttext+= ", Credit";
                    }
                }
                $("#paymentoptions").html(paymenttext);
            }
            if(bsprop.hasOwnProperty('notes')){
                var notes = bsprop.notes;
                for(var i = 0; i < notes.length; i++ ){
                    if(notes[i].field.toLowerCase() == "payment"){
                        $("#paymentnotes").html(notes[i].value);
                        break;
                    }
                }
            }else{
                 $("#paymentnotes").html('');
            }

            if(bsprop.hasOwnProperty('notes')){
                var notes = bsprop.notes;
                for(var i = 0; i < notes.length; i++ ){
                    if(notes[i].field.toLowerCase() == "seasonal"){
                        $("#seasonalnotes").html(notes[i].value);
                        break;
                    }
                }
            }else{
                 $("#seasonalnotes").html('');
            }

             $("#poibusiness").show();
        }else{
           $("#poibusiness").hide();
        }

        if(response.hasOwnProperty('contact')){
            var ctprop = response.contact;

            $("#addressStreet").html("");
            $("#addressCity").html("");
            $("#addressState").html("");
            $("#addressZip").html("");
            $("#addressCountry").html("");
            $("#website").html("");
            $("#phone").html("");
            $("#vhfChannel").html("");
            $("#email").html("");
            $("#afterHourContact").html("");

            $("#addressStreet").html(ctprop.addressStreet);
            $("#addressCity").html(ctprop.addressCity);
            $("#addressState").html(ctprop.addressState);
            $("#addressZip").html(ctprop.addressZip);
            $("#addressCountry").html(ctprop.addressCountry);
            $("#website").html(ctprop.website);
            $("#phone").html(ctprop.phone);
            $("#vhfChannel").html(ctprop.vhfChannel);
            $("#email").html(ctprop.email);
            $("#afterHourContact").html(ctprop.afterHourContact);
            $("#poicontact").show();
            $("#poiaddress").show();
        }else{
           $("#poicontact").hide();
           $("#poiaddress").hide();
        }

        if(response.hasOwnProperty('dockage')){
            var dkprop = response.dockage;
            var price = "";
                if(dkprop.hasOwnProperty('price')){
                      price = dkprop.price + "" +dkprop.currency;
                }

            var priceOption = "";

                if(dkprop.hasOwnProperty('pricingOption')){
                    priceOption = dkprop.pricingOption;
                }

            var priceDate = "";
                if(dkprop.hasOwnProperty('priceDate')){
                    priceDate = dkprop.priceDate;
                }

            $("#averageprice").html("");
            $("#saverageprice").html("");
            $("#total").html("");
            $("#stotal").html("");
            $("#transient").html("");
            $("#stransient").html("");

            $("#averageprice").html( price + " "+ priceOption + " (" + priceDate + ")");
            $("#saverageprice").html( price + " "+ priceOption + " (" + priceDate + ")");
            $("#total").html(dkprop.total);
            $("#stotal").html(dkprop.total);
            $("#transient").html(dkprop.transient);
            $("#stransient").html(dkprop.transient);

            var doctypetext = "";
            if(dkprop.concreteDock=="Yes"){
                doctypetext = "Concrete";
            }
            if(dkprop.fixedDock=="Yes"){
                if(doctypetext == ""){
                    doctypetext+= "Fixed";
                }else{
                    doctypetext+= ", Fixed";
                }
            }

            if(dkprop.floatingDock=="Yes"){
                if(doctypetext == ""){
                    doctypetext+= "Floating";
                }else{
                    doctypetext+= ", Floating";
                }
            }

            if(dkprop.otherDock!="Unknown"){
                if(doctypetext == ""){
                    doctypetext+= dkprop.otherDock;
                }else{
                    doctypetext+= ", "+dkprop.otherDock;
                }
            }

            if(dkprop.warfQuayDock=="Yes"){
                if(doctypetext == ""){
                    doctypetext+= "WarfQuay";
                }else{
                    doctypetext+= ", WarfQuay";
                }
            }

            if(dkprop.woodDock=="Yes"){
                if(doctypetext == ""){
                    doctypetext+= "Wood";
                }else{
                    doctypetext+= ", Wood";
                }
            }

            $("#docktypes").html(doctypetext);
            $("#sdocktypes").html(doctypetext);
            if(dkprop.loaMax){
                $("#loaMax").html(dkprop.loaMax + " "+ dkprop.distanceUnit);
                $("#sloaMax").html(dkprop.loaMax + " "+ dkprop.distanceUnit);
            }

            if(dkprop.beamMax){
                $("#beamMax").html(dkprop.beamMax);
                $("#sbeamMax").html(dkprop.beamMax);
            }

            if(dkprop.hasOwnProperty('notes')){
                var notes = dkprop.notes;
                for(var i =0; i < notes.length; i++ ){
                    if(notes[i].field.toLowerCase() == "docks"){
                        $("#sdockagenotes").html(notes[i].value);
                        break;
                    }
                }
            }else{
                $("#sdockagenotes").html('');
            }

            $("#phoneHookup").find('img').attr('src','images/poi-icons/'+ dkprop.phoneHookup +'.png');
            $("#sphoneHookup").find('img').attr('src','images/poi-icons/'+ dkprop.phoneHookup +'.png');
            if(dkprop.phoneHookup == "Yes" || dkprop.phoneHookup =="Nearby"){
                $("#phoneHookup").show();
                if(dkprop.hasOwnProperty('notes')){
                    var notes = dkprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "phonehookup"){
                            $("#sphoneHookupnotes").html(notes[i].value);
                            $("#sphoneHookup").find('.my-1').addClass('toggle_dockage');
                            $("#sphoneHookup").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sphoneHookup").find('i').hide();
                    $("#sphoneHookup").find('.my-1').removeClass('toggle_dockage');
                }
            }else{
                $("#phoneHookup").hide();
                $("#sphoneHookup").find('i').hide();
                $("#sphoneHookup").find('.my-1').removeClass('toggle_dockage');
            }

             $("#cableTv").find('img').attr('src','images/poi-icons/'+ dkprop.cableTv +'.png');
             $("#scableTv").find('img').attr('src','images/poi-icons/'+ dkprop.cableTv +'.png');
             if(dkprop.cableTv == "Yes" || dkprop.cableTv =="Nearby"){
                $("#cableTv").show();
                if(dkprop.hasOwnProperty('notes')){
                    var notes = dkprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "cabletv"){
                            $("#scableTvnotes").html(notes[i].value);
                            $("#scableTv").find('.my-1').addClass('toggle_dockage');
                            $("#scableTv").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#scableTv").find('i').hide();
                    $("#scableTv").find('.my-1').removeClass('toggle_dockage');
                }
            }else{
                $("#cableTv").hide();
                $("#scableTv").find('i').hide();
                $("#scableTv").find('.my-1').removeClass('toggle_dockage');
            }

             $("#liveaboard").find('img').attr('src','images/poi-icons/'+ dkprop.liveaboard +'.png');
             $("#sliveaboard").find('img').attr('src','images/poi-icons/'+ dkprop.liveaboard +'.png');
             if(dkprop.liveaboard == "Yes" || dkprop.liveaboard =="Nearby"){
                $("#liveaboard").show();
                if(dkprop.hasOwnProperty('notes')){
                    var notes = dkprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "liveaboard"){
                            $("#sliveaboardnotes").html(notes[i].value);
                            $("#sliveaboard").find('.my-1').addClass('toggle_dockage');
                            $("#sliveaboard").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sliveaboard").find('i').hide();
                    $("#sliveaboard").find('.my-1').removeClass('toggle_dockage');
                }
            }else{
                $("#liveaboard").hide();
                $("#sliveaboard").find('i').hide();
                $("#sliveaboard").find('.my-1').removeClass('toggle_dockage');
            }

             $("#disabilityAccess").find('img').attr('src','images/poi-icons/'+ dkprop.disabilityAccess +'.png');
             $("#sdisabilityAccess").find('img').attr('src','images/poi-icons/'+ dkprop.disabilityAccess +'.png');
             if(dkprop.disabilityAccess == "Yes" || dkprop.disabilityAccess =="Nearby"){
                $("#disabilityAccess").show();
                if(dkprop.hasOwnProperty('notes')){
                    var notes = dkprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "disabilityaccess"){
                            $("#sdisabilityAccessnotes").html(notes[i].value);
                            $("#sdisabilityAccess").find('.my-1').addClass('toggle_dockage');
                            $("#sdisabilityAccess").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sdisabilityAccess").find('i').hide();
                    $("#sdisabilityAccess").find('.my-1').removeClass('toggle_dockage');
                }
            }else{
                $("#disabilityAccess").hide();
                $("#sdisabilityAccess").find('i').hide();
                $("#sdisabilityAccess").find('.my-1').removeClass('toggle_dockage');
            }

             $("#secureAccess").find('img').attr('src','images/poi-icons/'+ dkprop.secureAccess +'.png');
             $("#ssecureAccess").find('img').attr('src','images/poi-icons/'+ dkprop.secureAccess +'.png');
             if(dkprop.secureAccess == "Yes" || dkprop.secureAccess =="Nearby"){
                $("#secureAccess").show();
                if(dkprop.hasOwnProperty('notes')){
                    var notes = dkprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "secureaccess"){
                            $("#ssecureAccessnotes").html(notes[i].value);
                            $("#ssecureAccess").find('.my-1').addClass('toggle_dockage');
                            $("#ssecureAccess").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#ssecureAccess").find('i').hide();
                    $("#ssecureAccess").find('.my-1').removeClass('toggle_dockage');
                }
            }else{
                $("#secureAccess").hide();
                $("#ssecureAccess").find('i').hide();
                $("#ssecureAccess").find('.my-1').removeClass('toggle_dockage');
            }

             $("#securityPatrol").find('img').attr('src','images/poi-icons/'+ dkprop.securityPatrol +'.png');
             $("#ssecurityPatrol").find('img').attr('src','images/poi-icons/'+ dkprop.securityPatrol +'.png');
             if(dkprop.securityPatrol == "Yes" || dkprop.securityPatrol =="Nearby"){
                $("#securityPatrol").show();
                if(dkprop.hasOwnProperty('notes')){
                    var notes = dkprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "securitypatrol"){
                            $("#ssecurityPatrolnotes").html(notes[i].value);
                            $("#ssecurityPatrol").find('.my-1').addClass('toggle_dockage');
                            $("#ssecurityPatrol").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#ssecurityPatrol").find('i').hide();
                    $("#ssecurityPatrol").find('.my-1').removeClass('toggle_dockage');
                }
            }else{
                $("#securityPatrol").hide();
                $("#ssecurityPatrol").find('i').hide();
                $("#ssecurityPatrol").find('.my-1').removeClass('toggle_dockage');
            }

            if(dkprop.acPower16 == "Yes" || dkprop.acPower30 == "Yes" ||  dkprop.acPower32 == "Yes" ||  dkprop.acPower50 == "Yes" ||  dkprop.acPower64 == "Yes" || dkprop.acPower100== "Yes" || dkprop.acPower200== "Yes"){

                var sptext = "";
                if(dkprop.acPower16=="Yes"){
                    sptext = "16";
                }
                if(dkprop.acPower30=="Yes"){
                    if(sptext == ""){
                        sptext+= "30";
                    }else{
                        sptext+= ", 30";
                    }
                }
                if(dkprop.acPower32=="Yes"){
                    if(sptext == ""){
                        sptext+= "32";
                    }else{
                        sptext+= ", 32";
                    }
                }
                if(dkprop.acPower50=="Yes"){
                    if(sptext == ""){
                        sptext+= "50";
                    }else{
                        sptext+= ", 50";
                    }
                }
                if(dkprop.acPower64=="Yes"){
                    if(sptext == ""){
                        sptext+= "64";
                    }else{
                        sptext+= ", 64";
                    }
                }

                if(dkprop.acPower100=="Yes"){
                    if(sptext == ""){
                        sptext+= "100";
                    }else{
                        sptext+= ", 100";
                    }
                }

               if(dkprop.acPower200=="Yes"){
                    if(sptext == ""){
                        sptext+= "200";
                    }else{
                        sptext+= ", 200";
                    }
                }
                $("#shorepowerdata").html(sptext+" amps");
                $("#sshorepowerdata").html(sptext+" amps");
                $("#shorepower").show();
            }else{
                $("#shorepower").hide();
                $("#shorepowerdata").html('');
                $("#sshorepowerdata").html('');
            }

            $("#poidockage").show();
        }else{
            $("#poidockage").hide();
        }

        if(response.hasOwnProperty('fuel')){
            var flprop = response.fuel;
            if(flprop.hasOwnProperty('depthFuel')){
                var dmeters = 0;
                if(flprop.distanceUnit == "Meter"){
                    dmeters = flprop.depthFuel;
                }else if(flprop.distanceUnit == "Feet"){
                    dmeters = flprop.depthFuel * 0.3048 ;
                }

                if($("#selectDepths").val()=="meter"){
                    $("#depthFuel").html(dmeters);
                    $("#distanceUnit").html("Meter");
                }else if($("#selectDepths").val()=="feet"){
                    $("#depthFuel").html(getFeets(dmeters));
                    $("#distanceUnit").html("Feet");
                }if($("#selectDepths").val()=="fathom"){
                    $("#depthFuel").html(getFathoms(dmeters));
                    $("#distanceUnit").html("Fathoms");
                }
            }else{
                $("#depthFuel").html("");
                $("#distanceUnit").html("");
            }

            if(flprop.hasOwnProperty('gasPrice')){
                $("#gasPrice").html(" "+flprop.gasPrice+ " " + flprop.currency + " per "+ flprop.volumeUnits+ " (" + dateFormat(flprop.gasPriceDate)+ ")");
            }else{
                $("#gasPrice").html("");
            }

            if(flprop.hasOwnProperty('dieselPrice')){
                $("#dieselPrice").html(" "+flprop.dieselPrice+ " " + flprop.currency + " per "+ flprop.volumeUnits+ " (" + dateFormat(flprop.dieselPriceDate)+ ")");
            }else{
                $("#dieselPrice").html("");
            }

            if(flprop.hasOwnProperty('notes')){
                $("#fuelnotes").html(flprop.notes[0].value);
            }else{
                $("#fuelnotes").html("");
            }

            $("#gas").find('img').attr('src','images/poi-icons/'+ flprop.gas +'.png');
            if(flprop.gas == "Yes" || flprop.gas =="Nearby"){
                $("#ethanolFree").show();
                $("#ethanolFree").find('img').attr('src','images/poi-icons/'+ flprop.ethanolFree +'.png');
            }else{
                $("#ethanolFree").hide();
            }

            $("#propane").find('img').attr('src','images/poi-icons/'+ flprop.propane +'.png');
            $("#diesel").find('img').attr('src','images/poi-icons/'+ flprop.diesel +'.png');

            $("#poifuel").show();
        }else{
            $("#poifuel").hide();
        }

        if(response.hasOwnProperty('navigation')){

            $("#depthApproach").html("");
            $("#tide").html("");
            $("#current").html("");
            $("#bridgeHeight").html("");
            $("#fixedBridge").html("");
            $("#ndistanceUnit").html("");

            $("#depthApproach").html(response.navigation.depthApproach);
            $("#tide").html(response.navigation.tide);
            $("#current").html(response.navigation.current);
            $("#bridgeHeight").html(response.navigation.bridgeHeight);
            $("#fixedBridge").html(response.navigation.fixedBridge);
            $("#ndistanceUnit").html(response.navigation.distanceUnit);

            if(response.navigation.hasOwnProperty('notes')){
                $("#navigationalnotes").show();
                $("#navigationalnotes").html(response.navigation.notes[0].value);
            }else{
                $("#navigationalnotes").hide();
            }
            $("#poinavigation").show();
        }else{
            $("#poinavigation").hide();
        }

        if(response.hasOwnProperty('mooring')){
            var mgprop = response.mooring;
            $("#hasMoorings").find('img').attr('src','images/poi-icons/'+ mgprop.hasMoorings +'.png');
            $("#shasMoorings").find('img').attr('src','images/poi-icons/'+ mgprop.hasMoorings +'.png');

            $("#mtotal").html("");
            $("#smtotal").html("");
            $("#mtransient").html("");
            $("#smtransient").html("");

            $("#mtotal").html(mgprop.total);
            $("#smtotal").html(mgprop.total);
            $("#mtransient").html(mgprop.transient);
            $("#smtransient").html(mgprop.transient);

            $("#dinghy").find('img').attr('src','images/poi-icons/'+ mgprop.dinghy +'.png');
            $("#sdinghy").find('img').attr('src','images/poi-icons/'+ mgprop.dinghy +'.png');
            if(mgprop.dinghy == "Yes" || mgprop.dinghy =="Nearby"){
               $("#dinghy").show();
                if(mgprop.hasOwnProperty('notes')){
                    var notes = mgprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "dinghy"){
                            $("#sdinghynotes").html(notes[i].value);
                            $("#sdinghy").find('.my-1').addClass('toggle_moorings');
                            $("#sdinghy").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sdinghy").find('i').hide();
                    $("#sdinghy").find('.my-1').removeClass('toggle_moorings');
                }
            }else{
                $("#dinghy").hide();
                $("#sdinghy").find('i').hide();
                $("#sdinghy").find('.my-1').removeClass('toggle_moorings');
            }

            $("#launch").find('img').attr('src','images/poi-icons/'+ mgprop.launch +'.png');
            $("#slaunch").find('img').attr('src','images/poi-icons/'+ mgprop.launch +'.png');
            if(mgprop.launch == "Yes" || mgprop.launch =="Nearby"){
                $("#launch").show();
                if(mgprop.hasOwnProperty('notes')){
                    var notes = mgprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "launch"){
                            $("#slaunchnotes").html(notes[i].value);
                            $("#slaunch").find('.my-1').addClass('toggle_moorings');
                            $("#slaunch").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#slaunchnotes").html("");
                    $("#slaunch").find('i').hide();
                    $("#slaunch").find('.my-1').removeClass('toggle_moorings');
                }
            }else{
                $("#launch").hide();
                $("#slaunch").find('i').hide();
                $("#slaunch").find('.my-1').removeClass('toggle_moorings');
            }

            $("#mliveaboard").find('img').attr('src','images/poi-icons/'+ mgprop.liveaboard +'.png');
            $("#smliveaboard").find('img').attr('src','images/poi-icons/'+ mgprop.liveaboard +'.png');
            if(mgprop.liveaboard == "Yes" || mgprop.liveaboard =="Nearby"){
                $("#mliveaboard").show();
                if(mgprop.hasOwnProperty('notes')){
                    var notes = mgprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "liveaboard"){
                            $("#smliveaboardnotes").html(notes[i].value);
                            $("#smliveaboard").find('.my-1').addClass('toggle_moorings');
                            $("#smliveaboard").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#smliveaboard").find('i').hide();
                    $("#smliveaboard").find('.my-1').removeClass('toggle_moorings');
                }
            }else{
                $("#mliveaboard").hide();
                $("#smliveaboard").find('i').hide();
                $("#smliveaboard").find('.my-1').removeClass('toggle_moorings');
            }
            $("#poimoorings").show();
        }else{
            $("#poimoorings").hide();
        }

        if(response.hasOwnProperty('amenity')){

            var amprop = response.amenity;
            $("#bar").find('img').attr('src','images/poi-icons/'+ amprop.bar +'.png');
            $("#sbar").find('img').attr('src','images/poi-icons/'+ amprop.bar +'.png');
            if(amprop.bar == "Yes" || amprop.bar == "Nearby"){
                $("#bar").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "bar"){
                            $("#sbarnotes").html(notes[i].value);
                            $("#sbar").find('.my-1').addClass('toggle_amenity');
                            $("#sbar").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sbar").find('i').hide();
                    $("#sbar").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#sbar").find('.my-1').removeClass('toggle_amenity');
                $("#sbar").find('i').hide();
                $("#bar").hide();
            }

            $("#boatRamp").find('img').attr('src','images/poi-icons/'+ amprop.boatRamp +'.png');
            $("#sboatRamp").find('img').attr('src','images/poi-icons/'+ amprop.boatRamp +'.png');
            if(amprop.boatRamp == "Yes" || amprop.boatRamp =="Nearby"){
                $("#boatRamp").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "boatramp"){
                            $("#sboatRampnotes").html(notes[i].value);
                            $("#sboatRamp").find('.my-1').addClass('toggle_amenity');
                            $("#sboatRamp").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sboatRamp").find('i').hide();
                    $("#sboatRamp").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#boatRamp").hide();
                $("#sboatRamp").find('i').hide();
                $("#sboatRamp").find('.my-1').removeClass('toggle_amenity');
            }

            $("#cellReception").find('img').attr('src','images/poi-icons/'+ amprop.cellReception +'.png');
            $("#scellReception").find('img').attr('src','images/poi-icons/'+ amprop.cellReception +'.png');
            if(amprop.cellReception == "Yes" || amprop.cellReception =="Nearby"){
                $("#cellReception").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "cellreception"){
                            $("#scellReceptionnotes").html(notes[i].value);
                            $("#scellReception").find('.my-1').addClass('toggle_amenity');
                            $("#scellReception").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#scellReception").find('i').hide();
                    $("#scellReception").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#cellReception").hide();
                $("#scellReception").find('i').hide();
                $("#scellReception").find('.my-1').removeClass('toggle_amenity');
            }

            $("#courtesyCar").find('img').attr('src','images/poi-icons/'+ amprop.courtesyCar +'.png');
            $("#scourtesyCar").find('img').attr('src','images/poi-icons/'+ amprop.courtesyCar +'.png');
            if(amprop.courtesyCar == "Yes" || amprop.courtesyCar =="Nearby"){
                $("#courtesyCar").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "courtesycar"){
                            $("#scourtesyCarnotes").html(notes[i].value);
                            $("#scourtesyCar").find('.my-1').addClass('toggle_amenity');
                            $("#scourtesyCar").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#scourtesyCar").find('i').hide();
                    $("#scourtesyCar").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#courtesyCar").hide();
                $("#scourtesyCar").find('i').hide();
                $("#scourtesyCar").find('.my-1').removeClass('toggle_amenity');
            }

            $("#laundry").find('img').attr('src','images/poi-icons/'+ amprop.laundry +'.png');
            $("#slaundry").find('img').attr('src','images/poi-icons/'+ amprop.laundry +'.png');
            if(amprop.laundry == "Yes" || amprop.laundry =="Nearby"){
                $("#laundry").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "laundry"){
                            $("#slaundrynotes").html(notes[i].value);
                            $("#slaundry").find('.my-1').addClass('toggle_amenity');
                            $("#slaundry").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#slaundry").find('i').hide();
                    $("#slaundry").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#laundry").hide();
                $("#slaundry").find('i').hide();
                $("#slaundry").find('.my-1').removeClass('toggle_amenity');
            }

            $("#lodging").find('img').attr('src','images/poi-icons/'+ amprop.lodging +'.png');
            $("#slodging").find('img').attr('src','images/poi-icons/'+ amprop.lodging +'.png');
            if(amprop.lodging == "Yes" || amprop.lodging =="Nearby"){
                $("#lodging").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "lodging"){
                            $("#slodgingnotes").html(notes[i].value);
                            $("#slodging").find('.my-1').addClass('toggle_amenity');
                            $("#slodging").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#slodging").find('i').hide();
                    $("#slodging").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#lodging").hide();
                $("#slodging").find('i').hide();
                $("#slodging").find('.my-1').removeClass('toggle_amenity');
            }

            $("#pets").find('img').attr('src','images/poi-icons/'+ amprop.pets +'.png');
            $("#spets").find('img').attr('src','images/poi-icons/'+ amprop.pets +'.png');
            if(amprop.pets == "Yes" || amprop.pets =="Nearby"){
                $("#pets").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "pets"){
                            $("#spetsnotes").html(notes[i].value);
                            $("#spets").find('.my-1').addClass('toggle_amenity');
                            $("#spets").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#spets").find('i').hide();
                    $("#spets").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#pets").hide();
                $("#spets").find('i').hide();
                $("#spets").find('.my-1').removeClass('toggle_amenity');
            }

            $("#restaurant").find('img').attr('src','images/poi-icons/'+ amprop.restaurant +'.png');
            $("#srestaurant").find('img').attr('src','images/poi-icons/'+ amprop.restaurant +'.png');
            if(amprop.restaurant == "Yes" || amprop.restaurant =="Nearby"){
                $("#restaurant").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "restaurant"){
                            $("#srestaurantnotes").html(notes[i].value);
                            $("#srestaurant").find('.my-1').addClass('toggle_amenity');
                            $("#srestaurant").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#srestaurant").find('i').hide();
                    $("#srestaurant").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#restaurant").hide();
                $("#srestaurant").find('i').hide();
                $("#srestaurant").find('.my-1').removeClass('toggle_amenity');
            }

            $("#restroom").find('img').attr('src','images/poi-icons/'+ amprop.restroom +'.png');
            $("#srestroom").find('img').attr('src','images/poi-icons/'+ amprop.restroom +'.png');
            if(amprop.restroom == "Yes" || amprop.restroom =="Nearby"){
                $("#restroom").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "restroom"){
                            $("#srestroomnotes").html(notes[i].value);
                            $("#srestroom").find('.my-1').addClass('toggle_amenity');
                            $("#srestroom").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#srestroom").find('i').hide();
                    $("#srestroom").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#restroom").hide();
                $("#srestroom").find('i').hide();
                $("#srestroom").find('.my-1').removeClass('toggle_amenity');
            }

            $("#shower").find('img').attr('src','images/poi-icons/'+ amprop.shower +'.png');
            $("#sshower").find('img').attr('src','images/poi-icons/'+ amprop.shower +'.png');
            if(amprop.shower == "Yes" || amprop.shower =="Nearby"){
                $("#shower").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "shower"){
                            $("#sshowernotes").html(notes[i].value);
                            $("#sshower").find('.my-1').addClass('toggle_amenity');
                            $("#sshower").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sshower").find('i').hide();
                    $("#sshower").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#shower").hide();
                $("#sshower").find('i').hide();
                $("#sshower").find('.my-1').removeClass('toggle_amenity');
            }

            $("#transportation").find('img').attr('src','images/poi-icons/'+ amprop.transportation +'.png');
            $("#stransportation").find('img').attr('src','images/poi-icons/'+ amprop.transportation +'.png');
            if(amprop.transportation == "Yes" || amprop.transportation =="Nearby"){
                $("#transportation").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "transportation"){
                            $("#stransportationnotes").html(notes[i].value);
                            $("#stransportation").find('.my-1').addClass('toggle_amenity');
                            $("#stransportation").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#stransportation").find('i').hide();
                    $("#stransportation").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#transportation").hide();
                $("#stransportation").find('i').hide();
                $("#stransportation").find('.my-1').removeClass('toggle_amenity');
            }

            $("#trash").find('img').attr('src','images/poi-icons/'+ amprop.trash +'.png');
            $("#strash").find('img').attr('src','images/poi-icons/'+ amprop.trash +'.png');
            if(amprop.trash == "Yes" || amprop.trash =="Nearby"){
                $("#trash").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "trash"){
                            $("#strashnotes").html(notes[i].value);
                            $("#strash").find('.my-1').addClass('toggle_amenity');
                            $("#strash").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#strash").find('i').hide();
                    $("#strash").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#trash").hide();
                $("#strash").find('i').hide();
                $("#strash").find('.my-1').removeClass('toggle_amenity');
            }

            $("#wifi").find('img').attr('src','images/poi-icons/'+ amprop.wifi +'.png');
            $("#swifi").find('img').attr('src','images/poi-icons/'+ amprop.wifi +'.png');
            if(amprop.wifi == "Yes" || amprop.wifi =="Nearby"){
                $("#wifi").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "wifi"){
                            $("#swifinotes").html(notes[i].value);
                            $("#swifi").find('.my-1').addClass('toggle_amenity');
                            $("#swifi").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#swifi").find('i').hide();
                    $("#swifi").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#wifi").hide();
                $("#swifi").find('i').hide();
                $("#swifi").find('.my-1').removeClass('toggle_amenity');
            }

            $("#water").find('img').attr('src','images/poi-icons/'+ amprop.water +'.png');
            $("#swater").find('img').attr('src','images/poi-icons/'+ amprop.water +'.png');
            if(amprop.water == "Yes" || amprop.water =="Nearby"){
                $("#water").show();
                if(amprop.hasOwnProperty('notes')){
                    var notes = amprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "water"){
                            $("#swaternotes").html(notes[i].value);
                            $("#swater").find('.my-1').addClass('toggle_amenity');
                            $("#swater").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#swater").find('i').hide();
                    $("#swater").find('.my-1').removeClass('toggle_amenity');
                }
            }else{
                $("#water").hide();
                $("#swater").find('i').hide();
                $("#swater").find('.my-1').removeClass('toggle_amenity');
            }

            $("#poiamenity").show();
        }else{
             $("#poiamenity").hide();
        }

        if(response.hasOwnProperty('retail')){
        var rlprop = response.retail;

        $("#fishingSupplies").find('img').attr('src','images/poi-icons/'+ rlprop.fishingSupplies +'.png');
         $("#sfishingSupplies").find('img').attr('src','images/poi-icons/'+ rlprop.fishingSupplies +'.png');
        if(rlprop.fishingSupplies == "Yes" || rlprop.fishingSupplies =="Nearby"){
            $("#fishingSupplies").show();
            if(rlprop.hasOwnProperty('notes')){
                    var notes = rlprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "fishingsupplies"){
                            $("#sfishingSuppliesnotes").html(notes[i].value);
                            $("#sfishingSupplies").find('.my-1').addClass('toggle_retail');
                            $("#sfishingSupplies").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sfishingSupplies").find('i').hide();
                    $("#sfishingSupplies").find('.my-1').removeClass('toggle_retail');
                }
        }else{
            $("#fishingSupplies").hide();
            $("#sfishingSupplies").find('i').hide();
            $("#sfishingSupplies").find('.my-1').removeClass('toggle_retail');
        }

        $("#grocery").find('img').attr('src','images/poi-icons/'+ rlprop.grocery +'.png');
        $("#sgrocery").find('img').attr('src','images/poi-icons/'+ rlprop.grocery +'.png');
        if(rlprop.grocery == "Yes" || rlprop.grocery =="Nearby"){
            $("#grocery").show();
            if(rlprop.hasOwnProperty('notes')){
                    var notes = rlprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "grocery"){
                            $("#sgrocerynotes").html(notes[i].value);
                            $("#sgrocery").find('.my-1').addClass('toggle_retail');
                            $("#sgrocery").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sgrocery").find('i').hide();
                    $("#sgrocery").find('.my-1').removeClass('toggle_retail');
                }
        }else{
            $("#grocery").hide();
            $("#sgrocery").find('i').hide();
            $("#sgrocery").find('.my-1').removeClass('toggle_retail');
        }

        $("#hardware").find('img').attr('src','images/poi-icons/'+ rlprop.hardware +'.png');
        $("#shardware").find('img').attr('src','images/poi-icons/'+ rlprop.hardware +'.png');
        if(rlprop.hardware == "Yes" || rlprop.hardware =="Nearby"){
            $("#hardware").show();
            if(rlprop.hasOwnProperty('notes')){
                    var notes = rlprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "hardware"){
                            $("#shardwarenotes").html(notes[i].value);
                            $("#shardware").find('.my-1').addClass('toggle_retail');
                            $("#shardware").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#shardware").find('i').hide();
                    $("#shardware").find('.my-1').removeClass('toggle_retail');
                }
        }else{
            $("#hardware").hide();
            $("#shardware").find('i').hide();
            $("#shardware").find('.my-1').removeClass('toggle_retail');
        }

        $("#ice").find('img').attr('src','images/poi-icons/'+ rlprop.ice +'.png');
        $("#sice").find('img').attr('src','images/poi-icons/'+ rlprop.ice +'.png');
        if(rlprop.ice == "Yes" || rlprop.ice =="Nearby"){
            $("#ice").show();
            if(rlprop.hasOwnProperty('notes')){
                    var notes = rlprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "ice"){
                            $("#sicenotes").html(notes[i].value);
                            $("#sice").find('.my-1').addClass('toggle_retail');
                            $("#sice").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sice").find('i').hide();
                    $("#sice").find('.my-1').removeClass('toggle_retail');
                }
        }else{
            $("#ice").hide();
            $("#sice").find('i').hide();
            $("#sice").find('.my-1').removeClass('toggle_retail');
        }

        $("#marineRetail").find('img').attr('src','images/poi-icons/'+ rlprop.marineRetail +'.png');
        $("#smarineRetail").find('img').attr('src','images/poi-icons/'+ rlprop.marineRetail +'.png');
        if(rlprop.marineRetail == "Yes" || rlprop.marineRetail =="Nearby"){
            $("#marineRetail").show();
            if(rlprop.hasOwnProperty('notes')){
                    var notes = rlprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "marineretail"){
                            $("#smarineRetailnotes").html(notes[i].value);
                            $("#smarineRetail").find('.my-1').addClass('toggle_retail');
                            $("#smarineRetail").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#smarineRetail").find('i').hide();
                    $("#smarineRetail").find('.my-1').removeClass('toggle_retail');
                }
        }else{
            $("#marineRetail").hide();
            $("#smarineRetail").find('i').hide();
            $("#smarineRetail").find('.my-1').removeClass('toggle_retail');
        }
            $("#poiretail").show();
        }else{
            $("#poiretail").hide();
        }

        if(response.hasOwnProperty('services')){

            var serprop = response.services;

            $("#boatBrokers").find('img').attr('src','images/poi-icons/'+ serprop.boatBrokers +'.png');
            $("#sboatBrokers").find('img').attr('src','images/poi-icons/'+ serprop.boatBrokers +'.png');
            if(serprop.boatBrokers == "Yes" || serprop.boatBrokers =="Nearby"){
               $("#boatBrokers").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "boatbrokers"){
                            $("#sboatBrokersnotes").html(notes[i].value);
                            $("#sboatBrokers").find('.my-1').addClass('toggle_services');
                            $("#sboatBrokers").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sboatBrokers").find('i').hide();
                    $("#sboatBrokers").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#boatBrokers").hide();
                $("#sboatBrokers").find('i').hide();
                $("#sboatBrokers").find('.my-1').removeClass('toggle_services');
            }

            $("#bottomPainting").find('img').attr('src','images/poi-icons/'+ serprop.bottomPainting +'.png');
            $("#sbottomPainting").find('img').attr('src','images/poi-icons/'+ serprop.bottomPainting +'.png');
            if(serprop.bottomPainting == "Yes" || serprop.bottomPainting =="Nearby"){
               $("#bottomPainting").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "bottompainting"){
                            $("#sbottomPaintingnotes").html(notes[i].value);
                            $("#sbottomPainting").find('.my-1').addClass('toggle_services');
                            $("#sbottomPainting").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sbottomPainting").find('i').hide();
                    $("#sbottomPainting").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#bottomPainting").hide();
                $("#sbottomPainting").find('i').hide();
                $("#sbottomPainting").find('.my-1').removeClass('toggle_services');
            }

            $("#canvasAndUpholstery").find('img').attr('src','images/poi-icons/'+ serprop.canvasAndUpholstery +'.png');
            $("#scanvasAndUpholstery").find('img').attr('src','images/poi-icons/'+ serprop.canvasAndUpholstery +'.png');
            if(serprop.canvasAndUpholstery == "Yes" || serprop.canvasAndUpholstery =="Nearby"){
               $("#canvasAndUpholstery").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "canvasandupholstery"){
                            $("#scanvasAndUpholsterynotes").html(notes[i].value);
                            $("#scanvasAndUpholstery").find('.my-1').addClass('toggle_services');
                            $("#scanvasAndUpholstery").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#scanvasAndUpholstery").find('i').hide();
                    $("#scanvasAndUpholstery").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#canvasAndUpholstery").hide();
                $("#scanvasAndUpholstery").find('i').hide();
                $("#scanvasAndUpholstery").find('.my-1').removeClass('toggle_services');
            }

            $("#carpentry").find('img').attr('src','images/poi-icons/'+ serprop.carpentry +'.png');
            $("#scarpentry").find('img').attr('src','images/poi-icons/'+ serprop.carpentry +'.png');
            if(serprop.carpentry == "Yes" || serprop.carpentry =="Nearby"){
               $("#carpentry").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "carpentry"){
                            $("#scarpentrynotes").html(notes[i].value);
                            $("#scarpentry").find('.my-1').addClass('toggle_services');
                            $("#scarpentry").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#scarpentry").find('i').hide();
                    $("#scarpentry").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#carpentry").hide();
                $("#scarpentry").find('i').hide();
                $("#scarpentry").find('.my-1').removeClass('toggle_services');
            }

            $("#charter").find('img').attr('src','images/poi-icons/'+ serprop.charter +'.png');
            $("#scharter").find('img').attr('src','images/poi-icons/'+ serprop.charter +'.png');
            if(serprop.charter == "Yes" || serprop.charter =="Nearby"){
               $("#charter").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "charter"){
                            $("#scharternotes").html(notes[i].value);
                            $("#scharter").find('.my-1').addClass('toggle_services');
                            $("#scharter").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#scharter").find('i').hide();
                    $("#scharter").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#charter").hide();
                $("#scharter").find('i').hide();
                $("#scharter").find('.my-1').removeClass('toggle_services');
            }

            $("#electronics").find('img').attr('src','images/poi-icons/'+ serprop.electronics +'.png');
            $("#selectronics").find('img').attr('src','images/poi-icons/'+ serprop.electronics +'.png');
            if(serprop.electronics == "Yes" || serprop.electronics =="Nearby"){
               $("#electronics").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "electronics"){
                            $("#selectronicsnotes").html(notes[i].value);
                            $("#selectronics").find('.my-1').addClass('toggle_services');
                            $("#selectronics").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#selectronics").find('i').hide();
                    $("#selectronics").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#electronics").hide();
                $("#selectronics").find('i').hide();
                $("#selectronics").find('.my-1').removeClass('toggle_services');
            }

            $("#fiberglass").find('img').attr('src','images/poi-icons/'+ serprop.fiberglass +'.png');
            $("#sfiberglass").find('img').attr('src','images/poi-icons/'+ serprop.fiberglass +'.png');
            if(serprop.fiberglass == "Yes" || serprop.fiberglass =="Nearby"){
               $("#fiberglass").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "fiberglass"){
                            $("#sfiberglassnotes").html(notes[i].value);
                            $("#sfiberglass").find('.my-1').addClass('toggle_services');
                            $("#sfiberglass").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sfiberglass").find('i').hide();
                    $("#sfiberglass").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#fiberglass").hide();
                $("#sfiberglass").find('i').hide();
                $("#sfiberglass").find('.my-1').removeClass('toggle_services');
            }

            $("#haulOut").find('img').attr('src','images/poi-icons/'+ serprop.haulOut +'.png');
             $("#shaulOut").find('img').attr('src','images/poi-icons/'+ serprop.haulOut +'.png');
            if(serprop.haulOut == "Yes" || serprop.haulOut =="Nearby"){
               $("#haulOut").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "haulout"){
                            $("#shaulOutnotes").html(notes[i].value);
                            $("#shaulOut").find('.my-1').addClass('toggle_services');
                            $("#shaulOut").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#shaulOut").find('i').hide();
                    $("#shaulOut").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#haulOut").hide();
                $("#shaulOut").find('i').hide();
                $("#shaulOut").find('.my-1').removeClass('toggle_services');
            }

            $("#marineHvac").find('img').attr('src','images/poi-icons/'+ serprop.marineHvac +'.png');
            $("#smarineHvac").find('img').attr('src','images/poi-icons/'+ serprop.marineHvac +'.png');
            if(serprop.marineHvac == "Yes" || serprop.marineHvac =="Nearby"){
               $("#marineHvac").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "marinehvac"){
                            $("#smarineHvacnotes").html(notes[i].value);
                            $("#smarineHvac").find('.my-1').addClass('toggle_services');
                            $("#smarineHvac").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#smarineHvac").find('i').hide();
                    $("#smarineHvac").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#marineHvac").hide();
                $("#smarineHvac").find('i').hide();
                $("#smarineHvac").find('.my-1').removeClass('toggle_services');
            }

            $("#mechanical").find('img').attr('src','images/poi-icons/'+ serprop.mechanical +'.png');
            $("#smechanical").find('img').attr('src','images/poi-icons/'+ serprop.mechanical +'.png');
            if(serprop.mechanical == "Yes" || serprop.mechanical =="Nearby"){
               $("#mechanical").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "mechanical"){
                            $("#smechanicalnotes").html(notes[i].value);
                            $("#smechanical").find('.my-1').addClass('toggle_services');
                            $("#smechanical").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#smechanical").find('i').hide();
                    $("#smechanical").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#mechanical").hide();
                $("#smechanical").find('i').hide();
                $("#smechanical").find('.my-1').removeClass('toggle_services');
            }

            $("#paint").find('img').attr('src','images/poi-icons/'+ serprop.paint +'.png');
            $("#spaint").find('img').attr('src','images/poi-icons/'+ serprop.paint +'.png');
            if(serprop.paint == "Yes" || serprop.paint =="Nearby"){
               $("#paint").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "paint"){
                            $("#spaintnotes").html(notes[i].value);
                            $("#spaint").find('.my-1').addClass('toggle_services');
                            $("#spaint").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#spaint").find('i').hide();
                    $("#spaint").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#paint").hide();
                $("#spaint").find('i').hide();
                $("#spaint").find('.my-1').removeClass('toggle_services');
            }

            $("#plumbing").find('img').attr('src','images/poi-icons/'+ serprop.plumbing +'.png');
            $("#splumbing").find('img').attr('src','images/poi-icons/'+ serprop.plumbing +'.png');
            if(serprop.plumbing == "Yes" || serprop.plumbing =="Nearby"){
               $("#plumbing").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "plumbing"){
                            $("#splumbingnotes").html(notes[i].value);
                            $("#splumbing").find('.my-1').addClass('toggle_services');
                            $("#splumbing").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#splumbing").find('i').hide();
                    $("#splumbing").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#plumbing").hide();
                $("#splumbing").find('i').hide();
                $("#splumbing").find('.my-1').removeClass('toggle_services');
            }

            $("#propellerRepair").find('img').attr('src','images/poi-icons/'+ serprop.propellerRepair +'.png');
            $("#spropellerRepair").find('img').attr('src','images/poi-icons/'+ serprop.propellerRepair +'.png');
            if(serprop.propellerRepair == "Yes" || serprop.propellerRepair =="Nearby"){
               $("#propellerRepair").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "propellerrepair"){
                            $("#spropellerRepairnotes").html(notes[i].value);
                            $("#spropellerRepair").find('.my-1').addClass('toggle_services');
                            $("#spropellerRepair").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#spropellerRepair").find('i').hide();
                    $("#spropellerRepair").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#propellerRepair").hide();
                $("#spropellerRepair").find('i').hide();
                $("#spropellerRepair").find('.my-1').removeClass('toggle_services');
            }

            $("#pumpOut").find('img').attr('src','images/poi-icons/'+ serprop.pumpOut +'.png');
            $("#spumpOut").find('img').attr('src','images/poi-icons/'+ serprop.pumpOut +'.png');
            if(serprop.pumpOut == "Yes" || serprop.pumpOut =="Nearby"){
               $("#pumpOut").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "pumpout"){
                            $("#spumpOutnotes").html(notes[i].value);
                            $("#spumpOut").find('.my-1').addClass('toggle_services');
                            $("#spumpOut").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#spumpOut").find('i').hide();
                    $("#spumpOut").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#pumpOut").hide();
                $("#spumpOut").find('i').hide();
                $("#spumpOut").find('.my-1').removeClass('toggle_services');
            }

            $("#repair").find('img').attr('src','images/poi-icons/'+ serprop.repair +'.png');
            $("#srepair").find('img').attr('src','images/poi-icons/'+ serprop.repair +'.png');
            if(serprop.repair == "Yes" || serprop.repair =="Nearby"){
               $("#repair").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "repair"){
                            $("#srepairnotes").html(notes[i].value);
                            $("#srepair").find('.my-1').addClass('toggle_services');
                            $("#srepair").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#srepair").find('i').hide();
                    $("#srepair").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#repair").hide();
                $("#srepair").find('i').hide();
                $("#srepair").find('.my-1').removeClass('toggle_services');
            }

            $("#repairDieselEngines").find('img').attr('src','images/poi-icons/'+ serprop.repairDieselEngines +'.png');
            $("#srepairDieselEngines").find('img').attr('src','images/poi-icons/'+ serprop.repairDieselEngines +'.png');
            if(serprop.repairDieselEngines == "Yes" || serprop.repairDieselEngines =="Nearby"){
               $("#repairDieselEngines").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "repairdieselengines"){
                            $("#srepairDieselEnginesnotes").html(notes[i].value);
                            $("#srepairDieselEngines").find('.my-1').addClass('toggle_services');
                            $("#srepairDieselEngines").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#srepairDieselEngines").find('i').hide();
                    $("#srepairDieselEngines").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#repairDieselEngines").hide();
                $("#srepairDieselEngines").find('i').hide();
                $("#srepairDieselEngines").find('.my-1').removeClass('toggle_services');
            }

            $("#repairGasEngines").find('img').attr('src','images/poi-icons/'+ serprop.repairGasEngines +'.png');
            $("#srepairGasEngines").find('img').attr('src','images/poi-icons/'+ serprop.repairGasEngines +'.png');
            if(serprop.repairGasEngines == "Yes" || serprop.repairGasEngines =="Nearby"){
               $("#repairGasEngines").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "repairgasengines"){
                            $("#srepairGasEnginesnotes").html(notes[i].value);
                            $("#srepairGasEngines").find('.my-1').addClass('toggle_services');
                            $("#srepairGasEngines").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#srepairGasEngines").find('i').hide();
                    $("#srepairGasEngines").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#repairGasEngines").hide();
                $("#srepairGasEngines").find('i').hide();
                $("#srepairGasEngines").find('.my-1').removeClass('toggle_services');
            }

            $("#rescueAndSalvage").find('img').attr('src','images/poi-icons/'+ serprop.rescueAndSalvage +'.png');
            $("#srescueAndSalvage").find('img').attr('src','images/poi-icons/'+ serprop.rescueAndSalvage +'.png');
            if(serprop.rescueAndSalvage == "Yes" || serprop.rescueAndSalvage =="Nearby"){
               $("#rescueAndSalvage").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "rescueandsalvage"){
                            $("#srescueAndSalvagenotes").html(notes[i].value);
                            $("#srescueAndSalvage").find('.my-1').addClass('toggle_services');
                            $("#srescueAndSalvage").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#srescueAndSalvage").find('i').hide();
                    $("#srescueAndSalvage").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#rescueAndSalvage").hide();
                $("#srescueAndSalvage").find('i').hide();
                $("#srescueAndSalvage").find('.my-1').removeClass('toggle_services');
            }

            $("#sailsAndRigging").find('img').attr('src','images/poi-icons/'+ serprop.sailsAndRigging +'.png');
            $("#ssailsAndRigging").find('img').attr('src','images/poi-icons/'+ serprop.sailsAndRigging +'.png');
            if(serprop.sailsAndRigging == "Yes" || serprop.sailsAndRigging =="Nearby"){
               $("#sailsAndRigging").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "sailsandrigging"){
                            $("#ssailsAndRiggingnotes").html(notes[i].value);
                            $("#ssailsAndRigging").find('.my-1').addClass('toggle_services');
                            $("#ssailsAndRigging").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#ssailsAndRigging").find('i').hide();
                    $("#ssailsAndRigging").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#sailsAndRigging").hide();
                $("#ssailsAndRigging").find('i').hide();
                $("#ssailsAndRigging").find('.my-1').removeClass('toggle_services');
            }

            $("#storage").find('img').attr('src','images/poi-icons/'+ serprop.storage +'.png');
            $("#sstorage").find('img').attr('src','images/poi-icons/'+ serprop.storage +'.png');
            if(serprop.storage == "Yes" || serprop.storage =="Nearby"){
               $("#storage").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "storage"){
                            $("#sstoragenotes").html(notes[i].value);
                            $("#sstorage").find('.my-1').addClass('toggle_services');
                            $("#sstorage").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#sstorage").find('i').hide();
                    $("#sstorage").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#storage").hide();
                $("#sstorage").find('i').hide();
                $("#sstorage").find('.my-1').removeClass('toggle_services');
            }

            $("#surveyors").find('img').attr('src','images/poi-icons/'+ serprop.surveyors +'.png');
            $("#ssurveyors").find('img').attr('src','images/poi-icons/'+ serprop.surveyors +'.png');
            if(serprop.surveyors == "Yes" || serprop.surveyors =="Nearby"){
               $("#surveyors").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "surveyors"){
                            $("#ssurveyorsnotes").html(notes[i].value);
                            $("#ssurveyors").find('.my-1').addClass('toggle_services');
                            $("#ssurveyors").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#ssurveyors").find('i').hide();
                    $("#ssurveyors").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#surveyors").hide();
                $("#ssurveyors").find('i').hide();
                $("#ssurveyors").find('.my-1').removeClass('toggle_services');
            }

            $("#towing").find('img').attr('src','images/poi-icons/'+ serprop.towing +'.png');
            $("#stowing").find('img').attr('src','images/poi-icons/'+ serprop.towing +'.png');
            if(serprop.towing == "Yes" || serprop.towing =="Nearby"){
               $("#towing").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "towing"){
                            $("#stowingnotes").html(notes[i].value);
                            $("#stowing").find('.my-1').addClass('toggle_services');
                            $("#stowing").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#stowing").find('i').hide();
                    $("#stowing").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#towing").hide();
                $("#stowing").find('i').hide();
                $("#stowing").find('.my-1').removeClass('toggle_services');
            }

            $("#washAndWax").find('img').attr('src','images/poi-icons/'+ serprop.washAndWax +'.png');
            $("#swashAndWax").find('img').attr('src','images/poi-icons/'+ serprop.washAndWax +'.png');
            if(serprop.washAndWax == "Yes" || serprop.washAndWax =="Nearby"){
               $("#washAndWax").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "washandwax"){
                            $("#swashAndWaxnotes").html(notes[i].value);
                            $("#swashAndWax").find('.my-1').addClass('toggle_services');
                            $("#swashAndWax").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#swashAndWax").find('i').hide();
                    $("#swashAndWax").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#washAndWax").hide();
                $("#swashAndWax").find('i').hide();
                $("#swashAndWax").find('.my-1').removeClass('toggle_services');
            }

            $("#waterTaxi").find('img').attr('src','images/poi-icons/'+ serprop.waterTaxi +'.png');
            $("#swaterTaxi").find('img').attr('src','images/poi-icons/'+ serprop.waterTaxi +'.png');
            if(serprop.waterTaxi == "Yes" || serprop.waterTaxi =="Nearby"){
               $("#waterTaxi").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "watertaxi"){
                            $("#swaterTaxinotes").html(notes[i].value);
                            $("#swaterTaxi").find('.my-1').addClass('toggle_services');
                            $("#swaterTaxi").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#swaterTaxi").find('i').hide();
                    $("#swaterTaxi").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#waterTaxi").hide();
                $("#swaterTaxi").find('i').hide();
                $("#swaterTaxi").find('.my-1').removeClass('toggle_services');
            }

            $("#welding").find('img').attr('src','images/poi-icons/'+ serprop.welding +'.png');
            $("#swelding").find('img').attr('src','images/poi-icons/'+ serprop.welding +'.png');
            if(serprop.welding == "Yes" || serprop.welding =="Nearby"){
               $("#welding").show();
                if(serprop.hasOwnProperty('notes')){
                    var notes = serprop.notes;
                    for(var i =0; i < notes.length; i++ ){
                        if(notes[i].field.toLowerCase() == "welding"){
                            $("#sweldingnotes").html(notes[i].value);
                            $("#swelding").find('.my-1').addClass('toggle_services');
                            $("#swelding").find('i').show();
                            break;
                        }
                    }
                }else{
                    $("#swelding").find('i').hide();
                    $("#swelding").find('.my-1').removeClass('toggle_services');
                }
            }else{
                $("#welding").hide();
                $("#swelding").find('i').hide();
                $("#swelding").find('.my-1').removeClass('toggle_services');
            }
            $("#poiservices").show();
        }else{
            $("#poiservices").hide();
        }

        if(reviewsObject){
            if(isReview(type)){
                if(reviewsObject.length>0){
                    var featuredReview = reviewsObject[0];
                    var percent = featuredReview.rating * 20;
                    $("#reviewmaintitle").html(featuredReview.title);
                    $("#featurereviewposted").html(dateFormat(featuredReview.dateVisited));
                    $("#featuredreviewauthor").html(featuredReview.createdBy);
                    $("#featuredreviewcomment").html(featuredReview.text);
                    //$("#featuredreviewvotes").html("("+featuredReview.votes+")");
                    updateReviews();
                }
                 $("#featuredreview").show();
                 $("#Reviewsblock").show();
                 $("#featuredcomment").hide();
                 $("#Commentsblock").hide();
                 $("#Seereviews").html('See Reviews');
                 $("#Seereviews").show();
            }else{
                if(reviewsObject.length>0){
                    var featuredReview = reviewsObject[0];
                    $("#commentmaintitle").html(featuredReview.title);
                    $("#featuredcommentposted").html(dateFormat(featuredReview.dateVisited));
                    $("#featuredcommentauthor").html(featuredReview.createdBy);
                    $("#featuredcommenttext").html(featuredReview.text);
                    //$("#featuredcommnetvotes").html("("+featuredReview.votes+")");
                    $("#commentscount").html(reviewsObject.length);
                    updateComments();
                }
                $("#featuredreview").hide();
                $("#Reviewsblock").hide();
                $("#featuredcomment").show();
                $("#Commentsblock").show();
                $("#Seereviews").html('See Comments');
                $("#Seereviews").show();
            }
        }else{

            if(isReview(type)){
                $("#Reviewsblock").show();
                $("#Commentsblock").hide();
            }else{
                $("#Reviewsblock").hide();
                $("#Commentsblock").show();
            }

            $("#featuredreview").hide();
            $("#featuredcomment").hide();
            $("#Seereviews").hide();
        }
    }
    setTimeout(function(){ $('.loadermask').hide(); }, 500);
    });
    } else {
      loginAlertPopup();
      }
}

function closePoiDetails(){
    $("#poidetails").hide();
}

$(document).ready(function(){
$(".backto_mainpage").click(function(){
	$("#poidetails").show();
    $("#reviewssection").hide();
    $("#Amenitiessection").hide();
    $("#Servicessection").hide();
    $("#Retailsection").hide();
    $("#Dockagesection").hide();
    $("#Mooringssection").hide();
    $("#reviewssection").hide();
    $("#CreateReview").hide();
    $("#CreateComment").hide();
});

$(".cancelcreaterc").click(function(){
    $("#CreateReview").hide();
    $("#CreateComment").hide();
    $("#star1").prop("checked", false);
    $("#star2").prop("checked", false);
    $("#star3").prop("checked", false);
    $("#star4").prop("checked", false);
    $("#star5").prop("checked", false);
    $("#reviewcomment").val('');
    //$("#reviewdate").val('');
    $("#reviewtitle").val('');
    $("#comment").val('');
    //$("#commentdate").val('');
    $("#commenttitle").val('');
});

$("#Amenities").click(function(){
    $("#Amenitiessection").show();
    $("#poidetails").hide();
});

$("#Services").click(function(){
    $("#Servicessection").show();
    $("#poidetails").hide();
});

$("#Seereviews").click(function(){
    $("#reviewssection").show();
    $("#poidetails").hide();
});

$("#Retail").click(function(){
    $("#Retailsection").show();
    $("#poidetails").hide();
});

$("#Dockage").click(function(){
    $("#Dockagesection").show();
    $("#poidetails").hide();
});

$("#Moorings").click(function(){
    $("#Mooringssection").show();
    $("#poidetails").hide();
});

$("#Reviews").click(function(){
    $("#reviewssection").show();
    $("#poidetails").hide();
});

$("#Reviewsblock").click(function(){
    $("#CreateReview").show();
    $("#poidetails").hide();
});

$("#Commentsblock").click(function(){
    $("#CreateComment").show();
    $("#poidetails").hide();
});

$("#Reviewsblock2").click(function(){
    $("#CreateReview").show();
    $("#poidetails").hide();
});

$("#Commentsblock2").click(function(){
    $("#CreateComment").show();
    $("#poidetails").hide();
});

$(".AmenitiesAccordian").delegate(".toggle_amenity", "click", function(e) {
   e.preventDefault();
   var $this = $(this);
   $(".inner_content").slideUp();
   if ($this.next().hasClass('show')) {
       $this.next().removeClass('show');
       $this.next().slideUp(350);
   } else {
       $this.parent().find('.inner_content').removeClass('show');
       $this.parent().find('.inner_content').slideUp(350);
       $this.next().toggleClass('show');
       $this.next().slideToggle(350);
   }
});
$(".ServicesAccordian").delegate(".toggle_services", "click", function(e) {
    e.preventDefault();
    var $this = $(this);
    $(".innerService_content").slideUp();
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().find('.innerService_content').removeClass('show');
        $this.parent().find('.innerService_content').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

$(".RetailAccordian").delegate(".toggle_retail", "click", function(e) {
    e.preventDefault();
    var $this = $(this);
    $(".innerRetail_content").slideUp();
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().find('.innerRetail_content').removeClass('show');
        $this.parent().find('.innerRetail_content').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

$(".DockageAccordian").delegate(".toggle_dockage", "click", function(e) {
    e.preventDefault();
    var $this = $(this);
    $(".innerDockage_content").slideUp();
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().find('.innerDockage_content').removeClass('show');
        $this.parent().find('.innerDockage_content').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

$(".MooringsAccordian").delegate(".toggle_moorings", "click", function(e) {
    e.preventDefault();
    var $this = $(this);
    $(".innerMoorings_content").slideUp();
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().find('.innerMoorings_content').removeClass('show');
        $this.parent().find('.innerMoorings_content').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
});

function updateReviews(){

var reviewsText = "";
$("#mosthelpreviews").html("");
for(var i = 0; i < reviewsObject.length; i++){
  var obj = reviewsObject[i];
  var reviewPercent = obj.rating * 20 ;
  reviewsText+= '<li class="list-group-item px-1 py-1">'
        +'<h3 class="p-0 m-0">'+ obj.title +'</h3>'
        +'<div class="clearfix my-1">'
            +'<div class="float-left">'
                +'<div class="my-1">'
                +'<div class="star-ratings-css1" style="width:80px;">'
                     +'<div class="star-ratings-css-top1" style="width: '+reviewPercent+'%"><span class="fa fa-star allspan"></span><span class="fa fa-star allspan"></span><span class="fa fa-star allspan"></span><span class="fa fa-star allspan"></span><span class="fa fa-star allspan"></span></div>'
                     +'<div class="star-ratings-css-bottom1"><span class="fa fa-star allspan"></span><span class="fa fa-star allspan"></span><span class="fa fa-star allspan"></span><span class="fa fa-star allspan"></span><span class="fa fa-star allspan"></span></div>'
                     +'<p class="mb-0 reviewcount1 font-weight-normaltext-secondary">'+ dateFormat(obj.dateVisited)+'</p>'
                 +'</div>'
                 +'<p class="my-1 p-0">'+obj.createdBy+'</p>'
                 +'</div>'
            +'</div>'
        +'</div>'
        +'<p class="more">'+obj.text+'</p>'
      +'</li>';
  }
  $("#mosthelpreviews").html(reviewsText);
  
  var showChar = 70;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "Read more >";
  var lesstext = "";
  

  $('.more').each(function() {
      var content = $(this).html();

      if(content.length > showChar) {

          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

          $(this).html(html);
      }

  });

  $(".morelink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
      } else {
          $(this).addClass("less");
          $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
  });
}

function updateComments(){

    var reviewsText = "";
    $("#mosthelpcomments").html("");
    for(var i = 0; i < reviewsObject.length; i++){
    var obj = reviewsObject[i];
    reviewsText+= '<li class="list-group-item px-1 py-1">'
        +'<h3 class="p-0 m-0">'+ obj.title +'</h3>'
        +'<div class="clearfix my-1">'
            +'<div class="float-left">'
                +'<div class="my-1">'
                +'<div class="star-ratings-css1" style="width:80px;">'
                 +'<p class="mb-0 reviewcount1 font-weight-normaltext-secondary">'+ dateFormat(obj.dateVisited)+'</p>'
                 +'</div>'
                 +'<p class="my-1 p-0">'+obj.createdBy+'</p>'
                 +'</div>'
            +'</div>'
        +'</div>'
        +'<p class="more">'+obj.text+'</p>'
      +
      '</li>';
    }

    $("#mosthelpcomments").html(reviewsText);

    var showChar = 70;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more >";
    var lesstext = "";

    $('.more').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {

        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

        $(this).html(html);
    }
    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}

function dateFormat(date){
    var today = new Date(date);
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    }
    if (mm < 10) {
    mm = '0' + mm;
    }
    var date = mm + '/' + dd + '/' + yyyy;
    return date;
}

function updateDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    }
    if (mm < 10) {
    mm = '0' + mm;
    }
    var date = yyyy+'-'+mm+'-'+dd;

    $("#reviewdate").val(date);
    $("#commentdate").val(date);
}

function isReview(type){
    var review = type == "Anchorage" || type == "Business" || type == "Marina";
    if(review){
        return true;
    }else{
        return false;
    }
}

function submitReview(type){

    var ratingValue = 0, CommentText, dateVisited, title;

    if(type=="Review"){
        ratingValue = parseInt($("input[name='rating']:checked").val());
        CommentText = $("#reviewcomment").val();
        dateVisited = $("#reviewdate").val();
        title = $("#reviewtitle").val();
    }else{
        ratingValue = 0;
        CommentText = $("#comment").val();
        dateVisited = $("#commentdate").val();
        title = $("#commenttitle").val();
    }

    if(type=="Review" && ratingValue == 0){
       jAlert("Please select rating","Review");
    }
    else if(CommentText == ""){
       jAlert("Please enter a comment","Review");
    }else if(dateVisited == ""){
       jAlert("Please enter a Date","Review");
    }else if(title == ""){
       jAlert("Please enter a title","Review");
    }else if(localStorage.getItem('ausername') == null){
       jAlert("Please configure Active Captain credentials in Settings","Review");
    }else{
        $('.loadermask').show();
        var data = {
            "dateVisited": dateVisited,
            "rating": ratingValue,
            "text": CommentText,
            "title": title,
            "poiusername": localStorage.getItem("ausername"),
            "poipassword": localStorage.getItem("apassword")
        };

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": webserviceurl+'activecaptain/points-of-interest/'+poiId+'/reviews',
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
            },
            "processData": false,
            "data": JSON.stringify(data)
        };

        $.ajax(settings).done(function(response){
            jAlert(type + " Posted Successfully","Review");
            $("#CreateReview").hide();
            $("#CreateComment").hide();
            $("#star1").prop("checked", false);
            $("#star2").prop("checked", false);
            $("#star3").prop("checked", false);
            $("#star4").prop("checked", false);
            $("#star5").prop("checked", false);
            $("#reviewcomment").val('');
            //$("#reviewdate").val('');
            $("#reviewtitle").val('');
            $("#comment").val('');
            //$("#commentdate").val('');
            $("#commenttitle").val('');
            setTimeout(function(){ $('.loadermask').hide(); }, 500);
       }).fail(function(response){
            jAlert(response.responseJSON.message,"Review");
            setTimeout(function(){ $('.loadermask').hide(); }, 500);
       });
    }
}