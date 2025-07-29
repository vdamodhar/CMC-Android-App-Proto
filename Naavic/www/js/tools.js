var isMapModeNorthUp = true;
var trackedJSONObject;
var trackType;
var trackFileName;
var networkState = true;
$(document).ready(function () {

    document.addEventListener("offline", function () { networkState = false }, false);
    document.addEventListener("online", function () { networkState = true }, false);
    if (localStorage.getItem("username") && localStorage.getItem('password')) {
        var username = localStorage.getItem('username');
        var password = localStorage.getItem('password');

        var data = {
            "username": username,
            "password": password
        };

        setTimeout(function () {
            if (checkConnection()) {
                $.ajax({
                    crossDomain: true,
                    url: webserviceurl + "login",
                    method: "POST",
                    contentType: "application/json",
                    headers: {
                        "content-type": "application/json",
                        "cache-control": "no-cache",
                        "Authorization": "Basic " + btoa(username + ":" + password)
                    },
                    data: JSON.stringify(data),
                    success: function (response) {
                        if (response.hasOwnProperty("status")) {
                            localStorage.removeItem('username');
                            localStorage.removeItem('password');
                            //  window.location.href = "index.html";
                        } else if (response.hasOwnProperty("username")) {
                        }
                    },
                    error: function (error) {
                        localStorage.removeItem('username');
                        localStorage.removeItem('password');
                        // window.location.href = "index.html";
                    },
                    failure: function (failure) {
                        localStorage.removeItem('username');
                        localStorage.removeItem('password');
                        // window.location.href = "index.html";
                    }
                });
            }
        }, 2000);

    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        // window.location.href = "index.html";
    }
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        $("#logoutid").css({ "display": "block" });
        $("#loginprofile").hide();
        $("#editprofile").hide();
        $("#viewprofile").show();
    }
    else {

        $("#routeicon").css({ "background": "#b2beb5" });
        $("#waypointlisticon").css({ "background": "#b2beb5" });
        $("#drawicon").css({ "background": "#b2beb5" });
        $("#offline").css({ "background": "#b2beb5" });
        $("#blog_id").css({ "background": "#b2beb5" });
        $("#manoverboard").css({ "background-color": "#b2beb5" });
    }
    $("#routeicon").click(function () {
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            route();
            $("#wrapper").toggleClass("active");
        }
        else {
            loginAlertPopup();
        }

    });
    $("#close_enabledAlert").click(function () {
        $("#loginPopup").modal("hide");
    });
    $("#registerprofilebtn").click(function () {
        $("#three").show();
        // $("#profile").show();
        $("#RegisterProfile").show();
        $("#viewprofile").hide();
        $("#loginprofile").hide();
        $('.nav-tabs a[href="#profile"]').tab('show');
        $("#loginPopup").modal("hide");

    });

    $("#loginprofilebtn").click(function () {
        $("#three").show();
        // $("#profile").show();
        $('.nav-tabs a[href="#profile"]').tab('show');
        $("#loginPopup").modal("hide");
        $("#RegisterProfile").hide();
        $("#viewprofile").hide();
        $("#loginprofile").show();
        $("#editprofile").hide();
    });

    $("#signupProfile").click(function () {

        $("#RegisterProfile").show();
        $("#viewprofile").hide();
        $("#loginprofile").hide();
        $("#editprofile").hide();
    });
    $("#signuppageLogin").click(function () {

        $("#RegisterProfile").hide();
        $("#viewprofile").hide();
        $("#loginprofile").show();

    });


    $("#waypointlisticon").click(function () {
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            showwpLIst();
            $("div#two").hide();
            $("#wrapper").toggleClass("active");
        }
        else {
            loginAlertPopup();
        }
    });

    $("#settingsicon").click(function () {
        $("div#three").show();
        $("#wrapper").toggleClass("active");

    });
    $("#warning-icon").click(function () {
        $("div#three").show();
        $("#copyrighttab").tab('show');
        $("#wrapper").toggleClass("active");

    });

    $("#helpicon").click(function () {
        $("div#three").show();
        $("#helptab").tab('show');
        $("#wrapper").toggleClass("active");
    });

    $("#distancepointsicon").click(function () {
        $("div#four").hide();
        measureDistancePoints();
        $("#wrapper").toggleClass("active");
    });
    $("#distanceship").click(function () {
        $("div#five").hide();
        measureDistanceShip();
        $("#wrapper").toggleClass("active");
    });
    $("#gpssimulation").click(function () {
        $("div#six").hide();
        gpsSimulation();
        $("#wrapper").toggleClass("active");
    });

    $("#featureinfoicon").click(function () {
        featureInfo();
        $("#wrapper").toggleClass("active");
    });

    $("#aismarinetraffic").click(function () {
        $("#two").show();
        actualizar();
        $("#wrapper").toggleClass("active");

    });

    $("#drawicon").click(function () {
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            drawFeatureON();
            $(".tooltip").attr("style", "color:black !important");
            $(".tooltipwidth-overlay").attr("style", "min-width:75px !important; width: auto !important; text-align:center;");

            $("#wrapper").toggleClass("active");
        }
        else {
            loginAlertPopup();
        }
    });
    $("#offline").click(function () {
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            window.location.href = "offlinemap.html";
        }
        else {
            loginAlertPopup();
        }
    });

    $("#blog_id").click(function () {

        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            $("#message").val('');
            $("#wrapper").toggleClass("active");
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getPosition, onError, {
                    timeout: 60000,
                    enableHighAccuracy: true
                });
            }
        }
        else {
            // window.location.href="feedbackform_enable";
            // $("#feedbackform_enable").modal("hide");
            $("#blog_id").removeAttr("data-target");
            loginAlertPopup();
        }

    });

    $("#logouticon").click(function () {
        $("#wrapper").toggleClass("active");
        jConfirm('Are you sure you want to logout & exit the app ?', 'Exit', function (confirmed) {
            if (confirmed) {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                //window.location.href = "index.html";
                setTimeout(function () {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    onBackKeyDown();
                }, 2000);
            }
        });
    });

    $("#layerbutton").click(function () {
        $(".gcd-gl-control").removeClass("gcd-gl-expanded");
        $("#Layerssection").show();
        $("#wrapper").removeClass("active");
    });
    $(".gcd-gl-control").click(function () {
        $("#wrapper").removeClass("active");
    });

    $("button#warning-button").click(function () {
        $("div#eight").hide();
    })

    $(".backto_main").click(function () {
        $("div#one").hide();
        //  $("div#two").hide();
        $("div#three").hide();
        $("div#four").hide();
        $("div#five").hide();
        $("div#six").hide();
        $("div#seven").hide();
        $("div#tidegraph").hide();
        $("div#quickstartguide").hide();
        $("#Layerssection").hide();
        $('.nav-tabs a:first').tab('show');

    });

    $("#menu-toggle").click(function (e) {
        $(".gcd-gl-control").removeClass("gcd-gl-expanded");
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });
    var height = $(window).height();
    $('.resize').resizable({
        handles: 'n',
        minHeight: 1,
        maxHeight: (height * 70 / 100),
    });

    $("#notification").click(function () {
        $(".gcd-gl-control").removeClass("gcd-gl-expanded");
        $(".notication_box").slideToggle();
        $("#wrapper").removeClass("active");
    });
    $("#sidebar").click(function () {
        $(".gcd-gl-control").removeClass("gcd-gl-expanded");
    });
    $("#notifications_off").click(function () {
        $(".notication_box").slideUp();
    });

    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

    $("#notification_toggle").click(function () {
        if (document.getElementById('notification_toggle').checked) {
            $("#notification").show();
        } else {
            $("#notification").hide();
        }

    });

    $("#xte_toggle").click(function () {

        if (document.getElementById('xte_toggle').checked) {
            var appBanners = document.getElementsByClassName('xtemarker');
            for (var i = 0; i < appBanners.length; i++) {
                appBanners[i].style.display = 'block';
            }
        } else {
            var appBanners = document.getElementsByClassName('xtemarker');
            for (var i = 0; i < appBanners.length; i++) {
                appBanners[i].style.display = 'none';
            }
        }
    });

    $("#selectPositions").change(function () {
        wpList();
    });
    getallsymbols();
    document.addEventListener("backbutton", onBackKeyDown, false);
    if (localStorage.getItem('ausername')) {
        $('#ausername').val(localStorage.getItem('ausername'));
        $('#apassword').val(localStorage.getItem('apassword'));
        $('#activelogin').html("Logout");
        $('#ausername').prop("disabled", true);
        $('#apassword').prop("disabled", true);
        $('#reset').css("color", "#ccc");
        $('#reset').prop("disabled", true);
        $('#ausername').css("color", "#ccc");
        $('#ausername').css("color", "#ccc");
    }
});

