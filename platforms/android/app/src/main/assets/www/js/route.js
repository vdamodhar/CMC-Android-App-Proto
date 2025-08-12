var dMarker, dMarkerIcon, dMarkerX, dMarkerY;
var xteMarkersArr = [],
    xteIconsArr = [];
var wpArr = [],
    wpMarkersArr = [],
    wpMarkerX, wpMarkerY;
var wpAttrPopup, wpAttrPopupDiv;
var wpDistancePopupArr = [];
var xteTooltip, xteTooltipDiv;
var drag, IsWpDragged = false;
var wpClickIndex = 0,
    xtePos = 0;
var dragStatus = false;
var trashDefStyle, trashHigStyle, trashVector, trashLayer;
var xteVector, xteLayer, routeLineVector, routeLineLayer, journeyLineLayer, journeyLinePoints = [],
    legPointsArr = [],
    legsLineArr = [];
var legsArr = [],
    tmpLegsArr = [];
var movedPos;
var TRASH_RADIUS = 105;
var MAX_WAYPOINT_COUNT = 100;
var contextpath = "";
var isRouteModified = false;

/**
 * Method to add trash layer to map
 *
 */
function addWPTrashLayer() {

    // transparent color style to hide trash layer
    trashDefStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'transparent',
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'transparent'
        })
    });

    // red color style to show trash layer
    trashHigStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'red',
            width: 5,
            lineDash: [5, 10]
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 0, 0.1)'
        })
    });

    trashVector = new ol.source.Vector({
        projection: prj3
    });

    trashLayer = new ol.layer.Vector({
        source: trashVector,
        style: trashDefStyle,
        updateWhileInteracting: true
    });

    // finally add trash layer with transparent style to map
    map.addLayer(trashLayer);
}

/**
 * Add Default marker to map
 *
 */
function addDefaultWPMarker() {

    // creating element with style class from map.css
    dMarkerIcon = ($('<i/>').addClass('addmarker').get(0));
    // creating overlay object
    dMarker = new ol.Overlay({
        positioning: 'bottom-left',
        element: dMarkerIcon,
        stopEvent: false,
        dragging: false,
        offset: [0, 0]
    });
    // add to the map
    map.addOverlay(dMarker);
}

/**
 * Method to create waypoint markers with index value
 * Add pointer events listeners to waypoint markers
 * @param index
 */
function createWPMarker(index) {
    var element;

    if (index == 0 || index == 1) {
        element = ($('<i/>').attr("id", index + "m").addClass("waypointm intermediatewpm").css({
            "background": "url(" + contextpath + "images/" + index + ".png)",
            "background-repeat": "no-repeat"
        }).get(0));
    } else if (index > 1 && index <= 10) {
        element = ($('<i> <span class="badge badgeSingleDigit">' + (index - 1) + '</span> <i/>').attr("id", index + "m").addClass("intermediatewpm").css({
            "background-image": "url(" + contextpath + "images/waypoint.png)"
        }).get(0));
    } else if (index > 10) {
        element = ($('<i> <span class="badge badgeDoubleDigit">' + (index - 1) + '</span> <i/>').attr("id", index + "m").addClass("intermediatewpm").css({
            "background-image": "url(" + contextpath + "images/waypoint.png)"
        }).get(0));
    }

    addWPOverlay(element);

    var classname = document.getElementsByClassName("intermediatewpm");
    // initialing event listeners to every waypoint with class intermediatewpm
    for (var l = 0; l < classname.length; l++) {
        var dragger_ = new ol.pointer.PointerEventHandler(classname[l]);
        ol.events.listen(dragger_, ol.pointer.EventType.POINTERDOWN, handleDraggerStart_);
        ol.events.listen(dragger_, ol.pointer.EventType.POINTERMOVE, handleDraggerDrag_);
    }
}

function createWPDistancePopup(index) {

    var element = $('<div class="tooltip tooltip-measure tooltipwidth-overlay" style="min-width:75px !important; width:auto; text-align:center;"></div>').attr("id", index + "dm").get(0);
	var distanceToolTip = new ol.Overlay({
		element : element,
		offset : [ 0, -1 ],
		positioning : 'bottom-center'
	});
	map.addOverlay(distanceToolTip);
    wpDistancePopupArr.push(distanceToolTip);
}

/**
 * Method to add waypoint to map
 * Update waypoints array
 * @param element
 */
function addWPOverlay(element) {

    var varMarker = new ol.Overlay({
        positioning: 'center-center',
        element: element,
        stopEvent: false,
        dragging: false
    });
    // add to map
    map.addOverlay(varMarker);
    // update waypoints array
    wpMarkersArr.push(varMarker);
}

/**
 * Method to handle dragging start event for waypoint
 * Enable dragging on map
 * Set dragging true to waypoint with returned index
 * @param evt
 */
function handleDraggerStart_(evt) {

    // get clicked position of waypoint
    if (routeStatus) {

        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
            wpMarkerX = evt.originalEvent.layerX;
            wpMarkerY = evt.originalEvent.layerY;
        } else {
            wpMarkerX = evt.originalEvent.offsetX;
            wpMarkerY = evt.originalEvent.offsetY;
        }

        // get waypoint index from the clciked event
        wpClickIndex = evt.originalEvent.currentTarget.attributes["id"].value.replace("m", "");
        // enable drag on map
        drag.setActive(false);
        // enable dragging for waypoint with click index
        wpMarkersArr[wpClickIndex].set('dragging', true);
    }
}

/**
 * Method to handle dragging event for waypoint
 * Update the waypoint position on map
 * @param evt
 */
function handleDraggerDrag_(evt) {

    if (wpClickIndex != undefined && routeStatus)
        if (wpMarkersArr.length > 0 && wpMarkersArr[wpClickIndex].get('dragging') === true) {
            wpMarkersArr[wpClickIndex].setPosition(map.getCoordinateFromPixel([evt.clientX - wpMarkerX + $(".intermediatewpm").width() / 2, evt.clientY + $(".intermediatewpm").height() - wpMarkerY]));
    }
}

/**
 * Method to handle xte marker dragging to start
 * Enable dragging on map
 * Set dragging true to xte marker with returned index
 * @param evt
 */
function handleXTEDraggerStart_(evt) {
    if (routeStatus) {
        xtePos = evt.originalEvent.currentTarget.attributes["id"].value.replace("bm", "");
        drag.setActive(false);
        xteMarkersArr[xtePos].set('dragging', true);
    }
}

/**
 * Method to handle xte marker dragging event
 * @param evt
 */
function handleXTEDraggerDrag_(evt) {
    // intentionally created this function,
    // the purpose of this function is to touch-devices pointer handler
    // not to delete
}

/**
 * Method to handle dragging start event for default marker
 * Enable dragging on map
 * Set dragging true to default marker
 * Get the clicked x,y position of default marker
 * @param evt
 */
function handleDraggerStart_dp(evt) {
    if (routeStatus) {
        drag.setActive(false);
        dMarker.set('dragging', true);
        dMarkerX = evt.originalEvent.layerX;
        dMarkerY = evt.originalEvent.layerY;
    }
}

