var userdetailsJSONObj = [];
var useridsarray = [];
var isfieldenable = false;
var CurrentGPSPositionNotification;

$(document).ready(function () {

    $(".accordion").delegate(".toggles", "click", function (e) {
        e.preventDefault();

        var $this = $(this);
        $(".inner").slideUp();
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().find('.inner').removeClass('show');
            $this.parent().find('.inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });

    //Get all users details to show emailid suggestions in Notifications popup
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": webserviceurl + "usernames",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        }
    };

    $.ajax(settings).done(function (response) {
        // alert(response)
        if (response) {
            userdetailsJSONObj = response;
        } else {
            jAlert("Failed to get user ids", 'Notifications');
        }
    }).fail(function (data) {
        //  alert(JSON.stringify(data));
    });

    // Creating an array with all users email ids

    for (var i = 0; i < userdetailsJSONObj.length; i++) {
        var loggedinUsername = localStorage.getItem("username");
        if (userdetailsJSONObj[i] != loggedinUsername)
            useridsarray.push(userdetailsJSONObj[i]);
    }

    autocomplete(document.getElementById("noteemailid"), useridsarray);
    document.addEventListener("deviceready", getLocationOfDevice, false);
    // document.addEventListener("resume", onResume, false);
});

function getLocationOfDevice() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPositionForNotification, onError, {
            timeout: 15000,
            enableHighAccuracy: true
        });
    }
}

function onResume() {
    /*    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                 var lon = parseFloat(position.coords.longitude).toFixed(4);
                 var lat = parseFloat(position.coords.latitude).toFixed(4);
              //   map.getView().setZoom(13);
              //   map.getView().setCenter(ol.proj.transform([parseFloat(lon), parseFloat(lat)],prj2, prj1));
            }, onError, {
                timeout: 15000,
                enableHighAccuracy: true
            });
        }*/
}

function getPositionForNotification(position) {
    $("#gpssignal").hide();
    var lon = parseFloat(position.coords.longitude).toFixed(4);
    var lat = parseFloat(position.coords.latitude).toFixed(4);
    CurrentGPSPositionNotification = [parseFloat(lon), parseFloat(lat)];
    getNotifications();
    var updateNotifications = setInterval(getNotifications(), 300000);
}

function getNotifications() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": webserviceurl + "notifications/?recipientname=" + localStorage.getItem("username"),
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
        "processData": false
    };

    $.ajax(settings).done(function (response) {
        if (response && response.length > 0) {
            notificationsArray = response;
            var list = response;
            var notificationlist = "";
            var point = turf.point(CurrentGPSPositionNotification);
            var NotificationFilterVal = document.getElementById("notification_buffervalue").value;
            var buffered = turf.buffer(point, NotificationFilterVal / 111, {
                units: 'kilometers'
            });
            var notificationcount = 0;
            for (var j = 0; j < list.length; j++) {
                var date = new Date(list[j].lastupdate);
                var dates = date.customFormat("#DD#/#MMM#/#YY# #hh#:#mm#:#ss#");
                var coordFinder = /\(\s?(\S+)\s+(\S+)\s?\)/g;
                var allMatches = coordFinder.exec(list[j].location);
                var lon = parseFloat(allMatches[1]);
                var lat = parseFloat(allMatches[2]);
                var location = "Lat: " + lat + " Lon: " + lon;
                var cordinate_arry = [lon, lat];
                if (turf.inside(turf.point(cordinate_arry), turf.polygon(buffered.features[0].geometry.coordinates))) {

                    if (list[j].readstatus) {

                    } else {
                        notificationcount++;
                    }

                    notificationlist += '<li class="list-group-item p-0 rounded-0 border-0">';
                    if (list[j].readstatus) {
                        notificationlist += '<div class="media border p-1 toggles" style="border: 1px solid #2c3e50!important;">';
                    } else {
                        notificationlist += '<div class="media border p-1 toggles unreadnotification" style="border: 1px solid #2c3e50!important;" onclick="changeNotificationReadStatus(' + list[j].id + ',' + list[j].readstatus + ',this)">';
                    }
                    notificationlist += '<img src="' + webserviceurl + "users/" + list[j].username + "/profilepic" + '" alt="PIC" class="mr-2 rounded-circle avatar_width">' +
                        '<div class="media-body" style="position:relative;">' +
                        '<h6 class="mb-0 notih6_font" style="position:relative;">' + list[j].username + '<small style="position:absolute; right:20px; top:0px;"><i>' + dates + '</i></small></h6>' +
                        '<p class="mb-1 font_size_mediacont"><small>' + list[j].message.substring(0, 10) + '...</small></p>' +
                        '<img src="images/line-menu.png" alt="John Doe" class="line_img_width"> </div> </div>' +
                        '<div class="inner"  style="border:1px solid #b2cde8; background-color:#deeeff;">' +
                        '<div class="media mx-3 py-1" style="border-bottom:1px solid #b2cde8;">' +
                        '<span class="mr-3 ml-1" style="color:#2c3e50;"><i class="fa fa-map-marker" aria-hidden="true"></i></span>' +
                        '<div class="media-body noti_font">' +
                        '<span onclick="zoomToLocation(' + lon + ',' + lat + ')">' + location + '</span>' +
                        '</div></div>' +
                        '<div class="card-body py-2">' + list[j].message + '</div> </div> </li>';
                }
            }

            $("#accordion_notifications").html(notificationlist);
            $("#notificationbadge").html(notificationcount);
            if (notificationcount > 0) {
                $("#notificationbadge").css('display', 'block');
            }
        }
    });
}

