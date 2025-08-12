function gpsDemoSimulationCreate() {

    vesselOneArray = [];
    journeyPoints = [];

    count = 0;
    if (wpArr.length > 2) {

        var alarmArray = legPointsArr;

        for (var i = 2; i < 6; i++) {
            var p0 = turf.point([legPointsArr[i][0], legPointsArr[i][1]]);
            var p1 = turf.point([legPointsArr[i + 1][0], legPointsArr[i + 1][1]]);
            var bearing = turf.bearing(p0, p1) + (true ? -90 : 90);

            var pMax = turf.destination(p0, 0.05, bearing, 'kilometers');
            alarmArray[i] = pMax.geometry.coordinates;
        }

        journeyLineTurf = turf.linestring(alarmArray);
        routeDistance = 0;
        for (var k = 0; k < alarmArray.length - 1; k++) {

            var p0 = turf.point([alarmArray[k][0], alarmArray[k][1]]);
            var p1 = turf.point([alarmArray[k + 1][0], alarmArray[k + 1][1]]);

            routeDistance = routeDistance + turf.distance(p0, p1, distanceSelectedValue);
        }

        distanceInterval = routeDistance / 100;

        for (var l = 0; l < 100; l++) {
            var distance = l * distanceInterval;
            var along = turf.along(journeyLineTurf, distance, distanceSelectedValue);
            journeyPoints.push(along);
        }

        for (var int = 0; int < journeyPoints.length; int++) {

            var point_feature = new ol.Feature({});
            var lon = parseFloat(journeyPoints[int].geometry.coordinates[0]);
            var lat = parseFloat(journeyPoints[int].geometry.coordinates[1]);

            if (int == journeyPoints.length - 1) {
                var lon2 = parseFloat(journeyPoints[int].geometry.coordinates[0]);
                var lat2 = parseFloat(journeyPoints[int].geometry.coordinates[1]);
            } else {
                var lon2 = parseFloat(journeyPoints[int + 1].geometry.coordinates[0]);
                var lat2 = parseFloat(journeyPoints[int + 1].geometry.coordinates[1]);
            }

            var p0 = turf.point([lon, lat]);
            var p1 = turf.point([lon2, lat2]);

            var bearing = turf.bearing(p0, p1);

            var point_geom = new ol.geom.Point(ol.proj.transform([lon, lat], prj2, prj1));
            point_feature.setGeometry(point_geom);
            point_feature.setProperties({
                'id': int,
                'name': '',
                'rotation': bearing
            });

            vesselOneArray.push(point_feature);
            var style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: "transparent",
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: "transparent"
                }),
                image: new ol.style.Icon({
                    src: 'images/arrow_red.png',
                    rotateWithView: true,
                    anchor: [16, 8],
                    anchorXUnits: 'pixels',
                    anchorYUnits: 'pixels',
                    rotation: Math.radians(bearing - 90)
                })
            })
            point_feature.setStyle(style);

        }
        $("#routedistance").html(routeDistance.toFixed(2) + " "+ intialUnits[distanceSelectedValue]);
        $("#routedistance_tab").html(routeDistance.toFixed(2) + " "+ intialUnits[distanceSelectedValue]);

        intersectedPoints = [];

        if (wpArr.length == 2) {
            intersectedPoints.push(wpArr[1].coordinates);
        } else {
            intersectedPoints.push(journeyLinePoints[4]);
            for (var m = 1; m < wpArr.length - 2; m++) {
                intersectedPoints.push(journeyLinePoints[4 + (m * 8)]);
            }
        }
        startDemoSimulation();
    }
    if (footerStatus) {

    } else {
        $("#route_data").css("display", "block");
         $(".ui-resizable-n").show();
        $("#route_data_tab").css("display", "block");
        $("#footer").css("display", "block");
        $("#footer").css("height", "161px");
    }
}

function startDemoSimulation() {
    map.getView().animate({
            zoom: 14,
            duration: 1000
    });
    showVesselonMap();
    myInterval = setInterval(function() {
        showVesselonMap()
    }, simulationInterval);
}

