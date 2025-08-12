var trackLayer, trackLineLayer;
var trackVector, trackLineVector;
var trackonMap = false;

function readTrackFromFileSystem() {
    window.resolveLocalFileSystemURL(folderpath, gotTrackFileSystem, fail);
}

function gotTrackFileSystem(fileSystem) {
    fileSystem.getDirectory(readFolderName, {
        create: true
    }, gotTrackFolder, fail);
}

function gotTrackFolder(dirEntry) {
    dirEntry.getFile(readFileName, {
        create: true,
        exclusive: false
    }, gotTrackFile, fail);
}

function gotTrackFile(fileEntry) {
    if(drawStatus){
       getRouteFilePath(fileEntry);
       $("#filebrowserwindow").hide();
    }else{
    fileEntry.file(function(file) {
        var reader = new FileReader();
        reader.onloadend = function() {
            readContent = this.result;
            setTimeout(function() {
                if (readFileName.includes(".geojson")) {
                    loadTrackOnMap(readContent);
                    window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
                        fileSystem.getDirectory("NaAVIC/Tracks", {
                            create: true
                        }, function(dirEntry) {
                            fileEntry.copyTo(dirEntry, trackFileName, function(res) {
                                   //  console.log('copying was successful to: ' + res.nativeURL)
                                },
                                function() {
                                   //   console.log('unsuccessful copying')
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

function loadTrackOnMap(readContent) {
    clearTrack();
    var trackStyle = new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: '#0000ff'
            })
        })
    });
    var format = new ol.format.GeoJSON({
        "dataProjection": prj2,
        "featureProjection": prj3
    });

    var features = format.readFeatures(readContent);
    trackVector = new ol.source.Vector({
        features: features
    });

    var pointCoordinates = [];
    for (var j = 0; j < features.length; j++) {
        pointCoordinates.push(features[j].getGeometry().getCoordinates());
    }
    var lineString = new ol.geom.LineString(pointCoordinates);

    var feature = new ol.Feature({
        geometry: lineString,
        name: 'Line'
    });

    trackLineVector = new ol.source.Vector({
        features: [feature]
    });

    trackLineLayer = new ol.layer.Vector({
        source: trackLineVector,
        style: trackStyle
    });

    trackLayer = new ol.layer.Vector({
        source: trackVector,
        style: trackStyle
    });

    map.addLayer(trackLayer);
    map.addLayer(trackLineLayer);
    trackonMap = true;
    var ext = trackLayer.getSource().getExtent();
    map.getView().fit(ext, map.getSize());
    $("#filebrowserwindow").hide();
    $("#exportrouteicon").hide();
    $("#reverserouteicon").hide();
    $("#clearrouteicon").show();
    dMarker.setPosition(undefined);
    if(drawStatus){
        $("#importrouteicon").hide();
        $("#reverserouteicon").hide();
        $("#clearrouteicon").hide();
        $("#exportrouteicon").hide();
    }
}

function clearTrack() {
    if (trackLayer) {
        map.removeLayer(trackLayer);
        map.removeLayer(trackLineLayer);
    }
    trackonMap = false;

    if (routeStatus && !trackonMap)
    redrawDefaultWPandTrash();

    $("#exportrouteicon").hide();
    $("#reverserouteicon").hide();
    $("#clearrouteicon").hide();
    $("#importrouteicon").show();

}