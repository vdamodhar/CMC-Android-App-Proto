var currPath = "";
var currEntry = null;
var folderpath = "";
$(document).ready(function() {
    document.addEventListener("deviceready", createDefaultDirectories, false);
});

if (typeof file_Browser_params == 'undefined')
    file_Browser_params = new Object();

if (typeof file_Browser_params.directory_browser != 'boolean')
    file_Browser_params.directory_browser = false;

if (typeof file_Browser_params.on_folder_select != 'function')
    file_Browser_params.on_folder_select = null;

if (typeof file_Browser_params.on_file_select != 'function')
    file_Browser_params.on_file_select = null;

if (typeof file_Browser_params.on_ok != 'function')
    file_Browser_params.on_ok = null;

function openFileBrowser() {

    $("#filebrowserwindow").css("display", "block");
    getRoutesAndTracks();
}

function getRoutesAndTracks() {

    if (typeof file_Browser_params.initial_folder == 'undefined' ||
        file_Browser_params.initial_folder == null) {
        file_Browser_params.initial_folder = null;
        getRootAndDisplay();
        getRootAndDisplay_Tracks();
    } else {
        getEntries(file_Browser_params.initial_folder);
        getEntries_Tracks(file_Browser_params.initial_folder);
    }
}

function getRootAndDisplay() {
    getRoot(function(dirEntry) {
        try {
            getEntries(dirEntry);
        } catch (err) {
            alertError(err);
        }
    });
}

function getRoot(onGetRoot) {
    if (typeof window.requestFileSystem != 'undefined') {
          window.resolveLocalFileSystemURL(folderpath, function (dir) {
          dir.getDirectory('NaAVIC/Routes', { create: true }, function (dirEntry) {
                    onGetRoot(dirEntry);
            },fail);
             },fail);

//        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
//            if (typeof onGetRoot != 'undefined') {
//                fileSystem.root.getDirectory("NaAVIC/Routes", {
//                    create: true
//                }, function(dir) {
//                    onGetRoot(dir);
//                }, fail);
//            }
//        }, function() {
//            console.log("Error accessing local file system");
//        });
    }
    return null;
}

function upOneLevel() {
    if (currEntry == null)
        return;
    currEntry.getParent(function(parentArg) {
        getEntries(parentArg);
    }, function(error) {
        alert("Error getting parent folder");
    })
}

function getEntries(dirEntry) {
    if (dirEntry == null)
        return;

    currPath = dirEntry.fullPath;
    currEntry = dirEntry;
    $("#curr_folder").html(currPath);
    var dirReader = dirEntry.createReader();
    dirReader.readEntries(function(entries) {
        displayEntries(entries);
    }, function(err) {
        if (typeof err.message != 'undefined')
            err = err.message;
        alert(err);
    });
}

function displayEntries(entriesArray) {
    entriesArray.sort(function(a, b) {
        var str1 = a.name.toLowerCase();
        var str2 = b.name.toLowerCase();
        if (str1 < str2)
            return -1;
        if (str1 > str2)
            return 1;
        return 0;
    });

    $("#fileBrowser_entries").empty();
    var table = $("<table id='file_entry_table'></table>").appendTo("#fileBrowser_entries");

    var row = $("<tr class='file_list_row'><td class='file_icon'><img src=\"images/homefolder.png\" height = '32px' width = '40px'></td><td>..</td></tr>").appendTo(table);
    $(row).click(function(event) {
        upOneLevel();
    });

    for (var i in entriesArray) {
        var isFolder = entriesArray[i].isDirectory;
        var name = entriesArray[i].name;

        if (file_Browser_params.directory_browser && !isFolder)
            continue;

        var row = $("<tr class='file_list_row'></tr>").appendTo(table);
        $(row).data("entry", entriesArray[i]);
        if(name == ""){

        }
        else{
          $("<td class='file_icon'>" + (isFolder ? '<img src=\"images/folder_normal.png\" height = \"32px\" width = \"32px\" >' : '<img src=\"images/file_icon.png\" height = \"32px\" width = \"32px\" >') + "</td>").appendTo(row);
          $("<td class='file_name'>" + name + "</td>").appendTo(row);

          $(row).on('click', function(event) {

              var entryData = $(this).data("entry");
              if (entryData.isDirectory) {
                  if (file_Browser_params.on_folder_select != null) {
                      var ret = file_Browser_params.on_folder_select(entryData);
                      if (ret == false) {
                          $('.ui-dialog').dialog('close');
                          return;
                      }
                  }
                  getEntries(entryData);

              } else if (file_Browser_params.on_file_select != null) {
                  var filearr = entryData.fullPath.split("/");
                  readFolderName = $("#curr_folder").html();
                  readFileName = filearr[filearr.length - 1];
                  if (readFileName.includes(".rtz") || readFileName.includes(".kml")) {
                      readRouteFromFileSystem();
                  } else {
                      jAlert("Select a valid route file", "Import Route");
                  }
              }
          });
        }
    }
}

function alertError(err) {
    if (typeof err.message != 'undefined')
        err = err.message;
    alert(err);
}