function onBackKeyDown(e) {
    //jConfirm('Are you sure you want to exit the app?', 'Exit', function(confirmed) {
    // if (confirmed) {
    if (navigator.app) {
        navigator.app.exitApp();
    } else if (navigator.device) {
        navigator.device.exitApp();
    } else {
        window.close();
    }
    // }
    // });
}

var CurrentPosition;

function getPosition(position) {
    var lon = parseFloat(position.coords.longitude).toFixed(4);
    var lat = parseFloat(position.coords.latitude).toFixed(4);
    var point = new ol.geom.Point([lon, lat]);
    var format = new ol.format.WKT();
    CurrentPosition = format.writeGeometry(point);
}

var routeStatus = false;

function route() {
    if (routeStatus == false) {
        routeStatus = true;
        $("#routeicon").css("background", "#FF8C00");
        redrawDefaultWPandTrash();
        gpsSimulationOFF();
        featureInfoOFF();
        measureDistancePointsOFF();
        measureDistanceShipOFF();
        drawFeatureOFF();
        rearrangeDistanceMarkers();
        if (wpArr.length > 1 || trackonMap) {
            $("#reverserouteicon").show();
            $("#clearrouteicon").show();
            $("#importrouteicon").show();
        } else {
            openFileBrowser();
        }
    } else {
        routeOFF();
    }
}

