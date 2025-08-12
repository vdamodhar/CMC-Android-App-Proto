var displayModeValue;
var CHBLK = "";
var imagePath;

var dpattern1, dpattern2, dpattern3, dpattern4, dpattern5, dpattern6, dpattern7, npattern1, npattern2, npattern3, npattern4, npattern5;
var lineStyle = new ol.style.Style({ image: new ol.style.Icon(({ src: 'resources/images/svgs/day/ACHARE02.svg' })), stroke: new ol.style.Stroke({ color: '#373531', width: 2, lineDash: [1, 4], lineCap: 'round' }) });
var context6;
function load_day_images() {
  var canvas1 = document.createElement("CANVAS");
  var context1 = canvas1.getContext('2d');
  var image1 = new Image();
  image1.src = 'resources/images/svgs/day/dredged1.png';

  image1.onload = function () {
    dpattern1 = context1.createPattern(image1, 'repeat');
  };

  var canvas2 = document.createElement("CANVAS");
  var context2 = canvas2.getContext('2d');
  var image2 = new Image();
  image2.src = 'resources/images/svgs/day/dredged2.png';

  image2.onload = function () {
    dpattern2 = context2.createPattern(image2, 'repeat');
  };

  var canvas3 = document.createElement("CANVAS");
  var context3 = canvas3.getContext('2d');
  var image3 = new Image();
  image3.src = 'resources/images/svgs/day/unsurveyed1.png';

  image3.onload = function () {
    dpattern3 = context3.createPattern(image3, 'repeat');
  };
}

function load_night_images() {
  var canvas1 = document.createElement("CANVAS");//document.getElementById("dredged1Canvas");
  var context1 = canvas1.getContext('2d');
  var image1 = new Image();
  image1.src = 'resources/images/svgs/night/dredged1.png';

  image1.onload = function () {
    npattern1 = context1.createPattern(image1, 'repeat');
  };

  var canvas2 = document.createElement("CANVAS");//document.getElementById("dredged2Canvas");
  var context2 = canvas2.getContext('2d');
  var image2 = new Image();
  image2.src = 'resources/images/svgs/night/dredged1.png';

  image2.onload = function () {
    npattern2 = context2.createPattern(image2, 'repeat');
  };

  var canvas3 = document.createElement("CANVAS");//document.getElementById("unsurvCanvas");
  var context3 = canvas3.getContext('2d');
  var image3 = new Image();
  image3.src = 'resources/images/svgs/night/unsurveyed.png';

  image3.onload = function () {
    npattern3 = context3.createPattern(image3, 'repeat');
  };
}

function lenpoint(x1, y1, x2, y2, len) {
  var dx = x2 - x1, dy = y2 - y1;
  var theta = Math.atan2(dy, dx);
  var xp = len * Math.cos(theta), yp = len * Math.sin(theta);
  return [xp + x1, yp + y1];
}

function setDistance(val) {
  var res = map.getView().getResolution();
  var dist = res * val;
  return dist;
}

