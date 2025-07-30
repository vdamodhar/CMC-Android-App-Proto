//regex for email id
var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//password between 6 to 20 characters which contain at least one numeric digit, one uppercase, and one lowercase letter
var pwdReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
var networkState = true;
function CheckCredentials() {
    
    var username = $('#UserName').val();
    var password = $('#Password').val();

    if(username =="" && password ==""){
        jAlert("Please enter your login credentials", "Login");
    }else if(username==""){
        jAlert("Please enter your username", "Login");
    }else if(username.length<6){
        jAlert("Username should contain a minimum of 6 characters", "Login");
    }else if( /[^a-zA-Z0-9\-\/]/.test( username )) {
        jAlert("Username should not contain special characters","Login");
    }else if(password==""){
        jAlert("Please enter your password","Login");
    }else if(!pwdReg.test(password)){
        jAlert("Please enter a valid password","Login");
    }else if(checkConnection()){

    var data = {
        "username": username,
        "password": password
    };

    $("#login").prop('disabled', true);
    $("#login").css('color', '#ccc');
    $.ajax({
        crossDomain: true,
        url: webserviceurl+"login",
        method: "POST",
        contentType: "application/json",
        async:false,
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "Authorization": "Basic " + btoa(username +":" + password)
        },
        data: JSON.stringify(data),

        success: function(response) {
            console.log("response",response);

            if (response.hasOwnProperty("status")) {
                jAlert("Please enter a valid Credentials","Login");
            } else if (response.hasOwnProperty("username")) {
                localStorage.setItem("username", response.username);
                localStorage.setItem('userid',response.userId);
                localStorage.setItem("password", password);
               window.location.href = "map.html";
               //$("#loginprofile").hide();
              // li.className = 'layer';
            }
                $("#login").prop('disabled', false);
                $("#login").css('color', '#fff');
        },
        error: function(error) {
            console.log(data);

           if(error.hasOwnProperty("status")){
               if(error.status == 401 || error.status == 404){
                   jAlert("Please enter a valid Credentials","Login");
           }
           }else{
                   jAlert("Failed to login, please try again","Login");
           }
           $("#login").prop('disabled', false);
           $("#login").css('color', '#fff');
        },
        failure: function(failure) {
           if(failure.hasOwnProperty("status")){
           if(failure.status == 401 || failure.status == 404){
               jAlert("Please enter valid Credentials","Login");
           }
           }else{
               jAlert("Failed to Login, Please try again","Login");
           }
           $("#login").prop('disabled', false);
           $("#login").css('color', '#fff');
        }
    });
    }
}

function signupForm() {

    var username = $('#User').val();
    var email = $('#Email_id').val();
    var password = $('#Pwd').val();
     if (username == '') {
        jAlert("Please enter your username","Sign Up");
        return;
    } else if (username.length < 6) {
        jAlert("Username should contain at least 6 characters","Sign Up");
        return;
    }else if( /[^a-zA-Z0-9\-\/]/.test( username ) ) {
        jAlert("Username should not contain special characters","Sign Up");
        return;
    }else if (password == '') {
        jAlert("Please enter your password","Sign Up");
        return;
    } else if (password != '' && !pwdReg.test(password)) {
        jAlert("Password should contain minimum length of 5 characters, at least 1 Uppercase, 1 Lowercase and 1 Digit","Sign Up");
        return;
    } else if (email == '') {
        jAlert("Please enter Email","Sign Up");
        return;
    } else if (email != '' && !emailReg.test(email)) {
        jAlert("Invalid Email","Sign Up");
        return;
    }
    else if(checkConnection()){
        $("#signupEnabled").attr('disabled','disabled');
        var data = {
            username: username,
            email: email,
            password: password,
        };

        $.ajax({
            crossDomain: true,
            url: webserviceurl+"signup",
            method: "POST",
            contentType: "application/json",
            headers: {
                "content-type": "application/json",
                "cache-control": "no-cache"
            },
            processData: false,
            data: JSON.stringify(data),
            success: function(response) {
                if (response = true) {
                    jAlert('You have signed up successfully', 'Sign Up', function(confirmed) {
                       if (confirmed) {
                           //window.location.href = "index.html";
                           $("#RegisterProfile").hide();
                            $("#loginprofile").show();

                       }
                     });
                } else {
                    $("#signupEnabled").removeAttr('disabled');
                    jAlert("Failed to Sign Up","Sign Up");
                }
            },
            error: function(error) {
                $("#signupEnabled").removeAttr('disabled');
                jAlert(error.responseJSON.message,"Sign Up");
            },
            failure: function(failure) {
                $("#signupEnabled").removeAttr('disabled');
                jAlert(failure.responseJSON.message,"Sign Up");
            }
        });
    }
}