function routeOFF() {
    routeStatus = false;
    dMarker.setPosition(undefined);
    $("#exportrouteicon").hide();
    $("#reverserouteicon").hide();
    $("#clearrouteicon").hide();
    $("#importrouteicon").hide();
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        $("#routeicon").css("background", "#2c3e50");
    }
    else {

    }
    removeDistancePopups();
}

var gpsSimulationStatus = false;

function gpsSimulation() {
    if (gpsSimulationStatus == false) {
        if (wpArr.length > 2) {
            if (isRouteModified && isRouteImported) {
                showListOfSaves();
            } else if (isRouteModified && !isRouteImported) {
                showListOfFormats();
            } else {
                gpsSimulationStatus = true;
                $("#gpssimulation").css("background", "#FF8C00");
                routeOFF();
                $("#route_data").css("display", "block");
                $("#route_data_tab").css("display", "block");
                $(".ui-resizable-n").show();
                $("#wpListId").hide();
                $(".ui-resizable-n").show();
                realTimeSimulationCreate();
                trackedJSONObject = {
                    "type": "FeatureCollection",
                    "features": []
                }
            }
        } else {
            jConfirm('No Route found for navigation. Do you want to track your route?', 'Start Navigation', function (confirmed) {
                if (confirmed) {
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
            });
        }
    } else {
        showTrackFileName();
    }
}

function gpsSimulationOFF() {
    footerOFF();
    stopSimulation();
    gpsSimulationStatus = false;
    clearInterval(trackingIntervalLoop);
    navigator.geolocation.clearWatch(watchPositionGPS);
    $("#route_data").css("display", "none");
    $("#gpssimulation").css("background", "#2c3e50");
    $("#alarm_tab").hide();
    $("#alarm").hide();
    $("#DepthError_tab").hide();
    $("#DepthError").hide();
    $(".wpbtn").show();
    $(".ui-resizable-n").hide();
    $(".resize").css('height', '1px');
    $("#flicker").removeClass('fa-chevron-down');
    $("#flicker").addClass('fa-chevron-up');
}

function showTrackFileName() {
    $("#trackfile").css("display", "block");
}

function closeTrackFileName() {
    $("#trackfile").css("display", "none");
    $("#trackingstatus").css("display", "none");
    gpsSimulationOFF();
}

var measureDistancePointsStatus = false;

function measureDistancePoints() {
    if (measureDistancePointsStatus == false) {
        measureDistancePointsStatus = true;
        featureInfoOFF();
        footerOFF();
        measureDistanceShipOFF();
        drawFeatureOFF();
        $(".tooltip").attr("style", "min-width: 180px !important; width:180px !important; padding: 2px 0px !important;");
        $("#distancepointsicon").css("background", "#FF8C00");
    } else {
        measureDistancePointsOFF();
    }
}

function measureDistancePointsOFF() {
    $(".tooltip").attr("style", "color:black !important");
    measureDistancePointsStatus = false;
    removeGraphicsOnOff();
    measureTooltip.setPosition(undefined);
    $("#distancepointsicon").css("background", "#2c3e50");
}

var measureDistanceShipStatus = false;

function measureDistanceShip() {
    if (measureDistanceShipStatus == false) {
        if (gpsSimulationStatus == true || gpsDemoSimulationStatus == true) {
            featureInfoOFF();
            footerOFF();
            measureDistancePointsOFF();
            measureDistanceShipStatus = true;
            drawFeatureOFF();
            $(".tooltip").attr("style", "min-width: 180px !important; width:180px !important; padding: 2px 0px !important;");
            $("#distanceship").css("background", "#FF8C00");
        } else {
            jAlert("Turn on navigation to calculate the distance from the ship", "Measure Distance From Ship");
        }
    } else {
        measureDistanceShipOFF();
    }
}

function measureDistanceShipOFF() {
    $(".tooltip").attr("style", "color: black !important;");
    measureTooltip.setPosition(undefined);
    measureDistanceShipStatus = false;
    removeGraphicsOnOff();
    $("#distanceship").css("background", "#2c3e50");
}

var wplistStatus = false;

function showwpLIst() {

    if (wplistStatus == false) {
        if (wpArr.length > 0) {
            wpList();
            $("#footer").css({
                "display": "block"
            });
            wplistStatus = true;
            $("#waypointlisticon").css("background", "#FF8C00");
            $("#wpListId").show();
            $("#wpListId_tab").show();
            $("#footer").css("height", "165px");
            $("#flicker").addClass('fa-chevron-down');
            $("#flicker").removeClass('fa-chevron-up');
            if (!gpsSimulationStatus) {
                $("#route_data").hide();
            }
            if (gpsSimulationStatus)
                //$(".wpbtn").hide();
                $("#wpListId").hide();
        } else {
            jAlert("No route found to show the waypoints list", "Waypoints List");
        }
    } else {
        hideWpList();
    }
}

function hideWpList() {
    footerOFF();
    wplistStatus = false;
    $("#wpListId").hide();
    $("#wpListId_tab").hide();
    $("#waypointlisticon").css("background", "#2c3e50");
    minimizeBottombar();
}

$(document).ready(function () {

    dMarker.setPosition(undefined);

    $(".step1_swipe").swipe({
        swipeStatus: function (event, phase, direction, distance, duration, fingers) {

            if (phase == "move" && direction == "up") {
                $("#footer").css("height", "165px");
                $("#flicker").addClass('fa-chevron-down');
                $("#flicker").removeClass('fa-chevron-up');
                $('#footer').addClass('animated slideInUp');
                return false;
            }
        }
    });

    $(".swipe-rightsidepage").swipe({
        swipeStatus: function (event, phase, direction, distance, duration, fingers) {
            if (phase == "move" && direction == "left") {
                $("#three").show();
                $('#three').addClass('animated slideInRight');
                return false;
            }
            if (phase == "move" && direction == "right") {
                $("#three").hide();
                return false;
            }
        }
    });

    /*$(".swipe-leftsidepage").swipe({
        swipeStatus: function(event, phase, direction, distance, duration, fingers) {
            if (phase == "move" && direction == "right") {
                $("#two").show();
                actualizar();
                $('#two').addClass('animated slideInLeft');
                return false;
            }
            if (phase == "move" && direction == "left") {
                $("#two").hide();
                return false;
            }
        }
    });*/
    $(".carousel").swipe({

        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');

        },
        allowPageScroll: "vertical"

    });
});

