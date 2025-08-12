/*********************  Waypoint Popup Validations *******************/

/**
 * Method to validate Latitude degree
 * Range 0 - 89
 */
function latDegValidation(val, id) {

	var NumericVal = val;
	if (NumericVal < 0 || NumericVal > 89 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid Latitude degree : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

/**
 * Method to validate Latitude Minute
 * Range 0 to 59
 */
function latMinValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 0 || NumericVal > 59 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid Latitude minutes : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

/**
 * Method to validate Latitude second
 * Range 0 to 59.99
 */
function latSecValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 0 || NumericVal > 59.99 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid Latitude seconds : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

/**
 * Method to validate Longitude degree
 * Range -179 to 179
 */
function lonDegValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 0 || NumericVal > 179 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid Longitude degree : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

/**
 * Method to validate Longitude minute
 * Range 0 to 59
 */
function lonMinValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 0 || NumericVal > 59 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid Longitude minutes : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

/**
 * Method to validate Longitude second
 * Range 0 to 59.99 KM
 */
function lonSecValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 0 || NumericVal > 59.99 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid Longitude seconds : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

/**
 * Method to validate XTL
 * Range 1 to 1000 M
 */
function xtlValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 1 || NumericVal > 1000 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid XTL : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

/**
 * Method to validate XTR
 * Range 1 to 1000 M
 */
function xtrValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 1 || NumericVal > 1000 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid XTR : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}
/**
 * Method to validate speed
 * Range 0 to 50
 */
function speedValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 0.0 || NumericVal > 50.0 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid Speed : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

/**
 * Method to validate turn radius
 * Range 0.001 to 179.99
 */
function turnradiusValidation(val, id) {
	var NumericVal = val;
	if (NumericVal < 0.001 || NumericVal > 179.99 || NumericVal == "" || NumericVal == null) {
		jAlert("Invalid Turn Radius : " + NumericVal);
		showAttributesPopup();
		return false;
	} else {
		updateWpArray(id, val);
	}
}

function validateXTBuffer(){
    if(wpArr.length>0){
    var buffervalue = $("#crosstrack_buffervalue").val();
    for(var i=0; i<wpArr.length; i++){
        wpArr[i].xtl = buffervalue / 1000;
        wpArr[i].xtr = buffervalue / 1000;
    }

    rearrangeWPMarkers();
    drawWpRoute();
    updateXTE(wpArr);
    updateXTEMarkers(wpArr);
}
}