function stopDemoSimulation() {
    clearInterval(myInterval);
}

function showVesselonMap() {
    if (count == journeyPoints.length - 1) {
        count = 0;
        nextWaypoint = 1;
    } else {
        count = count + 1;
    }

    if (vesselLayer) {
        map.removeLayer(vesselLayer);
    }
    vesselVector = new ol.source.Vector();
    vesselVector.addFeature(vesselOneArray[count]);
    vesselLayer = new ol.layer.Vector({
        source: vesselVector
    });
    map.addLayer(vesselLayer);

    shipRotation = vesselOneArray[count].values_.rotation;
    if (shipRotation < 0)
        shipRotation = shipRotation + 360;

    shipPosition = ol.proj.transform(vesselOneArray[count - 1].values_.geometry.flatCoordinates, prj3, prj2);
    distanceShipCoordinates = shipPosition;
    var p4 = ol.proj.transform(vesselOneArray[count].values_.geometry.flatCoordinates, prj3, prj2);

    var p0 = turf.point([shipPosition[0], shipPosition[1]]);
    var p5 = turf.point([p4[0], p4[1]]);
    var bearing = turf.bearing(p0, p5);

    if (nextWaypoint < intersectedPoints.length + 1) {
        var p1 = turf.point(ol.proj.transform(intersectedPoints[nextWaypoint - 1], prj3, prj2));
        var distance = turf.distance(p0, p1, distanceSelectedValue);
        if (distance < distanceInterval * 3) {
            nextWaypoint = nextWaypoint + 1;
        }
    }

    var currentDistance = turf.distance(p5, p0, distanceSelectedValue);
    var speed = (currentDistance * 60 * 60 / 3);
    var p2 = turf.point(wpArr[nextWaypoint].coordinates);
    var nextwayPointDistance = turf.distance(p0, p2, distanceSelectedValue);
    var nextwayPointCourse = 0;

    if (nextWaypoint < wpArr.length - 1) {
        var p3 = turf.point(wpArr[nextWaypoint + 1].coordinates);
        nextwayPointCourse = turf.bearing(p2, p3);
        if (nextwayPointCourse < 0)
            nextwayPointCourse = nextwayPointCourse + 360;
    }
    var time = 0;

    for (var m = 0; m < wpArr.length - 1; m++) {
        var p0 = turf.point(wpArr[m].coordinates);
        var p1 = turf.point(wpArr[m + 1].coordinates);
        time += turf.distance(p0, p1, distanceSelectedValue) / wpArr[m].speed;
    }

    var positionInLatLon = ol.coordinate.toStringHDMS(shipPosition).split(" ");
    $("#traveleddistance").html((distanceInterval * count).toFixed(2) +" "+ intialUnits[distanceSelectedValue]);
    $("#shippositionlat").html(positionInLatLon[0] + " " + positionInLatLon[1] + " " + positionInLatLon[2] + " " + positionInLatLon[3]);
    $("#shippositionlon").html(positionInLatLon[4] + " " + positionInLatLon[5] + " " + positionInLatLon[6] + " " + positionInLatLon[7]);
    $("#shipspeed").html(speed.toFixed(2) + " " + intialUnits[distanceSelectedValue] + "/h");
    $("#course").html(shipRotation.toFixed(2) + "&#176;");
    $("#nextwaypointdistance").html(nextwayPointDistance.toFixed(2) + " " + intialUnits[distanceSelectedValue]);
    $("#nextwaypointcourse").html(nextwayPointCourse.toFixed(2) + "&#176;");
    $("#nextwaypointnumber").html(nextWaypoint);
    $("#totaltime").html(time.toFixed(2) + " hrs");
    $("#route_xtl").html(wpArr[nextWaypoint].xtl * 1000 +" m");
    $("#route_xtr").html(wpArr[nextWaypoint].xtr * 1000 +" m");
    $("#route_name").html(routeFileName);
    $("#traveleddistance_tab").html((distanceInterval * count).toFixed(2) + " " + intialUnits[distanceSelectedValue]);
    $("#totaltime_tab").html(time.toFixed(2) + " hrs");
    $("#route_xtl_tab").html(wpArr[nextWaypoint].xtl * 1000 +" m");
    $("#route_xtr_tab").html(wpArr[nextWaypoint].xtr * 1000 +" m");
    $("#route_name_tab").html(routeFileName);
    $("#shippositionlat_tab").html(positionInLatLon[0] + " " + positionInLatLon[1] + " " + positionInLatLon[2] + " " + positionInLatLon[3]);
    $("#shippositionlon_tab").html(positionInLatLon[4] + " " + positionInLatLon[5] + " " + positionInLatLon[6] + " " + positionInLatLon[7]);
    $("#shipspeed_tab").html(speed.toFixed(2) + " " + intialUnits[distanceSelectedValue] + "/h");
    $("#course_tab").html(shipRotation.toFixed(2) + "&#176;");
    $("#nextwaypointdistance_tab").html(nextwayPointDistance.toFixed(2) + " "+ intialUnits[distanceSelectedValue]);
    $("#nextwaypointcourse_tab").html(nextwayPointCourse.toFixed(2) + "&#176;");
    $("#nextwaypointnumber_tab").html(nextWaypoint);
    $("#nextwaypointposition").html(nextWaypoint);
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
       if (turf.inside(p10, turf.polygon(mapExtentPolygon.getCoordinates()))) {

       } else {
            map.getView().setCenter(ol.proj.transform(shipPosition, prj2, prj1));
       }
       map.getView().rotate(0);
       rotateCompass();
    }

    //code for ship distance freequently update
    if (measureDistanceShipStatus) {
        if (selectedCoordinatesForDistance != undefined && selectedCoordinatesForDistance.length > 0) {
            removeGraphics();
            redrawDistanceFromShip();
        }
    }

    if (turf.inside(turf.point(vesselOneArray[count - 1].values_.geometry.flatCoordinates), turf.polygon(xteVector.getFeatures()[0].getGeometry().getCoordinates()))) {
        $("#alarm").css("display", "none");
        $("#alarm_tab").css("display", "none");
    } else {
        $("#alarm").css("display", "block");
        $("#alarm_tab").css("display", "block");
        if ($('#alarm_toggle').is(':checked')){
        Say("Cross Track crossed");
        }
    }

    isDangerousDepthAhead(shipPosition);
}