function loadTheMapMode() {
    if ($('input[name=mode]:checked').val() == 'northup') {
        isMapModeNorthUp = true;
    } else {
        isMapModeNorthUp = false;
    }
}

var footerStatus = false;

function showRouteInformation() {

    if (footerStatus == true) {
        footerOFF();
    } else {
        footerON();
    }
}

function footerOFF() {
    footerStatus = false;
}

function footerON() {
    if (landScapeMode) { }
    else {
        footerStatus = true;
    }
}

var isFeatureInfoOn = false;

function featureInfo() {
    if (isFeatureInfoOn == true) {
        featureInfoOFF();
    } else {
        measureDistancePointsOFF();
        measureDistanceShipOFF();
        routeOFF();
        drawFeatureOFF();
        isFeatureInfoOn = true;
        $("#featureinfoicon").css("background", "#FF8C00");
        $(".tooltip").attr("style", "min-width: 200px !important; width:200px !important; padding: 2px 0px !important;");
    }
}

function featureInfoOFF() {
    isFeatureInfoOn = false;
    $("#featureinfoicon").css("background", "#2c3e50");
    closepopup();
    $(".tooltip").attr("style", "color: black !important;");
}

var drawStatus = false;

function drawFeatureON() {
    if (drawStatus == true) {
        drawFeatureOFF()
    } else {
        measureDistancePointsOFF();
        measureDistanceShipOFF();
        featureInfoOFF();
        routeOFF();
        drawStatus = true;
        $("#drawicon").css("background", "#FF8C00");
        $("#polygon_btn_group").show();
    }
}

