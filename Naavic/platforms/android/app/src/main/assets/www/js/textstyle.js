function createTextStyle(feature, STRING, HJUST, VJUST, SPACE, CHARS, XOFFS, YOFFS, COLOUR, DISPLAY) {
	var align, baseline, ftext, charsList, fillColor;
	var finaltext = "", finaltext1 = "", displaytext="";
	ftext = feature.get(STRING);
	
	if(feature.get("OBJL") == 121) {
		finaltext = createSBDAREText(ftext);
	}
	else if(feature.get("OBJL") == 86) {
		if (ftext != undefined) {
			var valsou = ftext + "";
				if(valsou != undefined && valsou > 0 && valsou <= 20) {
                        if($("#selectDepths").val()=="meter"){
                             displaytext = valsou.split(".")[0] + getz2Unicode(valsou.split(".")[1]);
                         }else if($("#selectDepths").val()=="feet"){
                             var meters = parseFloat(valsou.split(".")[0]) + parseFloat(valsou.split(".")[1] / 10 );
                             displaytext = getFeets(meters);
                         }else if($("#selectDepths").val()=="fathom"){
                             var meters = parseFloat(valsou.split(".")[0]) + parseFloat(valsou.split(".")[1] / 10 );
                             displaytext = getFathoms(meters);
                         }
                }
			finaltext = displaytext;
		}
	}
	else {
		if (ftext != undefined) {
			finaltext = ftext;	
		}		
	}
	switch (HJUST) {
	case "1":
		align = 'center';
		break;
	case "2":
		align = 'right';
		break;
	case "3":
		align = 'left';
		break;
	}

	switch (VJUST) {
	case "1":
		baseline = 'bottom';
		break;
	case "2":
		baseline = 'middle';
		break;
	case "3":
		baseline = 'top';
		break;
	}
	
	var a = CHARS.substring(1, 2);
	var b = CHARS.substring(2, 3);
	var c = CHARS.substring(3, 4);
	var d = CHARS.substring(4, CHARS.length - 1);

	d = (d * 0.351);
	var weight;
	var fontStyle = 'sans-serif';

	switch (b) {
	case "4":
		weight = 'light';
		break;
	case "5":
		weight = 'normal';
		break;
	case "6":
		weight = 'bold';
		break;
	}

	var size = parseInt((d * 3.779), 10); // 1 mm = 3.779

	var offsetX = parseInt((XOFFS * 3.779), 10);
	var offsetY = parseInt((YOFFS * 3.779), 10);

	if(feature.get("OBJL") == 86) {
		weight = 'normal';
		size = 14;
	}
	
	var textFont = weight + ' ' + size+'px' + ' ' + fontStyle;		
	
	switch (COLOUR) {
	case "CHBLK":
		fillColor = CHBLK;
		break;		
	}
	
	return new ol.style.Text({
		textAlign : align,
		textBaseline : baseline,
		font : textFont,
		text : finaltext,
		fill : new ol.style.Fill({
			color : fillColor
		}),
		placement: 'point',
		offsetX : offsetX,
		offsetY : offsetY
	});
}

function createSBDAREText(ftext) {
    var stext="", stext1="";
	if (ftext != undefined) {
		if (ftext.includes(",")) {
			var ftextValue = ftext.split(",");

			for (var i = 0; i < ftextValue.length; i++) {
				switch (ftextValue[i]) {
				case "1":
					stext1 = "mud";
					 break;
				case "2":
					stext1 = "clay";
					 break;
				case "3":
					stext1 = "silt";
					 break;
				case "4":
					stext1 = "sand";
					 break;
				case "5":
					stext1 = "stones";
					 break;
				case "6":
					stext1 = "gravel";
					 break;
				case "7":
					stext1 = "pebbles";
					 break;
				case "8":
					stext1 = "cobbles";
					 break;
				case "9":
					stext1 = "rock";
					 break;
				case "11":
					stext1 = "lava";
					 break;
				case "14":
					stext1 = "coral";
					 break;
				case "17":
					stext1 = "shells";
					 break;
				case "18":
					stext1 = "boulder";
					 break;
				}
				stext += stext1 + ",";
			}
			stext = stext.substring(0, stext.length-1);
		} else {
			switch (ftext) {
			case "1":
				stext = "mud";
				 break;
			case "2":
				stext = "clay";
				 break;
			case "3":
				stext = "silt";
				 break;
			case "4":
				stext = "sand";
				 break;
			case "5":
				stext = "stones";
				 break;
			case "6":
				stext = "gravel";
				 break;
			case "7":
				stext = "pebbles";
				 break;
			case "8":
				stext = "cobbles";
				 break;
			case "9":
				stext = "rock";
				 break;
			case "11":
				stext = "lava";
				 break;
			case "14":
				stext = "coral";
				 break;
			case "17":
				stext = "shells";
				 break;
			case "18":
				stext = "boulder";
				 break;
			}
		}
	}
	return stext;
}

