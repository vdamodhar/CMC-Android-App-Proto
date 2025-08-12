var sketch;
var sketchElement;
var output;
var draw;
var measureInteractionCount = 0;
var drawcount = 0;
var wgs84Sphere = new ol.Sphere(6378137); // Radius of earth
var measureTooltipElement;
var clickCount = 0;
var geotype = "LineString";
var source;
var measureTooltip;

var pointerMoveHandler = function(evt) {
	if (evt.dragging) {
		return;
	}

	if (sketch && measureDistancePointsStatus) {

		var geom = (sketch.getGeometry());
		if (geom instanceof ol.geom.LineString) {
			output = formatLength( /** @type {ol.geom.LineString} */
			(geom));
		}
		tooltipCoord = geom.getLastCoordinate();
		if(selectedCoordinatesForDistance.length>0){
		var p1 = turf.point(ol.proj.transform(selectedCoordinatesForDistance[0],prj3, prj2));
		var p2 = turf.point(ol.proj.transform(evt.coordinate,prj3, prj2));
		var p3 = turf.midpoint(p1,p2);
		measureTooltipElement.innerHTML = "Range: "+ output + "<br> Course: "+ (turf.bearing(p1,p2)).toFixed(2);
		measureTooltip.setPosition(ol.proj.transform(p3.geometry.coordinates,prj2, prj3));
		}
	}
};

/* Add measure interaction to map */
function addMeasureInteraction() {
	if (measureInteractionCount == 0) {

		//addInteraction();
	}
	measureInteractionCount = 1;
}

/* Add Interaction type to map */
$(function() {

	typeSelect = document.getElementById('type');
	source = new ol.source.Vector();

	var vector = new ol.layer.Vector({
		source : source,
		crossOrigin : 'anonymous',
		style : new ol.style.Style({ // Style after drawing geometry
			fill : new ol.style.Fill({ // fill color
				color : 'rgba(0, 255, 255, 0.2)'
			}),
			stroke : new ol.style.Stroke({ // line stroke
				color : '#ffcc33',
				width : 2
			}),
			image : new ol.style.Circle({ // Circle radius and fill colors for
				// point
				radius : 7,
				fill : new ol.style.Fill({
					color : '#ffcc33'
				})
			})

		})
	});
	map.addLayer(vector);
	createMeasureTooltip();
//	map.on('pointermove', pointerMoveHandler);
});

/* Distance calculation */
var formatLength = function(line) {
	var length = 0;
	var coordinates = line.getCoordinates();
	var sourceProj = map.getView().getProjection();
	for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
		var c1 = ol.proj.transform(coordinates[i], sourceProj, prj2);
		var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, prj2);
		length += wgs84Sphere.haversineDistance(c1, c2); // formula for
		// calculate
		// distance between
		// multiple points

	}
	if (document.getElementById("selectDistance").value == "metres") {

		if (output < 0.01) {
			output = output + ' ' + "m"; // Default value in Meters
		} else {
			output = (Math.round(length * 100) / 100) + ' ' + 'm'; // Decimal
			// roundoff
			// to
			// two
			// digits
		}

	} else if (document.getElementById("selectDistance").value == "kilometers") {
		output = length / 1000; // Meters to Kilometers conversion
		if (output < 0.01) {
			output = output + ' ' + "km";
		} else {
			output = (Math.round(length / 1000 * 100) / 100) + ' '
					+ 'km'; // Decimal roundoff to two digits
		}

	} else if (document.getElementById("selectDistance").value == "feet") {

		output = length * 3.28084; // Meters to Feets conversion
		if (output < 0.01) {
			output = output + ' ' + "ft";
		} else {
			output = (Math.round(output * 100) / 100); // Decimal roundoff to
			// two digits
			output = output + ' ' + 'ft';
		}
	} else if (document.getElementById("selectDistance").value == "miles") {

		output = length * 0.000621371; // Meters to Miles conversion
		if (output < 0.01) {
			output = output + ' ' + "mi";
		} else {
			output = (Math.round(output * 100) / 100); // Decimal roundoff to
			// two digits
			output = output + ' ' + 'mi';
		}

	} /*else if (document.getElementById("unittype").value == "yd") {
		output = length * 1.09361; // Meters to Yards conversion
		if (output < 0.01) {
			output = output + ' ' + "yd";
		} else {
			output = (Math.round(output * 100) / 100); // Decimal roundoff to
			// two digits
			output = output + ' ' + 'yd';
		}
	}*/
	if(clickCount == 2){
		drawEventOFF();
	}
	return output;

};

function addInteraction() {

	draw = new ol.interaction.Draw({
		source : source,
		type : (geotype), // Geometry type LineString or Polygon(i.e.,
		// Distance or Area)
		style : new ol.style.Style({ // Style while drawing geometry
			fill : new ol.style.Fill({ // Fill color
				color : 'rgba(255, 255, 255, 0.2)'
			}),
			stroke : new ol.style.Stroke({ // line Stroke color and width
				color : 'blue',
				width : 2
			}),
			image : new ol.style.Circle({ // Point radius, stroke and fill
				// color
				radius : 6,
				stroke : new ol.style.Stroke({
					color : 'rgba(0, 0, 0, 0.7)',
					width : 2
				}),
				fill : new ol.style.Fill({
					color : 'rgba(255, 255, 255, 0.2)'
				})
			})
		})
	})
	map.addInteraction(draw); // add draw interaction to map

	/* Start drawing on map */
	draw.on('drawstart', function(evt) {
		if (drawcount == 1) {
			source.clear(); // if already drawn clear from map
		}
		sketch = evt.feature;

	}, this);

	/* End of drawing on map */
	draw.on('drawend', function(evt) {

		sketch = null;
		sketchElement = null;
		drawcount = 1;
	}, this);
}

function LengthMeasureON() {
	geotype = "LineString";

	$("#typelength").removeClass("meassurelengthinactive");
	$("#typelength").addClass("meassurelengthactive");
	document.getElementById("map").style.cursor = "crosshair";
	//addMeasureInteraction();
}

function LengthMeasureOFF() {

	$("#typelength").removeClass("meassurelengthactive");
	$("#typelength").addClass("meassurelengthinactive");
	document.getElementById("map").style.cursor = "pointer";
	//removemapInteractions();

}

function removemapInteractions() {
	map.removeInteraction(draw);
	measureInteractionCount = 0;
}

function drawEventOFF(){
	LengthMeasureOFF();
	LengthMeasureON();
	clickCount = 0;
}

function removeGraphics(){
	if(vector){
		map.removeLayer(vector);
	}
	//pointmarker1.setPosition(undefined);
	//pointmarker2.setPosition(undefined);
}

function removeGraphicsOnOff(){
	if(vector){
		map.removeLayer(vector);
	}
	pointmarker1.setPosition(undefined);
	pointmarker2.setPosition(undefined);
	selectedCoordinatesForDistance=[];
}

/**
 * Creates a new measure tooltip
 */
function createMeasureTooltip() {
	if (measureTooltipElement) {
		measureTooltipElement.parentNode.removeChild(measureTooltipElement);
	}
	measureTooltipElement = document.createElement('div');
	measureTooltipElement.className = 'tooltip tooltip-measure';
	measureTooltip = new ol.Overlay({
		element : measureTooltipElement,
		offset : [ 0, -10 ],
		positioning : 'bottom-center'
	});
	map.addOverlay(measureTooltip);
}
