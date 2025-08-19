var featurelist = [];
var allData;
$(document).ready(function() {
    $('body').delegate('pageclass', 'click', function() {
        var id = $(this).attr('data');
        $('.featuretableclass').hide();
        $("#featuretable" + id).show();
    });
});
/* Function for Showing feature info popup on map */
function featureInfoData(evt, popup, startView) {
    closepopup();
    var coordinate = evt.coordinate;
    var viewResolution = startView.getResolution(); // get current resolution of map
    var mapLayers = map.getLayers().getArray();

    for (var i = 0; i < mapLayers.length; i++) {
        if (mapLayers[i].getVisible() && mapLayers[i].get("type") == "wms" && (mapLayers[i].get('title') == "Current Stations" || mapLayers[i].get('title') == "Tide Stations" || mapLayers[i].get('title') == "Point Of Interest")) {
            checkLayerInfoForStations(mapLayers[i], evt, viewResolution, coordinate, mapLayers[i].get("title"));
        }
    }

    element = popup.getElement();
    allData = "<div class = 'featurelistidiv' style='featurelistidiv'>";
    featurelist = [];
    var poi = false;
    map.forEachFeatureAtPixel(evt.pixel, function(feature) {

    if(feature.getProperties().poiType){
        poi = true;
        displayPoi(evt,feature);
    }
    else if(feature.getProperties().layer && feature.getProperties().layer.includes("_c")) {

    }
    else {
        var properties = feature.getProperties();
        var jsonobj = {};
        if (properties.OBJL != '' && properties.OBJL != undefined) {
            jsonobj["LayerName"] = getObjectName(properties.OBJL);
        } else {
            jsonobj["LayerName"] = "";
        }
        for (property in properties) {
           // console.log(property + " " + properties[property]);
            if (property == "null" || property == null || property == "" || properties[property] == "null" || properties[property] == "" || properties[property] == null || property == "rcid" || property == "prim" || property == "grup" || property == "objl" || property == "rver" || property == "agen" || property == "fidn" || property == "fids" || property == "lnam" || property == "z1" || property == "z2" || property == "x" || property == "y" || property == "z" || property == "id" || property == "RCID" || property == "PRIM" || property == "GRUP" || property == "OBJL" || property == "RVER" || property == "AGEN" || property == "FIDN" || property == "FIDS" || property == "LNAM" || property == "Z1" || property == "Z2" || property == "X" || property == "Y" || property == "Z" || property == "ID" || property == "cellname" || property == "cellscale" || property == "data" || property == "metaapi" || property == "dataapi" || property == "LNAM_REFS" || property == "FFPT_RIND" || property == "dsid_intu" || property == "layer" || property == "geometry") {
                // Don't push these keys
            } else {
                var featureProperty = "";
                for (var i = 0; i < attributeDescriptionList.length; i++){
                      if (attributeDescriptionList[i] == property) {
                          featureProperty = attributeDescriptionList[i];
                          break;
                      }
                      else {
                          featureProperty = "";
                      }
                 }

                if(featureProperty === property) {
                 var propValue = 	properties[property];
                 if (typeof propValue !== "number") {
                     if(propValue.includes(",")) {
                         jsonobj[property] = eval(property.toString().replace(/"/g,""))[propValue.split(",")[0]] + " , "+eval(property.toString().replace(/"/g,""))[propValue.split(",")[1]];
                     }
                 }
                 else {
                     jsonobj[property] = eval(property.toString().replace(/"/g,""))[propValue];
                 }
                }
                else {
                    jsonobj[property]=properties[property];
                }
            }
        }
        var fid = feature.id_;
        if(fid){
            if(isNaN(fid) && fid.includes("feature_entity")){

            } else if(feature.id_.length==3 && feature.getProperties().name){

            }
            else{
                featurelist.push(jsonobj);
            }
        }else{
            featurelist.push(jsonobj);
        }
    }
    });
    if(poi){

    }else{
        displayPopUp(coordinate, wpAttrPopup, wpAttrPopupDiv);
    }
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }
    return str.join(' ');
}

function closepopup() {
    $(wpAttrPopup.getElement()).popover('destroy'); // remove popup window from map
}

function displayPopUp(coordinate, popup, element) {

    var anchordata = "";
    for (var i = 0; i < featurelist.length; i++) {
        var singleFeature = featurelist[i];
        var tableData = '';
        if (i == 0) {
            tableData = "<table id='featuretable" + i + "' class='featuretableclass'>";
        } else {
            tableData = "<table id='featuretable" + i + "' class='featuretableclass' style='display:none;'>";
        }
        for (var key in singleFeature) {
            console.log(key + " " + singleFeature[key]);
            var bool = singleFeature[key] == "null" || singleFeature[key] == null || singleFeature[key] == "" || key == "RCID" || key == "PRIM" || key == "GRUP" || key == "OBJL" || key == "RVER" || key == "AGEN" || key == "FIDN" || key == "FIDS" || key == "LNAM" || key == "z1" || key == "z2" || key == "LNAM_REFS";
            if (key == "LayerName") {
                tableData += '<tr style="background-color: #2c3e50; border-top-left-radius: 5px; position: fixed; width:73%;"><td valign="center"><b style="word-break: break-all; margin:0; font-size: 16px; padding:0; white-space: nowrap; color: #fff;">' + singleFeature[key] + '</b></td><td style="font-size: 16px; padding:2px;"></td></tr>';
            } else {
                if (!bool) {
                    var depthbool = key == "DRVAL1" || key == "DRVAL2" || key == "SOUACC" || key == "VALDCO" || key == "VALSOU";
                    var heightbool = key == "BURDEP" || key == "ELEVAT" || key == "HEIGHT" || key == "SDISMN" || key == "SDISMX" || key == "VERACC" || key == "VERCCL" || key == "VERCLR" || key == "VERCOP" || key == "VERCSA" || key == " VERLEN";
                    var distancebool = key == "HORACC" || key == "HORCLR" || key == "HORLEN" || key == "HORWID" || key == "ICEFAC" || key =="RADIUS";
                    if(depthbool){
                        if($("#selectDepths").val()=="meter"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + singleFeature[key] + '</td></tr>';
                        }else if($("#selectDepths").val()=="feet"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all;width:135px; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + getFeets(singleFeature[key]) + '</td></tr>';
                        }else if($("#selectDepths").val()=="fathom"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all;width:135px; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + getFathoms(singleFeature[key]) + '</td></tr>';
                        }
                    } else if(heightbool){
                        if($("#selectDepths").val()=="meter"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + singleFeature[key] + '</td></tr>';
                        }else if($("#selectDepths").val()=="feet"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + getFeets(singleFeature[key]) + '</td></tr>';
                        }
                    } else if(distancebool){
                        if($("#selectDepths").val()=="meters"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + singleFeature[key] + '</td></tr>';
                        }else if($("#selectDepths").val()=="feet"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + getFeets(singleFeature[key]) + '</td></tr>';
                        }else if($("#selectDepths").val()=="kilometers"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + getKilometers(singleFeature[key]) + '</td></tr>';
                        }else if($("#selectDepths").val()=="nauticalmiles"){
                            tableData += '<tr><td valign="center"><b style="word-break: break-all; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + getMiles(singleFeature[key]) + '</td></tr>';
                        }
                    }
                    else{
                        tableData += '<tr><td valign="center"><b style="word-break: break-all; margin:0; font-size: 11px; padding:0; white-space: nowrap;">' + key.toUpperCase() + '</b></td><td style="font-size: 13px; padding:2px;">' + singleFeature[key] + '</td></tr>';
                    }
                }
            }
        }
        anchordata += "<a href='#' data=" + i + " onclick='onpageclicked(this);' style='padding:5px; color:#fff; font-size: 13px; position:relative;font-weight: bold;'>" + (i + 1) + "</a>";
        allData += tableData + "</table>";
    }
    allData += "</div>";
    /* Configuration of popup window */
    $(element).popover({
        'placement': 'top',
        'animation': false,
        'html': true,
        'title': '<a href="#" style="padding-top: 7px; border-top-right-radius:5px; padding-bottom:10px; padding-left:13px; padding-right: 13px; background-color:#2c3e50; color:#fff;" onclick="closepopup()"><i class="fa fa-times" aria-hidden="true"></i></a>',
        'content': allData,
        'template': '<div class="popover"><div class="arrow"></div><h3 class="popover-title p-0" style="font-size: 13px; top:8px; right: 0px; padding: 0 !important; z-index:5;"></h3><div class="popover-content" style="max-height:160px; min-height:160px; overflow-y: scroll; padding:0 !important;"></div><div class="popover-footer p-2" style="background-color:#2c3e50; color:#fff;">' + anchordata + '</div></div>'
    });

    if (allData.includes("undefined") || allData == undefined || featurelist.length == 0) {
        closepopup();
    } else {
        map.getView().animate({
            center: coordinate,
            duration: 500
        });
        setTimeout(function() {
            popup.setPosition(coordinate); // Set popup position on map
            $(element).popover('show'); // Show popup on map
        }, 600);
    }
    allData = undefined;
}

function onpageclicked(thisobject) {
    var id = thisobject.getAttribute('data');
    $('.featuretableclass').hide();
    $("#featuretable" + id).show();
    $('.popover-content').animate({
        scrollTop: 0
    }, 500);
}

function checkLayerInfoForStations(layer, evt, viewResolution, coordinate, layername) {
    if (layer.getVisible()) {
        url = layer.getSource().getGetFeatureInfoUrl(evt.coordinate,viewResolution, prj1, {'INFO_FORMAT' : 'application/vnd.ogc.gml','FEATURE_COUNT' : '300'});
        if (url) {
            $.ajax({
                type : "GET",
                url : url,
                async : false,
                dataType : "text",
                success : function(response) {
                    if (response.length > 300) {
                        func2(response,evt);
                    }
                }
            });
        }
    }
}

/* Function to align data in feature popup */
function func2(infoData,evt)
{
	stationID = "";
	stationName = "";
	var parsers = new DOMParser(); // Creating xml parser
	var xmlDoc = parsers.parseFromString(infoData, "text/xml"); // Reading xml data from ajax response
	var tags = xmlDoc.getElementsByTagName('*'); // Reading all nodes in xml files

    for (var i = 3; i < tags.length; i++) {
        if(tags[i].firstChild != undefined || tags[i].firstChild != null)
        {
            var namearray = new Array();
            var nodename = tags[i].nodeName;
                namearray = nodename.split(':');
            var fieldname = namearray[1].toUpperCase();
            if(tags[i].firstChild.nodeValue == null || tags[i].firstChild.nodeValue == "null" || fieldname == "COORDINATES" || fieldname == "FID" || fieldname == "REMARKS"  || fieldname == "FEATUREMEMBER" || fieldname == "FFPT_RIND"){

                if(fieldname == "FEATUREMEMBER"){
                    stationID = tags[i].firstElementChild.getAttribute('fid').split('.')[1];
                }
                else if(fieldname == "CURRENT_ACTIVE_STATIONS"){
                    featureId = "CURRENT_STATIONS";
                }
                else if(fieldname == "TIDE_STATIONS"){
                    featureId = "TIDE_STATIONS";
                }
            }
            else if(fieldname == "NAME" || fieldname == "STATIONNA1"){
                stationName = titleCase(tags[i].firstChild.nodeValue);
            }
            else if(fieldname == "STA_ID" || fieldname == "STATION_ID"){
                stationID = tags[i].firstChild.nodeValue;
            }
            else if(fieldname == "TYPE"){
                stationType = tags[i].firstChild.nodeValue;
            }
        }
    }

	if(stationID != "" && stationName != ""){
	    //var iframe = document.getElementById('tideiframe');
        //iframe.src = "https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id="+stationID;
          window.open = cordova.InAppBrowser.open;
            cordova.InAppBrowser.open("https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id="+stationID, '_self', 'location=yes');
        //$("div#tidegraph").show();
        setTimeout(function() {
             closepopup();
        }, 2000);
	}
}