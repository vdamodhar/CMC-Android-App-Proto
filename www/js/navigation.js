var journeyPoints = [];
var vesselLayer;
var vesselOneArray = [];
var routeDistance = 0;
var traveledDistance = 0;
var currentDistance = 0;
var distanceInterval;
var shipPosition;
var shipRotation;
var intersectedPoints = [];
var journeyLineTurf;
var simulationInterval = 10000; // milli seconds
var count = 0;
var myInterval;
var nextWaypoint = 1;

Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

var currentGPSCoordinates = [];
var distanceShipCoordinates = [];
var gpsTraveledPoints = [];

function realTimeSimulationCreate() {

    routeDistance = 0;
    journeyPoints = [];
    for (var k = 0; k < legPointsArr.length - 1; k++) {
        var p0 = turf.point([legPointsArr[k][0], legPointsArr[k][1]]);
        var p1 = turf.point([legPointsArr[k + 1][0], legPointsArr[k + 1][1]]);
        routeDistance = routeDistance + turf.distance(p0, p1, distanceSelectedValue);
    }

    $("#routedistance").html(routeDistance.toFixed(2) + intialUnits[distanceSelectedValue]);
    $("#routedistance_tab").html(routeDistance.toFixed(2) + intialUnits[distanceSelectedValue]);

    intersectedPoints = [];

    if (wpArr.length == 2) {
        intersectedPoints.push(wpArr[1].coordinates);
    } else {
        intersectedPoints.push(journeyLinePoints[4]);
        for (var m = 1; m < wpArr.length - 2; m++) {
            intersectedPoints.push(journeyLinePoints[4 + (m * 8)]);
        }
    }

    var point_feature = new ol.Feature({});
  //  var latlon = CurrentGPSPositionNotification
    var lon = parseFloat(CurrentGPSPositionNotification[0]);
    var lat = parseFloat(CurrentGPSPositionNotification[1]);
    var p0 = turf.point([lon, lat]);
    var p1 = turf.point([lon, lat]);

    var bearing = turf.bearing(p0, p1);

    var point_geom = new ol.geom.Point(ol.proj.transform([lon, lat], prj2, prj1));
    point_feature.setGeometry(point_geom);

    point_feature.setProperties({
        'id': 0,
        'name': '',
        'rotation': bearing
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
    gpsTraveledPoints.push(point_feature);
    startRealTimeSimulation();
    traveledDistance = 0;
    if (footerStatus) {
    } else {
        $("#route_data").css("display", "block");
         $(".ui-resizable-n").show();
        $("#route_data_tab").css("display", "block");
        $("#footer").css("height", "165px");
        footerON();
    }
}

function startRealTimeSimulation() {

    map.getView().animate({
        zoom: 14,
        duration: 1000
    });

    trackPostionWithRoute();
    showVesselonMapRealtime();
    myInterval = setInterval(function() {
        showVesselonMapRealtime()
    }, simulationInterval);
}

function stopSimulation() {
    clearInterval(myInterval);
    if (vesselLayer) {
        map.removeLayer(vesselLayer);
    }
}

function showVesselonMapRealtime() {
    if(currentGPSCoordinates.length==2){
        var feature = {
              "type": "Feature",
              "properties": {"time": new Date().getTime() },
              "geometry": {
                "type": "Point",
                "coordinates": currentGPSCoordinates
              }
        };
         trackedJSONObject.features.push(feature);
         trackedPoints = JSON.stringify(trackedJSONObject);
        // console.log(trackedPoints);
    }
}

function trackPostionWithRoute(){
    if(navigator.geolocation) {
    watchPositionGPS = navigator.geolocation.watchPosition(showNavigationInfoWithRoute, onError, {
            timeout: 30000,
            enableHighAccuracy: true
        });
     }
}

function showNavigationInfoWithRoute(position){

    if (vesselLayer) {
        map.removeLayer(vesselLayer);
    }
    var features = trackedJSONObject.features;
    var length = features.length;
    var speed = 0;
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
         currentDistance = turf.distance(p2, p3, distanceSelectedValue);

         speed = ((currentDistance / time) * 3600).toFixed(2);

         shipRotation = turf.bearing(p2,p3);

         if(shipRotation < 0)
         shipRotation = shipRotation + 360;
    }else{
         travelledDistance = 0;
         speed = 0;
         shipRotation = 0;
    }
    console.log("speed" +speed);
    var point_feature = new ol.Feature({});
    //var lat2 = parseFloat(gpsTraveledPoints[gpsTraveledPoints.length - 1].values_.geometry.flatCoordinates[0]);
    //var lon2 = parseFloat(gpsTraveledPoints[gpsTraveledPoints.length - 1].values_.geometry.flatCoordinates[1]);
    var lon = parseFloat(position.coords.longitude);
    var lat = parseFloat(position.coords.latitude);
    currentGPSCoordinates = [lon,lat];
    distanceShipCoordinates = [lon,lat];
    //var p0 = turf.point([lon, lat]);
    //var p1 = turf.point(ol.proj.transform([lon2, lat2], prj3, prj2));

    //var bearing = turf.bearing(p0, p1);

    var point_geom = new ol.geom.Point(ol.proj.transform([lon, lat], prj2, prj1));
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
    gpsTraveledPoints.push(point_feature);
   // console.log("gpsTraveledPoints"+gpsTraveledPoints.length);
    vesselVector = new ol.source.Vector();
    vesselVector.addFeature(gpsTraveledPoints[gpsTraveledPoints.length - 1]);

    vesselLayer = new ol.layer.Vector({
        source: vesselVector
    });

    map.addLayer(vesselLayer);
    //shipRotation = bearing;
    if(shipRotation<0){
       shipRotation = shipRotation + 360;
    }
    shipPosition = [lon, lat];

    var p4 = ol.proj.transform(gpsTraveledPoints[gpsTraveledPoints.length - 2].values_.geometry.flatCoordinates, prj3, prj2);

    var p0 = turf.point([shipPosition[0], shipPosition[1]]);
    //var p5 = turf.point([p4[0], p4[1]]);

    if (nextWaypoint < intersectedPoints.length + 1) {
        var p1 = turf.point(ol.proj.transform(intersectedPoints[nextWaypoint - 1], prj3, prj2));
        var distance = turf.distance(p0, p1, distanceSelectedValue);

        if (distance < 0.3) {
            nextWaypoint = nextWaypoint + 1;
        }
    }

    //console.log("p0 : "+p0);
    //console.log("p5 : "+p5);
    //console.log("distanceSelectedValue : "+distanceSelectedValue);
    //var currentDistance = turf.distance(p5, p0, distanceSelectedValue);
   // console.log("currentDistance : "+currentDistance);
    traveledDistance = currentDistance + traveledDistance;
    //var speed = (currentDistance * 60 * 60 / 3);
    //console.log("Speed : "+speed);
    console.log("nextWaypoint : "+nextWaypoint);
    var p2 = turf.point(wpArr[nextWaypoint].coordinates);
    var nextwayPointDistance = turf.distance(p0, p2, distanceSelectedValue);
    var nextwayPointCourse = 0;

    if (nextWaypoint < wpArr.length - 1) {
        var p3 = turf.point(wpArr[nextWaypoint + 1].coordinates);
        nextwayPointCourse = turf.bearing(p2, p3);
    }

    var time = 0;

    for (var m = 0; m < wpArr.length - 1; m++) {
        var p0 = turf.point(wpArr[m].coordinates);
        var p1 = turf.point(wpArr[m + 1].coordinates);
        time += turf.distance(p0, p1, distanceSelectedValue) / wpArr[m].speed;
    }

    var positionInLatLon = ol.coordinate.toStringHDMS(shipPosition).split(" ");
    $("#traveleddistance").html(traveledDistance.toFixed(4) +" "+ intialUnits[distanceSelectedValue]);

    var latText = "";
    var lonText = "";

    if($("#selectPositions").val() == "dm"){
        latText = shipPosition[1] +" " +positionInLatLon[3];
        lonText = shipPosition[0] +" " +positionInLatLon[7];
    }else{
        latText = positionInLatLon[0] + " " + positionInLatLon[1] + " " + positionInLatLon[2] + " " + positionInLatLon[3];
        lonText = positionInLatLon[4] + " " + positionInLatLon[5] + " " + positionInLatLon[6] + " " + positionInLatLon[7];
    }
    var nextWaypoint_coordinates = ol.coordinate.toStringHDMS(wpArr[nextWaypoint].coordinates);
    var nextWaypoint_positionInLatLon = nextWaypoint_coordinates.split(" ");
    $("#shippositionlat").html(latText);
    $("#shippositionlon").html(lonText);
    $("#shipspeed").html(speed + " " + intialUnits[distanceSelectedValue] + "/h");
    $("#course").html(shipRotation.toFixed(2) + "&#176;");
    $("#nextwaypointdistance").html(nextwayPointDistance.toFixed(2) + " " + intialUnits[distanceSelectedValue]);
    $("#nextwaypointcourse").html(nextwayPointCourse.toFixed(2) + "&#176;");
    $("#nextwaypointnumber").html(nextWaypoint);
    $("#totaltime").html(time.toFixed(2) + " hrs");
    $("#route_xtl").html(wpArr[nextWaypoint].xtl * 1000 +" m");
    $("#route_xtr").html(wpArr[nextWaypoint].xtr * 1000 +" m");
    $("#route_name").html(routeFileName);
    $("#nextwaypointposition").html(nextWaypoint_positionInLatLon);

    $("#traveleddistance_tab").html(traveledDistance.toFixed(4) + " " + intialUnits[distanceSelectedValue]);
    $("#totaltime_tab").html(time.toFixed(2) + " hrs");
    $("#route_xtl_tab").html(wpArr[nextWaypoint].xtl * 1000 +" m");
    $("#route_xtr_tab").html(wpArr[nextWaypoint].xtr * 1000 +" m");
    $("#route_name_tab").html(routeFileName);
    $("#shippositionlat_tab").html(latText);
    $("#shippositionlon_tab").html(lonText);
    $("#shipspeed_tab").html(speed + " " + intialUnits[distanceSelectedValue] + "/h");
    $("#course_tab").html(shipRotation.toFixed(2) + "&#176;");
    $("#nextwaypointdistance_tab").html(nextwayPointDistance.toFixed(2) + " "+ intialUnits[distanceSelectedValue]);
    $("#nextwaypointcourse_tab").html(nextwayPointCourse.toFixed(2) + "&#176;");
    $("#nextwaypointnumber_tab").html(nextWaypoint);

    $("#gpsError").html("");
    $("#gpsError_tab").html("");
    $("#gpssignal").hide();
    //code for north up or head up
    loadTheMapMode();
    if (!isMapModeNorthUp) {
        map.getView().rotate(0);
        map.getView().rotate(Math.radians(-bearing));
        map.getView().setCenter(ol.proj.transform(shipPosition, prj2, prj1));
        rotateCompass();
    } else {
        var size = map.getSize();
        var mapExtentPolygon = ol.geom.Polygon.fromExtent(map.getView().calculateExtent([size[0]-60, size[1]-60]));
        var p10 = turf.point(ol.proj.transform(shipPosition, prj2, prj3));
        if (turf.inside(p10, turf.polygon(mapExtentPolygon.getCoordinates()))) {} else {
            map.getView().setCenter(ol.proj.transform(shipPosition, prj2, prj1));
        }
        map.getView().rotate(0);
        rotateCompass();
    }

    //code for ship distance frequently update
    if (measureDistanceShipStatus) {
        if (selectedCoordinatesForDistance != undefined && selectedCoordinatesForDistance.length > 0) {
            removeGraphics();
            redrawDistanceFromShip();
        }
    }

    if (turf.inside(turf.point(gpsTraveledPoints[gpsTraveledPoints.length - 1].values_.geometry.flatCoordinates), turf.polygon(xteVector.getFeatures()[0].getGeometry().getCoordinates()))) {
        $("#alarm").css("display", "none");
        $("#alarm_tab").css("display", "none");
    } else {
        $("#alarm").css("display", "block");
        $("#alarm_tab").css("display", "block");
        if($('#alarm_toggle').is(':checked')){
        Say("Cross Track crossed");
        }
    }
    isDangerousDepthAhead(shipPosition);
    gpsMarker.setPosition(undefined);
}

function startRealTimeNavigationDefault(){
    $('#NavigationPopup').hide();
    gpsSimulationStatus = true;
    $("#gpssimulation").css("background", "#FF8C00");
    routeOFF();
    $("#wpListId").hide();
    trackedJSONObject = {
        "type": "FeatureCollection",
        "features": []
    }
    trackMyRoute();
}


function isDangerousDepthAhead(shipPosition) {
    var shipLocation = shipPosition;
    var routeBBOX = ol.proj.transformExtent(journeyLineLayer.getSource().getExtent(), prj3, prj2);
    var depthValue = $("#depththreshold").val();
    var bufferValue = $("#buffervalue").val();

    var data = {
        "bbox": routeBBOX,
        "buffer": bufferValue,
        "location": shipLocation,
        "depth": depthValue
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": webserviceurl + "isdengerousdepth",
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
        if (response) {
            $("#DepthError_tab").show();
            $("#DepthError").show();
            if ($('#alarm_toggle').is(':checked')){
             Say("Dangerous depth ahead");
            }
        } else {
            $("#DepthError_tab").hide();
            $("#DepthError").hide();
        }
    });
}