/**
 * Method to handle dragging event for default marker
 * Update the default marker position on map
 * @param evt
 */
function handleDraggerDrag_dp(evt) {
    if (routeStatus)
        if (dMarker.get('dragging') === true) {
            dMarker.setPosition(map.getCoordinateFromPixel([evt.clientX - dMarkerX + $(".addmarker").width() / 2, evt.clientY + $(".addmarker").height() - dMarkerY]));
        }
}

/**
 * Method to handle dragging end event for defult marker
 * Disable dragging on map
 */
function handleDraggerEnd_dp(evt) {
    if (routeStatus)
        drag.setActive(true);
}

/**
 * Method to find whether dragged waypoint in trash or not
 * @param evt
 * @returns true if it is in trash else return false
 */
function isWPInTrash(evt) {
    return turf.inside(turf.point(evt.coordinate), turf.polygon(trashVector.getFeatures()[0].getGeometry().getCoordinates()));
}

/**
 * Method to handle drag event for waypoint or default waypoint or xte marker
 * @param event
 */
function wpDrag(evt) {
    var markerCoords;
    var popupCoords;
    var popupTransCoords;
    var popupContent;

    // When dragging Default Waypoint marker
    if (dMarker.get('dragging') === true) {

        // Close Popup
        closePopup();

        // Get moved positionn
        movedPos = map.getCoordinateFromPixel([evt.pixel[0] - dMarkerX + $(".addmarker").width() / 2, evt.pixel[1] - dMarkerY + $(".addmarker").height()]);

        markerCoords = map.getCoordinateFromPixel([evt.pixel[0] - dMarkerX, evt.pixel[1] - dMarkerY]);
        dMarker.setPosition(markerCoords);

        // Get Popup position
        popupCoords = map.getCoordinateFromPixel([evt.pixel[0] - dMarkerX + $(".addmarker").width() / 2, evt.pixel[1] - dMarkerY]);
        popupTransCoords = ol.proj.transform(popupCoords, prj3, prj2);

        // Get Popup content
        popupContent = getContent(popupTransCoords);

        // Show Popup
        showPopup(popupCoords, popupContent);

        // Highlight TrashLayer
        showTrash();
    }
    // When dragging Waypoint marker
    else if (wpMarkersArr.length > 0 && wpMarkersArr[wpClickIndex].get('dragging') === true) {
        var wpObject = new wayPoint();

        // Get Index of dragging Waypoint
        var pointer = getWPMarkerIndex(wpClickIndex);

        var postionCoordinate = map.getCoordinateFromPixel([evt.pixel[0] - wpMarkerX + $(".waypointm").width() / 2, evt.pixel[1] - wpMarkerY + $(".waypointm").height()]);

        markerCoords = map.getCoordinateFromPixel([evt.pixel[0] - wpMarkerX + $(".waypointm").width() / 2, evt.pixel[1] - wpMarkerY + $(".waypointm").height()]);
        wpMarkersArr[wpClickIndex].setPosition(markerCoords);

        // Close Popup
        closePopup();

        // Get Popup position
        popupCoords = map.getCoordinateFromPixel([evt.pixel[0] - wpMarkerX + $(".waypointm").width() / 2, evt.pixel[1] - wpMarkerY]);
        popupTransCoords = ol.proj.transform(popupCoords, prj3, prj2);

        // Get Popup content
        popupContent = getContent(popupTransCoords);

        // Show Popup
        showPopup(popupCoords, popupContent);

        // Updating the Waypoint
        wpObject.coordinates = ol.proj.transform(postionCoordinate, prj3, prj2);
        wpObject.speed = wpArr[pointer].speed;
        wpObject.trn = wpArr[pointer].trn;
        wpObject.xtl = wpArr[pointer].xtl;
        wpObject.xtr = wpArr[pointer].xtr;
        wpArr[pointer] = wpObject;

        // Redraw Route
        drawWpRoute();

        //Highlight TrashLayer
        showTrash();
        IsWpDragged = true;
        rearrangeDistanceMarkers();
    }
    // When dragging XTE marker
    else if (xteMarkersArr.length > 0 && xteMarkersArr[xtePos].get('dragging') === true) {
        xteMarkerDrag(evt, xtePos);
        dMarker.setPosition(undefined);
    } else {
        dMarker.setPosition(undefined);
    }
}

/**
 * Method to handle drag end event for waypoint or deafault waypoint or xte marker
 * @param event
 */
function wpDrop(evt) {
    var positionCoordinate;
    var markerCoords;
    var wpObject = new wayPoint();

    // When dragging Default Waypoint marker
    if (dMarker.get('dragging') === true) {
        if (wpArr.length <= MAX_WAYPOINT_COUNT) {
            // When Waypoint out of Trash, WayPoint is alive and Moved
            if (!isWPInTrash(evt) && movedPos) {
                // Set Default Waypoint Marker position
                positionCoordinate = map.getCoordinateFromPixel(dMarkerPos);
                markerCoords = ol.proj.transform(positionCoordinate, prj1, prj3);
                dMarker.setPosition(markerCoords);

                // Get Waypoint count
                var wpCount = wpArr.length;

                // Create Waypoint object with default values and push to Waypoint Array
                wpObject.coordinates = ol.proj.transform(movedPos, prj3, prj2);
                wpArr.push(wpObject);

                // 0 - Starting Waypoint, 1 - Destination Waypoint
                // When Waypoint index is 0, then set its marker position
                if (wpCount == 0) {
                    createWPMarker(0);
                    wpMarkersArr[0].setPosition(ol.proj.transform(movedPos, prj1, prj3));
                }
                // When Waypoint index is 1, then create Waypoint marker and set its position
                else if (wpCount == 1) {
                    createWPMarker(1);
                    wpMarkersArr[1].setPosition(ol.proj.transform(movedPos, prj1, prj3));
                }
                // When Waypoint index is above 1, then create intermediate Waypoint and set its position
                else {
                    createWPMarker(wpCount);
                    wpMarkersArr[wpMarkersArr.length - 1].setPosition(ol.proj.transform(wpArr[wpArr.length - 2].coordinates, prj2, prj3));
                    wpMarkersArr[1].setPosition(ol.proj.transform(wpArr[wpArr.length - 1].coordinates, prj2, prj3));
                }

                // Close Popup
                closePopup();

                // Redraw Route
                drawWpRoute();

                isRouteModified = true;
                $("#exportrouteicon").show();
                $("#clearrouteicon").show();
                $("#reverserouteicon").show();
                rearrangeDistanceMarkers();
            }else{
                closepopup();
            }

        } else {
            jAlert("Maximum Waypoints count is 100","Route");
            closePopup();
        }
        // Activate map pan event
        drag.setActive(true);

        // Deactivate Default Waypoint dragging event
        dMarker.set('dragging', false);
    }
    // When dragging Waypoint marker
    else if (wpMarkersArr.length > 0 && wpMarkersArr[wpClickIndex].get('dragging') === true) {
        var pointer = getWPMarkerIndex(wpClickIndex);
        // When Waypoint is trashed
        if (isWPInTrash(evt)) {
            // Update Waypoint markers
            updateWPMarkers(wpClickIndex);
        } else {
            // When Waypoint is dragging
            if (dragStatus) {
                postionCoordinate = map.getCoordinateFromPixel([evt.pixel[0] - wpMarkerX + $(".waypointm").width() / 2, evt.pixel[1] - wpMarkerY + $(".waypointm").height()]);
                wpMarkersArr[wpClickIndex].setPosition(postionCoordinate);
                var coordinates = ol.proj.transform(postionCoordinate, prj3, prj2);
                wpObject.coordinates = coordinates;
                wpObject.speed = wpArr[pointer].speed;
                wpObject.trn = wpArr[pointer].trn;
                wpObject.xtl = wpArr[pointer].xtl;
                wpObject.xtr = wpArr[pointer].xtr;
                wpArr[pointer] = wpObject;
            }
        }

        rearrangeWPMarkers();

        // Redraw Route
        drawWpRoute();

        if (wpArr.length > 0 && IsWpDragged) {
            isRouteModified = true;
            $("#exportrouteicon").show();
            $("#clearrouteicon").show();
            $("#reverserouteicon").show();
        }
        showAttributesPopup();

        dragStatus = false;
        drag.setActive(true);

    }
    // When dragging XTE marker
    else if (xteMarkersArr.length > 0 && xteMarkersArr[xtePos].get('dragging') === true) {
        removeBufferDragInteraction(xtePos);
    }

    // Set Default Waypoint Marker position
    positionCoordinate = map.getCoordinateFromPixel(dMarkerPos);
    markerCoords = ol.proj.transform(positionCoordinate, prj1, prj3);
    dMarker.setPosition(markerCoords);
    movedPos = undefined;
    hideTrash();
}

