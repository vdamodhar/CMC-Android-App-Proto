var depthSelectedValue;
var positionSelectedValue;
var distanceSelectedValue;
var heightsSelectedValue;
var speedSelectedValue;

var selectedCoordinatesForDistance = [];
var isInitialClick = true;

var pointmarkerImage1;
var pointmarkerImage2;
var pointmarker1;
var pointmarker2;
var intialUnits = {};

$(document).ready(function() {

    intialUnits["kilometers"] = "km";
    intialUnits["meters"] = "m";
    intialUnits["feet"] = "ft";
    intialUnits["nauticalmiles"] = "Nm";

    depthSelectedValue = $('#selectDepths option:selected').val();
    positionSelectedValue = $('#selectPositions option:selected').val();
    distanceSelectedValue = $('#selectDistance option:selected').val();
    heightsSelectedValue = $('#selectHeight option:selected').val();
    speedSelectedValue = $('#selectSpeed option:selected').val();

    $("#selectDepths").on('change', function() {
        depthSelectedValue = $(this).val();
    });

    $("#selectPositions").on('change', function() {
        positionSelectedValue = $(this).val();
    });

    $("#selectDistance").on('change', function() {
        distanceSelectedValue = $(this).val();
    });

    $("#selectHeight").on('change', function() {
        heightsSelectedValue = $(this).val();
    });

    $("#selectSpeed").on('change', function() {
        speedSelectedValue = $(this).val();
    });

    pointmarkerImage1 = ($('<i/>').addClass('pointmarker').get(0));
    // creating overlay object
    pointmarker1 = new ol.Overlay({
        positioning: 'bottom-left',
        element: pointmarkerImage1,
        stopEvent: false,
        dragging: false,
        offset: [-16, -32]
    });
    // add to the map
    map.addOverlay(pointmarker1);

    pointmarkerImage2 = ($('<i/>').addClass('pointmarker').get(0));
    // creating overlay object
    pointmarker2 = new ol.Overlay({
        positioning: 'bottom-left',
        element: pointmarkerImage2,
        stopEvent: false,
        dragging: false,
        offset: [-16, -32]
    });
    // add to the map
    map.addOverlay(pointmarker2);

    map.on('singleclick', function(evt) {

        if (measureDistancePointsStatus) {
            clickCount = clickCount + 1;
            addMeasureInteraction();
            if (isInitialClick) {
                isInitialClick = false;
                selectedCoordinatesForDistance.push(evt.coordinate);
                if (vector) {
                    map.removeLayer(vector);
                }
                measureTooltip.setPosition(undefined);
                pointmarker1.setPosition(undefined);
                pointmarker1.setPosition(evt.coordinate);
                pointmarker2.setPosition(undefined);
            } else {
                selectedCoordinatesForDistance.push(evt.coordinate);
                isInitialClick = true;
                pointmarker2.setPosition(evt.coordinate);
                calculateDistance(selectedCoordinatesForDistance[0], selectedCoordinatesForDistance[1]);
                var p1 = turf.point(ol.proj.transform(selectedCoordinatesForDistance[0], prj3, prj2));
                var p2 = turf.point(ol.proj.transform(evt.coordinate, prj3, prj2));
                var p3 = turf.midpoint(p1, p2);
                var bearing = turf.bearing(p1, p2);
                if(bearing<0)
                bearing = bearing + 360;
                measureTooltipElement.innerHTML = "&nbsp; Range: " + turf.distance(p1, p2, distanceSelectedValue).toFixed(2) + " " + intialUnits[distanceSelectedValue] + "<br>&nbsp; Bearing: " + bearing.toFixed(2) + "&#176;";
                measureTooltip.setPosition(ol.proj.transform(p3.geometry.coordinates, prj2, prj3));
                map.getView().setCenter(ol.proj.transform(p3.geometry.coordinates, prj2, prj3));
                selectedCoordinatesForDistance = [];
            }
        } else if (measureDistanceShipStatus && ( gpsSimulationStatus || gpsDemoSimulationStatus)) {
            measureTooltip.setPosition(undefined);
            removeGraphics();
            selectedCoordinatesForDistance = [];
            selectedCoordinatesForDistance.push(evt.coordinate);
            pointmarker1.setPosition(evt.coordinate);
            redrawDistanceFromShip();
        }
    });
});

function redrawDistanceFromShip() {
    if (gpsSimulationStatus || gpsDemoSimulationStatus) {

        var point1 = ol.proj.transform(distanceShipCoordinates, prj2, prj3); //vesselOneArray[count].values_.geometry.flatCoordinates;
        var point2 = selectedCoordinatesForDistance[0];
        drawlineFromPointToShip(point1, point2);

        var distance = calculateShipDistance(point1, point2).toFixed(2);

        var p1 = turf.point(ol.proj.transform(point1, prj3, prj2));
        var p2 = turf.point(ol.proj.transform(point2, prj3, prj2));
        var p3 = turf.midpoint(p1, p2);
        var p4 = ol.proj.transform(p3.geometry.coordinates, prj2, prj3);
        createMeasureTooltip();
        var bearing = turf.bearing(p1, p2);
        if(bearing<0)
        bearing = bearing + 360;

        measureTooltipElement.innerHTML = "&nbsp; Range: " + distance + " " + intialUnits[distanceSelectedValue] + "<br>&nbsp;  Bearing: " + bearing.toFixed(2) + "&#176;";
        measureTooltip.setPosition(p4);
        map.getView().setCenter(p4);
    }
}

var vector;

function calculateDistance(point1, point2) {
    var coords = [point1, point2];
    var lineString = new ol.geom.LineString(coords);
    // create the feature
    var feature = new ol.Feature({
        geometry: lineString,
        name: 'Line'
    });

    var lineStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#f00',
            width: 2
        })
    });

    var source = new ol.source.Vector({
        features: [feature]
    });

    vector = new ol.layer.Vector({
        source: source,
        style: [lineStyle]
    });

    map.addLayer(vector);
    var p1 = turf.point(ol.proj.transform(selectedCoordinatesForDistance[0], prj3, prj2));
    var p2 = turf.point(ol.proj.transform(selectedCoordinatesForDistance[1], prj3, prj2));
    var p3 = turf.midpoint(p1, p2);
    var output = turf.distance(p1, p2, distanceSelectedValue);

    var bearing = turf.bearing(p1, p2);
    if(bearing<0)
    bearing = bearing + 360;

    measureTooltipElement.innerHTML = "&nbsp; Range: " + output + " " + intialUnits[distanceSelectedValue] + "<br>&nbsp; Bearing: " + bearing.toFixed(2) + "&#176;";
    measureTooltip.setPosition(ol.proj.transform(p3.geometry.coordinates, prj2, prj3));
}

function drawlineFromPointToShip(point1, point2) {
    var coords = [point1, point2];
    var lineString = new ol.geom.LineString(coords);

    // create the feature
    var feature = new ol.Feature({
        geometry: lineString,
        name: 'Line'
    });

    var lineStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#f00',
            width: 2
        })
    });

    var source = new ol.source.Vector({
        features: [feature]
    });

    vector = new ol.layer.Vector({
        source: source,
        style: [lineStyle]
    });

    map.addLayer(vector);
}

function calculateShipDistance(point1, point2) {

    var coordinate1 = ol.proj.transform(point1, prj3, prj2);
    var coordinate2 = ol.proj.transform(point2, prj3, prj2);

    var p0 = turf.point(coordinate1);
    var p1 = turf.point(coordinate2);

    var distance = turf.distance(p0, p1, distanceSelectedValue);
    return distance;
}