function generalized_simplestyle(fillcolor, strokecolor, strokewidth, linedashstyle, imgpathname, imgoffset, imgrotation, textfeaturename, textoffsetY, textfont, textoffsetX, imgpoints, imgradius, feature, z_index) {
  var styles = [];
  var generalized_style = null;
  var textFontValue;
  var textFontColor;
  var col, wid, ldash, fillIcon;

  if (textfont != undefined) {
    if (textfont.indexOf(";") != -1) {
      if (textfont.includes(";")) {
        textfont = textfont.split(";");
        textFontValue = textfont[0];
        textFontColor = textfont[1];
        textfont = textFontValue;
      }
    }
  }
  if (fillcolor.indexOf("day") != -1) {
    if (fillcolor.includes("day")) {
      if (fillcolor == imagePath + "dredged1.png") {
        fillcolor = dpattern1;
      }
      else if (fillcolor == imagePath + "dredged2.png") {
        fillcolor = dpattern2;
      }
      else if (fillcolor == imagePath + "unsurvyed.png") {
        fillcolor = dpattern3;
      }
    }
  }
  else if (fillcolor.indexOf("night") != -1) {
    if (fillcolor.includes("night")) {
      if (fillcolor == imagePath + "dredged1.png") {
        fillcolor = npattern1;
      }
      else if (fillcolor == imagePath + "dredged2.png") {
        fillcolor = npattern2;
      }
      else if (fillcolor == imagePath + "unsurvyed.png") {
        fillcolor = npattern3;
      }
    }
  }

  if (typeof textfeaturename === 'object') {
    if (textfeaturename.length > 1) {
      generalized_style = new ol.style.Style({
        fill: new ol.style.Fill({
          color: fillcolor
        }),
        stroke: new ol.style.Stroke({
          color: strokecolor,
          width: strokewidth,
          lineDash: linedashstyle,
          lineCap: 'round',
        }),
        zIndex: z_index,
        text: textfeaturename[0],
        image: returnImageStyle(imgpathname, imgoffset, imgrotation, fillcolor, strokecolor, strokewidth, imgpoints, imgradius)
      });

      styles.push(generalized_style);

      generalized_style = new ol.style.Style({
        fill: new ol.style.Fill({
          color: fillcolor
        }),
        stroke: new ol.style.Stroke({
          color: strokecolor,
          width: strokewidth,
          lineDash: linedashstyle,
          lineCap: 'round',
        }),
        zIndex: z_index,
        text: textfeaturename[1],
        image: returnImageStyle(imgpathname, imgoffset, imgrotation, fillcolor, strokecolor, strokewidth, imgpoints, imgradius)
      });

      styles.push(generalized_style);
    }
    else {
      generalized_style = new ol.style.Style({
        fill: new ol.style.Fill({
          color: fillcolor
        }),
        stroke: new ol.style.Stroke({
          color: strokecolor,
          width: strokewidth,
          lineDash: linedashstyle,
          lineCap: 'round',
        }),
        zIndex: z_index,
        text: textfeaturename,
        image: returnImageStyle(imgpathname, imgoffset, imgrotation, fillcolor, strokecolor, strokewidth, imgpoints, imgradius)
      });
      styles.push(generalized_style);
    }
  }
  else {
    generalized_style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: fillcolor
      }),
      stroke: new ol.style.Stroke({
        color: strokecolor,
        width: strokewidth,
        lineDash: linedashstyle,
        lineCap: 'round',
      }),
      zIndex: z_index,
      text: new ol.style.Text({
        offsetX: textoffsetX,
        offsetY: textoffsetY,
        font: textfont,
        fill: new ol.style.Fill({
          color: textFontColor
        }),
        placement: 'point'
        //rotation: '0.785398164' // 45 degrees
      }),
      image: returnImageStyle(imgpathname, imgoffset, imgrotation, fillcolor, strokecolor, strokewidth, imgpoints, imgradius)
    });

    generalized_style.getText().setText(textfeaturename);
    styles.push(generalized_style);
  }
  return styles;
}

function returnImageStyle(imgpathname, imgoffset, imgrotation, fillcolor, strokecolor, strokewidth, imgpoints, imgradius) {
  var imgstyle = null;
  if ((imgpathname == "transparent") || (imgpathname == undefined)) {

  }
  else if (imgpathname.includes("resources/")) {
    imgstyle = new ol.style.Icon(/** @type {olx.style.IconOptions} */({
      src: imgpathname,
      anchor: imgoffset,
      anchorXUnits: 'pixels',
      anchorYUnits: 'pixels',
      rotation: imgrotation
    }));
  }
  else if (imgpathname.includes("drawimage")) {
    imgstyle = new ol.style.RegularShape({
      fill: new ol.style.Fill({ color: fillcolor }),
      stroke: new ol.style.Stroke({ color: strokecolor, width: strokewidth }),
      points: imgpoints,
      radius: imgradius,
      angle: Math.PI / 4
    });
  }
  return imgstyle;
}

//Styling rules for layer:  layer1 = 'NCWorkspace:NCUsage1'; Style: group_usage1_style

function getComparision2(condition1, operator, condition2) {
  switch (operator) {
    case '>': return condition1 > condition2;
    case '<': return condition1 < condition2;
    case '>=': return condition1 >= condition2;
    case '<=': return condition1 <= condition2;
    case '==': return condition1 == condition2;
  }
}

function getComparision(condition1, operator, condition2, feature) {
  Z1 = parseFloat(condition1) //condition1
  Z2 = parseFloat(condition2) //condition2
  switch (operator) {
    case '>': return Z1 > Z2;
    case '<': return Z1 < Z2;
    case '>=': return Z1 >= Z2;
    case '<=': return Z1 <= Z2;
    case '==': return Z1 == Z2;
    case 'geometrytype': return checkFeatureGeomType(feature, Z2);
  }
}

function checkFeatureGeomType(feature, condition2) {
  if (feature.get('PRIM') == condition2) {
    return true;
  }
  else {
    return false;
  }
}