$(document).ready(function(){
     document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("offline", function(){ networkState = false }, false);
    document.addEventListener("online", function(){ networkState = true }, false);
    var height = $(window).height();
    $(".bgs").css("height", height);
    $("#termsagreeCheck").click(function(){
        if(this.checked){
            $("#signupEnabled").removeAttr('disabled');
        } else {
            $("#signupEnabled").attr('disabled','disabled');
        }
    });
    document.addEventListener("backbutton", onBackKey, false);
//    if(localStorage.getItem('username') && localStorage.getItem('password')){
//        window.location.href = 'map.html';
//    }else{
//        setTimeout(function(){
//            if(checkConnection()){
//                $.ajax({
//                    crossDomain: true,
//                    url: webserviceurl+"",
//                    method: "GET",
//                    success: function(response) {
//                        if(!response){
//                         jError('Server is temporarily unavailable, please try again later after some time ', 'Error', function(confirmed) {
//                            if (confirmed) {
//                                onBackKey();
//                            }
//                          });
//                        }else{
//                           /* if(localStorage.getItem('username') && localStorage.getItem('password')){
//                                window.location.href = 'map.html';
//                            }*/
//                        }
//                    },
//                    error: function(error) {
//                        jError('Server is temporarily unavailable, please try again later after some time', 'Error', function(confirmed) {
//                            if (confirmed) {
//                                onBackKey();
//                            }
//                        });
//                    },
//                    failure: function(failure) {
//                        jError('Server is temporarily unavailable, please try again later after some time', 'Error', function(confirmed) {
//                          if (confirmed) {
//                              onBackKey();
//                          }
//                        });
//                    }
//                });
//            }
//        }, 2000);
//        }

    });

function onDeviceReady() {
    if(window.MobileAccessibility){
           window.MobileAccessibility.usePreferredTextZoom(false);
    }
}
function checkConnection() {
    if(networkState){
        return true;
    }else{
        jError('No Internet Connection, Please Turn ON Mobile Data / Wifi', 'Login', function(confirmed) { });
        return false;
    }
}

function onBackKey() {

  if (navigator.app) {
      navigator.app.exitApp();
  } else if (navigator.device) {
      navigator.device.exitApp();
  } else {
      window.close();
  }
}

function showresetpopup(){
    $("#fusername").val('');
    $("#forgotsubmit").prop('disabled', false);
    $("#forgotsubmit").css('color', '#fff');
    $("#forgotmask").css('display','block');
    $("#forgotpassword").css('display','block');
}

function closeForgotpopup(){
    $("#fusername").val('');
    $("#forgotmask").css('display','none');
    $("#forgotpassword").css('display','none');
}

function resetPassword(){

   var username = $("#fusername").val();
   if(username==""){
           jAlert("Please enter your username", "Reset Password");
   }else if(username.length<6){
           jAlert("Username should contain a minimum of 6 characters", "Reset Password");
   }else if( /[^a-zA-Z0-9\-\/]/.test( username )) {
           jAlert("Username should not contain special characters","Reset Password");
   }else{
        $("#forgotsubmit").prop('disabled', true);
        $("#forgotsubmit").css('color', '#ccc');
        $.ajax({
            crossDomain: true,
            contentType: "application/json",
            url: webserviceurl+"resetpassword?userName="+username,
            method: "POST",
            success: function(response) {
                if (response == true) {
                    closeForgotpopup();
                    jAlert("Reset password link has been successfully sent to Registered email","Reset Password");
                }
            },
            error: function(error) {
                 $("#forgotsubmit").prop('disabled', false);
                  $("#forgotsubmit").css('color', '#fff');
                 jAlert("Username not found, Please enter a valid username","Reset Password");
            },
            failure: function(failure) {
                 $("#forgotsubmit").prop('disabled', false);
                  $("#forgotsubmit").css('color', '#fff');
                 jAlert("Username not found, Please enter a valid username","Reset Password");
            }
        });
   }
}


function passwordTooltip() {
    var popup1 = document.getElementById("myPopup");
    popup1.classList.toggle("show");
}

function usernameTooltip() {
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.toggle("show");
}

function removeTooltip(){
    var popup1 = document.getElementById("myPopup");
    popup1.classList.remove("show");
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.remove("show");
}
