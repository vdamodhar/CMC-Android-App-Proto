var isUserInsideZealand = false;
var newZealandPolygonRight = turf.polygon([[[179.98, -78.92], [145.5, -78.92], [145.5, -7.3], [179.98, -7.3], [179.98, -78.92]]]);
var newZealandPolygonLeft = turf.polygon([[[-179.98, -78.92], [-179.98, -7.3], [-143.83, -7.3], [-143.83, -78.92], [-179.98, -78.92]]]);

$(document).ready(function () {
    document.addEventListener("deviceready", getLocationNZ(), false);
    
});

function getLocationNZ(){
    navigator.geolocation.getCurrentPosition(locateNZ, onLocationError, {});
}

function locateNZ(position) {
    var lon = parseFloat(position.coords.longitude);
    var lat = parseFloat(position.coords.latitude);

    var userGpsLocation = turf.point([lon, lat]);

    isUserInsideZealand = turf.inside(userGpsLocation, newZealandPolygonRight);
    if (!isUserInsideZealand) {
        isUserInsideZealand = turf.inside(userGpsLocation, newZealandPolygonLeft);
    }

    if (!isUserInsideZealand) {
        $("#nzAlert").hide();
        $("#warning-icon").hide();
        $("#copyrights").hide();
    }
    document.getElementById('carouselExampleIndicators').style.display = 'block';
}

function onLocationError() {
    $("#nzAlert").hide();
    $("#warning-icon").hide();
    $("#copyrights").hide();
    document.getElementById('carouselExampleIndicators').style.display = 'block';
}

