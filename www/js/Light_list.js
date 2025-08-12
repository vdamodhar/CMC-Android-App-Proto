var LITCHR_list = [ {
    ID: 1,
    NAME: "F"
}, {
    ID: 2,
    NAME: "Fl"
}, {
    ID: 3,
    NAME: "LFl"
}, {
    ID: 4,
    NAME: "Q"
}, {
    ID: 5,
    NAME: "VQ"
}, {
    ID: 6,
    NAME: "UQ"
}, {
    ID: 7,
    NAME: "Iso"
}, {
    ID: 8,
    NAME: "Oc"
}, {
    ID: 9,
    NAME: "IQ"
}, {
    ID: 10,
    NAME: "IVQ"
}, {
    ID: 11,
    NAME: "IUQ"
}, {
    ID: 12,
    NAME: "Mo"
}, {
    ID: 13,
    NAME: "FFl"
}, {
    ID: 14,
    NAME: "Fl LFl"
}, {
    ID: 15,
    NAME: "Oc Fl"
}, {
    ID: 16,
    NAME: "F LFl"
}, {
    ID: 17,
    NAME: "Oc Al"
}, {
    ID: 18,
    NAME: "LFl Al"
}, {
    ID: 19,
    NAME: "Fl Al"
}, {
    ID: 20,
    NAME: "Al"
}, {
    ID: 25,
    NAME: "Q LF1"
}, {
    ID: 26,
    NAME: "VQ LF1"
}, {
    ID: 27,
    NAME: "UQ LFl"
}, {
    ID: 28,
    NAME: "Al"
}, {
    ID: 29,
    NAME: "F Al LFl"
} ];

var COLOUR_list = [ {
    ID: 1,
    NAME: "W"
}, {
    ID: 3,
    NAME: "R"
}, {
    ID: 4,
    NAME: "G"
}, {
    ID: 5,
    NAME: "Bu"
}, {
    ID: 6,
    NAME: "Y"
}, {
    ID: 9,
    NAME: "Y | Am"
}, {
    ID: 10,
    NAME: "Vi"
}, {
    ID: 11,
    NAME: "Y | Or"
} ];

var CATLIT_list = [ {
    ID: 1,
    NAME: "Dir"
}, {
    ID: 4,
    NAME: "Leading light"
}, {
    ID: 5,
    NAME: "Aero"
}, {
    ID: 6,
    NAME: "Air obstruction light"
}, {
    ID: 7,
    NAME: "Fog detector light"
}, {
    ID: 8,
    NAME: "Flood light"
}, {
    ID: 9,
    NAME: "Strip light"
}, {
    ID: 10,
    NAME: "Subsidiary light"
}, {
    ID: 11,
    NAME: "Spotlight"
}, {
    ID: 12,
    NAME: "Front"
}, {
    ID: 13,
    NAME: "Rear"
}, {
    ID: 14,
    NAME: "Lower"
}, {
    ID: 15,
    NAME: "Upper"
}, {
    ID: 16,
    NAME: "moiré effect"
}, {
    ID: 17,
    NAME: "Reserve light"
}, {
    ID: 18,
    NAME: "Bearing light"
}, {
    ID: 19,
    NAME: "(hor)"
}, {
    ID: 20,
    NAME: "(vert)"
} ];

function getAttrsName(attr, id) {
    if (attr == "CATLIT") {
    	for (var c = 0; c < CATLIT_list.length; c++){
              if (CATLIT_list[c].ID == id) {
				    return CATLIT_list[c].NAME;
				    break;
		      }
         }
    } 
    else if (attr == "LITCHR"){
    	for (var c = 0; c < LITCHR_list.length; c++){
		    if (LITCHR_list[c].ID == id) {
				    return LITCHR_list[c].NAME;
				    break;
				}
         }
    } 
    else
    { 
    	for (var c = 0; c < COLOUR_list.length; c++){
        if (COLOUR_list[c].ID == id) {
			    return COLOUR_list[c].NAME;
			    break;
    	   }
        }
    }
}