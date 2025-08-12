var windowWidth;
var windowHeight;
var map;
var topwidth;
var topheight;
var bottomwidth;
var bottomheight;
var leftwidth;
var leftheight;
var rightwidth;
var rightheight;
var topleftcheight;
var topleftcwidth;
var toprightcheight;
var toprightcwidth;
var bottomleftcheight;
var bottomleftcwidth;
var bottomrightcheight;
var bottomrightcwidth;
var upperRight;
var lowerLeft;
var upperCoordinates;
var lowerCoordinates;
var prj1 = "EPSG:3857";
var prj2 = "EPSG:4326";
var prj3 = "EPSG:900913";
var fileTransfer;
var fileUploadOptions;


$(document).ready(function() {

    if(localStorage.getItem('offlinemapone') == 'true' || localStorage.getItem('offlinemapone') == true){
        $("#availablemap").css('display','block');
    }
    document.addEventListener("deviceready", gotoLocation, false);
    
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    $("#map").css("height", windowHeight - 93);
    topheight = 54;
    bottomheight = 59;
    leftwidth = 10;
    rightwidth = 10;

    bottomwidth = windowWidth - (leftwidth + rightwidth);
    topwidth = windowWidth - (leftwidth + rightwidth);
    leftheight = windowHeight - (topheight + bottomheight);
    rightheight = windowHeight - (topheight + bottomheight);

    topleftcheight = topheight - 44;
    topleftcwidth = leftwidth;
    toprightcheight = topheight - 44;
    toprightcwidth = rightwidth;
    bottomleftcheight = bottomheight - 49;
    bottomleftcwidth = rightwidth;
    bottomrightcheight = bottomheight - 49;
    bottomrightcwidth = leftwidth;

    $("#padding-top").css("height", topheight);
    $("#padding-top").css("width", topwidth);
    $("#padding-top").css("left", leftwidth);
    $("#padding-left").css("width", leftwidth);
    $("#padding-left").css("height", leftheight);
    $("#padding-right").css("width", rightwidth);
    $("#padding-right").css("height", rightheight);
    $("#padding-bottom").css("height", bottomheight);
    $("#padding-bottom").css("width", bottomwidth);
    $("#padding-bottom").css("left", leftwidth);
    $("#padding-left").css("top", topheight);
    $("#padding-right").css("top", topheight);
    $("#top-left").css("height", topleftcheight);
    $("#top-left").css("width", topleftcwidth);
    $("#top-right").css("height", toprightcheight);
    $("#top-right").css("width", toprightcwidth);
    $("#bottom-left").css("height", bottomleftcheight);
    $("#bottom-left").css("width", bottomleftcwidth);
    $("#bottom-right").css("height", bottomrightcheight);
    $("#bottom-right").css("width", bottomrightcwidth);

    var view = new ol.View({
        center: [0,0],
        zoom: 7,
        maxZoom: 12,
        minZoom: 2
    });

    map = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map',
        view: view
    });

    // map.on('moveend', function(event) {
    //     var zoom = map.getView().getZoom();
    //     $("#zoom").html(zoom);
    //     upperRight = map.getCoordinateFromPixel([topwidth + leftwidth, topheight]);
    //     lowerLeft = map.getCoordinateFromPixel([leftwidth, topheight + leftheight]);

    //     var center = ol.proj.transform(map.getView().getCenter(), prj3, prj2);
    //     var extent = map.getView().calculateExtent();

    //     extent = ol.proj.transformExtent(extent,prj3, prj2);
    //     var extentdifference = extent[1] - extent[3];

    //     if(extentdifference<0)
    //         extentdifference = extentdifference * -1;

    //     if (extentdifference >= 2.1 && zoom > 2 && zoom < 12) {

    //         var uppery;
    //         var lowery;

    //         var leftx;
    //         var rightx;

    //         if (center[1] > 0) {
    //             uppery = center[1] + 1;
    //             lowery = center[1] - 1;
    //         } else {
    //             uppery = center[1] - 1;
    //             lowery = center[1] + 1;
    //         }

    //         if (center[0] > 0) {
    //             leftx = center[0] - 0.6;
    //             rightx = center[0] + 0.6;
    //         } else {
    //             leftx = center[0] + 0.6;
    //             rightx = center[0] - 0.6;
    //         }
    //         upperCoordinates = [leftx,uppery];
    //         lowerCoordinates = [rightx,lowery];
    //         var uright = map.getPixelFromCoordinate(ol.proj.transform(upperCoordinates, prj2, prj3));
    //         var lleft = map.getPixelFromCoordinate(ol.proj.transform(lowerCoordinates, prj2, prj3));

    //         var ypixeldifference = uright[1] - lleft[1];
    //         if (ypixeldifference < 0)
    //             ypixeldifference = ypixeldifference * -1;

    //         var xpixeldifferencew = uright[0] - lleft[0];
    //         if (xpixeldifferencew < 0)
    //             xpixeldifferencew = xpixeldifferencew * -1;

    //         var xpixeldifferenceh = uright[1] - lleft[1];
    //         if (xpixeldifferenceh < 0)
    //             xpixeldifferenceh = xpixeldifferenceh * -1;

    //         var topdivheight = (windowHeight - ypixeldifference) / 2;
    //         var leftdivheight = xpixeldifferenceh;
    //         var centerdivwidth = xpixeldifferencew;
    //         var cornerdivwidth = (windowWidth - centerdivwidth) / 2;

    //         topwidth = xpixeldifferencew;
    //         leftwidth = cornerdivwidth;
    //         topheight = topdivheight;
    //         leftheight = leftdivheight;

    //         $("#padding-top").css("height", topdivheight - 44);
    //         $("#padding-top").css("margin-top", 44);
    //         $("#padding-top").css("width", centerdivwidth);
    //         $("#padding-top").css("left", cornerdivwidth);
    //         $("#padding-left").css("width", cornerdivwidth);
    //         $("#padding-left").css("height", leftdivheight);
    //         $("#padding-right").css("width", cornerdivwidth);
    //         $("#padding-right").css("height", leftdivheight);
    //         $("#padding-bottom").css("height", topdivheight - 49);
    //         $("#padding-bottom").css("margin-bottom", 49);
    //         $("#padding-bottom").css("width", centerdivwidth);
    //         $("#padding-bottom").css("left", cornerdivwidth);
    //         $("#padding-left").css("top", topdivheight);
    //         $("#padding-right").css("top", topdivheight);

    //         $("#top-left").css("height", topdivheight - 44);
    //         $("#top-left").css("margin-top", 44);
    //         $("#top-left").css("width", cornerdivwidth);
    //         $("#top-right").css("height", topdivheight - 44);
    //         $("#top-right").css("margin-top", 44);
    //         $("#top-right").css("width", cornerdivwidth);
    //         $("#bottom-left").css("height", topdivheight - 49);
    //         $("#bottom-left").css("margin-bottom", 49);
    //         $("#bottom-left").css("width", cornerdivwidth);
    //         $("#bottom-right").css("height", topdivheight - 49);
    //         $("#bottom-right").css("margin-bottom", 49);
    //         $("#bottom-right").css("width", cornerdivwidth);
    //     }
    // });


    map.on('moveend', function(event) {
        var zoom = map.getView().getZoom();
        $("#zoom").html(zoom);
        upperRight = map.getCoordinateFromPixel([topwidth + leftwidth, topheight]);
        lowerLeft = map.getCoordinateFromPixel([leftwidth, topheight + leftheight]);

        var center = ol.proj.transform(map.getView().getCenter(), prj3, prj2);
        var extent = map.getView().calculateExtent();

        extent = ol.proj.transformExtent(extent,prj3, prj2);
        var extentdifference = extent[1] - extent[3];

        if(extentdifference<0)
            extentdifference = extentdifference * -1;

        if (extentdifference >= 2.1 && zoom > 2 && zoom < 12) {

            var uppery, lowery, leftx, rightx;

            // Define a latitude and longitude offset
            var latOffset = 1;
            var lonOffset = 0.6;

             // Calculate the upper and lower latitudes
                var uppery = Math.min(90, center[1] + latOffset); // Ensure latitude is within [-90, 90]
                var lowery = Math.max(-90, center[1] - latOffset); // Ensure latitude is within [-90, 90]

                // Calculate the left and right longitudes
                leftx = center[0] - lonOffset;
                rightx = center[0] + lonOffset;
                // Handle longitude wrapping
                    if (leftx < -180) leftx += 360;
                    if (rightx > 180) rightx -= 360;

                    upperCoordinates = [rightx, uppery];
                    lowerCoordinates = [leftx, lowery];
            var uright = map.getPixelFromCoordinate(ol.proj.transform(upperCoordinates, prj2, prj3));
            var lleft = map.getPixelFromCoordinate(ol.proj.transform(lowerCoordinates, prj2, prj3));

            var ypixeldifference = Math.abs(uright[1] - lleft[1]);
            if (ypixeldifference < 0)
                ypixeldifference = ypixeldifference * -1;

            var xpixeldifferencew = Math.abs(uright[0] - lleft[0]);
            if (xpixeldifferencew < 0)
                xpixeldifferencew = xpixeldifferencew * -1;

            var xpixeldifferenceh = Math.abs(uright[1] - lleft[1]);
            if (xpixeldifferenceh < 0)
                xpixeldifferenceh = xpixeldifferenceh * -1;

            var topdivheight = (windowHeight - ypixeldifference) / 2;
            var leftdivheight = xpixeldifferenceh;
            var centerdivwidth = xpixeldifferencew;
            var cornerdivwidth = (windowWidth - centerdivwidth) / 2;

            topwidth = xpixeldifferencew;
            leftwidth = cornerdivwidth;
            topheight = topdivheight;
            leftheight = leftdivheight;

            $("#padding-top").css("height", topdivheight - 44);
            $("#padding-top").css("margin-top", 44);
            $("#padding-top").css("width", centerdivwidth);
            $("#padding-top").css("left", cornerdivwidth);
            $("#padding-left").css("width", cornerdivwidth);
            $("#padding-left").css("height", leftdivheight);
            $("#padding-right").css("width", cornerdivwidth);
            $("#padding-right").css("height", leftdivheight);
            $("#padding-bottom").css("height", topdivheight - 49);
            $("#padding-bottom").css("margin-bottom", 49);
            $("#padding-bottom").css("width", centerdivwidth);
            $("#padding-bottom").css("left", cornerdivwidth);
            $("#padding-left").css("top", topdivheight);
            $("#padding-right").css("top", topdivheight);

            $("#top-left").css("height", topdivheight - 44);
            $("#top-left").css("margin-top", 44);
            $("#top-left").css("width", cornerdivwidth);
            $("#top-right").css("height", topdivheight - 44);
            $("#top-right").css("margin-top", 44);
            $("#top-right").css("width", cornerdivwidth);
            $("#bottom-left").css("height", topdivheight - 49);
            $("#bottom-left").css("margin-bottom", 49);
            $("#bottom-left").css("width", cornerdivwidth);
            $("#bottom-right").css("height", topdivheight - 49);
            $("#bottom-right").css("margin-bottom", 49);
            $("#bottom-right").css("width", cornerdivwidth);
        }
    });

});
function downLoadTiles() {
if(localStorage.getItem('offlinemapone') == 'true' || localStorage.getItem('offlinemapone') == true){
 jConfirm('File Replacing with new chart data?', 'Alert', function(confirmed) {
            if (confirmed) {
               downLoadTilesOne();
            }
        });
}
else{
downLoadTilesOne();

}
}
// function downLoadTilesOne() {

 
//     var username = localStorage.getItem("username");
   