function drawFeatureOFF() {
    drawStatus = false;
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        $("#drawicon").css("background", "#2c3e50");
    }
    else {
    }
    removeInteractions();
    $("#polygon_btn_group").hide();
    removeObjectPopup();
}
var formatListStatus = false;

function showListOfFormats() {
    if (wpArr.length > 2) {
        if (formatListStatus == true) {
            closeListOfFormats();
        } else {
            formatListStatus = true;
            $("#listofformats").slideDown();
        }
    } else {
        jAlert("No Route Found to Export", "Export Route");
    }
}

function closeListOfFormats() {
    formatListStatus = false;
    $("#listofformats").slideUp();
}

var saveListStatus = false;

function showListOfSaves() {

    if (saveListStatus == true) {
        closeListOfSaves();
    } else {
        saveListStatus = true;
        $("#savetheroute").slideDown();
    }
}

function closeListOfSaves() {
    saveListStatus = false;
    $("#savetheroute").slideUp();
}

function editprofile() {
    $("#editprofile").show();
    $("#viewprofile").hide();
}

function modifyprofile() {
    $("#viewprofile").show();
    $("#editprofile").hide();
}

function Say(m) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[2];
    msg.voiceURI = "native";
    msg.volume = 5;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.text = m;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
}

var displayMode = 'auto';

function getDisplayMode() {
    displayMode = $('input[name=dispalymode]:checked').val();
}

var contourValues = [];
function changeSafetyDepthAndContour() {

    var layers = map.getLayers().getArray()[2].getLayers().array_;
    contourValues = [];
    var contourVal = parseFloat($("#safetycontour").val());
    for (var i = 0; i < layers.length; i++) {
        var keys = [];
        var tileobject = layers[i].getSource().sourceTiles_;
        for (var k in tileobject) keys.push(k);
        if (keys.length > 0)
            for (var j = 0; j < keys.length; j++) {
                var features = tileobject[keys[j]].features_;
                if (features.length > 0)
                    for (var l = 0; l < features.length; l++) {
                        if (features[l].getProperties().OBJL == 43) {
                            var valdco = parseFloat(features[l].getProperties().VALDCO);
                            if (valdco < contourVal)
                                contourValues.push(valdco);
                        }
                    }
            }
    }

    contourValues.sort(function (a, b) { return b - a; });

    map.getView().setZoom(map.getView().getZoom() - 2);
    setTimeout(function () {
        map.getView().setZoom(map.getView().getZoom() + 2);
        map.render();
        map.renderSync();
        map.updateSize();
    }, 2000);
}

function decreaseContour() {
    var value = parseFloat($("#safetycontour").val());
    if (value > 0) {
        $("#safetycontour").val(value - 1);
    }
}

function increaseContour() {
    var value = parseFloat($("#safetycontour").val());
    $("#safetycontour").val(value + 1);
}

function decreaseDepth() {
    var value = parseFloat($("#safetydepth").val());
    if (value > 0) {
        $("#safetydepth").val(value - 1);
    }
}

function increaseDepth() {
    var value = parseFloat($("#safetydepth").val());
    $("#safetydepth").val(value + 1);
}

function checkConnection() {
    if (networkState) {
        return true;
    } else {
        jError('No Internet Connection, Some of the Features may not work, Please Turn ON Mobile Data / Wifi', 'Login', function (confirmed) {
            if (confirmed) { }
        });
        return false;
    }
}

function openQuickStartGuide() {
        cordova.InAppBrowser.open("https://naavic.net/NaAVIC_Quick_Start_Guide_v3.0.pdf", '_system', 'location=yes');
          return false;
}

function minimizeBottombar() {
    $("#footer").css("height", "1px");
    $("#flicker").removeClass('fa-chevron-down');
    $("#flicker").addClass('fa-chevron-up');
}