function createFormattedTextStyle(feature, FORMAT, STRING, HJUST, VJUST, SPACE, CHARS, XOFFS, YOFFS, COLOUR, DISPLAY) {
	
	var align, baseline, ftext, charsList, fillColor, textPlacement, PRIM;
	var finaltext = "", finaltext1 = "";
	if(STRING != undefined)
		STRING = STRING.substring(1,STRING.length-1);
	
	if(FORMAT != undefined) {
		FORMAT = FORMAT.substring(1,FORMAT.length-1);		
	}
	
	PRIM = feature.get("PRIM");

	switch(PRIM) {
		case 1 :  textPlacement = 'point';
				  break;
		case 2 :  textPlacement = 'line';
		  		  break;
		case 3 :  textPlacement = 'point';
		  		  break;
	}
	
	ftext = feature.get(STRING);
  
	if (ftext != undefined) {
		if(FORMAT.includes("%s")) {

			 if((FORMAT.split("%")[0].includes("bn")) || (FORMAT.split("%")[0].includes("by")) && STRING != "OBJNAM" ) {
				var num = ftext.match(/-?\d+\.?\d*/);
				if(num != null)
				finaltext = '"'+num+ '"';
			}
			 else if(STRING == "CATLIT" ){
				 console.log("STRING :: "+STRING)
				 console.log("ftext :: "+ftext)
				 finaltext = FORMAT.split("%")[0] + ftext;
			 }
			else {
				finaltext = FORMAT.split("%")[0] + ftext;
			}			
		}
		else if(FORMAT.includes("%d")) {
			finaltext = FORMAT.split("%")[0] + ftext;
		}
		else if(FORMAT.includes(".")) { //%03.0lf deg
			finaltext1 = FORMAT.split(".")[0];
			finaltext = Math.round(ftext) + " "+(FORMAT.split(".")[1]).split(" ")[1];			
		}
	}
	
	switch (HJUST) {
	case "1":
		align = 'center';
		break;
	case "2":
		align = 'right';
		break;
	case "3":
		align = 'left'; // default
		break;
	}

	switch (VJUST) {
	case "1":
		baseline = 'bottom';// default
		break;
	case "2":
		baseline = 'middle';
		break;
	case "3":
		baseline = 'top';
		break;
	}

	var a = CHARS.substring(1, 2);
	var b = CHARS.substring(2, 3);
	var c = CHARS.substring(3, 4); // non italic
	var d = CHARS.substring(4, CHARS.length - 1);
	// 1 pica = 0.351 mm
	d = (d * 0.351);
	var weight;
	var fontStyle = 'sans-serif';

	switch (b) {
	case "4":
		weight = 'light';
		break;
	case "5":
		weight = 'normal'; // default - medium
		break;
	case "6":
		weight = 'bold';
		break;
	}

	var size = Math.round(d * 3.779);//parseInt((d * 3.779), 10); // 1 mm = 3.779

	var offsetX = Math.round((XOFFS*3.51) * 3.779); //parseInt(((XOFFS*3.51) * 3.779), 10);
	var offsetY = Math.round((YOFFS*3.51) * 3.779); //parseInt(((YOFFS*3.51) * 3.779), 10);

	var textFont = weight + ' ' + size+'px' + ' ' + fontStyle;

	switch (COLOUR) {
	case "CHBLK":
		fillColor = CHBLK;
		break;		
	}

	return new ol.style.Text({
		textAlign : align,
		textBaseline : baseline,
		font : textFont,
		text : finaltext,
		fill : new ol.style.Fill({
			color : fillColor
		}),
		placement: textPlacement,
		offsetX : offsetX,
		offsetY : offsetY
	});
}
function createFormattedTextStyleForLights(feature,CATLIT,LITCHR,COLOUR,SIGPER,HEIGHT,VALNMR,SIGGRP,MLTYLT,CHARS){

	var finaltext = "";
	var litchr_text= "";
	var colour_text= "";
	var sigper_text= "";
	var catlit_text= "";
	var height_text= "";
	var valnmr_text= "";
	var siggrp_text= "";
	var mltylt_text= "";
	
	if(LITCHR != undefined) {
		LITCHR = LITCHR.substring(1,LITCHR.length-1);
		litchr_val = feature.get(LITCHR);
		if(litchr_val != ""){
		 litchr_name =	getAttrsName(LITCHR,litchr_val);
		}
		if(litchr_name != undefined && litchr_name != "" ){
			litchr_text = litchr_name
		}
	}
	if(CATLIT != undefined) {
		CATLIT = CATLIT.substring(1,CATLIT.length-1);
		catlit_val = feature.get(CATLIT);
		var catlit_name = "";
		if(catlit_val != undefined){
			if(catlit_val.includes(",")){
				var array = catlit_val.split(",");
				var arrayLength = array.length;
				for (var i = 0; i < arrayLength; i++) {
					 catlit_name  = catlit_name+getAttrsName(CATLIT,array[i]);
					 
					 if (i != arrayLength - 1) {
						 catlit_name = catlit_name+","
					 }
				}
			}else{
			 catlit_name =	getAttrsName(CATLIT,catlit_val);
			}
		}
		if(catlit_name != undefined && catlit_name != ""){
			catlit_text = catlit_name+" "
		}
	}
	if(COLOUR != undefined) {
		COLOUR = COLOUR.substring(1,COLOUR.length-1);
		colour_val = feature.get(COLOUR);
		
		if(colour_val != ""){
			 colour_name =	getAttrsName(COLOUR,colour_val);
			}

		if(colour_name != undefined && colour_name != ""){
			colour_text = colour_name
		}
	}
	if(SIGPER != undefined) {
		SIGPER = SIGPER.substring(1,SIGPER.length-1);
	    sigper_val = feature.get(SIGPER);

		if(sigper_val != undefined && sigper_val != ""){
			sigper_text = sigper_val+"s"

		}
	}
	if(MLTYLT != undefined) {
		MLTYLT = MLTYLT.substring(1,MLTYLT.length-1);
	    mltylt_val = feature.get(MLTYLT);

		if(mltylt_val != undefined && mltylt_val != ""){
			mltylt_text = mltylt_val

		}
	}
	if(HEIGHT != undefined) {
		HEIGHT = HEIGHT.substring(1,HEIGHT.length-1);
	    height_val = feature.get(HEIGHT);
	    if(height_val != undefined){
		height_val = height_val+"m"
	    }
		
		if(height_val != undefined && height_val != ""){
			height_text = height_val
		}
	}
	if(SIGGRP != undefined) {
		SIGGRP = SIGGRP.substring(1,SIGGRP.length-1);
	    siggrp_val = feature.get(SIGGRP);
		if(siggrp_val != undefined && siggrp_val != "" && siggrp_val != "(1)"){
			siggrp_text = siggrp_val;
		}
	}
	
	if(VALNMR != undefined) {
		VALNMR = VALNMR.substring(1,VALNMR.length-1);
		valnmr_val = feature.get(VALNMR);
		if(valnmr_val != undefined){
		valnmr_val = valnmr_val+"M"
		}

		if(valnmr_val != undefined && valnmr_val != ""){
			valnmr_text = valnmr_val
		}
	}
	var a = CHARS.substring(1, 2);
	var b = CHARS.substring(2, 3);
	var c = CHARS.substring(3, 4); // non italic
	var d = CHARS.substring(4, CHARS.length - 1);
	// 1 pica = 0.351 mm
	d = (d * 0.351);
	var weight;
	var fontStyle = 'sans-serif';

	switch (b) {
	case "4":
		weight = 'light';
		break;
	case "5":
		weight = 'normal'; // default - medium
		break;
	case "6":
		weight = 'bold';
		break;
	}

	var size = Math.round(d * 3.779); // 1 mm = 3.779

	var textFont = weight + ' ' + size+'px' + ' ' + fontStyle;
	
	if(siggrp_text != "" ){
		finaltext = mltylt_text+""+litchr_text+""+siggrp_text+""+colour_text+""+catlit_text+""+sigper_text+""+height_text+""+valnmr_text
	}
	else if(catlit_text == "(hor)" || catlit_text == "(vert)"){
		finaltext = mltylt_text+""+litchr_text+"."+colour_text+"."+catlit_text+""+sigper_text+""+height_text+""+valnmr_text
	}
	else{
		finaltext = mltylt_text+""+litchr_text+"."+catlit_text+""+colour_text+"."+sigper_text+""+height_text+""+valnmr_text
	}
   // if(finaltext.length > 20)
	 //   finaltext = stringDivider(finaltext, 20, '\n');

	return new ol.style.Text({
		textAlign : 'left',
	    textBaseline : 'top',
		font : textFont,
		text : finaltext,
		placement: 'point',
		offsetX : '20',
		offsetY : '20'
	});
}

function stringDivider(str, width, spaceReplacer) {
	if (str.length > width) {
		var p = width;
		while (p > 0 && (str[p] != ' ' && str[p] != '-')) {
			p--;
		}
		if (p > 0) {
			var left;
			if (str.substring(p, p + 1) == '-') {
				left = str.substring(0, p + 1);
			} else {
				left = str.substring(0, p);
			}
			var right = str.substring(p + 1);
			return left + spaceReplacer
					+ stringDivider(right, width, spaceReplacer);
		}
	}
	return str;
}