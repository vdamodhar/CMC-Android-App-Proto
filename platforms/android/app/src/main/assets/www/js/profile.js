$(document).ready(function() {
    var username = localStorage.getItem("username");
    $('#EditUserName').val(username);
    $('#txtviewusername').val(username);
    setTimeout(function(){
      updatedata(username);
    }, 2000);
});

function editprofilevalidation() {

    var firstName = $('#EditFirstName').val();
    var lastName = $('#EditLastName').val();
    var username = $('#EditUserName').val();
    var password = $('#EditPassword').val();
    var Country = $('#EditCountry').val();
    var VesselName = $('#EditVesselName').val();
    var VesselModel = $('#EditVesselModel').val();

    if (firstName == '') {
        jAlert("Please enter your first name","Profile");
        return;
    } else if (lastName == '') {
        jAlert("Please enter your last name","Profile");
        return;
    } else
    if (username == '') {
        jAlert("Please enter your username","Profile");
        return;
    } else if (username.length < 6) {
        jAlert("Username should contain a minimum of 6 characters","Profile");
        return;
    }
    else if (Country == 'Default') {
        jAlert("Select your country from the list","Profile");
        return;
    }  else {

        var data = {
            lastName: lastName,
            firstName: firstName,
            username: username,
            email: $('#txtviewemail').val(),
            password: password,
            country: Country,
            vesselmodel: VesselModel,
            vesselname: VesselName,
            userInterestList: Intrests,
            userStatus: 'Active'
        };

        $.ajax({
            crossDomain: true,
            url: webserviceurl + "users",
            method: "PUT",
            contentType: "application/json",
            headers: {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
            },
            processData: false,
            data: JSON.stringify(data),
            success: function(response) {
                if (response = true) {
                    jAlert("Your changes have been saved successfully","Profile");
                    modifyprofile();
                    updatedata(username);
                    $("#editprofile").hide();
                    $("#loginprofile").hide();
                    $("#viewprofile").show();
                } else {
                    jAlert("Failed to save the changes","Profile");
                }
            },
            error: function(error) {
                jAlert(error.responseJSON.message,"Profile");
            },
            failure: function(failure) {
                jAlert(failure.responseJSON.message,"Profile");
            }
        });
    }
}

function updatedata(username) {
    $("#viewprofilepic").attr("src", webserviceurl + "users/" + username + "/profilepic");
    $("#editprofilepic").attr("src", webserviceurl + "users/" + username + "/profilepic");
    $.ajax({
        crossDomain: true,
        url: webserviceurl + "users/" + username,
        method: "GET",
        contentType: "application/json",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        },
        processData: false,
        success: function(response) {
            if (response) {
                $('#EditUserName').val(username);
                if (response.firstName == null) {
                    $('#EditFirstName').val("");

                } else {
                    $('#EditFirstName').val(response.firstName);
                }
                if (response.lastName == null) {
                    $('#EditLastName').val("");

                } else {
                    $('#EditLastName').val(response.lastName);
                }
                if (response.password == null) {
                    $('#EditPassword').val("");

                } else {
                    $('#EditPassword').val(response.password);
                }

                if (response.country == null) {
                     $('#countrydisable').val("Default")

                } else {
                    $('#countrydisable').val(response.country);
                }
                if (response.vesselname == null) {
                    $('#EditVesselName').val("");

                } else {
                    $('#EditVesselName').val(response.vesselname);
                }
                if (response.vesselmodel == null) {
                    $('#EditVesselModel').val("");

                } else {
                    $('#EditVesselModel').val(response.vesselmodel);
                }

                if (response.userInterestList == null) {
                    $('#Interests').val("");

                } else {
                   for(var i=0;i<response.userInterestList.length;i++){
                    var index = getIndexofElement(response.userInterestList[i]);
                    var test = "#editemojielements li:nth-child("+index+")";
                        $(test).addClass('intresSelectClass');
                   }
                   Intrests = response.userInterestList;
                }

                if (response.username == null) {
                    $('#txtviewusername').val("");

                } else {
                    $('#txtviewusername').val(response.username);
                }

                if (response.firstName == null) {
                    $('#txtviewFirstName').val("");
                } else {
                    $('#txtviewFirstName').html(response.firstName);
                }
                if (response.lastName == null) {
                    $('#txtviewLastname').val("");
                } else {
                    $('#txtviewLastname').html(response.lastName);
                }
                if (response.country == null) {
                    $('#EditCountry').val("Default");
                } else {
                    $('#EditCountry').val(response.country);
                }
                if (response.vesselname == null) {
                    $('#txtviewVesselName').val("");
                } else {
                    $('#txtviewVesselName').val(response.vesselname);
                }

                if (response.vesselmodel == null) {
                    $('#txtviewVesselModel').val("");
                } else {
                    $('#txtviewVesselModel').val(response.vesselmodel);
                }
                if (response.userInterestList == null) {
                    $('#txtviewInterests').val("");
                } else {
                     var intrestText = "";
                      $('#viewintrests').html("");
                     for(var i=0;i<response.userInterestList.length;i++){
                     intrestText+= '<li class="shadow-sm emojiroundedbtn"><img src="images/polygonimg/Emoji/'+response.userInterestList[i]+'.svg" class="emoji_imgwidth" /></li>'
                     }
                    $('#viewintrests').html(intrestText);
                }
                if (response.email == null) {
                      $('#txtviewemail').val("");
                      } else {
                      $('#txtviewemail').val(response.email);
                     }
            }
        },
        error: function(error) {
            jAlert(error.responseJSON.message,"Profile");
        },
        failure: function(failure) {
            jAlert(failure.responseJSON.message,"Profile");
        }
    });
}

var Intrests = [];

function addIntrest(element,imagename,index){
    var itemfound = false;
    var pos = 0;

    for(var j = 0; j<Intrests.length;j++){

      if(Intrests[j]==imagename){
        itemfound = true;
        pos = j;
      }
    }
    if(itemfound){
        Intrests.splice(pos, 1);
    }else{
        Intrests.push(imagename);
    }
    $(element).toggleClass("intresSelectClass");
    $("#intrestsTexts").html('<b class="intrestsText">'+imagename+'</b>');
}

var emojis = {
        "fishing":1,
        "jetski":2,
        "kitesurfing":3,
        "paddleboarding":4,
        "sailing":5,
        "sandyachting":6,
        "surfing":7,
        "wakeboarding":8,
        "waterskiing":9
     };

function getIndexofElement(key) {
   if (emojis.hasOwnProperty(key))
      return emojis[key];
}

function inviteFriend(){
window.plugins.socialsharing.share('Download The NaAVIC from play store with below Link https://play.google.com/store/apps/details?id=com.iict.naavic', 'NaAVIC');
}
function DeleteMyAccount(){
    $('#id01').modal('show');
}
function cancelmodal()
{
    $('#id01').modal('hide');
}
function deleteaccount() {
    let id = localStorage.getItem('userid');
    let username = localStorage.getItem("username");
    let apiUrl = webserviceurl + "users/delete?id=" + id + "&username=" + username;

    $.ajax({
        url: apiUrl,
        type: "DELETE",
        success: function(response) {
            jAlert(response, "Profile", function() {
                $('#id01').modal('hide');
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                localStorage.removeItem("userid");
                window.location.href = "map.html";
            });
        },
        error: function(error) {
            console.error(error);
        }
    });
}
