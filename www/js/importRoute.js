var readFileName, readFolderName, readContent;
var isRouteImported = false;

function readRouteFromFileSystem() {
    window.resolveLocalFileSystemURL(folderpath, gotRouteFileSystem, fail);
}

function gotRouteFileSystem(fileSystem) {
    fileSystem.getDirectory(readFolderName, {
        create: true
    }, gotRouteFolder, fail);
}

function gotRouteFolder(dirEntry) {
    dirEntry.getFile(readFileName, {
        create: true,
        exclusive: false
    }, gotRouteFile, fail);
}

function gotRouteFile(fileEntry) {
    if(drawStatus ){
        getRouteFilePath(fileEntry);
         $("#filebrowserwindow").hide();
    }else{

    fileEntry.file(function(file) {
        var reader = new FileReader();
        reader.onloadend = function() {
          //  console.log("Successful file read: " + this.result);
        readContent = this.result;
        setTimeout(function() {
            if (readFileName.includes(".rtz")) {
                convertXMLToJSON(readContent);
                window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
                    fileSystem.getDirectory("NaAVIC/Routes", {
                        create: true
                    }, function(dirEntry) {
                        fileEntry.copyTo(dirEntry, readFileName, function(res) {
                              //  console.log('copying was successful to: ' + res.nativeURL)
                            },
                            function() {
                             //   console.log('unsuccessful copying')
                        })
                    }, fail);
                }, fail);
            } else if (readFileName.includes(".kml")) {
                convertKMLToJSON(readContent);
                window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
                    fileSystem.getDirectory("NaAVIC/Routes", {
                        create: true
                    }, function(dirEntry) {
                        fileEntry.copyTo(dirEntry, readFileName, function(res) {
                             //   console.log('copying was successful to: ' + res.nativeURL)
                            },
                            function() {
                            //    console.log('unsuccessful copying')
                        })
                    }, fail);
                }, fail);
            } else {
                jAlert("Select a valid route file to import", "Import Route");
            }
        }, 100);
        };
        reader.readAsText(file);
    });
    }
}

function fail(error) {
    console.log("error" + error.code)
}

function convertXMLToJSON(xmldoc) {

    var parser = new DOMParser();
    var doc = parser.parseFromString(xmldoc, "application/xml");
    var waypoints = doc.getElementsByTagName("waypoint");
    for (var i = 0; i < wpMarkersArr.length; i++) {
        wpMarkersArr[i].setPosition(undefined);
    }
    wpArr = [];
    wpMarkersArr = [];

    for (var i = 0; i < waypoints.length; i++) {
        var wpObject = new wayPoint();
        var waypointid = waypoints[i].getAttribute("id");
        var waypointname = waypoints[i].getAttribute("name");
        var waypointradius = waypoints[i].getAttribute("radius");
        var lat = parseFloat(waypoints[i].getElementsByTagName("position")[0].getAttribute("lat"));
        var lon = parseFloat(waypoints[i].getElementsByTagName("position")[0].getAttribute("lon"));
        var speed = waypoints[i].getElementsByTagName("leg")[0].getAttribute("speedMin");
        var xtr = waypoints[i].getElementsByTagName("leg")[0].getAttribute("StarboardXTD");
        var xtl = waypoints[i].getElementsByTagName("leg")[0].getAttribute("PortXTD");

        if (speed == null || speed == "null" || speed == undefined || speed == "undefined")
            speed = 10;

        if (waypointradius == null || waypointradius == "null" || waypointradius == undefined || waypointradius == "undefined")
            waypointradius = 10;

        if (xtr == null || xtr == "null" || xtr == undefined || xtr == "undefined")
            xtr = 0.01;

        if (xtl == null || xtl == "null" || xtl == undefined || xtl == "undefined")
            xtl = 0.01;

        wpObject.id = parseInt(waypointid);
        wpObject.name = waypointname;
        wpObject.coordinates = [lat, lon];
        wpObject.speed = parseFloat(speed);
        wpObject.trn = parseFloat(waypointradius);
        wpObject.xtl = xtl;
        wpObject.xtr = xtr;
        wpArr.push(wpObject);
    }

    for (var index = 1; index < wpArr.length; index++) {
        createWPMarker(index);
    }

    map.getView().rotate(0);
    rotateCompass();
    wpList();
    rearrangeWPMarkers();
    drawWpRoute();
    var ext = routeLineLayer.getSource().getExtent();
    map.getView().fit(ext, map.getSize());
    isRouteImported = true;
    isRouteModified = false;
    routeFileName = readFileName;
    $("#filebrowserwindow").hide();
    $("#importrouteicon").show();
    $("#reverserouteicon").show();
    $("#clearrouteicon").show();
    if(drawStatus){
        $("#importrouteicon").hide();
        $("#reverserouteicon").hide();
        $("#clearrouteicon").hide();
        $("#exportrouteicon").hide();
    }
}

function convertKMLToJSON(xmldoc) {

    for (var i = 0; i < wpMarkersArr.length; i++) {
        wpMarkersArr[i].setPosition(undefined);
    }
    wpArr = [];
    wpMarkersArr = [];

    var vectorSource = new ol.source.Vector({
        features: (new ol.format.KML()).readFeatures(xmldoc)
    });

    var ln = vectorSource.getFeatures().length;

    for (var i = 0; i < ln; i++) {

        var wpObject = new wayPoint();
        wpObject.id = parseInt(i);
        wpObject.name = "Waypoint";
        wpObject.coordinates = vectorSource.getFeatures()[i].getGeometry().getCoordinates();
        wpObject.speed = vectorSource.getFeatures()[i].getProperties().speed;
        wpObject.trn = vectorSource.getFeatures()[i].getProperties().trn;
        wpObject.xtl = vectorSource.getFeatures()[i].getProperties().xtl;
        wpObject.xtr = vectorSource.getFeatures()[i].getProperties().xtr;
        wpArr.push(wpObject);
    }

    for (var index = 1; index < wpArr.length; index++) {
        createWPMarker(index);
    }

    map.getView().rotate(0);
    rotateCompass();
    wpList();
    rearrangeWPMarkers();
    drawWpRoute();
    var ext = routeLineLayer.getSource().getExtent();
    map.getView().fit(ext, map.getSize());
    isRouteImported = true;
    isRouteModified = false;
    routeFileName = readFileName;
    $("#filebrowserwindow").hide();
    $("#importrouteicon").show();
    $("#reverserouteicon").show();
    $("#clearrouteicon").show();
    if(drawStatus){
        $("#importrouteicon").hide();
        $("#reverserouteicon").hide();
        $("#clearrouteicon").hide();
        $("#exportrouteicon").hide();
    }
}