/**
 * Method to relocate waypoint trash and default marker when changing the zoom or pan of map
 */
function redrawDefaultWPandTrash() {

    dMarker.setPosition(ol.proj.transform(map.getCoordinateFromPixel(dMarkerPos), prj1, prj3));
    var positionCircle = ol.proj.transform(map.getCoordinateFromPixel(trashCirclePos), prj1, prj3);
    var circle;
    if (trashVector) {
        var radius = map.getView().getResolution() * TRASH_RADIUS;
        circle = new ol.geom.Circle(positionCircle, radius);
    } else {
        circle = new ol.geom.Circle(positionCircle, 38.22 * TRASH_RADIUS);
    }

    var polycircle = ol.geom.Polygon.fromCircle(circle, 64, 90);
    var circleFeature = new ol.Feature(polycircle);
    trashVector.clear();
    trashVector.addFeature(circleFeature);
    closePopup();
}

/**
 * Method to close the popup
 */
function closePopup() {
    $(wpAttrPopupDiv).popover('destroy');
}

/**
 * Method to show popup with all attributes
 */
function showAttributesPopup() {
    closePopup();
    if(wpArr.length>0){
    var pointer = getWPMarkerIndex(wpClickIndex);
    var popupcoordinate = ol.proj.transform(wpArr[pointer].coordinates, prj2, prj3);
    var pixels = map.getPixelFromCoordinate(popupcoordinate);
    var popupCoords = map.getCoordinateFromPixel([pixels[0], pixels[1] - $(".waypointm").height()]);
    var popupContent = getPopupContent(wpArr[pointer].coordinates);
    map.getView().setCenter(popupCoords);
    setTimeout(function() {
    showPopup(popupCoords, popupContent);
    }, 200);
    }
}
/**
 * Method to show the popup
 * @param popupCoords
 * @param popupContent
 */
function showPopup(popupCoords, popupContent) {
    setPopupContent(popupContent);
    setPopupPosition(popupCoords);
    $(wpAttrPopupDiv).popover('show');
}

/**
 * Method to set the position of popup
 */
function setPopupPosition(popupCoords) {
    wpAttrPopup.setPosition(popupCoords);
}

/**
 * Method to set the popup content
 * @param popupContent
 */
function setPopupContent(popupContent) {
    $(wpAttrPopupDiv).popover({
        'placement': 'top',
        'animation': false,
        'html': true,
        'title': '<a href="#" style="padding: 2px 6px; border-radius:50%; background-color:#2c3e50; color:#fff;" onclick="closepopup()"><i class="fa fa-times" aria-hidden="true"></i></a>',
        'content': popupContent
    });
}

/**
 * Logic to get the waypoint index for getting the attributes from wpArr
 * @param wpClickPos
 * @returns {Number}
 */
function getWPMarkerIndex(wpClickPos) {
    var pointer;
    if (wpClickPos == 1) {
        pointer = wpArr.length - 1;
    } else if (wpClickPos > 1) {
        pointer = wpClickPos - 1;
    } else {
        pointer = wpClickPos;
    }
    return pointer;
}

/**
 * Method to change show the trash by changing the style to trash layer feature
 */
function showTrash() {
    trashVector.getFeatures()[0].setStyle(trashHigStyle);
}

/**
 * Method to change hide the trash by changing the style to trash layer feature
 */
function hideTrash() {
    trashVector.getFeatures()[0].setStyle(trashDefStyle);
}

/**
 * Method to remove the xte tooltip from the map
 */
function closeBufferTooltip() {
    map.removeOverlay(xteTooltip);
}

/**
 * Method to remove drag interaction for xte marker
 * Disable dragging on map
 * Close xte tooltip
 * @param bufferPosition
 */
function removeBufferDragInteraction(bufferPosition) {
    if (xteMarkersArr.length > 0) {
        drag.setActive(true);
        xteMarkersArr[bufferPosition].set('dragging', false);
        closeBufferTooltip();
    }
}

/**
 * Get the popcontent when clicked on waypoint
 * @param coord
 * @returns {String}
 */