function getCondition(condition, attributes, feature) {
  switch (condition) {
    case 'AND': return andCondition(attributes, feature);
    case 'OR': return orCondition(attributes, feature);
    case 'BOTH_ORANDOR': return both_ORANDORCondition(attributes, feature);
    case 'BOTH_ANDORAND': return both_ANDORANDCondition(attributes, feature);
    case 'NONE': return getComparision(feature.get(attributes[0].Attribute_Name), attributes[0].Comparision, attributes[0].Attribute_Value, feature);
  }
}

function andCondition(attributes, feature) {

  if (feature.get('z1') >= 30) {
    //console.log(" feature :: "+feature.get('z1'));
  }
  var condition_status = false;
  for (var i = 0; i < attributes.length; i++) {
    if (getComparision(feature.get(attributes[i].Attribute_Name), attributes[i].Comparision, attributes[i].Attribute_Value, feature)) {
      condition_status = true;
    }
    else {
      condition_status = false;
      break;
    }
  }
  return condition_status;
}

function orCondition(attributes, feature) {
  var condition_status = false;
  for (var i = 0; i < attributes.length; i++) {
    if (getComparision(feature.get(attributes[i].Attribute_Name), attributes[i].Comparision, attributes[i].Attribute_Value, feature)) {
      condition_status = true;
      break;
    }
    else {
      condition_status = false;
    }
  }
  return condition_status;
}

function both_ORANDORCondition(attributes, feature) {
  return orCondition(attributes[0], feature) && orCondition(attributes[1], feature);
}

function both_ANDORANDCondition(attributes, feature) {
  return andCondition(attributes[0], feature) || andCondition(attributes[1], feature);
}


function getz2Unicode(z2value) {
  switch (z2value) {
    case "0": return '\u2080';
    case "1": return '\u2081';
    case "2": return '\u2082';
    case "3": return '\u2083';
    case "4": return '\u2084';
    case "5": return '\u2085';
    case "6": return '\u2086';
    case "7": return '\u2087';
    case "8": return '\u2088';
    case "9": return '\u2089';
    default: return '';
  }
}