function createDefaultDirectories() {
    //folderpath = cordova.file.externalRootDirectory + "Documents";
     folderpath = cordova.file.externalApplicationStorageDirectory;
    window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
        fileSystem.getDirectory("NaAVIC", {
            create: true
        }, function(dir) {
            dir.getDirectory("Routes", {
                    create: true
                }),
                function(subdir) {}, fail
        }, fail);
    }, fail);

    window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
        fileSystem.getDirectory("NaAVIC", {
            create: true
        }, function(dir) {
            dir.getDirectory("Tracks", {
                    create: true
                }),
                function(subdir) {

                }, fail
        }, fail);
    }, fail);

   window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
        fileSystem.getDirectory("NaAVIC", {
            create: true
        }, function(dir) {
            dir.getDirectory("OfflineMap", {
                    create: true
                }),
                function(subdir) {
                     console.log('folder offline offlinemap');
                }, fail
        }, fail);
    }, fail);

    var usernameDirectory = localStorage.getItem("username");
   window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
        fileSystem.getDirectory("NaAVIC/OfflineMap", {
            create: true
        }, function(dir) {
            dir.getDirectory(usernameDirectory, {
                    create: true
                }),
                function(subdir) {
                    console.log('folder offline username');
                }, fail
        }, fail);
    }, fail);
}

function fail(error) {
    console.log("error" + error.code);
}

file_Browser_params = new Object();

file_Browser_params.on_file_select = function(fileEntry) {
    return false;
}

function closeFileBrowser() {
    $("#filebrowserwindow").css("display", "none");
    $("#importrouteicon").show();
}

/* Tracks file choosing and display on map */

function getRootAndDisplay_Tracks() {
    getRoot_Tracks(function(dirEntry) {
        try {
            getEntries_Tracks(dirEntry);
        } catch (err) {
            alertError(err);
        }
    });
}

function getRoot_Tracks(onGetRoot_Tracks) {
    if (typeof window.requestFileSystem != 'undefined') {
        window.resolveLocalFileSystemURL(folderpath, function(fileSystem) {
            if (typeof onGetRoot_Tracks != 'undefined') {
                fileSystem.getDirectory("NaAVIC/Tracks", {
                    create: true
                }, function(dir) {
                    onGetRoot_Tracks(dir);
                }, fail);
            }
        }, function() {
            console.log("Error accessing local file system");
        });
    }
    return null;
}

function upOneLevel_Tracks() {
    if (currEntry == null)
        return;
    currEntry.getParent(function(parentArg) {
        getEntries_Tracks(parentArg);
    }, function(error) {
        alert("Error getting parent folder");
    })
}

function getEntries_Tracks(dirEntry) {
    if (dirEntry == null)
        return;

    currPath = dirEntry.fullPath;
    currEntry = dirEntry;
    $("#curr_folder_tracks").html(currPath);
    var dirReader = dirEntry.createReader();
    dirReader.readEntries(function(entries) {
        displayEntries_Tracks(entries);
    }, function(err) {
        if (typeof err.message != 'undefined')
            err = err.message;
        alert(err);
    });
}

function displayEntries_Tracks(entriesArray) {
    entriesArray.sort(function(a, b) {
        var str1 = a.name.toLowerCase();
        var str2 = b.name.toLowerCase();
        if (str1 < str2)
            return -1;
        if (str1 > str2)
            return 1;
        return 0;
    });

    $("#fileBrowser_entries_tracks").empty();
    var table = $("<table id='file_entry_table_track' style='max-height:100px !important; overflow:auto !important;'></table>").appendTo("#fileBrowser_entries_tracks");

    var row = $("<tr class='file_list_row'><td class='file_icon'><img src=\"images/homefolder.png\" height = '32px' width = '40px'></td><td>..</td></tr>").appendTo(table);
    $(row).click(function(event) {
        upOneLevel_Tracks();
    });

    for (var i in entriesArray) {
        var isFolder = entriesArray[i].isDirectory;
        var name = entriesArray[i].name;
        if (file_Browser_params.directory_browser && !isFolder)
            continue;

        var row = $("<tr class='file_list_row'></tr>").appendTo(table);
        $(row).data("entry", entriesArray[i]);
        if(name == ""){

        }
        else{
        $("<td class='file_icon'>" + (isFolder ? '<img src=\"images/folder_normal.png\" height = \"32px\" width = \"32px\" >' : '<img src=\"images/file_icon.png\" height = \"32px\" width = \"32px\" >') + "</td>").appendTo(row);
        $("<td class='file_name'>" + name + "</td>").appendTo(row);
        $(row).on('click', function(event) {

            var entryData = $(this).data("entry");
            if (entryData.isDirectory) {
                if (file_Browser_params.on_folder_select != null) {
                    var ret = file_Browser_params.on_folder_select(entryData);
                    if (ret == false) {
                        $('.ui-dialog').dialog('close');
                        return;
                    }
                }
                getEntries_Tracks(entryData);

            } else if (file_Browser_params.on_file_select != null) {
                var filearr = entryData.fullPath.split("/");
                readFolderName = $("#curr_folder_tracks").html();
                readFileName = filearr[filearr.length - 1];
                if (readFileName.includes(".geojson")) {
                    readTrackFromFileSystem();
                } else {
                    jAlert("Select valid track file", "Import Route");
                }
            }
        });
      }
    }
}