//     // var bbox = 'bbox='+ 95.7169 +
//     //            ','+ 26.6992 +
//     //            ','+ -94.5169 +
//     //            ','+ 28.6992 +
//     //            '&zoom=' + 12;

//     var bbox = 'bbox='+ -80.7559 +
//                ','+ 24.7963 +
//                ','+ -79.5559 +
//                ','+ 26.7963 +
//                '&zoom=' + 9;
// //    var bbox = 'bbox='+ lowerCoordinates[0].toFixed(4) +
// //                ','+ lowerCoordinates[1].toFixed(4) +
// //                ','+ upperCoordinates[0].toFixed(4) +
// //                ','+ upperCoordinates[1].toFixed(4) +
// //                '&zoom=' + parseInt(map.getView().getZoom());
               
//     var url = webserviceurl +"vectortiling?" + bbox + "&username="+localStorage.getItem("username");
//     var uri = encodeURI(url);
//     const fileDirectory = cordova.file.externalDataDirectory; // Persistent storage on Android
//     const fileName = `${username}.zip`;
//     const fileURL = `${fileDirectory}${fileName}`;
//     //var fileURL =  'cdvfile://localhost/persistent/Android/data/com.iict.naavic/NaAVIC/OfflineMap/'+localStorage.getItem("username")+".zip";
//     $("#downloadingprogress").html("Downloading");
//     $("#downloadstatus").css("display",'block');
//     $(".fa-spinner").css('display','block');
//     $("#one").css("z-index", "3");
//     console.log(uri);
    