var renderedLightFeatures = [];
var overlap = false;
function set_genericStyle(feature) {
  console.log(feature.layer);
  if (displayModeObject == undefined) {

  }
  if (displayModeObject != undefined) {
    var objlength = displayModeObject.length;
    for (var i = 0; i < objlength; i++) {
      var status = getCondition(displayModeObject[i].Condition, displayModeObject[i].Attributes, feature);

      if (status) {
        var displaytext = "";
        if (displayModeObject[i].textfeaturename != undefined) {
          if (displayModeObject[i].textfeaturename.includes("+")) {
            if ($("#selectDepths").val() == "meter") {
              displaytext = feature.get(displayModeObject[i].textfeaturename.split("+")[0]) + getz2Unicode(feature.get(displayModeObject[i].textfeaturename.split("+")[1]));
            } else if ($("#selectDepths").val() == "feet") {
              var meters = parseFloat(feature.get(displayModeObject[i].textfeaturename.split("+")[0])) + parseFloat(feature.get(displayModeObject[i].textfeaturename.split("+")[1]) / 10);
              displaytext = getFeets(meters);
            } else if ($("#selectDepths").val() == "fathom") {
              var meters = parseFloat(feature.get(displayModeObject[i].textfeaturename.split("+")[0])) + parseFloat(feature.get(displayModeObject[i].textfeaturename.split("+")[1]) / 10);
              displaytext = getFathoms(meters);
            }
          }
          // check for VALSOU
          else if (displayModeObject[i].textfeaturename.includes("VALSOU")) {
            var valsou = feature.get(displayModeObject[i].textfeaturename);
            if (valsou != undefined && valsou > 0 && valsou <= 20) {
              if ($("#selectDepths").val() == "meter") {
                displaytext = valsou.split(".")[0] + getz2Unicode(valsou.split(".")[1]);//feature.get(displayModeObject[i].textfeaturename.split("+")[0]) + getz2Unicode(feature.get(displayModeObject[i].textfeaturename.split("+")[1]));
              } else if ($("#selectDepths").val() == "feet") {
                var meters = parseFloat(valsou.split(".")[0]) + parseFloat(valsou.split(".")[1] / 10);
                displaytext = getFeets(meters);
              } else if ($("#selectDepths").val() == "fathom") {
                var meters = parseFloat(valsou.split(".")[0]) + parseFloat(valsou.split(".")[1] / 10);
                displaytext = getFathoms(meters);
              }
            }
          }
          else if ((displayModeObject[i].textfeaturename.includes("TX(")) && (displayModeObject[i].textfeaturename.includes(";"))) {
            var display_text = [], dtext;
            var str = displayModeObject[i].textfeaturename;

            var textValue1 = str.split(";")[0];
            textValue = textValue1.substring(3, textValue1.length - 1).split(",");

            dtext = createTextStyle(feature, textValue[0], textValue[1], textValue[2], textValue[3], textValue[4], textValue[5], textValue[6], textValue[7], textValue[8]);
            display_text.push(dtext);
            textValue1 = str.split(";")[1];
            textValue = textValue1.substring(3, textValue1.length - 1).split(",");
            dtext = createFormattedTextStyle(feature, textValue[0], textValue[1], textValue[2], textValue[3], textValue[4], textValue[5], textValue[6], textValue[7], textValue[8], textValue[9]);
            display_text.push(dtext);
            displaytext = display_text;
          }
          else if (displayModeObject[i].textfeaturename.includes("TX(")) {
            var str = displayModeObject[i].textfeaturename;

            var textValue = str.substring(3, str.length - 1).split(",");

            displaytext = createTextStyle(feature, textValue[0], textValue[1], textValue[2], textValue[3], textValue[4], textValue[5],
              textValue[6], textValue[7], textValue[8]);
          }
          else if (displayModeObject[i].textfeaturename.includes("TE(")) {
            var str = displayModeObject[i].textfeaturename;
            var textValue = str.substring(3, str.length - 1).split(",");
            if (displayModeObject[i].textfeaturename.includes("CATLIT")) {
              if (renderedLightFeatures.length > 100){
                renderedLightFeatures = [];
              }
              renderedLightFeatures.push(feature.getFlatCoordinates());
              for (h = 0; h < renderedLightFeatures.length - 1; h++) {
                if ((parseInt(renderedLightFeatures[h][0]) === parseInt(feature.getFlatCoordinates()[0])) && (parseInt(renderedLightFeatures[h][1]) === parseInt(feature.getFlatCoordinates()[1]))) {
                  overlap = true;
                }
              }
              if (overlap == false) {
                displaytext = createFormattedTextStyleForLights(feature, textValue[0], textValue[1], textValue[2], textValue[3], textValue[4], textValue[5], textValue[6], textValue[7], textValue[8]);
                // renderedLightFeatures.push(feature.getFlatCoordinates());
              }              
              overlap = false;
            }
            else {
              displaytext = createFormattedTextStyle(feature, textValue[0], textValue[1], textValue[2], textValue[3], textValue[4], textValue[5],
                textValue[6], textValue[7], textValue[8], textValue[9]);
            }
          }
          else {
            displaytext = feature.get(displayModeObject[i].textfeaturename);
          }
        }
        overlap = false;
        return generalized_simplestyle(displayModeObject[i].Fill_color, displayModeObject[i].Stroke_color,
          displayModeObject[i].Stroke_width, displayModeObject[i].linedashstyle,
          displayModeObject[i].imageFill, displayModeObject[i].offset,
          displayModeObject[i].rotation, displaytext, displayModeObject[i].textoffsetY, displayModeObject[i].textfont, displayModeObject[i].textoffsetX,
          displayModeObject[i].imgpoints, displayModeObject[i].imgradius, feature, displayModeObject[i].zIndex);
      }
    }
  }
}

function modeChanged() {
  var displayModeValue = $('input[name=dispalymode]:checked').val();

  if (displayModeValue === 'Auto') {
    if (isDayTime) {
      CHBLK = "#000000";
      imagePath = "./resources/images/svgs/day/";
      return genericDayJSON;
    }
    else {
      CHBLK = "#373531";
      imagePath = "./resources/images/svgs/night/";
      return genericNightJSON;
    }
  }
  else if (displayModeValue === 'Day') {
    CHBLK = "#000000";
    imagePath = "./resources/images/svgs/day/";
    return genericDayJSON;
  }
  else if (displayModeValue === 'Night') {
    CHBLK = "#373531";
    imagePath = "./resources/images/svgs/night/";
    return genericNightJSON;
  }
}


