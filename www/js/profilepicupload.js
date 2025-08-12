$(document).ready(function(){
    $("#layoutphotofile").change(function(){
    	var file = document.getElementById('layoutphotofile');
    	uploadImage(file.files[0]);
    });
    $("#layoutphotocam").click(function(){
         navigator.camera.getPicture(onSuccess, cfail, { quality: 20, destinationType: Camera.DestinationType.FILE_URI });
    });
});

   function onSuccess(imageData) {
      var image = document.getElementById('editprofilepic');
      image.src = imageData;
      window.resolveLocalFileSystemURL(imageData,  onResolveSuccess , fail);
   }

   function cfail(error){
        console.log("error"+JSON.stringify(error))
   }

function onResolveSuccess(fileEntry) {
     var username = localStorage.getItem("username");
     var postUrl = webserviceurl + "users/" + username + "/profilepic";
     var fileURL = fileEntry.toURL();
    
     var success = function (r) {
        jAlert(" Profile picture has been updated successfully","Profile");
        $("#viewprofilepic").attr("src", webserviceurl + "users/" + username + "/profilepic");
        $("#editprofilepic").attr("src", webserviceurl + "users/" + username + "/profilepic");
     }

     var fail = function (error) {
         jAlert("Failed to upload profile picture","Profile");
     }

     var options = new FileUploadOptions();
     options.fileKey = "file";
     options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
     options.mimeType = "image/jpg";
     options.headers = { "Authorization" : "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))};
     var ft = new FileTransfer();
     ft.upload(fileURL, encodeURI(postUrl), success, fail, options);
}

function uploadImage(filemodified){
  
    var username = localStorage.getItem("username");
    var serviceurl = webserviceurl + "users/" + username + "/profilepic";
    var form = new FormData();
    form.append("file", filemodified);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": serviceurl,
      "method": "POST",
      "headers": {
        "cache-control": "no-cache",
        "Authorization" : "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {
         jAlert("Profile pic changed Successfully","Profile");
         $("#viewprofilepic").attr("src", webserviceurl + "users/" + username + "/profilepic");
         $("#editprofilepic").attr("src", webserviceurl + "users/" + username + "/profilepic");

    }).fail(function(response){
        jAlert("Error in updating profile pic","Profile");
    });
}