//     fileTransfer.download( url, fileURL, function(entry) {
//         console.log("download complete: " + entry.toURL());
//         $("#downloadingprogress").html("Downloaded. Prepairing..");
//         document.addEventListener("deviceready", unzipFiles, false);
//     },
//     function(error) {
//         console.log("download error source " + error.source);
//         console.log("download error target " + error.target);
//         console.log("download error code" + error.code);
//         $(".fa-spinner").css('display','none');
//         $("#downloadingprogress").html("Error to download");
//         var obj = JSON.parse(error.body);
//         jAlert(obj.message,"Download Map");
//         $("#downloadstatus").css("display",'hidden');
//     },
//         true,
//     {
//         headers: { "Authorization" : "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))}
//     }
//     );
// }
// function unzipFiles(){

//     //var ZipPath = 'cdvfile://localhost/persistent/Android/data/com.iict.naavic/NaAVIC/OfflineMap/'+localStorage.getItem("username")+'.zip';
//     // Path of the destination folder
//     //var ZipExtractDirectory = 'cdvfile://localhost/persistent/Android/data/com.iict.naavic/NaAVIC/OfflineMap/'+localStorage.getItem("username");
//     var ZipPath = cordova.file.externalDataDirectory+localStorage.getItem("username")+'.zip';
//     var ZipExtractDirectory=cordova.file.externalDataDirectory+localStorage.getItem("username")+'.zip'
//     // Handle the result of the process
//     var StatusCallback = function(status){
//         if(status == 0){
//         $("#downloadingprogress").html("Ready to show");
//         $("#downloadstatus").css("display",'none');
//         localStorage.setItem('offlinemapone',true);
//         $("#availablemap").css('display','block');
//         }else if(status == -1){
//             // Everything is wrong ...
//             console.log('unzip fails');
//         }
//     };