function getPopupContent(coord) {

    var hdms = ol.coordinate.toStringHDMS(coord).split(" ");

    var latdir = (hdms[3] === "N");
    var londir = (hdms[7] === "W");

    var latdirection, londirection;

    if (latdir) {
        latdirection = "<select onchange = 'updateWpArray()' id='latdirection'><option value='N' selected>N</option><option value='S'>S</option></select>";
    } else {
        latdirection = "<select onchange = 'updateWpArray()' id='latdirection'><option value='N'>N</option><option value='S' selected>S</option></select>";
    }

    if (londir) {
        londirection = "<select onchange = 'updateWpArray()' id='londirection'><option value='E'>E</option><option value='W' selected>W</option></select>";
    } else {
        londirection = "<select onchange = 'updateWpArray()' id='londirection'><option value='E' selected>E</option><option value='W'>W</option></select>";
    }

    var ns = "<input type='number' id='contentlatdeg' onblur='return latDegValidation(this.value,\"contentlatdeg\")' value='" + hdms[0][0] + hdms[0][1] + "' min='0' max='89'>&#176; <input type='number' id='contentlatmin' onblur=' return latMinValidation(this.value,\"contentlatmin\") ' value='" + hdms[1][0] + hdms[1][1] + "' min='0' max='59'>' <input type='number' id='contentlatsec' onblur=' return latSecValidation(this.value,\"contentlatsec\")' value='" + hdms[2][0] + hdms[2][1] + "' min='0' max='59.99'>'' " + latdirection;
    var ew = "<input type='number' id='contentlondeg' onblur=' return lonDegValidation(this.value,\"contentlondeg\")' value='" + hdms[4][0] + hdms[4][1] + "' min='0' max='179'>&#176; <input type='number' id='contentlonmin' onblur=' return lonMinValidation(this.value,\"contentlonmin\")' value='" + hdms[5][0] + hdms[5][1] + "' min='0' max='59'>' <input type='number' id='contentlonsec' onblur=' return lonSecValidation(this.value,\"contentlonsec\")' value='" + hdms[6][0] + hdms[6][1] + "' min='0' max='59.99'>'' " + londirection;
    var position = getWPMarkerIndex(wpClickIndex);
    var speed = "<input type='number' id='contentspeed' onblur=' return speedValidation(this.value,\"contentspeed\")' value='" + wpArr[position].speed + "' min='0' max='200'>";
    var xtl = "<input type='number' id='contentxtl' onblur=' return xtlValidation(this.value,\"contentxtl\")' value='" + wpArr[position].xtl * 1000 + "' min='1' max='1000'>";
    var xtr = "<input type='number' id='contentxtr' onblur=' return xtrValidation(this.value,\"contentxtr\")' value='" + wpArr[position].xtr * 1000 + "' min='1' max='1000' >";
    var trn = "<input type='number' id='contentturnradius' onblur=' return turnradiusValidation(this.value,\"contentturnradius\")' value='" + wpArr[position].trn + "' min='0' max='360'>";
    return "<span>Lat : </span>" + ns + "<br><span>Lon : </span>" + ew + "<br><span>XTL : </span>" + xtl + "meters <span>Speed:</span>" + speed + "Kn/h<br><span>XTR : </span>" + xtr + "meters <span>Turn : </span>" + trn + "&#176;";
}

/**
 * Method to Update waypoints Array when change the value in waypoint popup
 * Redraw the route
 * @param id
 * @param value
 */
function updateWpArray(id, value) {

    var position = getWPMarkerIndex(wpClickIndex);

    var londirection = $("#londirection").val();
    var latdirection = $("#latdirection").val();

    var isatWest = (londirection === "W");
    var isatSouth = (latdirection === "S");

    if (id == "contentxtl") {
        wpArr[position].xtl = value / 1000;

    } else if (id == "contentxtr") {
        wpArr[position].xtr = value / 1000;

    } else if (id == "contentturnradius") {
        wpArr[position].trn = value;

    } else if (id == "contentspeed") {
        wpArr[position].speed = value;

    } else if (id == "contentlondeg") {
        var lon = $("#contentlondeg").val() * 1 + $("#contentlonmin").val() / 60.0 + $("#contentlonsec").val() / 3600.0;
        if (isatWest) {
            lon = lon * -1;
        }
        wpArr[position].coordinates[0] = lon;

    } else if (id == "contentlonmin") {
        var lon = $("#contentlondeg").val() * 1 + $("#contentlonmin").val() / 60.0 + $("#contentlonsec").val() / 3600.0;
        if (isatWest) {
            lon = lon * -1;
        }
        wpArr[position].coordinates[0] = lon;

    } else if (id == "contentlonsec") {

        var lon = $("#contentlondeg").val() * 1 + $("#contentlonmin").val() / 60.0 + $("#contentlonsec").val() / 3600.0;
        if (isatWest) {
            lon = lon * -1;
        }
        wpArr[position].coordinates[0] = lon;

    } else if (id == "contentlatdeg") {
        var lat = $("#contentlatdeg").val() * 1 + $("#contentlatmin").val() / 60.0 + $("#contentlatsec").val() / 3600.0;
        if (isatSouth) {
            lat = lat * -1;
        }
        wpArr[position].coordinates[1] = lat;
    } else if (id == "contentlatmin") {
        var lat = $("#contentlatdeg").val() * 1 + $("#contentlatmin").val() / 60.0 + $("#contentlatsec").val() / 3600.0;
        if (isatSouth) {
            lat = lat * -1;
        }
        wpArr[position].coordinates[1] = lat;

    } else if (id == "contentlatsec") {
        var lat = $("#contentlatdeg").val() * 1 + $("#contentlatmin").val() / 60.0 + $("#contentlatsec").val() / 3600.0;
        if (isatSouth) {
            lat = lat * -1;
        }
        wpArr[position].coordinates[1] = lat;
    } else {
        var lat = $("#contentlatdeg").val() * 1 + $("#contentlatmin").val() / 60.0 + $("#contentlatsec").val() / 3600.0;
        if (isatSouth) {
            lat = lat * -1;
        }

        wpArr[position].coordinates[1] = lat;
        var lon = $("#contentlondeg").val() * 1 + $("#contentlonmin").val() / 60.0 + $("#contentlonsec").val() / 3600.0;
        if (isatWest) {
            lon = lon * -1;
        }
        wpArr[position].coordinates[0] = lon;
    }
    rearrangeWPMarkers();
    drawWpRoute();
    updateXTE(wpArr);
    updateXTEMarkers(wpArr);
}

/**
 * Method to get the Degree Minutes and Seconds for the Latitute and Longitude
 * @param coord
 * @returns {String}
 */
function getContent(coord) {

    var hdms = ol.coordinate.toStringHDMS(coord).split(" ");
    return "<span>Lat:</span><input type='text' value='" + hdms[0][0] + hdms[0][1] + "'>&#176; <input type='text' value='" + hdms[1][0] + hdms[1][1] + "'>' <input type='text' value='" + hdms[2][0] + hdms[2][1] + "'>''<input type='text' value='" + hdms[3] + "'><br><span>Lon:</span><input type='text' value='" + hdms[4][0] + hdms[4][1] + "'>&#176; <input type='text' value='" + hdms[5][0] + hdms[5][1] + "'>' <input type='text' value='" + hdms[6][0] + hdms[6][1] + "'>''<input type='text' value='" + hdms[7] + "'>";
}

/**
 * Update the waypoints markers array when the waypoint dropped in trash
 * @param pos
 */
function updateWPMarkers(pos) {

    dMarker.setPosition(ol.proj.transform(map.getCoordinateFromPixel(dMarkerPos), prj1, prj3));

    if (pos == 1) {
        wpArr.splice(wpArr.length - 1, 1);
    } else if (pos > 1) {
        var pointer = pos - 1;
        wpArr.splice(pointer, 1);
    } else {
        wpArr.splice(pos, 1);
    }
    wpClickIndex = 0;
    hideTrash();
    dragStatus = false;
    drag.setActive(true);
    closePopup();
}

/**
 * Method to re arrange the waypoints on map when a change in waypoints  properties array
 */
