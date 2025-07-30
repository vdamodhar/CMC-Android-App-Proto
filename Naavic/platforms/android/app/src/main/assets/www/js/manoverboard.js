var addManOverBoardMarker;

(function($) {
    $.fn.longpress = function(longCallback, shortCallback, duration) {
        if (typeof duration === "undefined") {
            duration = 500;
        }

    return this.each(function() {
        var $this = $(this);

        // to keep track of how long something was pressed
        var mouse_down_time;
        var timeout;

        // mousedown or touchstart callback
        function mousedown_callback(e) {
            mouse_down_time = new Date().getTime();
            var context = $(this);

            // set a timeout to call the longpress callback when time elapses
            timeout = setTimeout(function() {
                if (typeof longCallback === "function") {
                    longCallback.call(context, e);
                } else {
                    $.error('Callback required for long press. You provided: ' + typeof longCallback);
                }
            }, duration);
        }

        // mouseup or touchend callback
        function mouseup_callback(e) {
            var press_time = new Date().getTime() - mouse_down_time;
            if (press_time < duration) {
                // cancel the timeout
                clearTimeout(timeout);

                // call the shortCallback if provided
                if (typeof shortCallback === "function") {
                    shortCallback.call($(this), e);
                } else if (typeof shortCallback === "undefined") {

                } else {
                    $.error('Optional callback for short press should be a function.');
                }
            }
        }

        // cancel long press event if the finger or mouse was moved
        function move_callback(e) {
            clearTimeout(timeout);
        }

        // Browser Support
        $this.on('mousedown', mousedown_callback);
        $this.on('mouseup', mouseup_callback);
        $this.on('mousemove', move_callback);

        // Mobile Support
        $this.on('touchstart', mousedown_callback);
        $this.on('touchend', mouseup_callback);
        $this.on('touchmove', move_callback);
    });
    };
}(jQuery));

function addManOverBoard(){
 if(localStorage.getItem('username') && localStorage.getItem('password')){
    document.getElementById("manoverboard").disabled = true;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getManPosition, onLocationError, {
            timeout: 60000,
            enableHighAccuracy: true
        });
    }
    } else {
          loginAlertPopup();
    }
}

function onLocationError(){
    document.getElementById("manoverboard").disabled = false;
}

function getManPosition(position) {

    var lon = parseFloat(position.coords.longitude);
    var lat = parseFloat(position.coords.latitude);
    var location = ol.proj.transform([lon, lat], prj2, prj1);
        map.getView().setCenter(location);
    var point = new ol.geom.Point([lon, lat]);
    var format = new ol.format.WKT();
    var positions = format.writeGeometry(point);
    var username = localStorage.getItem("username");

    var data = {
                "location":positions,
                "username":username
                };
    $.ajax({
        crossDomain: true,
        url: webserviceurl+"manoverboard",
        method: "POST",
        contentType: "application/json",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
        processData: false,
        data: JSON.stringify(data),
        success: function(response) {
            document.getElementById("manoverboard").disabled = false;
            showManHoverBoard();
        },
        error: function(error) {
            document.getElementById("manoverboard").disabled = false;
            alert("Error to add manoverboard");
        },
        failure: function(failure) {
            document.getElementById("manoverboard").disabled = false;
            alert("Failure to add manoverboard");
        }
    });
}

function deleteManOverBoard(){

    var username = localStorage.getItem("username");
    $.ajax({
        crossDomain: true,
        url: webserviceurl+"manoverboard/"+username,
        method: "DELETE",
        contentType: "application/json",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
        processData: false,
        success: function(response) {
            addManOverBoardMarker.setPosition(undefined);
        },
        error: function(error) {
            alert("Error to delete manoverboard");
        },
        failure: function(failure) {
            alert("Failure to delete manoverboard");
        }
    });
}

function showManHoverBoard(){
   var username = localStorage.getItem("username");
   $.ajax({
        crossDomain: true,
        url: webserviceurl+"manoverboard/"+username,
        method: "GET",
        contentType: "application/json",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
        processData: false,
        success: function(response) {
        if(response.location){
            var coordFinder = /\(\s?(\S+)\s+(\S+)\s?\)/g;
            var allMatches = coordFinder.exec(response.location);
            var lon = parseFloat(allMatches[1]);
            var lat = parseFloat(allMatches[2]);
            var location = ol.proj.transform([lon, lat], prj2, prj1);
            addManOverBoardMarker.setPosition(location);
        }
        },
        error: function(error) {
             console.log("Error to get manoverboard");
        },
        failure: function(failure) {
             console.log("Failure to get manoverboard");
        }
    });
}