//     // Handle the progress of the decompression
//     var ProgressCallback = function(progressEvent){
//         var percent =  Math.round((progressEvent.loaded / progressEvent.total) * 100);
//         // Display progress in the console : 8% ...
//         console.log("Display progress in the console :"+percent)
//         $("#downloadingprogress").html("Extracting : "+percent);
//     };

//     // Unzip it !
//     window.zip.unzip(ZipPath, ZipExtractDirectory, StatusCallback, ProgressCallback);
// }



function downLoadTilesOne() {

    var bbox = 'bbox='+ lowerCoordinates[0].toFixed(4) +
               ','+ lowerCoordinates[1].toFixed(4) +
               ','+ upperCoordinates[0].toFixed(4) +
               ','+ upperCoordinates[1].toFixed(4) +
               '&zoom=' + parseInt(map.getView().getZoom());

        // var bbox = 'bbox='+ -80.7559 +
        //        ','+ 24.7963 +
        //        ','+ -79.5559 +
        //        ','+ 26.7963 +
        //        '&zoom=' + 9;
    var url = webserviceurl +"vectortiling?" + bbox + "&username="+localStorage.getItem("username");
    var uri = encodeURI(url);
    var fileURL =  cordova.file.externalDataDirectory+localStorage.getItem("username")+".zip";
    $("#downloadingprogress").html("Downloading");
    $("#downloadstatus").css("display",'block');
    $(".fa-spinner").css('display','block');
    $("#one").css("z-index", "3");
    console.log(uri);
    
    fileTransfer.download( uri, fileURL, function(entry) {
        console.log("download complete: " + entry.toURL());
        $("#downloadingprogress").html("Downloaded. Prepairing..");
        document.addEventListener("deviceready", unzipFiles, false);
    },
    function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("download error code" + error.code);
        $(".fa-spinner").css('display','none');
        $("#downloadingprogress").html("Offline data is not available in the selected area");
        var obj = JSON.parse(error.body);
        jAlert(obj.message,"Download Map");
        $("#downloadstatus").css("display",'hidden');
    },
        true,
    {
        headers: { "Authorization" : "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))}
    }
    );
}
function unzipFiles(){

    var ZipPath = cordova.file.externalDataDirectory+localStorage.getItem("username")+'.zip';
    // Path of the destination folder
    
    var ZipExtractDirectory = cordova.file.externalDataDirectory+localStorage.getItem("username");

    // Handle the result of the process
    var StatusCallback = function(status){
        if(status == 0){
        $("#downloadingprogress").html("Ready to show");
        $("#downloadstatus").css("display",'none');
        localStorage.setItem('offlinemapone',true);
        $("#availablemap").css('display','block');
        }else if(status == -1){
            // Everything is wrong ...
        }
    };

    // Handle the progress of the decompression
    var ProgressCallback = function(progressEvent){
        var percent =  Math.round((progressEvent.loaded / progressEvent.total) * 100);
        // Display progress in the console : 8% ...
        $("#downloadingprogress").html("Extracting : "+percent);
    };

    // Unzip it !
    window.zip.unzip(ZipPath, ZipExtractDirectory, StatusCallback, ProgressCallback);
}