function rearrangeWPMarkers() {
    // Remove all waypoint markers from the map
    for (var j = 0; j < wpMarkersArr.length; j++) {
        map.removeOverlay(wpMarkersArr[j]);
    }

    wpMarkersArr = [];
    // create waypoint markers based upon waypoint array length
    for (var m = 0; m < wpArr.length; m++) {
        createWPMarker(m);
    }
    // set the position of each waypoint
    for (var l = 0; l < wpArr.length; l++) {

        if (l == 0) {
            wpMarkersArr[0].setPosition(ol.proj.transform(wpArr[0].coordinates, prj2, prj3));
        } else if (l == wpArr.length - 1) {

            wpMarkersArr[1].setPosition(ol.proj.transform(wpArr[wpArr.length - 1].coordinates, prj2, prj3));
        } else {
            wpMarkersArr[l + 1].setPosition(ol.proj.transform(wpArr[l].coordinates, prj2, prj3));
        }
    }
    rearrangeDistanceMarkers();
}

function rearrangeDistanceMarkers() {
    // Remove all waypoint markers from the map
    removeDistancePopups();

    // create waypoint markers based upon waypoint array length
    for (var m = 0; m < wpArr.length; m++) {
        createWPDistancePopup(m);
    }

    var totalDistance = 0;
    for (var k = 0; k < legPointsArr.length - 1; k++) {
        var p0 = turf.point([legPointsArr[k][0], legPointsArr[k][1]]);
        var p1 = turf.point([legPointsArr[k + 1][0], legPointsArr[k + 1][1]]);
        totalDistance = totalDistance + turf.distance(p0, p1, distanceSelectedValue);
    }

    // set the position of each waypoint
    for (var l = 0; l < wpArr.length; l++) {

        if (l == 0) {
           // wpDistancePopupArr[0].setPosition(ol.proj.transform(wpArr[0].coordinates, prj2, prj3));
        } else if (l == wpArr.length - 1) {
            wpDistancePopupArr[wpArr.length - 1].setPosition(ol.proj.transform(wpArr[wpArr.length - 1].coordinates, prj2, prj3));
            $("#"+(wpArr.length - 1)+"dm" ).html(totalDistance.toFixed(2) +" "+ intialUnits[distanceSelectedValue]);
            if(wpArr.length>2){
                var p0 = turf.point(wpArr[l-1].coordinates);
                var p1 = turf.point(wpArr[l].coordinates);
                var midpoint = turf.midpoint(p0, p1);
                var distance = turf.distance(p0, p1, distanceSelectedValue);
                $("#"+(l-1)+"dm" ).html(distance.toFixed(2) +" "+ intialUnits[distanceSelectedValue]);
                wpDistancePopupArr[l-1].setPosition( ol.proj.transform(midpoint.geometry.coordinates, prj2, prj3));
            }
        } else {
            var p0 = turf.point(wpArr[l-1].coordinates);
            var p1 = turf.point(wpArr[l].coordinates);
            var midpoint = turf.midpoint(p0, p1);
            var distance = turf.distance(p0, p1, distanceSelectedValue);

            $("#"+(l-1)+"dm" ).html(distance.toFixed(2) +" "+ intialUnits[distanceSelectedValue]);
            wpDistancePopupArr[l-1].setPosition( ol.proj.transform(midpoint.geometry.coordinates, prj2, prj3));
        }
    }
}

function removeDistancePopups(){
        for (var j = 0; j < wpDistancePopupArr.length; j++) {
            map.removeOverlay(wpDistancePopupArr[j]);
        }

        wpDistancePopupArr = [];
}

/**
 * Method to draw Route line with waypoints
 */
function drawWpRoute() {
        updateXTE(wpArr);
        updateXTEMarkers(wpArr);

    if (routeLineLayer) {
        map.removeLayer(routeLineLayer);
    }

    if (wpArr.length > 1) {

        var points = [];

        for (var i = 0; i < wpArr.length; i++) {
            points[i] = ol.proj.transform(wpArr[i].coordinates, prj2, prj3);
        }

        var featureLine = new ol.Feature({
            geometry: new ol.geom.LineString(points)
        });

        if (routeLineLayer) {
            map.removeLayer(routeLineLayer);
        }
        routeLineVector = new ol.source.Vector({});

        routeLineVector.addFeature(featureLine);

        routeLineLayer = new ol.layer.Vector({
            source: routeLineVector,
            updateWhileInteracting: true,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgb(214, 63, 36)',
                    weight: 4
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgb(214, 63, 36)',
                    width: 2
                })
            })
        });

        map.addLayer(routeLineLayer);
    }
}

/**
 * Update XTE Markers
 * 1. Remove all xte markers from the map
 * 2. Create xte markers according to the waypoints length
 * 3. Update xte markers array
 * 4. Set the position on xte line left and right side for each leg
 * 5. initialize the event handlers for each xte marker
 */
function updateXTEMarkers(wpArr) {

    // remove all xte markers from the map
    var i = 0,
        length = xteMarkersArr.length;
    for (i = 0; i < length; i++) {
        map.removeOverlay(xteMarkersArr[i]);
    }

    xteMarkersArr = [];
    xteIconsArr = [];

    // create waypoint markers based upon waypoint array length

    for (var i = 0; i < wpArr.length - 1; i++) {

        if (i == wpArr.length - 1) {
            var p0 = turf.point(legPointsArr[legPointsArr.length - 2]);
            var p1 = turf.point(legPointsArr[legPointsArr.length - 1]);
        } else {
            var p0 = turf.point(legPointsArr[i * 8]);
            var p1 = turf.point(legPointsArr[(i * 8) + 1]);
        }

        var elementl = ($('<i/>').attr("id", xteMarkersArr.length + "bm").addClass("xtemarker").get(0));
        var elementr = ($('<i/>').attr("id", xteMarkersArr.length + 1 + "bm").addClass("xtemarker").get(0));

        var varMarkerLeft = new ol.Overlay({
            positioning: 'bottom-left',
            element: elementl,
            stopEvent: false,
            dragging: false
        });
        var varMarkerRight = new ol.Overlay({
            positioning: 'bottom-left',
            element: elementr,
            stopEvent: false,
            dragging: false
        });

        // finally add markes to map object
        map.addOverlay(varMarkerLeft);
        map.addOverlay(varMarkerRight);
        xteMarkersArr.push(varMarkerLeft);
        xteMarkersArr.push(varMarkerRight);
        xteIconsArr.push(elementl);
        xteIconsArr.push(elementr);

        var bearing = turf.bearing(p0, p1);
        var midpoint = turf.midpoint(p0, p1),
            left = turf.midpoint(p0, midpoint),
            right = turf.midpoint(midpoint, p1);

        var leftCoords = turf.destination(left, wpArr[i].xtl, bearing - 90, 'kilometers');
        varMarkerLeft.setPosition(ol.proj.transform(leftCoords.geometry.coordinates, prj2, prj3));
        var rightCoords = turf.destination(right, wpArr[i].xtr, bearing + 90, 'kilometers');
        varMarkerRight.setPosition(ol.proj.transform(rightCoords.geometry.coordinates, prj2, prj3));
    }

    var classname = document.getElementsByClassName("xtemarker");
    for (var l = 0; l < classname.length; l++) {
        var dragger_ = new ol.pointer.PointerEventHandler(classname[l]);
        ol.events.listen(dragger_, ol.pointer.EventType.POINTERDOWN, handleXTEDraggerStart_);
        ol.events.listen(dragger_, ol.pointer.EventType.POINTERMOVE, handleXTEDraggerDrag_);
        if (document.getElementById('xte_toggle').checked) {
            classname[l].style.display = 'block';
        }
    }
}
/**
 * Metod to handle the xte marker drag event
 * @param evt
 * @param positions
 */