var gpsDemoSimulationStatus = false;

function gpsDemoSimulation() {
    if(gpsDemoSimulationStatus == false){
        if (wpArr.length > 2) {
            if (isRouteModified && isRouteImported) {
                showListOfSaves();
            } else if (isRouteModified && !isRouteImported) {
                showListOfFormats();
            } else {
                gpsDemoSimulationStatus = true;
                $("#gpsdemosimulation").css("background", "#FF8C00");
                routeOFF();
                $("#route_data").css("display", "block");
                $("#route_data_tab").css("display", "block");
                 $(".ui-resizable-n").show();
                $("#wpListId").hide();
                gpsDemoSimulationCreate();
            }
        } else {
            jAlert("No Route Found to Simulate", "GPS Simulation");
        }
    } else {
        gpsDemoSimulationOFF();
    }
}

function gpsDemoSimulationOFF() {
    footerOFF();
    stopDemoSimulation();
    gpsDemoSimulationStatus = false;
    $("#route_data").css("display", "none");
    $(".ui-resizable-n").hide();
    $("#gpsdemosimulation").css("background", "#2c3e50");
    $("#alarm_tab").hide();
    $("#alarm").hide();
    $("#DepthError_tab").hide();
    $("#DepthError").hide();

    $(".wpbtn").show();
    map.removeLayer(vesselLayer);
}
$(document).ready(function() {
    $("#gpsdemosimulation").click(function() {
        $("div#six").hide();
        gpsDemoSimulation();
        $("#wrapper").toggleClass("active");
    });
});