Date.prototype.customFormat = function (formatString) {
    var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
    YY = ((YYYY = this.getFullYear()) + "").slice(-2);
    MM = (M = this.getMonth() + 1) < 10 ? ('0' + M) : M;
    MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
    DD = (D = this.getDate()) < 10 ? ('0' + D) : D;
    DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][this.getDay()]).substring(0, 3);
    th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) == 1) ? 'st' : (dMod == 2) ? 'nd' : (dMod == 3) ? 'rd' : 'th';
    formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
    h = (hhh = this.getHours());
    if (h == 0) h = 24;
    if (h > 12) h -= 12;
    hh = h < 10 ? ('0' + h) : h;
    hhhh = hhh < 10 ? ('0' + hhh) : hhh;
    AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase();
    mm = (m = this.getMinutes()) < 10 ? ('0' + m) : m;
    ss = (s = this.getSeconds()) < 10 ? ('0' + s) : s;
    return formatString.replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
};

function sendNotification() {

    var sendTo = 'ALL';
    var enteredUsername = document.getElementById("noteemailid").value;
    var message = $("#message").val();
    var usernameOfenteredUserId = [];
    var userfound = false;
    if (localStorage.getItem('username') != enteredUsername) {
        if (enteredUsername == "") {
            sendTo = 'ALL';
            usernameOfenteredUserId = [];
            userfound = true;
        } else if (enteredUsername != "") {
            for (var i = 0; i < userdetailsJSONObj.length; i++) {
                if (userdetailsJSONObj[i] == enteredUsername) {
                    usernameOfenteredUserId.push(userdetailsJSONObj[i]);
                    userfound = true;
                }
            }
            sendTo = 'SINGLE';
        }


        if (userfound) {

            if (message.length >= 5) {
                var expiry = parseInt($("#message_expiry").val());

                var data = {
                    "recipients": usernameOfenteredUserId,
                    "username": localStorage.getItem("username"),
                    "location": CurrentPosition,
                    "messageexpiry": expiry,
                    "message": message,
                    "sendTo": sendTo
                };

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": webserviceurl + "notifications",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json",
                        "cache-control": "no-cache",
                        "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
                    },
                    "processData": false,
                    "data": JSON.stringify(data)
                };

                $.ajax(settings).done(function (response) {
                    if (response) {
                        $("#feedbackform_enable").modal('hide');
                        jAlert("Notification posted successfully", "Notifications");
                        getNotifications();
                    } else {
                        $("#feedbackform_enable").modal('hide');
                        jAlert("Failed to post notification", "Notifications");
                    }
                }).fail(function (response) {
                    console.log(' in error');
                    jAlert(response.responseJSON.message, "Notifications");
                });
                /*.error(function(error) {
                                console.log(' in error');
                                jAlert(error.responseJSON.message,"Notifications");
                            })
                .failure(function(failure) {
                                console.log(' in failure');
                                jAlert(failure.responseJSON.message,"Notifications");
                            });*/
            } else {
                jAlert("Please enter a minimum of 5 characters", "Notifications");
            }
        } else {
            jAlert("Please select a valid username", "Notifications");
        }
    } else {
        jAlert("User is not a valid Recipient", "Notifications");
    }
}

function showtextbox() {

    if (isfieldenable == false) {
        $("#notificationtextfielddiv").css("display", "block");
        isfieldenable = true
    } else {
        $("#notificationtextfielddiv").css("display", "none");
        isfieldenable = false
    }
}

function closetoggle() {
    isfieldenable = false
    $("#notificationtextfielddiv").css("display", "none");
}

function changeNotificationReadStatus(id, readstatus, element) {
    if (readstatus) {

    } else if ($(element).hasClass('unreadnotification')) {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": webserviceurl + "notifications/" + id + "/notifiers/" + localStorage.getItem("username"),
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
            },
            "processData": false
        };

        $.ajax(settings).done(function (response) {
            if (response) {
                var currentNotificationCount = parseInt($("#notificationbadge").html()) - 1;
                if (currentNotificationCount > 0) {
                    $("#notificationbadge").css('display', 'block');
                    $("#notificationbadge").html(currentNotificationCount);
                } else {
                    $("#notificationbadge").css('display', 'none');
                }
                $(element).removeClass('unreadnotification');
            }
        });
    }
}

function zoomToLocation(lon, lat) {
    var location = ol.proj.transform([lon, lat], prj2, prj1);
    map.getView().setCenter(location);
}
//Functions to show username suggestions

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}