function updateBottomBar() {
    $(".gcd-gl-control").removeClass("gcd-gl-expanded");
    if ($("#footer").height() > 1) {
        minimizeBottombar();
    } else {
        $("#footer").css("height", "165px");
        $("#flicker").addClass('fa-chevron-down');
        $("#flicker").removeClass('fa-chevron-up');
    }
}

function redirectMap() {
    localStorage.setItem('onboardfirsttime', 'no');
    $("#onboard").hide();
}

function openTour() {
    $("#onboard").show();
    document.getElementById("onboardiframe").src = "./Naavic_onboard/slide.html";
    $("#three").hide();
}
function redirectOntour() {
    document.getElementById("onboardiframe").src = "./Naavic_onboard/slide.html";
}
function getFathoms(value) {
    var fathom = value * 0.546807;
    var dec = (fathom + "").split(".");

    if (dec[1] > 5) {
        fathom = Math.ceil(fathom);
    } else {
        fathom = Math.floor(fathom);
    }
    return fathom + "";
}

function getFeets(value) {
    var feet = value * 3.28084;
    var dec = (feet + "").split(".");

    if (dec[1] > 5) {
        feet = Math.ceil(feet);
    } else {
        feet = Math.floor(feet);
    }
    return feet + "";
}

function getMiles(value) {
    return value * 0.000621371;
}

function getKilometers(value) {
    return value / 1000;
}

function validateActiveCaptain() {
    if (localStorage.getItem('ausername')) {
        activeLogout();
    } else {
        var username = $('#ausername').val();
        var password = $('#apassword').val();

        if (username == "" && password == "") {
            jAlert("Please enter your login credentials", "Login");
        } else if (username == "") {
            jAlert("Please enter your username", "Login");
        } else if (password == "") {
            jAlert("Please enter your password", "Login");
        } else if (checkConnection()) {

            $('.loadermask').show();

            var data = {
                "username": username,
                "password": password
            };

            $.ajax({
                crossDomain: true,
                url: webserviceurl + "activecaptain/sso-login",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (response) {
                    if (response.status == "true") {
                        localStorage.setItem("ausername", username);
                        localStorage.setItem("apassword", password);
                        jAlert("You have successfully logged in ", "Login");
                        $('#activelogin').html("Logout");
                        $('#reset').css("color", "#ccc");
                        $('#reset').prop("disabled", true);
                        $('#ausername').prop("disabled", true);
                        $('#apassword').prop("disabled", true);
                        $('#ausername').css("color", "#ccc");
                        $('#ausername').css("color", "#ccc");
                        setTimeout(function () { $('.loadermask').hide(); }, 500);
                    } else {
                        jAlert(response.responseJSON.message, "Login");
                        $('#ausername').val("");
                        $('#apassword').val("");
                        localStorage.removeItem("ausername");
                        localStorage.removeItem("apassword");
                        setTimeout(function () { $('.loadermask').hide(); }, 500);
                    }
                },
                error: function (error) {
                    jAlert(error.responseJSON.message, "Login");
                    $('#ausername').val("");
                    $('#apassword').val("");
                    localStorage.removeItem("ausername");
                    localStorage.removeItem("apassword");
                    setTimeout(function () { $('.loadermask').hide(); }, 500);
                },
                failure: function (failure) {
                    jAlert(failure.message, "Login");
                    $('#ausername').val("");
                    $('#apassword').val("");
                    localStorage.removeItem("ausername");
                    localStorage.removeItem("apassword");
                    setTimeout(function () { $('.loadermask').hide(); }, 500);
                }
            });
        }
    }
}

function resetActiveLogin() {
    $('#ausername').val("");
    $('#apassword').val("");
}

function activeLogout() {
    $('#activelogin').html("Login");
    $('#ausername').val("");
    $('#apassword').val("");
    localStorage.removeItem("ausername");
    localStorage.removeItem("apassword");
    $('#reset').css("color", "#fff");
    $('#reset').attr("disabled", false);
    $('#ausername').prop("disabled", false);
    $('#apassword').prop("disabled", false);
    $('#ausername').css("color", "#000");
    $('#ausername').css("color", "#000");
}
function loginAlertPopup() {
    // var popup1 = document.getElementById("loginPopup");
    //  popup1.classList.toggle("show");
    // $("#loginPopup").show();
    $("#loginPopup").modal("show");
}