function xteMarkerDrag(evt, positions) {

    createXTEMarkerTooltip();
    var isLeft;
    if (positions % 2 == 0) {
        isLeft = true;
    } else {
        isLeft = false;
    }

    var position = Math.floor(positions / 2);
    var markerposition = turf.point(ol.proj.transform(evt.coordinate, prj3, prj2));
    var p0, p1;

    if (position == wpArr.length - 1) {
        p0 = turf.point(legPointsArr[legPointsArr.length - 2]);
        p1 = turf.point(legPointsArr[legPointsArr.length - 1]);
    } else {
        p0 = turf.point(legPointsArr[position * 8]);
        p1 = turf.point(legPointsArr[(position * 8) + 1]);
    }

    var midPoint = turf.midpoint(p0, p1),
        startPoint = isLeft ? turf.midpoint(p0, midPoint) : turf.midpoint(midPoint, p1),
        bearing = turf.bearing(p0, p1) + (isLeft ? -90 : 90),
        pMax = turf.destination(startPoint, 1, bearing, 'kilometers'),
        pMin = turf.destination(startPoint, 0.001, bearing, 'kilometers'),
        ls = pointArrayToLinestring([pMax, pMin]),
        poss = turf.pointOnLine(ls, markerposition);
    var distance = Math.round(turf.distance(poss, startPoint) * 1000) / 1000;

    if (isLeft) {
        wpArr[position].xtl = distance;
        if ($("#contentxtl").length > 0) {
            $("#contentxtl").val(distance);
        }
    } else {
        wpArr[position].xtr = distance;
        if ($("#contentxtr").length > 0) {
            $("#contentxtr").val(distance);
        }
    }
    xteMarkersArr[positions].setPosition(ol.proj.transform(poss.geometry.coordinates, prj2, prj3));
    xteTooltipDiv.innerHTML = distance * 1000 + " m";
    xteTooltip.setPosition(ol.proj.transform(poss.geometry.coordinates, prj2, prj3));
    updateXTE(wpArr);
}

/**
 * Update XTE based on turn radius for the respective waypoint
 *
 */
function updateXTE(wpArr) {

    if (xteLayer) {
        map.removeLayer(xteLayer);
    }

    if (journeyLineLayer) {
        map.removeLayer(journeyLineLayer);
    }

    legsArr.length = 0;

    for (var i = 0; i < wpArr.length - 1; i++) {

        var p0 = turf.point(wpArr[i].coordinates);
        var p1 = turf.point(wpArr[i + 1].coordinates);
        var m2 = wpArr[i + 2];
        var bearing0 = turf.bearing(p0, p1);
        legsArr.push([]);

        if (i == 0)
            legsArr[i].push(p0);
        else {
            legsArr[i].push(legsArr[i - 1][legsArr[i - 1].length - 2]);
            p0 = legsArr[i - 1][legsArr[i - 1].length - 2];
        }

        // Need at least 3 points to get the curve
        // Curve is based on Point 1's turn radius
        if (m2) {
            p2 = turf.point(m2.coordinates);
            bearing1 = turf.bearing(p1, p2);
            var cp;

            if (wpArr[i].trn > 0.0) cp = getCirclePoints([p0, p1, p2], [bearing0, bearing1], wpArr[i].trn);
            else cp = [p1];
            legsArr[i] = legsArr[i].concat(cp);
            legsArr[i].push(p2);

        } else {
            legsArr[i].push(p1);
        }
    }

    if (wpArr.length > 1) {

        legPointsArr = [];
        legsLineArr = [];
        journeyLinePoints = [];

        for (var int = 0; int < legsArr.length; int++) {
            for (var int2 = 0; int2 < legsArr[int].length; int2++) {
                if (legsArr[int].length == 9 && int2 == 8) {} else {
                    var coordinate = ol.proj.transform(legsArr[int][int2].geometry.coordinates, prj2, prj3);
                    legPointsArr.push(legsArr[int][int2].geometry.coordinates);
                    journeyLinePoints.push(coordinate);
                }
            }
        }

        if (journeyLinePoints.length == 2) {
            legsLineArr.push(legPointsArr);
        } else {
            for (var p = 0; p < legsArr.length; p++) {
                var pointsArr = [];
                if (p == 0) {
                    for (var int2 = 0; int2 < 5; int2++) {
                        pointsArr.push(legPointsArr[int2]);
                    }
                } else if (p == legsArr.length - 1) {
                    for (var int2 = legPointsArr.length - 6; int2 < legPointsArr.length; int2++) {
                        pointsArr.push(legPointsArr[int2]);
                    }
                } else {
                    for (var int2 = (p * 8) - 4; int2 <= (p * 8) + 4; int2++) {
                        pointsArr.push(legPointsArr[int2]);
                    }
                }
                legsLineArr.push(pointsArr);
            }
        }

        var featureLine = new ol.Feature({
            geometry: new ol.geom.LineString(journeyLinePoints)
        });

        journeyLine = new ol.source.Vector({});
        journeyLine.addFeature(featureLine);

        journeyLineLayer = new ol.layer.Vector({
            source: journeyLine,
            updateWhileInteracting: true,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgb(214, 63, 36)',
                    weight: 4
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgb(214, 63, 36)',
                    width: 2
                })
            })
        });

        map.addLayer(journeyLineLayer);
    }

    if (wpArr.length > 1) {
        xtePolygons = getXTEPolygons(legsArr);
    } else
        xtePolygons = null;

    if (xtePolygons) {
        var geo = turf.merge(turf.featurecollection(xtePolygons));
        var features = new ol.format.GeoJSON().readFeatures(geo);

        if (xteLayer) {
            map.removeLayer(xteLayer);
        }

        xteVector = new ol.source.Vector({});
        xteVector.addFeatures(features);

        xteLayer = new ol.layer.Vector({
            source: xteVector,
            updateWhileInteracting: true,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(203, 169, 250,0.8)',
                    weight: 0
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgb(192, 69, 209)',
                    width: 2
                })
            })
        });
        map.addLayer(xteLayer);
    }
}

/**
 * Get leg polygons to merge as a single xte polygon
 * @param legsArr
 * @returns {Array} XTE Ploygons
 */