function centroidStyle(feature) {
  // ACHARE 4
  //"TX(OBJNAM,2,1,2,'15110',-1,-2,CHBLK,26)"
  /* var OBJL_text = feature.getProperties().OBJL;
   if(OBJL_text == "86"){
     console.log("OBJL_text :: "+OBJL_text);
   }
   if(OBJL_text == "71"){
     console.log("OBJL_text :: "+OBJL_text);
   }*/

  displaytext = createTextStyle(feature, 'OBJNAM', 2, 1, 2, '15110', -1,
    -2, CHBLK, 26);


  if (feature.getProperties().OBJL == 4 && feature.getProperties().PRIM == 3 && feature.getProperties().CATACH == 8) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "ACHARE02.svg",
        anchor: [7.79, 9.94],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
      text: displaytext
    });
  }
  else if (feature.getProperties().OBJL == 4 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "ACHARE51.svg",
        anchor: [23.77, 29.44],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
      }),
      text: displaytext
    });
  }
  if (feature.getProperties().OBJL == 4 && feature.getProperties().PRIM == 3 && feature.getProperties().CATACH == 8) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "ACHARE02.svg",
        anchor: [7.79, 9.94],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
      text: displaytext
    });
  }
  // OBSTRN 86
  if (feature.getProperties().OBJL == 86 && feature.getProperties().PRIM == 3 && feature.getProperties().CATOBS == 5) {
    Valsou_val = createTextStyle(feature, 'VALSOU', 2, 1, 2, '15110', -1, -2, CHBLK, 26);
    //Valsou_val = feature.get("VALSOU");
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });

    return new ol.style.Style({
      geometry: geom,
      text: Valsou_val
    });

  }
  else if (feature.getProperties().OBJL == 86 && feature.getProperties().PRIM == 3 && feature.getProperties().CATOBS == 8 || feature.getProperties().CATOBS == 10) {
    Valsou_val = createTextStyle(feature, 'VALSOU', 2, 1, 2, '15110', -1,
      -2, CHBLK, 26);
    //Valsou_val = feature.get("VALSOU");
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    /* return new ol.style.Style({
        geometry: geom,
      image: new ol.style.Icon({
       //   src: imagePath+"FLTHAZ02.svg" ,
          anchor: [12.25, 12.09 ],
          anchorXUnits: 'pixels',
          anchorYUnits: 'pixels',
          rotateWithView: false,
          rotation: 0,
          placement: 'point'
        }),
        text: Valsou_val
      });   */
    return new ol.style.Style({
      geometry: geom,
      text: Valsou_val
    });
  }
  else if (feature.getProperties().OBJL == 86 && feature.getProperties().PRIM == 3 && feature.getProperties().WATLEV == 7) {
    Valsou_val = createTextStyle(feature, 'VALSOU', 2, 1, 2, '15110', -1,
      -2, CHBLK, 26);
    //Valsou_val = feature.get("VALSOU");
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    /*return new ol.style.Style({
       geometry: geom,
     image: new ol.style.Icon({
        // src: imagePath+"FLTHAZ02.svg" ,
         anchor: [12.25, 12.09 ],
         anchorXUnits: 'pixels',
         anchorYUnits: 'pixels',
         rotateWithView: false,
         rotation: 0,
         placement: 'point'
       }),
       text: Valsou_val
     }); */
    return new ol.style.Style({
      geometry: geom,
      text: Valsou_val
    });
  }
  else if (feature.getProperties().OBJL == 86 && feature.getProperties().PRIM == 3 && feature.getProperties().CATOBS == 9) {
    Valsou_val = createTextStyle(feature, 'VALSOU', 2, 1, 2, '15110', -1,
      -2, CHBLK, 26);
    //Valsou_val = feature.get("VALSOU");
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    /*	       return new ol.style.Style({
                geometry: geom,
              image: new ol.style.Icon({
                //  src: imagePath+"ACHARE02.svg" ,
                  anchor: [7.79, 9.94 ],
                  anchorXUnits: 'pixels',
                  anchorYUnits: 'pixels',
                  rotateWithView: false,
                  rotation: 0,
                  placement: 'point'
                }),
                text: Valsou_val
              }); */
    return new ol.style.Style({
      geometry: geom,
      text: Valsou_val
    });
  } else if (feature.getProperties().OBJL == 86) {
    Valsou_val = createTextStyle(feature, 'VALSOU', 2, 1, 2, '15110', -1,
      -2, CHBLK, 26);
    //Valsou_val = feature.get("VALSOU");
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      text: Valsou_val
    });
  }
  //  LNDARE - 71
  if (feature.getProperties().OBJL == 71 && feature.getProperties().PRIM == 3) {
    objnam_txt = createTextStyle(feature, 'OBJNAM', 2, 1, 2, '15110', -1,
      -2, CHBLK, 26);
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      text: objnam_txt

    });
  }
  // RESARE 112
  if (feature.getProperties().OBJL == 112 && feature.getProperties().PRIM == 3 && feature.getProperties().CATREA == 27) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "ESSARE01.svg",
        anchor: [24.00, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }

  else if (feature.getProperties().OBJL == 112 && feature.getProperties().PRIM == 3 && feature.getProperties().CATREA == 28) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "PSSARE01.svg",
        anchor: [24.00, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  // Need to check the CS
  /*else if(feature.getProperties().OBJL == 112 && feature.getProperties().PRIM == 3){
    var format = new ol.format.WKT();
        var wkt = feature.getProperties().centroid;
        var geom = format.readGeometry(wkt,{
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:900913'
          });
         return new ol.style.Style({
            geometry: geom,
          image: new ol.style.Icon({
            src: imagePath+"RESARE04", 
            anchor: [24.00, 0.00 ],
            anchorXUnits: 'pixels',
            anchorYUnits: 'pixels',
            rotateWithView: false,
            rotation: 0,
            placement: 'point'
          })
        });
  }*/

  // CTNARE 27
  if (feature.getProperties().OBJL == 27 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "CTNARE51.svg",
        anchor: [67.46, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // MIPARE 83
  if (feature.getProperties().OBJL == 83 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "CTYARE51.svg",
        anchor: [67.46, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // ADMARE 1
  // Need to check this LC(ADMARE01)
  if (feature.getProperties().OBJL == 1 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "EMADMAR2.svg",
        anchor: [0.75, 0.5],
        rotateWithView: true,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // CTSARE 25
  if (feature.getProperties().OBJL == 25 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "INFARE51.svg",
        anchor: [0.00, 9.64],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // Check linestroke

  if (feature.getProperties().OBJL == 97 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPRA == 5 && feature.getProperties().CONVIS == 1) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "RFNERY11.svg",
        anchor: [12.55, 13.53],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 97 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPRA == 8 && feature.getProperties().CONVIS == 1) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "TNKFRM11.svg",
        anchor: [14.82, 15.31],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 97 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPRA == 9 && feature.getProperties().CONVIS == 1) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "WNDFRM61.svg",
        anchor: [14.63, 15.12],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 97 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPRA == 1) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "QUARRY01.svg",
        anchor: [13.30, 15.42],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 97 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPRA == 5) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "RFNERY01.svg",
        anchor: [12.89, 13.34],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 97 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPRA == 6) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "TMBYRD01.svg",
        anchor: [7.56, 7.56],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 97 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPRA == 8) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "TNKFRM01.svg",
        anchor: [14.74, 15.12],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 97 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPRA == 9) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "WNDFRM51.svg",
        anchor: [14.70, 14.74],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }

  // DOCARE 45  -- Need to add Labels
  /*if(feature.getProperties().OBJL == 45 && feature.getProperties().PRIM == 3){
    var pt = ol.extent.getCenter(feature.getGeometry().getExtent());
      styles.push(new ol.style.Style({
          geometry: new ol.geom.Point(pt),
          image: new ol.style.Icon({
            src: "null",
            rotateWithView: true,
            rotation: 0,
            placement: 'point'
          })
        }));
  }*/

  // FSHFAC 55
  if (feature.getProperties().OBJL == 55 && feature.getProperties().PRIM == 3 && feature.getProperties().CATFIF == 1) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "FSHFAC03.svg",
        anchor: [11.41, 3.06],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }
  else if (feature.getProperties().OBJL == 55 && feature.getProperties().PRIM == 3 && feature.getProperties().CATFIF == 2) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "FSHFAC04.svg",
        anchor: [47.66, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }
  else if (feature.getProperties().OBJL == 55 && feature.getProperties().PRIM == 3 && feature.getProperties().CATFIF == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "FSHFAC04.svg",
        anchor: [47.66, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }
  else if (feature.getProperties().OBJL == 55 && feature.getProperties().PRIM == 3 && feature.getProperties().CATFIF == 4) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "FSHFAC04.svg",
        anchor: [47.66, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }
  else if (feature.getProperties().OBJL == 55 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "FSHHAV01.svg", // Need FSHHAV02.svg
        anchor: [23.62, 11.72],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }
  // CBLARE 20
  if (feature.getProperties().OBJL == 20 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "CBLARE51.svg",
        rotateWithView: false,
        anchor: [6.46, 21.39],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // PIPARE 92
  if (feature.getProperties().OBJL == 92 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPIP == 2) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "INFARE51.svg",
        anchor: [0.00, 9.64],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 92 && feature.getProperties().PRIM == 3 && feature.getProperties().CATPIP == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "INFARE51.svg",
        anchor: [0.00, 9.64],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 92 && feature.getProperties().PRIM == 3 && feature.getProperties().PRODCT == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "INFARE51.svg",
        anchor: [0.00, 9.64],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 92 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "INFARE51.svg",
        anchor: [0.00, 9.64],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // SBDARE 121
  // No Image - only text
  // if(feature.getProperties().OBJL == 121 && feature.getProperties().PRIM == 3){
  /*var pt = ol.extent.getCenter(feature.getGeometry().getExtent());
      styles.push(new ol.style.Style({
          geometry: new ol.geom.Point(pt),
          image: new ol.style.Icon({
            src: "null",
            rotateWithView: true,
            rotation: 0,
            placement: 'point'
          })
        }));*/
  //}

  /*  FAIRWY51.svg - TRAFIC - 1/2/3 AND ORIENT = true
  *   FAIRWY52.svg - TRAFIC - 4 AND ORIENT = true
  * */

  // FAIRWY 51	
  if (feature.getProperties().OBJL == 51 && feature.getProperties().PRIM == 3 && feature.getProperties().ORIENT > 0 &&
    ((feature.getProperties().TRAFIC == 1) || (feature.getProperties().TRAFIC == 2) || (feature.getProperties().TRAFIC == 3))) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    //"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"
    text = createTextStyle(feature, 'OBJNAM', 3, 2, 3, '15110', 2,
      0, CHBLK, 26);
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "FAIRWY51.svg",
        anchor: [11.34, 28.35],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: true,
        rotation: 0,
        placement: 'point'
      }),
      text: text
    });
  }
  else if (feature.getProperties().OBJL == 51 && feature.getProperties().PRIM == 3 && feature.getProperties().ORIENT > 0 && feature.getProperties().TRAFIC == 4) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    text = createTextStyle(feature, 'OBJNAM', 3, 2, 3, '15110', 2,
      0, CHBLK, 26);
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "FAIRWY52.svg",
        anchor: [11.41, 28.38],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
      text: text
    });
  }
  // Display Labels
  /*else if(feature.getProperties().OBJL == 51 && feature.getProperties().PRIM == 3){
    //console.log("feature.getProperties().ORIENT : "+feature.getProperties().ORIENT);
    var pt = ol.extent.getCenter(feature.getGeometry().getExtent());
        styles.push(new ol.style.Style({
            geometry: new ol.geom.Point(pt),
            image: new ol.style.Icon({
              src: imagePath+"FAIRWY51.svg",
              anchor: [11.34, 28.35 ],
              anchorXUnits: 'pixels',
              anchorYUnits: 'pixels',
              rotateWithView: false,
              rotation: 0,
              placement: 'point'
            })
          }));
  }*/

  // PRCARE 96
  if (feature.getProperties().OBJL == 96 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "PRCARE51.svg",
        anchor: [19.35, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // HRBFAC 64 - Need clarification for conditions
  if (feature.getProperties().OBJL == 64 && feature.getProperties().PRIM == 3 && feature.getProperties().CATHAF == 1) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "ROLROL01.svg",
        anchor: [13.87, 5.37],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 64 && feature.getProperties().PRIM == 3 && feature.getProperties().CATHAF == 4) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "HRBFAC09.svg",
        anchor: [11.23, 11.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 64 && feature.getProperties().PRIM == 3 && feature.getProperties().CATHAF == 5) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "SMCFAC02.svg",
        anchor: [12.85, 13.04],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
    });
  }
  else if (feature.getProperties().OBJL == 64 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "CHINFO07.svg",
        anchor: [8.88, 9.60],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // BRIDGE 11
  if (feature.getProperties().OBJL == 11 && feature.getProperties().PRIM == 3 &&
    ((feature.getProperties().CATBRG == "2") || (feature.getProperties().CATBRG == "3") || (feature.getProperties().CATBRG == "4") ||
      (feature.getProperties().CATBRG == "5") || (feature.getProperties().CATBRG == "7") || (feature.getProperties().CATBRG == "8"))) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    //"TE('clr cl %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
    displaytext = createFormattedTextStyle(feature, 'clr cl %4.1lf', 'VERCLR', 3, 1, 2, '15110',
      1, 0, 'CHBLK', 11);

    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "BRIDGE01.svg",
        rotateWithView: false,
        anchor: [7.56, 7.52],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotation: 0,
        placement: 'point'
      }),
      text: displaytext
    });
  }
  // Need to display labels
  else if (feature.getProperties().OBJL == 11 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    displaytext = createFormattedTextStyle(feature, 'clr cl %4.1lf', 'VERCLR', 3, 1, 2, '15110',
      1, 0, 'CHBLK', 11);
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "BRIDGE01.svg",
        rotateWithView: false,
        anchor: [7.56, 7.52],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotation: 0,
        placement: 'point'
      }),
      text: displaytext
    });
  }
  // No display available for Bridge - Point

  // DWRTPT - 41
  if (feature.getProperties().OBJL == 41 && feature.getProperties().PRIM == 3 && feature.getProperties().ORIENT > 0 &&
    (feature.getProperties().TRAFIC == 1 || feature.getProperties().TRAFIC == 2 || feature.getProperties().TRAFIC == 3)) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "TSSLPT51.svg",
        anchor: [11.34, 28.35],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
    styles.push(new ol.style.Style({
      geometry: new ol.geom.Point(pt),
      image: new ol.style.Icon({
        src: imagePath + "DWRTPT51.svg",
        anchor: [27.44, 65.54],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    }));
  }

  if (feature.getProperties().OBJL == 41 && feature.getProperties().PRIM == 3 && feature.getProperties().ORIENT > 0 && feature.getProperties().TRAFIC == 4) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "DWRUTE51.svg",
        anchor: [11.57, 28.35],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
    styles.push(new ol.style.Style({
      geometry: new ol.geom.Point(pt),
      image: new ol.style.Icon({
        src: imagePath + "DWRTPT51.svg",
        anchor: [27.44, 65.54],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    }));
  }

  if (feature.getProperties().OBJL == 41 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "TSLDEF51.svg",
        anchor: [22.79, 28.35],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
    styles.push(new ol.style.Style({
      geometry: new ol.geom.Point(pt),
      image: new ol.style.Icon({
        src: imagePath + "DWRTPT51.svg",
        anchor: [27.44, 65.54],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    }));
  }

  // FSHGRD - 56
  if (feature.getProperties().OBJL == 56 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "FSHGRD01.svg",
        anchor: [25.51, 9.22],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // MARCUL 82
  if (feature.getProperties().OBJL == 82 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "MARCUL02.svg",
        anchor: [13.34, 7.63],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }


  // OSPARE 88
  if (feature.getProperties().OBJL == 88 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "CTYARE51.svg",
        anchor: [67.46, 0.00],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // SMCFAC 128
  if (feature.getProperties().OBJL == 128 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "SMCFAC02.svg",
        anchor: [12.85, 13.04],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // SWPARE 134
  if (feature.getProperties().OBJL == 134 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    //  "TE('swept to %5.1lf','DRVAL1',1,2,2,'15110',0,1,CHBLK,27)"
    displaytext = createFormattedTextStyle(feature, 'swept to %5.1lf', 'DRVAL1', 1, 2, 2, '15110',
      0, 1, 'CHBLK', 27);
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "SWPARE51.svg",
        anchor: [21.17, 11.64],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
      text: displaytext
    });
  }

  // VEGATN 155
  if (feature.getProperties().OBJL == 155 && feature.getProperties().PRIM == 3 && (feature.getProperties().CATVEG == 7 || feature.getProperties().CATVEG == 21)) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "VEGATN04.svg",
        anchor: [7.56, 11.34],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }
  else if (feature.getProperties().OBJL == 155 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "VEGATN03.svg",
        anchor: [6.61, 15.04],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // WEDKLP 158
  if (feature.getProperties().OBJL == 158 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "WEDKLP03.svg",
        anchor: [18.90, 4.72],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }

  // ACHBRT 3
  if (feature.getProperties().OBJL == 3 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    // "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)
    displaytext = createFormattedTextStyle(feature, 'Nr %s', 'OBJNAM', 3, 1, 2, '15110',
      1, 0, 'CHBLK', 29);
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "ACHBRT07.svg",
        anchor: [9.60, 10.54],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
      text: displaytext
    });
  }

  // BERTHS 10
  if (feature.getProperties().OBJL == 10 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    // "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)"
    displaytext = createFormattedTextStyle(feature, 'Nr %s', 'OBJNAM', 3, 1, 2, '15110',
      1, 0, 'CHBLK', 29);
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "BRTHNO01.svg",
        anchor: [13.23, 13.23],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      }),
      text: displaytext
    });
  }

  // ICEARE 66
  if (feature.getProperties().OBJL == 66 && feature.getProperties().PRIM == 3) {
    var format = new ol.format.WKT();
    var wkt = feature.getProperties().centroid;
    var geom = format.readGeometry(wkt, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:900913'
    });
    return new ol.style.Style({
      geometry: geom,
      image: new ol.style.Icon({
        src: imagePath + "ICEARE04P.svg",
        anchor: [0.00, 54.24],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        rotateWithView: false,
        rotation: 0,
        placement: 'point'
      })
    });
  }
}