// function deleteMap(number){
//     jConfirm('Are you sure want to delete Chart data?', 'Delete Map', function(confirmed) {
//           if (confirmed) {
//             var usernameDirectory = localStorage.getItem("username");
//             console.log(usernameDirectory);
//             window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
//               fileSystem.getDirectory("NaAVIC/OfflineMap", {
//                   create: true
//               }, function(dir) {
//                   console.log(JSON.stringify(dir));
//                   dir.removeRecursively(deletesuccess, deletefail);
//               }, fail);
//             }, fail);
//           }
//     });
// }


function deleteMap(number) {
    var username = localStorage.getItem("username");
    // Define the folder path to the specific user's offline map directory
    var folderpath = cordova.file.externalDataDirectory + username;
    
    jConfirm('Are you sure you want to delete Chart data?', 'Delete Map', function(confirmed) {
        if (confirmed) {
            console.log(username);
            window.resolveLocalFileSystemURL(folderpath, function(fileEntry) {
                console.log("Found the zip folder:", fileEntry.fullPath);
                // Ensure the correct directory is obtained before attempting to delete
                fileEntry.getDirectory(fileEntry.fullPath, {
                    create: false
                }, function(dir) {
                    console.log(JSON.stringify(dir));
                    dir.removeRecursively(deletesuccess, deletefail);
                }, fail);
            }, fail);
        }
    });
}
function deletesuccess(){
    localStorage.removeItem('offlinemapone',false);
    jAlert("Successfully deleted chart data","Delete Map");
    $("#availablemap").css('display','none');
    createUsernameDirectory();
}

function deletefail(error){
    jAlert("Failed to delete chart data"+ JSON.stringify(error),"Delete Map");
}

// function createUsernameDirectory(){
//     var username = localStorage.getItem("username");
//     var folderpath = cordova.file.externalDataDirectory + username;

//     window.resolveLocalFileSystemURL(folderpath, function(fileEntry) {
//         fileEntry.getDirectory(fileEntry.fullPath, {
//                 create: true
//             }, function(dir) {
//                 dir.getDirectory("OfflineMap", {
//                         create: true
//                     }),
//                     function(subdir) {}, fail
//             }, fail);
//     }, fail);

//     var usernameDirectory = localStorage.getItem("username");
//     var folderpath = cordova.file.externalDataDirectory + usernameDirectory;

//     window.resolveLocalFileSystemURL(folderpath, function(fileEntry) {
//         fileEntry.getDirectory(fileEntry.fullPath, {
//             create: true
//         }, function(dir) {
//             dir.getDirectory(usernameDirectory, {
//                     create: true
//                 }),
//                 function(subdir) {}, fail
//         }, fail);
//     }, fail);
// }


function createUsernameDirectory() {
    var username = localStorage.getItem("username");
    if (!username) {
        console.error("Username not found in localStorage");
        return;
    }

    var userFolderPath = cordova.file.externalDataDirectory + username;

    // Ensure the path does not have unintended double slashes
    if (userFolderPath.includes('//')) {
        userFolderPath = userFolderPath.replace('//', '/');
    }

    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(fileSystem) {
        fileSystem.getDirectory(username, { create: true }, function(userDir) {
            console.log("User directory created:", userDir.fullPath);

            // Create the "OfflineMap" subdirectory
            userDir.getDirectory("OfflineMap", { create: true }, function(offlineMapDir) {
                console.log("OfflineMap subdirectory created:", offlineMapDir.fullPath);
            }, function(error) {
                console.error("Failed to create 'OfflineMap' subdirectory:", error);
            });

        }, function(error) {
            console.error("Failed to create user directory:", error);
        });

    }, function(error) {
        console.error("Failed to resolve external data directory:", error);
    });
}




function showOfflineMap(){
   
    var offlinemap='showofflinemap';
    localStorage.setItem('showofflinemap',offlinemap);
    window.location.href='map.html';
}

function fail(error){
    console.log("fail"+error);
}

function getPosition(position) {
    var lon = parseFloat(position.coords.longitude).toFixed(4);
    var lat = parseFloat(position.coords.latitude).toFixed(4);
    map.getView().setCenter(ol.proj.transform([parseFloat(lon), parseFloat(lat)],prj2, prj1));
}

function onError(error) { }

function gotoLocation(){
    fileTransfer = new FileTransfer();
    fileUploadOptions = new FileUploadOptions();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition, onError, {
            timeout: 60000,
            enableHighAccuracy: true
        });
    }
}