function getXTEPolygons(legsArr) {

    var returnedPolys = [];
    xteVector = new ol.source.Vector({});
    for (var i = 0; i < legsArr.length; i++) {

        // Each section has a number of points
        var s = legsArr[i];
        tmpLegsArr = [];
        for (var j = 0; j < s.length - 1; j++) {
            var p0 = s[j],
                p1 = s[j + 1],
                bearing = turf.bearing(p0, p1);

            if (j > 6) {
                p1 = turf.destination(p0, 0.001, bearing, 'kilometers');
            }

            var polygon = turf.polygon([
                [ol.proj.transform(p0.geometry.coordinates, prj2, prj3),
                    ol.proj.transform(turf.destination(p0, wpArr[i].xtr, bearing + 90, 'kilometers').geometry.coordinates, prj2, prj3),
                    ol.proj.transform(turf.destination(p1, wpArr[i].xtr, bearing + 90, 'kilometers').geometry.coordinates, prj2, prj3),
                    ol.proj.transform(turf.destination(p1, wpArr[i].xtl, bearing - 90, 'kilometers').geometry.coordinates, prj2, prj3),
                    ol.proj.transform(turf.destination(p0, wpArr[i].xtl, bearing - 90, 'kilometers').geometry.coordinates, prj2, prj3),
                    ol.proj.transform(p0.geometry.coordinates, prj2, prj3),
                    ol.proj.transform(p0.geometry.coordinates, prj2, prj3)
                ]
            ]);
            tmpLegsArr.push(polygon);
        }
        var toToBuffered = turf.linestring(s.map(function(coord) {
            return _pointToLngLat(coord);
        }));
        var buffered = turf.buffer(toToBuffered, 50, 'kilometers'),
            merged = turf.merge(turf.featurecollection(tmpLegsArr)),
            points = turf.within(turf.featurecollection(polygonToPointArray(merged)), buffered),
            final = coordinateDifference(polygonToPointArray(merged), points.features);
        returnedPolys.push(pointArrayToPolygon(final));
    }
    return returnedPolys;
}

/**
 * Method to get Circular points between two points with turn angle and bearing
 * @param points
 * @param bearings
 * @param radius
 * @returns {Array}
 */
function getCirclePoints(points, bearings, radius) {

    var d = Math.min(turf.distance(points[1], points[0], 'kilometers'),
            turf.distance(points[1], points[2], 'kilometers')),
        a = bTa(bearings[0]),
        b = bTa(bearings[1]),
        angle = _angleDiff(a, b) / 2,
        maxR = d * Math.sin(angle * (Math.PI / 180)) * 0.95,
        radius = radius < maxR ? radius : maxR,
        length = radius / Math.sin(angle * (Math.PI / 180)),
        // Is the end point to the left or right of the bearing between the first two
        leftOrNot = isLeft(turfToLatLng(points[0]), turfToLatLng(points[1]), turfToLatLng(points[2])),
        circleBearing = leftOrNot ? aTb(b - angle) : aTb(b + angle),
        cc = turf.destination(points[1], length, circleBearing, 'kilometers'),
        circleAngle = aTb(bTa(circleBearing) + 180 % 360),
        left = circleAngle - (90 - (angle)),
        right = circleAngle + (90 - (angle));

    if (!leftOrNot) {
        var temp = left;
        left = right;
        right = temp;
    }

    // Circle points
    return [turf.destination(cc, radius, left, 'kilometers'),
        turf.destination(cc, radius, left + ((circleAngle - left) / 3), 'kilometers'),
        turf.destination(cc, radius, left + ((2 * (circleAngle - left)) / 3), 'kilometers'),
        turf.destination(cc, radius, circleAngle, 'kilometers'),
        turf.destination(cc, radius, right + ((2 * (circleAngle - right)) / 3), 'kilometers'),
        turf.destination(cc, radius, right + ((circleAngle - right) / 3), 'kilometers'),
        turf.destination(cc, radius, right, 'kilometers')
    ];
}

/**
 * Method to create tooltip for measured xte value
 * Add tooltip popup to map
 */
function createXTEMarkerTooltip() {
    if (xteTooltipDiv) {
        xteTooltipDiv.parentNode.removeChild(xteTooltipDiv);
    }

    xteTooltipDiv = document.createElement('div');
    xteTooltipDiv.className = 'tooltip tooltip-measure';
    xteTooltip = new ol.Overlay({
        element: xteTooltipDiv,
        offset: [5, -35],
        positioning: 'bottom-center'
    });
    map.addOverlay(xteTooltip);
}

/**
 * Method to convert bearing to angle
 * @param b
 * @returns {Number}
 */

function bTa(b) {
    return (450 - b) % 360;
}

/**
 * Method to convert angle to bearing
 * @param a
 * @returns {Number}
 */
function aTb(a) {
    a = a % 360;
    return (a > 90 && a < 270) ? -(180 - (450 - a) % 180) : (450 - a) % 180;
}

/**
 * Method to get coordinates from the feature
 * @param p
 * @returns {Array}
 */
function turfToLatLng(p) {
    return [p.geometry.coordinates[1], p.geometry.coordinates[0]];
}
/**
 * Method to find whether the point c is left of a,b
 * @param a point
 * @param b point
 * @param c point
 * @returns {Boolean} true if it is in left else returns false
 */
function isLeft(a, b, c) {
    return ((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])) > 0;
}
/**
 * Method to calculate angle between two points
 * @param a1
 * @param a2
 * @returns {Number} Angle
 */
function _angleDiff(a1, a2) {
    return Math.abs(180 - Math.abs(a2 - a1));
}

/**
 * Method to transform EPSG:4326 to EPSG:900913
 * @param p
 * @returns
 */
function _pointToLngLat(p) {
    return ol.proj.transform(p.geometry.coordinates, prj2, prj3);
}

/**
 * Method to convert polygon geometry to points
 * @param polygon
 * @returns array of points
 */
function polygonToPointArray(polygon) {
    return polygon.geometry.coordinates[0].map(function(coord) {
        return turf.point([coord[0], coord[1]]);
    });
}

/**
 * Method to convert points to polygon
 * @param points
 * @returns ploygon geometry
 */
function pointArrayToPolygon(points) {
    points.push(points[0]);
    return turf.polygon([points.map(function(p) {
        return p.geometry.coordinates;
    })]);
}

/**
 * Method to convert points to linestring
 */
var pointArrayToLinestring = function(points) {
    return turf.linestring(points.map(function(p) {
        return p.geometry.coordinates;
    }));
};

/**
 * Method to calculate difference between to coordinates
 * @param a
 * @param b
 * @returns {Array}
 */
function coordinateDifference(a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        var found = false;
        for (var j = 0; j < b.length; j++) {
            if (turfToLatLng(a[i])[0] == turfToLatLng(b[j])[0]) {
                found = true;
            }
        }
        if (!found) result.push(a[i]);
    }
    return result;
}
/**
 * Method Clear the plotted route on the map
 */
function clearRouteAndTrack() {

    if(trackonMap && wpArr.length > 0){
        jConfirm('Are you sure you want to clear the track and route?', 'Clear Track and Route', function(confirmed) {
                if (confirmed) {
                     clearRoute();
                     clearTrack();
                }
        });
    }
    else if(trackonMap){
        jConfirm('Are you sure you want to clear the track?', 'Clear Track', function(confirmed) {
            if (confirmed) {
                clearTrack();
            }
        });
    }
    else if (wpArr.length > 0) {
        //confirmation dialouge while clearing the route
        jConfirm('Are you sure you want to clear the route?', 'Clear Route', function(confirmed) {
            if (confirmed) {
               clearRoute();
            }
        });
    } else {
        jAlert("No Route Found to clear", "Clear Route");
    }
    minimizeBottombar();
}

function clearRoute(){
    wpArr = [];
    rearrangeWPMarkers();
    drawWpRoute();
    updateXTE(wpArr);
    legPointsArr = [];
    journeyLinePoints = [];
    map.getView().rotate(0);
    rotateCompass();
    wpList();
    isRouteImported = false;
    redrawDefaultWPandTrash();
    $("#reverserouteicon").hide();
    $("#clearrouteicon").hide();
    $("#exportrouteicon").hide();
}

/**
 * Waypoint object
 */

var wayPoint = function() {
    this.id = 0;
    this.name = 'Waypoint';
    this.coordinates = [0, 0];
    this.speed = 10;
    this.trn = 0.001;
    this.xtl = 0.01;
    this.xtr = 0.01;
}
/**
 * Method Reverse the plotted route on the map
 */
function reverseRoute() {
    if (wpArr.length > 1) {
        //confirmation dialouge while clearing the route
        jConfirm('Are you sure you want to reverse the route?', 'Reverse Route', function(confirmed) {
            if (confirmed) {
                wpArr.reverse();
                rearrangeWPMarkers();
                drawWpRoute();
                updateXTE(wpArr);
            }
        });
    } else {
        jAlert("No Route found to reverse", "Reverse Route");
    }
}

var folderName, fileName, fileContent;
var fileType;

function exportRoute() {

    fileType = $('input[name=exportas]:checked').val();
    closeListOfFormats();

    folderName = "NaAVIC/Routes";

    fileName = $('#routefilename').val();
    if(fileName==""){
        jAlert(" Please enter a filename", "Export Route");
    }else{
        if (fileType == "rtz") {
            if (fileName.includes(".rtz")) {} else {
                fileName = fileName + ".rtz";
            }
            convertJSONtoXML();

        } else {
            if (fileName.includes(".kml")) {} else {
                fileName = fileName + ".kml";
            }
            convertJSONtoKML();
        }
    }
}

function convertJSONtoXML() {
    if (wpArr.length > 2) {
        var jsonobj = wpArr;

        var xmlString = '<?xml version="1.0" ?><route xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" version="1.0" xmlns="http://www.cirm.org/RTZ/1/0"><routeInfo routeName="130130 e-Navigator test route Fal-Capetown" /><waypoints><defaultWaypoint radius="0.500000"><leg starboardXTD="0.100000" portsideXTD="0.100000" speedMin="10.000000" /></defaultWaypoint>';
        var xmlStringEnd = ' </waypoints><schedules><schedule id="1"><manual><sheduleElement waypointId="1" etd="2012-03-19T15:00:22Z" /></manual></schedule></schedules></route>';

        var xmlComplete = xmlString + xmlStringEnd;
        var parser = new DOMParser();
        var doc = parser.parseFromString(xmlComplete, "application/xml");

        //Loop json object
        var ln = jsonobj.length - 1;
        for (var i = 0; i <= ln; i++) {
            var waypt = doc.createElement("waypoint");
            var position = doc.createElement("position");
            var leg = doc.createElement("leg");

            if (jsonobj[i].id !== undefined) {
                waypt.setAttribute("id", jsonobj[i].id);
            }
            if (jsonobj[i].name !== undefined) {
                waypt.setAttribute("name", jsonobj[i].name);
            }
            if (jsonobj[i].trn !== undefined) {
                waypt.setAttribute("radius", jsonobj[i].trn);
            }

            if (jsonobj[i].coordinates[0] !== undefined) {
                position.setAttribute("lat", jsonobj[i].coordinates[0]);
            }
            if (jsonobj[i].coordinates[1] !== undefined) {
                position.setAttribute("lon", jsonobj[i].coordinates[1]);
            }

            if (jsonobj[i].speed !== undefined) {
                leg.setAttribute("speedMin", jsonobj[i].speed);
            }
            if (jsonobj[i].xtl !== undefined) {
                leg.setAttribute("PortXTD", jsonobj[i].xtl);
            }
            if (jsonobj[i].xtr !== undefined) {
                leg.setAttribute("StarboardXTD", jsonobj[i].xtr);
            }

            waypt.appendChild(position);
            waypt.appendChild(leg);

            doc.getElementsByTagName("waypoints")[0].appendChild(waypt);
        }

        fileContent = new XMLSerializer().serializeToString(doc.documentElement);
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        jAlert("No Route Found to Export", "Export Route");
    }
}

function convertJSONtoKML() {
    if (wpArr.length > 2) {
        var jsonobj = wpArr;

        var ln = jsonobj.length - 1;
        var features = [];

        for (var i = 0; i <= ln; i++) {
            var geometry = new ol.geom.Point(jsonobj[i].coordinates);
            var feature = new ol.Feature({
                name: "Waypoint",
                geometry: geometry
            });

            feature.setProperties({
                'name': 'Waypoint',
                'speed': jsonobj[i].speed,
                'trn': jsonobj[i].trn,
                'xtl': jsonobj[i].xtl,
                'xtr': jsonobj[i].xtr,
                'id': i
            });
            features.push(feature);
        }

        fileContent = new ol.format.KML().writeFeatures(features, {
            featureProjection: prj2
        });
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        jAlert("No Route Found to Export", "Export Route");
    }
}

function onDeviceReady() {
    if(window.MobileAccessibility){
       window.MobileAccessibility.usePreferredTextZoom(false);
    }
    window.resolveLocalFileSystemURL(folderpath, gotFS, fail);
}

function gotFS(fileSystem) {
    fileSystem.getDirectory(folderName, {
        create: true
    }, gotDir, fail);
}

function gotDir(dirEntry) {
    dirEntry.getFile(fileName, {
        create: true,
        exclusive: false
    }, gotFile, fail);
}

function fail(error) {
    console.log("error" + error.code)
}

var routeFileName;

function gotFile(fileEntry) {
    fileEntry.createWriter(function(fileWriter) {
        fileWriter.onwriteend = function(e) {
            jAlert('Succesfully Saved','Route');
            isRouteModified = false;
            isRouteImported = true;
            routeFileName = fileName;
            closeListOfFormats();
            closeListOfSaves();
            $("#exportrouteicon").hide();
        };

        fileWriter.onerror = function(e) {
            jAlert('Failed to save route','Route');
        };

        var blob = new Blob([fileContent], {
            type: 'text/plain'
        });
        fileWriter.write(blob);
    }, fail);
}

var saveType;

function saveRouteModified() {
    saveType = $('input[name=saveasroute]:checked').val();
    if (saveType == "save") {
        if (routeFileName.includes(".rtz")) {
            fileName = readFileName;
            folderName = "NaAVIC/Routes";
            convertJSONtoXML();
        } else if (routeFileName.includes(".kml")) {
            fileName = readFileName;
            folderName = "NaAVIC/Routes";
            convertJSONtoKML();
        }
        closeListOfSaves();
    } else {
        showListOfFormats();
        closeListOfSaves();
    }
}