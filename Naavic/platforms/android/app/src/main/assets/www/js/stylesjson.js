var dayImagePath = "./resources/images/svgs/day/";
var nightImagePath = "./resources/images/svgs/night/";
var DEPDW, DEPMD, DEPVS, DEPIT;
DEPDW = "#E2F3DE";// #FBFFE"; // "#A8D099"; = Above 30
DEPMD = "#B4D4EE";// "#E2F3DE;" // "#E2F3dE"; = medium deep - safety contour
DEPVS = "#88BFEF";// "#A5D3EA;" // "#B4D4EE"; = very shallow
DEPIT = "#A8D099"; // less than zero - inter tidal

var genericDayJSON = [
		// Group1 Objects

		// 1. DEPARE - 42

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "42"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "0"
			} ],

			"Stroke_color" : "#A8D099",
			"Stroke_width" : "1",
			"Fill_color" : "#A8D099",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 90
		},

		{
			"Condition" : "BOTH_ORANDOR",
			"Attributes" : [ [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "42",
			} ],

			[ {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "0",
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "2.0",
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "1.8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "2.0"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "5.0"
			}]

			],

			"Stroke_color" : "#88BFEF",
			"Stroke_width" : "1",
			"Fill_color" : "#88BFEF",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 90
		},

		{
			"Condition" : "BOTH_ORANDOR",
			"Attributes" : [ [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "42",
			} ], [ {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "1.8",
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "3.6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "3.6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "5.4"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "9.0"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "10"
			} ] ],
			"Stroke_color" : DEPMD,
			"Stroke_width" : "1",
			"Fill_color" : DEPMD,
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 90
		},

		{
			"Condition" : "BOTH_ORANDOR",
			"Attributes" : [ [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "42",
			} ], [ {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "9.0",
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "10",
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "18.2"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "9.0"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "10"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "18.2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "100"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "DRVAL2",
				"Attribute_Value" : "304.8"
			} ] ],
			"Stroke_color" : DEPDW,
			"Stroke_width" : "1",
			"Fill_color" : DEPDW,
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 90
		},

		// 2. DRGARE - 46
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "46"
			}, {
				"Comparision" : "<=",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "10.0"
			} ],

			"Stroke_color" : "#969f99",
			"Stroke_width" : "2",
			"Fill_color" : dayImagePath + "dredged1.png",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 99
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "46"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "DRVAL1",
				"Attribute_Value" : "10.0"
			} ],

			"Stroke_color" : "#969f99",
			"Stroke_width" : "2",
			"Fill_color" : dayImagePath + "dredged2.png",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 99
		},

		// 3. LNDARE - 71
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "71"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],
			"Stroke_color" : "transparent",// "#e9d480",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 999,
			//"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',-1,-1,CHBLK,26)"
		},

		// 4. UNSARE - 154
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "154"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],
			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : dayImagePath + "unsurvyed.png",
			"linedashstyle" : [ 12, 6 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// 6. COALNE - 30
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "30"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],
			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 91
		},

		// 7. DEPCNT - 43
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "43"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],
			"Stroke_color" : "#a1a492",// "#969f99",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 99
		},
		
		// 5. SLCONS - 122 - PRIM - 3
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "122"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],
			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "#decd8b",
			"linedashstyle" : [ 20.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

				{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "122"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 100
		},

		// 8. SLCONS - 122 - PRIM - 2
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "122"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],
			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 20.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 1000
		},
		// SLCONS 122
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "122"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MORFAC03.svg",
			"rotation" : "0",
			"offset" : [ 5.44, 4.88 ],
			"zIndex" : 999
		},

		// Navigational Hazards
		// 1. DMPGRD - 48 - PRIM - 3

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
		        "Attribute_Name" : "OBJL",
		        "Attribute_Value" : "48"
		   }, {
		       "Comparision" : "geometrytype",
		       "Attribute_Name" : "PRIM",
		       "Attribute_Value" : "3"
		   } ],
		   "Stroke_color" : "#c045d1",
		   "Stroke_width" : "2",
		   "Fill_color" : "transparent",
		   "linedashstyle" : [ 12.0, 6.8 ],
		   "imageFill" : "transparent"

		},


		// 2. DMPGRD - 48 - PRIM - 1
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "48"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO07.svg",
			"rotation" : "0",
			"offset" : [ 8.88, 9.60 ],
			"zIndex" : 9
		},

		// 3. OBSTRN - 86 - PRIM - 3
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",// dayImagePath + "ACHARE51.svg",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			//"textfeaturename" : "VALSOU",
			"zIndex" : 9
			//"textfeaturename" : "TX(OBJNAM,2,1,2,'15110',-1,-2,CHBLK,26)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"textoffsetX" : "7.60",
			"textoffsetY" : "5.82",
			"textfont" : "12px sans-serif",
			//"textfeaturename" : "VALSOU", // VALSOU - changed as it is displaying
			// multiple times tile
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9//,
			//"textfeaturename" : "VALSOU"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9//,
			//"textfeaturename" : "VALSOU"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9//,
			//"textfeaturename" : "VALSOU"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "10"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9//,
			//"textfeaturename" : "VALSOU"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9//,
			//"textfeaturename" : "VALSOU"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9//,
			//"textfeaturename" : "VALSOU"
		},

		// 4. OBSTRN - 86 - PRIM - 2
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "10"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 1.0, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		// 5. OBSTRN - 86 - PRIM - 1

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FOULGND1.svg",
			"offset" : [ 7.60, 5.82 ],
			"rotation" : "0",
			"textoffsetX" : "7.60",
			"textoffsetY" : "5.82",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLTHAZ02.svg",
			"offset" : [ 12.25, 12.09 ],
			"rotation" : "0",
			"textoffsetX" : "12.25",
			"textoffsetY" : "12.09",
			"textfont" : "10px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"offset" : [ 7.79, 9.94 ],
			"imageFill" : dayImagePath + "ACHARE02.svg",
			"rotation" : "0",
			"textoffsetX" : " 7.79",
			"textoffsetY" : "9.94",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "10"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLTHAZ02.svg",
			"offset" : [ 12.25, 12.09 ],
			"rotation" : "0",
			"textoffsetX" : "12.25",
			"textoffsetY" : "12.09",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FOULGND1.svg",
			"offset" : [ 7.60, 5.82 ],
			"rotation" : "0",
			"textoffsetX" : "7.60",
			"textoffsetY" : "5.82",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLTHAZ02.svg",
			"offset" : [ 12.25, 12.09 ],
			"rotation" : "0",
			"textoffsetX" : "12.25",
			"textoffsetY" : "12.09",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "9"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"offset" : [ 7.79, 9.94 ],
			"imageFill" : dayImagePath + "ACHARE02.svg",
			"rotation" : "0",
			"textoffsetX" : " 7.79",
			"textoffsetY" : "9.94",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATOBS",
				"Attribute_Value" : "10"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLTHAZ02.svg",
			"offset" : [ 12.25, 12.09 ],
			"rotation" : "0",
			"textoffsetX" : "12.25",
			"textoffsetY" : "12.09",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLTHAZ02.svg",
			"offset" : [ 12.25, 12.09 ],
			"rotation" : "0",
			"textoffsetX" : "12.25",
			"textoffsetY" : "12.09",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OBSTRN01_1.svg",
			"offset" : [ 7.75, 7.75 ],
			"rotation" : "0",
			"textoffsetX" : "7.75",
			"textoffsetY" : "7.75",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "86"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OBSTRN01.svg",
			"offset" : [ 7.75, 7.75 ],
			"rotation" : "0",
			"textoffsetX" : "7.75",
			"textoffsetY" : "7.75",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		// 6. WRECKS - 159 - PRIM - 3

		// 7. WRECKS - 159 - PRIM - 1
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FOULGND1.svg",
			"offset" : [ 7.60, 5.82 ],
			"rotation" : "0",
			"textoffsetX" : "7.60",
			"textoffsetY" : "5.82",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			}, {
				"Comparision" : "<=",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "30"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OBSTRN01_1.svg",
			"offset" : [ 7.75, 7.75 ],
			"rotation" : "0",
			"textoffsetX" : "7.75",
			"textoffsetY" : "7.75",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "30"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OBSTRN02_1.svg",
			"offset" : [ 7.56, 7.56 ],
			"rotation" : "0",
			"textoffsetX" : "7.56",
			"textoffsetY" : "7.56",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WRECKS04.svg",
			"offset" : [ 9.45, 5.67 ],
			"rotation" : "0",
			"textoffsetX" : "9.45",
			"textoffsetY" : "5.67",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OBSTRN02_1.svg",
			"offset" : [ 7.56, 7.56 ],
			"rotation" : "0",
			"textoffsetX" : "7.56",
			"textoffsetY" : "7.56",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "2"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WRECKS05.svg",
			"offset" : [ 11.23, 7.94 ],
			"rotation" : "0",
			"textoffsetX" : "11.23",
			"textoffsetY" : "7.94",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "3"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FOULGND1.svg",
			"offset" : [ 7.60, 5.82 ],
			"rotation" : "0",
			"textoffsetX" : "7.60",
			"textoffsetY" : "5.82",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "4"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WRECKS05.svg",
			"offset" : [ 11.23, 7.94 ],
			"rotation" : "0",
			"textoffsetX" : "11.23",
			"textoffsetY" : "7.94",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATWRK",
				"Attribute_Value" : "5"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WRECKS01.svg",
			"offset" : [ 13.23, 11.34 ],
			"rotation" : "0",
			"textoffsetX" : "13.23",
			"textoffsetY" : "11.34",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OBSTRN02_1.svg",
			"offset" : [ 7.56, 7.56 ],
			"rotation" : "0",
			"textoffsetX" : "7.56",
			"textoffsetY" : "7.56",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "159"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WRECKS01.svg",
			"offset" : [ 13.23, 11.34 ],
			"textoffsetX" : "13.23",
			"textoffsetY" : "11.34",
			"textfeaturename" : "null",
			"zIndex" : 9
		},

		// 8. UWTROC - 153 - PRIM - 1

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "153"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "VALSOU",
				"Attribute_Value" : "0"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OBSTRN02_1.svg",
			"offset" : [ 7.56, 7.56 ],
			"rotation" : "0",
			"textoffsetX" : "7.56",
			"textoffsetY" : "7.56",
			"textfont" : "12px sans-serif",
			"textfeaturename" : "VALSOU",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "153"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "UWTROC04.svg",
			"offset" : [ 7.67, 6.20 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "153"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "UWTROC03.svg",
			"offset" : [ 7.60, 7.60 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "153"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "UWTROC03.svg",
			"offset" : [ 7.60, 7.60 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "153"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OBSTRN02.svg",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		// Soundings
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "129"
			},

			{
				"Comparision" : "<=",
				"Attribute_Name" : "z1",
				"Attribute_Value" : "30"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "2",
			"Fill_color" : "#000000",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "drawimage",
			"rotation" : "0",
			// "offset" : [ 0, 0 ],
			"textoffsetY" : "0",
			"textoffsetX" : "0",
			"textfont" : "bold 14px sans-serif;#a1a492",
			"textfeaturename" : "z1+z2",
			"imgpoints" : "0",
			"imgradius" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "129"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "z1",
				"Attribute_Value" : "30"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "2",
			"Fill_color" : "#000000",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "drawimage",
			"rotation" : "0",
			// "offset" : [ 0, 0 ],
			"textoffsetY" : "0",
			"textoffsetX" : "0",
			"textfont" : "bold 14px sans-serif;#a1a492",
			"textfeaturename" : "z1",
			"imgpoints" : "0",
			"imgradius" : "0",
			"zIndex" : 9
		},

		// Navigational Aids
		// BCNCAR 5
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNSTK02.svg",
			"rotation" : "0",
			"offset" : [ 4.72, 17.05 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNTOW01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNLTC01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DAYSQR21.svg",
			"rotation" : "0",
			"offset" : [ 7.48, 23.43 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BCNISD 6
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNSTK02.svg",
			"rotation" : "0",
			"offset" : [ 4.72, 17.05 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNTOW01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNLTC01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN03.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 16.86 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BCNLAT 7
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CAIRNS11.svg",
			"rotation" : "0",
			"offset" : [ 9.07, 16.63 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATLAM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "PRICKE03.svg",
			"rotation" : "0",
			"offset" : [ 4.72, 16.44 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATLAM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "PRICKE04.svg",
			"rotation" : "0",
			"offset" : [ 5.33, 16.78 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNSTK02.svg",
			"rotation" : "0",
			"offset" : [ 4.72, 17.05 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNTOW01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNLTC01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CAIRNS01.svg",
			"rotation" : "0",
			"offset" : [ 9.07, 16.63 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DAYSQR21.svg",
			"rotation" : "0",
			"offset" : [ 7.48, 23.43 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BCNSAW 8
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNSTK02.svg",
			"rotation" : "0",
			"offset" : [ 4.72, 17.05 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNTOW01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNLTC01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN03.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 16.86 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BCNSPP 9
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CAIRNS11.svg",
			"rotation" : "0",
			"offset" : [ 9.07, 16.63 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSPM",
				"Attribute_Value" : "44"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSPM",
				"Attribute_Value" : "18"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "NOTBRD11.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 15.12 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNSTK02.svg",
			"rotation" : "0",
			"offset" : [ 4.72, 17.05 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNTOW01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNLTC01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CAIRNS01.svg",
			"rotation" : "0",
			"offset" : [ 9.07, 16.63 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BCNSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "9"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BCNGEN03.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 16.86 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BOYCAR 14
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYCON01.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 16.55 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYCAN01.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 12.66 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPH01.svg",
			"rotation" : "0",
			"offset" : [ 10.51, 16.55 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYPIL01.svg",
			"rotation" : "0",
			"offset" : [ 11.60, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYBAR01.svg",
			"rotation" : "0",
			"offset" : [ 13.42, 14.74 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSUP01.svg",
			"rotation" : "0",
			"offset" : [ 16.21, 17.95 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "14"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYGEN03.svg",
			"rotation" : "0",
			"offset" : [ 10.05, 15.91 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BOYINB 15
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "15"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYINB01.svg",
			"rotation" : "0",
			"offset" : [ 16.21, 16.40 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BOYISD 16
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYCAN01.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 12.66 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPH01.svg",
			"rotation" : "0",
			"offset" : [ 10.51, 16.55 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYPIL01.svg",
			"rotation" : "0",
			"offset" : [ 11.60, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYBAR01.svg",
			"rotation" : "0",
			"offset" : [ 13.42, 14.74 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSUP01.svg",
			"rotation" : "0",
			"offset" : [ 16.21, 17.95 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "16"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYGEN03.svg",
			"rotation" : "0",
			"offset" : [ 10.05, 15.91 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BOYLAT 17
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			},  {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYCON01.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 16.55 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYCAN01.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 12.66 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPH01.svg",
			"rotation" : "0",
			"offset" : [ 10.51, 16.55 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYPIL01.svg",
			"rotation" : "0",
			"offset" : [ 11.60, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYBAR01.svg",
			"rotation" : "0",
			"offset" : [ 13.42, 14.74 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSUP01.svg",
			"rotation" : "0",
			"offset" : [ 16.21, 17.95 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "17"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYGEN03.svg",
			"rotation" : "0",
			"offset" : [ 10.05, 15.91 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BOYSAW 18
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "18"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPH01.svg",
			"rotation" : "0",
			"offset" : [ 10.51, 16.55 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "18"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYPIL01.svg",
			"rotation" : "0",
			"offset" : [ 11.60, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "18"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "18"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYBAR01.svg",
			"rotation" : "0",
			"offset" : [ 13.42, 14.74 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "18"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSUP01.svg",
			"rotation" : "0",
			"offset" : [ 16.21, 17.95 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "18"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "18"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYGEN03.svg",
			"rotation" : "0",
			"offset" : [ 10.05, 15.91 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BOYSPP 19
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSPM",
				"Attribute_Value" : "9"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSUP01.svg",
			"rotation" : "0",
			"offset" : [ 16.21, 17.95 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSPM",
				"Attribute_Value" : "15"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSUP03.svg",
			"rotation" : "0",
			"offset" : [ 16.33, 21.62 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYCON01.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 16.55 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYCAN01.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 12.66 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPH01.svg",
			"rotation" : "0",
			"offset" : [ 10.51, 16.55 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYPIL01.svg",
			"rotation" : "0",
			"offset" : [ 11.60, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYBAR01.svg",
			"rotation" : "0",
			"offset" : [ 13.42, 14.74 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSUP01.svg",
			"rotation" : "0",
			"offset" : [ 16.21, 17.95 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "19"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYGEN03.svg",
			"rotation" : "0",
			"offset" : [ 10.05, 15.91 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// BUISGL 12
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "33"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "!=",
				"Attribute_Name" : "OBJNAM",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DRGARE01P.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 7.56 ],
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,0,CHBLK,26)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL13.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL13.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "22"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL14.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 5.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "23"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL14.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 5.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "24"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL14.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 5.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "25"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL14.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 5.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "26"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL15.svg",
			"rotation" : "0",
			"offset" : [ 6.92, 13.80 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "27"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL15.svg",
			"rotation" : "0",
			"offset" : [ 6.92, 13.80 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "33"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN03.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "35"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON12.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "33"
			}, {
				"Comparision" : "!=",
				"Attribute_Name" : "OBJNAM",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN03.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,0,CHBLK,26)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUISGL11.svg",
			"rotation" : "0",
			"offset" : [ 4.99, 4.99 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "20"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL01.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "21"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL01.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "22"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL04.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 5.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "23"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL04.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 5.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "24"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL04.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 5.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "25"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL04.svg",
			"rotation" : "0",
			"offset" : [ 10.89, 5.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "26"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL05.svg",
			"rotation" : "0",
			"offset" : [ 6.99, 13.91 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "27"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL05.svg",
			"rotation" : "0",
			"offset" : [ 6.99, 13.91 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "33"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN03.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "35"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON02.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "12"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUISGL01.svg",
			"rotation" : "0",
			"offset" : [ 4.99, 4.99 ],
			"zIndex" : 9
		},

		// CRANES 35
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "35"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CRANES01.svg",
			"rotation" : "0",
			"offset" : [ 9.45, 17.01 ],
			"zIndex" : 9
		},

		// DAYMAR 39
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "39"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "19"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DAYSQR21.svg",
			"rotation" : "0",
			"offset" : [ 7.48, 23.43 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "39"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "20"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DAYSQR21.svg",
			"rotation" : "0",
			"offset" : [ 7.48, 23.43 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "39"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "21"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DAYSQR21.svg",
			"rotation" : "0",
			"offset" : [ 7.48, 23.43 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "39"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "24"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DAYTRI21.svg",
			"rotation" : "0",
			"offset" : [ 9.37, 25.06 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "39"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "25"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DAYTRI25.svg",
			"rotation" : "0",
			"offset" : [ 9.49, 22.15 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "39"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DAYSQR21.svg",
			"rotation" : "0",
			"offset" : [ 7.48, 23.43 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// FOGSIG 58
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "58"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FOGSIG01.svg",
			"rotation" : "0",
			"offset" : [ 18.33, 0.00 ],
			"zIndex" : 9
		},

		// FORSTC 59
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "59"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			}, ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FORSTC11.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "59"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FORSTC01.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		// //*******OBJL NAVAIDS ******////
		// TOPMAR - 144
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR02.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 25.51 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR04.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 25.89 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "13"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR05.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 34.96 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "14"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR06.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 34.20 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "11"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR07.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 34.58 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "10"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR08.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 34.20 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR10.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 26.27 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR12.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 34.58 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR13.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 28.16 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR14.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 25.32 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "9"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR16.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 26.65 ],
			"zIndex" : 9
		},

		{
			"Condition" : "OR",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "33"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR17.svg",
			"rotation" : "0",
			"offset" : [ 3.21, 28.72 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TOPSHP",
				"Attribute_Value" : "28"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR18.svg",
			"rotation" : "0",
			"offset" : [ 1.97, 28.72 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "144"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOPMAR30.svg",
			"rotation" : "0",
			"offset" : [ 4.16, 28.35 ],
			"zIndex" : 9
		},

		// SISTAW 124
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "124"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SISTAT02.svg",
			"rotation" : "0",
			"offset" : [ 0.91, 0.91 ],
			"zIndex" : 9
		},

		// SISTAT 123
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "123"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SISTAT02.svg",
			"rotation" : "0",
			"offset" : [ 0.91, 0.91 ],
			"zIndex" : 9
		},

		// SILTNK 125
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SILBUI11.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 5.67 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON12.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS03.svg",
			"rotation" : "0",
			"offset" : [ 6.61, 21.88 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS12.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 18.90 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON12.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SILBUI01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 5.67 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON02.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS01.svg",
			"rotation" : "0",
			"offset" : [ 6.54, 21.85 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS02.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 18.90 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON02.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		// RETRFL 113
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "113"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "RETRFL01.svg",
			"rotation" : "0",
			"offset" : [ 0.00, 13.04 ],
			"zIndex" : 9
		},

		// PILPNT 90
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "90"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "PILPNT02.svg",
			"rotation" : "0",
			"offset" : [ 3.78, 3.78 ],
			"zIndex" : 9
		},

		// LIGHTS 75
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('LITCHR','CATLIT','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYBAR01.svg",
			"rotation" : "0",
			"offset" : [ 13.42, 14.74 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSUP01.svg",
			"rotation" : "0",
			"offset" : [ 16.21, 17.95 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYSPR01.svg",
			"rotation" : "0",
			"offset" : [ 5.56, 16.33 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "COLOUR",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "LIGHTS13.svg",
			"rotation" : "2.35619",
			"offset" : [ 4.54, 26.65 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"

		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "COLOUR",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "LIGHTS11.svg",
			"rotation" : "2.35619",
			"offset" : [ 4.54, 26.65 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "COLOUR",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "LIGHTS12.svg",
			"rotation" : "2.35619",
			"offset" : [ 4.54, 26.65 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "COLOUR",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "LIGHTS13.svg",
			"rotation" : "2.35619",
			"offset" : [ 4.54, 26.65 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
		},

		{
			"Condition" : "BOTH_ORANDOR",
			"Attributes" : [ [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "75",
			} ],

			[ {
				"Comparision" : "==",
				"Attribute_Name" : "COLOUR",
				"Attribute_Value" : "1,4",
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "COLOUR",
				"Attribute_Value" : "3,3"
			} ]

			],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "LIGHTS12.svg",
			"rotation" : "2.35619",
			"offset" : [ 4.54, 26.65 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
		},

		// RTPBCN 103
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "103"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "RTPBCN02.svg",
			"rotation" : "0",
			"offset" : [ 12.13, 11.49 ],
			"zIndex" : 9
		},

		// RDOSTA 105
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "105"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATROS",
				"Attribute_Value" : "10"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DRFSTA01.svg",
			"rotation" : "0",
			"offset" : [ 11.34, 11.34 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "105"
			} ],
			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "RDOSTA02.svg",
			"rotation" : "0",
			"offset" : [ 11.23, 11.15 ],
			"zIndex" : 9
		},

		// NAVLNE 85
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "85"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#a1a492",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// RECTRC 109
		/*
		 * RECTRC LC(RECDEF02);TE(‘%03.0lf
		 * deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11) RECTRC CATTRK1TRAFIC1
		 * LC(RECTRC12);TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)
		 * RECTRC CATTRK1TRAFIC2 LC(RECTRC12);TE(‘%03.0lf
		 * deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11) RECTRC CATTRK1TRAFIC3
		 * LC(RECTRC12);TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)
		 * RECTRC CATTRK1TRAFIC4 LC(RECTRC10);TE(‘%03.0lf
		 * deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11) RECTRC CATTRK2TRAFIC1
		 * LC(RECTRC11);TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)
		 * RECTRC CATTRK2TRAFIC2 LC(RECTRC11);TE(‘%03.0lf
		 * deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11) RECTRC CATTRK2TRAFIC3
		 * LC(RECTRC11);TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)
		 * RECTRC CATTRK2TRAFIC4 LC(RECTRC09);TE(‘%03.0lf
		 * deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11) RECTRC TRAFIC1
		 * LC(RECTRC11);TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)
		 * RECTRC TRAFIC2 LC(RECTRC11);TE(‘%03.0lf
		 * deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11) RECTRC TRAFIC3
		 * LC(RECTRC11);TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)
		 * RECTRC TRAFIC4 LC(RECTRC09);TE(‘%03.0lf
		 * deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)
		 */

		/*{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#a1a492",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "transparent"
		},
*/
		// RADSTA 102
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "102"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATRAS",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "RDOSTA02.svg",
			"rotation" : "0",
			"offset" : [ 11.23, 11.15 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('ch %s','COMCHA',3,1,2,'15110',0,0,CHBLK,11)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "102"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "RDOSTA02.svg",
			"rotation" : "0",
			"offset" : [ 11.23, 11.15 ],
			"zIndex" : 9
		},

		// *************** ENC OTHERS ********************///\
		// ACHARE 4
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATACH",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",// dayImagePath + "ACHARE51.svg",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
			//"textfeaturename" : "TX(OBJNAM,2,1,2,'15110',-1,-2,CHBLK,26)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",// dayImagePath + "ACHARE51.svg",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9/*,
			"textfeaturename" : "TX(OBJNAM,2,1,2,'15110',-1,-2,CHBLK,26)"*/
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"offset" : [ 7.79, 9.94 ],
			"imageFill" : dayImagePath + "ACHARE02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,3,1,2,'15110',-1,2,CHBLK,26)"
		},

		// RESARE 112
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "112"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATREA",
				"Attribute_Value" : "27"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 11.33, 6.8 ],
			"imageFill" : dayImagePath + "ESSARE01.svg",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "112"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATREA",
				"Attribute_Value" : "28"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 11.33, 6.8 ],
			"imageFill" : dayImagePath + "PSSARE01.svg",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "112"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 11.33, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// CTNARE 27
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "27"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "27"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO06.svg",
			"rotation" : "0",
			//"offset" : [ 9.68, 9.60 ],
			"offset" : [ 0, 0 ],
			"zIndex" : 9
		},

		// MIPARE 83
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "83"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.68, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "83"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO06.svg",
			"rotation" : "0",
			"offset" : [ 9.68, 9.60 ],
			"zIndex" : 9
		},

		// ADMARE 1
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",// "#768C97",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 11.33, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// CTSARE 25
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "25"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "25"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO07.svg",
			"rotation" : "0",
			"offset" : [ 8.88, 9.60 ],
			"zIndex" : 9
		},

		// PRDARE 97
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "9"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLASTK11.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 21.05 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON12.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WIMCON11.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 23.17 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLASTK01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 21.05 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TMBYRD01.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON02.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPRA",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WIMCON01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 23.17 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "97"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "PRDINS02.svg",
			"rotation" : "0",
			"offset" : [ 9.64, 10.39 ],
			"zIndex" : 9
		},

		// DOCARE 45
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "45"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "CONDTN",
				"Attribute_Value" : "0"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "45"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
		},

		// FSHFAC 55
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFIF",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFIF",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFIF",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFIF",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFIF",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FSHFAC03.svg",
			"rotation" : "0",
			"offset" : [ 11.41, 3.06 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFIF",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FSHFAC02.svg",
			"rotation" : "0",
			"offset" : [ 10.58, 8.13 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFIF",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FSHFAC02.svg",
			"rotation" : "0",
			"offset" : [ 10.58, 8.13 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFIF",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FSHFAC02.svg",
			"rotation" : "0",
			"offset" : [ 10.58, 8.13 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "55"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FSHHAV01.svg",
			"rotation" : "0",
			"offset" : [ 23.62, 11.72 ],
			"zIndex" : 9
		},

		// CBLARE 20
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"offset" : [ 6.46, 21.39 ],
			"zIndex" : 9
		},

		// PIPARE 92
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "92"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPIP",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "92"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATPIP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "92"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "PRODCT",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "92"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "92"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO07.svg",
			"rotation" : "0",
			"offset" : [ 8.88, 9.60 ],
			"zIndex" : 9
		},

		// SBDARE 121

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "121"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "NATSUR",
				"Attribute_Value" : "0"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :"transparent",// dayImagePath + "RCKLDG01P.svg",
			"zIndex" : 9,
			"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "121"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "NATSUR",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : dayImagePath + "RCKLDG01P.svg",
			"zIndex" : 9,
			"textfeaturename" : "null"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "121"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "NATSUR",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : dayImagePath + "RCKLDG01P.svg",
			"zIndex" : 9,
			"textfeaturename" : "null"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "121"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "NATSUR",
				"Attribute_Value" : "14"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : dayImagePath + "RCKLDG01P.svg",
			"zIndex" : 9,
			"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "121"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "NATSUR",
				"Attribute_Value" : "0"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "121"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "121"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "121"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"zIndex" : 9,
			"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
		},

		// FAIRWY 51 -- Need to add more conditions
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "51"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "FAIRWY51.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "51"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "FAIRWY51.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "51"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "FAIRWY51.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
		},{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "51"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "FAIRWY52.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "51"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9/*,
			"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
		},

		// PRCARE 96
		/*{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "96"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : dayImagePath + "PRCARE51.svg",
			"linedashstyle" :[ 22.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 87
		},*/
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "96"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",//"transparent",
			"linedashstyle" :[ 22.6, 6.8 ],
			"imageFill" : dayImagePath + "PRCARE51.svg",
			"zIndex" : 87
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "96"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "PRCARE12.svg",
			"rotation" : "0",
			"offset" : [ 6.69, 11.07 ],
			"zIndex" : 9
		},

		// HRBFAC 64
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "64"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATHAF",
				"Attribute_Value" : "1"
			},  {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "ROLROL01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "64"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATHAF",
				"Attribute_Value" : "4"
			},  {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "HRBFAC09.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "64"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATHAF",
				"Attribute_Value" : "5"
			},  {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SMCFAC02.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "64"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO07.svg",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "64"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATHAF",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "ROLROL01.svg",
			"rotation" : "0",
			"offset" : [ 13.87, 5.37 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "64"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATHAF",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "HRBFAC09.svg",
			"rotation" : "0",
			"offset" : [ 11.23, 11.00 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "64"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATHAF",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SMCFAC02.svg",
			"rotation" : "0",
			"offset" : [ 12.85, 13.04 ],
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "64"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO07.svg",
			"rotation" : "0",
			"offset" : [ 8.88, 9.60 ],
			"zIndex" : 9
		},

		// BRIDGE 11
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"zIndex" : 9/*,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"*/

		 /** , "imageFill" : "transparent", "textoffsetY" : "2", "textoffsetX" :
		 * "2", "textfont" : "12px sans-serif;#4C5B63", "textfeaturename" :
		 * "OBJNAM"*/

		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :  dayImagePath + "BRIDGE01.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"zIndex" : 9/*,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"*/

		 /** , "imageFill" : "transparent", "textoffsetY" : "2", "textoffsetX" :
		 * "2", "textfont" : "12px sans-serif;#4C5B63", "textfeaturename" :
		 * "OBJNAM"*/

		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"offset" : [ 7.56, 7.52 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"offset" : [ 7.56, 7.52 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"offset" : [ 7.56, 7.52 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"offset" : [ 7.56, 7.52 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"offset" : [ 7.56, 7.52 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATBRG",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRIDGE01.svg",
			"offset" : [ 7.56, 7.52 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "11"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "3",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,3,1,2,'15110',1,0,CHBLK,21)"
		/*
		 * , "textoffsetY" : "0", "textoffsetX" : "0", "textfont" : "12px
		 * sans-serif;#4C5B63", "textfeaturename" : "OBJNAM", "imgpoints" : "0",
		 * "imgradius" : "0"
		 */
		},
		// No display available for Bridge - Point
		/*
		 * { "Condition" : "NONE", "Attributes" : [ { "Comparision" : "==",
		 * "Attribute_Name" : "OBJL", "Attribute_Value" : "11" } ],
		 *
		 * "Stroke_color" : "transparent", "Stroke_width" : "0", "Fill_color" :
		 * "transparent", "linedashstyle" : [ 0, 0 ], "imageFill" :
		 * "transparent", "rotation" : "0",
		 *
		 * "offset" : [ 0, 0 ] },
		 */

		// CANALS - 23
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "23"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "23"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONDTN",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "23"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONDTN",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "23"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONDTN",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "23"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONDTN",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "23"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// DRYDOC - 47
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "47"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "#BFBF8F",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// DWRTPT - 41
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "41"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : "0"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" :  dayImagePath + "TSSLPT51.svg",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "41"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : "0"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" :  dayImagePath + "TSSLPT51.svg",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "41"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : "0"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" :  dayImagePath + "TSSLPT51.svg",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "41"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : ">",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : "0"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" : dayImagePath + "DWRUTE51.svg",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "41"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" : dayImagePath + "TSLDEF51.svg",
			"zIndex" : 9
		},

		// FLODOC - 57
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "57"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "57"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// FSHGRD - 56
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "56"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// HRBARE - 63
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "63"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 13.6, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// HULKES - 65
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "65"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "65"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "HULKES01.svg",
			"rotation" : "0",
			"offset" : [ 9.60, 5.33 ],
			"zIndex" : 9
		},

		// LAKARE - 69
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "69"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// LNDMRK - 74
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "33"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,2,'15110',0,0,CHBLK,26)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "33"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,2,'15110',0,0,CHBLK,26)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "33"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS03.svg",
			"rotation" : "0",
			"offset" : [ 6.61, 21.88 ],
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,-1,CHBLK,26)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "15"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL13.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "15"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL13.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL13.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL13.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL13.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL13.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "26"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL15.svg",
			"rotation" : "0",
			"offset" : [ 6.92, 13.80 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "27"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL15.svg",
			"rotation" : "0",
			"offset" : [ 6.92, 13.80 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "31"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS15.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 26.46 ],
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,1,CHBLK,26)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "31"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS05.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 26.46 ],
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,1,CHBLK,26)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "33"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS01.svg",
			"rotation" : "0",
			"offset" : [ 6.54, 21.85 ],
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,1,CHBLK,26)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CAIRNS11.svg",
			"rotation" : "0",
			"offset" : [ 9.07, 16.63 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHIMNY11.svg",
			"rotation" : "0",
			"offset" : [ 6.61, 23.28 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DSHAER11.svg",
			"rotation" : "0",
			"offset" : [ 6.27, 18.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLGSTF01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLASTK11.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 21.05 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MSTCON14.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 22.68 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "8"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN03.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "9"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MONUMT12.svg",
			"rotation" : "0",
			"offset" : [ 7.45, 13.42 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "10"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MONUMT12.svg",
			"rotation" : "0",
			"offset" : [ 7.45, 13.42 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "12"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MONUMT12.svg",
			"rotation" : "0",
			"offset" : [ 7.45, 13.42 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "13"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MONUMT12.svg",
			"rotation" : "0",
			"offset" : [ 7.45, 13.42 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "15"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DOMES011.svg",
			"rotation" : "0",
			"offset" : [ 9.37, 14.02 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "16"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "RASCAN11.svg",
			"rotation" : "0",
			"offset" : [ 7.82, 18.60 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS03.svg",
			"rotation" : "0",
			"offset" : [ 6.61, 21.88 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "18"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WNDMIL12.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 11.34 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "19"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WIMCON11.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 23.17 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN03.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "20"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "FUNCTN",
				"Attribute_Value" : "20"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUIREL01.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CAIRNS01.svg",
			"rotation" : "0",
			"offset" : [ 9.07, 16.63 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHIMNY01.svg",
			"rotation" : "0",
			"offset" : [ 6.61, 23.28 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DSHAER01.svg",
			"rotation" : "0",
			"offset" : [ 6.27, 18.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLGSTF01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 17.01 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLASTK01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 21.05 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MSTCON04.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 22.68 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "8"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN03.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "9"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MONUMT02.svg",
			"rotation" : "0",
			"offset" : [ 7.45, 13.42 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "10"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MONUMT02.svg",
			"rotation" : "0",
			"offset" : [ 7.45, 13.42 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "12"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MONUMT02.svg",
			"rotation" : "0",
			"offset" : [ 7.45, 13.42 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "13"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MONUMT02.svg",
			"rotation" : "0",
			"offset" : [ 7.45, 13.42 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "15"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DOMES001.svg",
			"rotation" : "0",
			"offset" : [ 9.41, 14.36 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "16"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "RASCAN01.svg",
			"rotation" : "0",
			"offset" : [ 7.63, 18.67 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "17"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS01.svg",
			"rotation" : "0",
			"offset" : [ 6.54, 21.85 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "18"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WNDMIL02.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 11.34 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "19"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WIMCON01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 23.17 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  , {
				"Comparision" : "==",
				"Attribute_Name" : "CATLMK",
				"Attribute_Value" : "20"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN01.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ,{
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN03.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "74"
			} ,{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}  ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN01.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},

		// LNDRGN 73
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "73"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 1,
			"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "73"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN04.svg",
			"rotation" : "0",
			"offset" : [ 3.78, 3.78 ],
			"zIndex" : 9
		},

		// LOKBSN 79
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "79"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// LITVES 77
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "77"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "LITVES01.svg",
			"rotation" : "0",
			"offset" : [ 17.01, 22.68 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('LtV %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// LITFLT 76
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "76"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "LITFLT01.svg",
			"rotation" : "0",
			"offset" : [ 17.01, 9.45 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},

		// SLOGRD 127
		{
			"Condition" : "BOTH_ANDORAND",
			"Attributes" : [ [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "127"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			[ {
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "5"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "7"
			}, ], [ {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			} ], ],
			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#4C5B63",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "127"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "#4C5B63",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "127"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "HILTOP01.svg",
			"rotation" : "0",
			"offset" : [ 19.20, 16.59 ],
			"zIndex" : 9
		},

		// SMCFAC 128
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "128"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SMCFAC02.svg",
			"rotation" : "0",
			"offset" : [ 12.85, 13.04 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "128"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#2c200c",
			"Stroke_width" : "1",
			"Fill_color" : "#8D642E",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// SWPARE 134
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "134"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "SWPARE51.svg",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('swept to %5.1lf','DRVAL1',1,2,2,'15110',0,1,CHBLK,27)"*/
		},

		// VEGATN 155
		{
			"Condition" : "BOTH_ORANDOR",
			"Attributes" : [ [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "155",
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			[ {
				"Comparision" : "==",
				"Attribute_Name" : "CATVEG",
				"Attribute_Value" : "7",
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATVEG",
				"Attribute_Value" : "21"
			} ]

			],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",//dayImagePath + "VEGATN04.svg",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "155"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",//dayImagePath + "VEGATN03.svg",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "155"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "BOTH_ORANDOR",
			"Attributes" : [ [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "155",
			} ],

			[ {
				"Comparision" : "==",
				"Attribute_Name" : "CATVEG",
				"Attribute_Value" : "7",
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATVEG",
				"Attribute_Value" : "21"
			} ]

			],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TREPNT05.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 11.34 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "155"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TREPNT04.svg",
			"rotation" : "0",
			"offset" : [ 6.65, 15.16 ],
			"zIndex" : 9
		},

		// MARCUL 82
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "82"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "82"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "82"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MARCUL02.svg",
			"rotation" : "0",
			"offset" : [ 13.34, 7.63 ],
			"zIndex" : 9
		},

		// MORFAC 84

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYMOR01.svg",
			"rotation" : "0",
			"offset" : [ 13.04, 19.65 ],
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			} ,{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "5"
			} ] ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MORFAC03.svg",
			"rotation" : "0",
			"offset" : [ 3.78, 3.78 ],
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "7"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "BOYSHP",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYMOR03.svg",
			"rotation" : "0",
			"offset" : [ 10.77, 18.56 ],
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MORFAC03.svg",
			"rotation" : "0",
			"offset" : [ 5.44, 4.88 ],
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MORFAC04.svg",
			"rotation" : "0",
			"offset" : [ 6.80, 19.01 ],
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "PILPNT02.svg",
			"rotation" : "0",
			"offset" : [ 3.78, 3.78 ],
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "5"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "PILPNT02.svg",
			"rotation" : "0",
			"offset" : [ 3.78, 3.78 ],
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "7"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYMOR11.svg",
			"rotation" : "0",
			"offset" : [ 14.36, 6.61 ],
			"zIndex" : 10
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			} ,{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "MORFAC03.svg",
			"rotation" : "0",
			"offset" : [ 5.44, 4.88 ],
			"zIndex" : 10
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "6"
			} ],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 10
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATMOR",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 10
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "84"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 10
		},

		// OFSPLF 87
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "87"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "OFSPLF01.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 10,
			"textfeaturename" : "TE('Prod %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "87"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 10,
			"textfeaturename" : "TE('Prod %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},

		// OSPARE 88
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "88"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// PONTON 95
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "95"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "95"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// PYLONS 98

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "98"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "98"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN03.svg",
			"zIndex" : 9
		},

		// RIVERS 114
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "114"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#61B8FF",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "114"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// SILTNK 125
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "#A19653",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SILBUI11.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 5.67 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			},  {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON12.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			},  {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS03.svg",
			"rotation" : "0",
			"offset" : [ 6.61, 21.88 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS12.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 18.90 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON12.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "SILBUI01.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 5.67 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON02.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS01.svg",
			"rotation" : "0",
			"offset" : [ 6.54, 21.85 ],
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			},  {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ,{
				"Comparision" : "==",
				"Attribute_Name" : "CATSIL",
				"Attribute_Value" : "4"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TOWERS02.svg",
			"rotation" : "0",
			"offset" : [ 5.67, 18.90 ],
			"zIndex" : 9
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "125"
			} ,{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} , ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "TNKCON02.svg",
			"rotation" : "0",
			"offset" : [ 5.37, 5.33 ],
			"zIndex" : 9
		},

		// WEDKLP 158
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "158"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "WEDKLP03.svg",
			"rotation" : "0",
			"offset" : [ 18.90, 4.72 ],
			"zIndex" : 9
		},

		// TIDEWY 143
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "143"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,25)"
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "143"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}, ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// ACHBRT 3
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)"*/
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "ACHBRT07.svg",
			"rotation" : "0",
			"offset" : [ 9.60, 10.54 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)"
		},

		// BERTHS 10

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "10"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9/*,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)"*/
		},

		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "10"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',1,2,2,'15110',0,0,CHBLK,29)"
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "10"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BRTHNO01.svg",
			"offset" : [ 13.23, 13.23 ],
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)"
		},

		// FRPARE 60
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "60"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// ICEARE 66
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "66"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "#93AEBB",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},

		// ASLXIS
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "162"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		// CAUSWY
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "26"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "26"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// CAUSWY POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "26"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "WATLEV",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "26"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		// CBLOHD

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "VERCSA",
				"Attribute_Value" : null
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('sf clr %4.1lf','VERCSA',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "VERCSA",
				"Attribute_Value" : null
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('sf clr %4.1lf','VERCSA',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "VERCLR",
				"Attribute_Value" : null
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "VERCLR",
				"Attribute_Value" : null
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"

		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "VERCSA",
				"Attribute_Value" : null
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('sf clr %4.1lf','VERCSA',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "VERCLR",
				"Attribute_Value" : null
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "21"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// CBLSUB
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "22"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATCBL",
				"Attribute_Value" : "6"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "22"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// CONVYR
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATCON",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATCON",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATCON",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATCON",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATCON",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATCON",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		},
		// CONVYR POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		},

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "34"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
		},

		// DAMCON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "38"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATDAM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "38"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// DAMCON POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "38"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATDAM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "38"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// DAMCON POINT
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "38"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATDAM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO06.svg",
			"rotation" : "0",
			"offset" : [ 7.56, 7.56 ],
			"zIndex" : 9
		},
		// DWRTCL

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "40"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		},
		// DYKCON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "49"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "49"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// DYKCON POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "49"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// FERYRT
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "53"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFRY",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "53"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFRY",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "53"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// FERYRT POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "53"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATFRY",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "53"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// FNCLNE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "52"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "52"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		} ,
		// FORSTC LINE 59

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "59"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",//#2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		//FORSTC POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "59"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ,{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "59"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#8D642E",//#2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		//FORSTC POINT
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "59"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",//transparent
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath +"FORSTC11.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "59"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",//transparent
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath +"FORSTC01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		//GATCON LINE 61
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATGAT",
				"Attribute_Value" : "5"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#3e3c37
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATGAT",
				"Attribute_Value" : "4"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#3e3c37
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATGAT",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#3e3c37
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATGAT",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#3e3c37
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#3e3c37
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		//GATCON POLYGON 61
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#3e3c37
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// GATCON POINT 61
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATGAT",
				"Attribute_Value" : "4"
			},  {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath +"GATCON03.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATGAT",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath +"GATCON04.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATGAT",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath +"GATCON04.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "61"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath +"GATCON04.svg",
			"rotation" : "0",
			"zIndex" : 9
		},

		// LNDELV 72 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "72"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",//#2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// point
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "72"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath +"POSGEN04.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%3.0lf m','ELEVAT',3,2,2,'15110',1,0,CHBLK,28)"
		},
		// LOCMAG 78 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "78"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#CBA9FA",//#4f1b41
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath +"LOCMAG01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// polygon

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "78"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#CBA9FA",//#4f1b41
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath +"LOCMAG01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// point
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "78"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath +"LOCMAG01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// MAGVAR 81 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "81"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#CBA9FA",//#4f1b41
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath +"MAGVAR51.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('varn %3.2f','VALMAG',3,1,2,'15110',1,-1,CHBLK,27)"
		},
		// polygon
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "81"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",//transparent
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath +"MAGVAR51.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// point
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "81"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",//transparent
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath +"MAGVAR01.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TX(VALMAG,3,1,2,'15110',1,-1,CHBLK,27)"
		},

		//  NAVLNE 85 line

		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "85"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATNAV",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "85"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATNAV",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "85"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// OILBAR 89 Line
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "89"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// PIPOHD 93 Line
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "93"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath +"RACNSP01.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,-1,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "93"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : dayImagePath + "RDOCAL03.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,-1,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "93"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,-1,CHBLK,11)"
		},
		// PIPSOL 94 Line
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "94"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATPIP",
				"Attribute_Value" : "5"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "EMPIPSL2.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "94"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATPIP",
				"Attribute_Value" : "4"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "EMPIPSL2.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "94"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATPIP",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "EMPIPSL2.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "94"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATPIP",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "EMPIPSL2.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "94"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "PRODCT",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "EMPIPSL2.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "94"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",//#4f1b41
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "EMPIPSL1.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// RADLNE 99 Line
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "99"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		},
		// RAILWY 106 Line
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "106"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",//#2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
		},
		//RAPIDS 107 Line
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "107"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" : "transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "transparent"
		},
		//RAPIDS 107 POLYGON
		//RAPIDS 107 POINT

		// RCRTCL 108 Line
		//RDOCAL 104 Line
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "RDOCAL03.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "RDOCAL02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "RDOCAL02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "RDOCAL02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" : dayImagePath + "RCLDEF01.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		// RDOCAL 104 Point
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" : dayImagePath + "RDOCAL03.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" : dayImagePath + "RDOCAL02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" : dayImagePath + "RDOCAL02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" : dayImagePath + "RDOCAL02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "104"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" : dayImagePath + "RCLDEF01.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Nr %s','OBJNAM',3,2,2,'15110',1,-1,CHBLK,21)"
		},
		// RECTRC 109 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC58.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		//RECTRC 109 AREA
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC58.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC58.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC58.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC56.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC57.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC57.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC57.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATTRK",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC55.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC57.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC57.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC57.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			},{
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECTRC55.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "109"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8],
			"imageFill" : dayImagePath + "RECDEF51.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		// RUNWAY 117 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "117"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",//#2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
		},
		//RUNWAY 117 POLYGON
		//RUNWAY 117 POINT
		//SLOTOP 126 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "126"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "126"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "6"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CONRAD",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "126"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "6"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "126"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "126"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CATSLO",
				"Attribute_Value" : "6"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "126"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",//#2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		// SNDWAV 118 line
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "118"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" :dayImagePath + "SNDWAV02.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		//SNDWAV 118 AREA
		//SNDWAV 118 POINT
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "118"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 0, 0 ],
			"imageFill" :dayImagePath + "SNDWAV02.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// STSLNE 132 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "132"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#768C97",//#252221
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [ 12.0, 6.8 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// TSELNE 145 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "145"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#CBA9FA",//#4f1b41
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :  [0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// TSSBND 146 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "146"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		// TSSCRS 147 AREA
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "147"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",//#561d47
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},

		// TUNNEL 151 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "151"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "BURDEP",
				"Attribute_Value" : "0"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#000000",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "151"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		//TUNNEL 151 POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "151"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "BURDEP",
				"Attribute_Value" : "0"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "151"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		//TUNNEL 151 POINT

		// WATFAL 157 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "157"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C9EDFF",//#3e3c37
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "157"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#768C97",//#252221
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9
		},
		//  WATFAL 157 POINT

		// WATTUR 156 LINE
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "156"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" :dayImagePath + "WATTUR02.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		//WATTUR 156 POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "156"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",//#373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.8 ],
			"imageFill" :dayImagePath + "WATTUR02.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		//WATTUR 156 POINT
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "156"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :dayImagePath + "WATTUR02.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		//SEAARE 119 POLYGON
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "119"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "119"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0],
			"imageFill" :"transparent",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
		},
		// TSSLPT  148
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "148"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :dayImagePath + "TSSLPT51.svg",
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,2,'15110',0,0,CHBLK,26)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "148"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :dayImagePath + "CTNARE51.svg",
			"zIndex" : 9,
			"textfeaturename" : "TX(INFORM,1,1,2,'15110',0,-2,CHBLK,24)"
		},
		// TSSRON 	149
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "149"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :dayImagePath + "TSSRON51.svg",
			"zIndex" : 9
		},

		//latest features

		// AIRARE 2
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CONVIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "#8D642E",// #2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",// #2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "AIRARE02.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// BOYINB 15
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "15"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BOYMOR11.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// BUAARE 13
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "13"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#8D642E",// #2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"zIndex" : 9,
			"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "13"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "BUAARE02.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// CGUSTA 29
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "29"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CGUSTA02.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// CHKPNT 28
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "28"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN04.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "28"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHKPNT01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// CONZNE 31
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "31"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		// COSARE 32
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "32"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		// CTRPNT 33
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "33"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "POSGEN04.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// CURENT 36
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "36"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CURVEL",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CURENT01.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "36"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CURENT01.svg",
			"rotation" : "0",
			"zIndex" : 9,
		},
		// {
		// 	"Condition" : "AND",
		// 	"Attributes" : [ {
		// 		"Comparision" : "==",
		// 		"Attribute_Name" : "OBJL",
		// 		"Attribute_Value" : "36"
		// 	}, {
		// 		"Comparision" : "geometrytype",
		// 		"Attribute_Name" : "PRIM",
		// 		"Attribute_Value" : "1"
		// 	} ],

		// 	"Stroke_color" : "transparent",
		// 	"Stroke_width" : "0",
		// 	"Fill_color" : "transparent",
		// 	"linedashstyle" : [ 0, 0 ],
		// 	"imageFill" : dayImagePath + "CURDEF01.svg",
		// 	"rotation" : "0",
		// 	"zIndex" : 9,
		// },
		// CUSZNE 37
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "27"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#768C97s",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		// DISMAR 44
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "44"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CATDIS",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DISMAR04.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TX(INFORM,2,1,2,'15110',2,0,CHBLK,21)"
		}, {
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "44"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "DISMAR03.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TX(INFORM,2,1,2,'15110',2,0,CHBLK,21)"
		},
		//EXEZNE 50
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "50"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		//FRPARE 60
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "60"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		//FSHZNE  54
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "54"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#768C97",
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		//GRIDRN 62
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "62"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#4C5B63",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		//ICNARE 67
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "67"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "67"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "CHINFO07.svg",
			"rotation" : "0",
			"zIndex" : 9,
		},
		//ISTZNE 68
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "68"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		//LITVES 77
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "77"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "LITVES02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('LtV %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
		},
		//LOGPON 80
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "80"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#000000",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "80"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "FLTHAZ02.svg",
			"rotation" : "0",
			"zIndex" : 9,
		},
		//PILBOP 91
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "91"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#CBA9FA",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "91"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "PILBOP02.svg",
			"rotation" : "0",
			"zIndex" : 9,
			"textfeaturename" : "TE('Plt %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
		},
		//RADLNE 99
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "99"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#C045D1",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"rotation" : "0",
			"offset" : [ 0, 0 ],
			"imageFill" : "transparent",
			"zIndex" : 9,
			"textfeaturename" : "TE('%03.0lf deg','ORIENT',1,1,2,'15110',0,-1,CHBLK,11)"
		},
		//RADRFL 101
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "101"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" : dayImagePath + "RADRFL03.svg",
			"rotation" : "0",
			"zIndex" : 9,
		}
		,
		// NEWOBJ 163
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "163"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "SYMINS",
				"Attribute_Value" : null
			}],

			"Stroke_color" : "#C045D1",// #4f1b41
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "NEWOBJ01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "163"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#C045D1",// #4f1b41
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "NEWOBJ01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "163"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "SYMINS",
				"Attribute_Value" : null
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "EMNEWOB1.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "163"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "EMNEWOB1.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "163"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "SYMINS",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0],
			"imageFill" :dayImagePath + "NEWOBJ01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "163"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0],
			"imageFill" :dayImagePath + "NEWOBJ01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},

		// ASLXIS 162
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "162"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			}],

			"Stroke_color" : "#CBA9FA", //#4f1b41
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "EMNEWOB1.svg",
			"zIndex" : 9
		},
		// ARCSLN 161
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "161"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#CBA9FA",// #4f1b41
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "NEWOBJ01.svg",
			"zIndex" : 9
		},
		// T_TIMS  142
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "161"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#4C5B63",// #373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TIDEHT01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "142"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0],
			"imageFill" :dayImagePath + "TIDEHT01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},
		// T_HMON 140
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "140"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#4C5B63",// #373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TIDEHT01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [ {
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "140"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0],
			"imageFill" :dayImagePath + "TIDEHT01.svg",
			"rotation" : "0",
			"zIndex" : 9
		},

	// TWRTPT 152

		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "152"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "4"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#C045D1",// #561d47
			"Stroke_width" : "4",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TWRTPT52.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "152"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#C045D1",// #561d47
			"Stroke_width" : "4",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TWRTPT53.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "152"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "2"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#C045D1",// #561d47
			"Stroke_width" : "4",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TWRTPT53.svg",
			"zIndex" : 9
		},{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "152"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "TRAFIC",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#C045D1",// #561d47
			"Stroke_width" : "4",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TWRTPT53.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "152"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#C045D1",// #561d47
			"Stroke_width" : "4",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TWRDEF51.svg",
			"zIndex" : 9
		},
		// TS_TIS 139
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "139"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#4C5B63",// #373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TIDSTR01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "139"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0],
			"imageFill" :dayImagePath + "TIDSTR01.svg",
			"zIndex" : 9
		},
		// TS_PRH   136
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "136"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#4C5B63",// #373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TIDSTR01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "136"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0],
			"imageFill" :dayImagePath + "TIDSTR01.svg",
			"zIndex" : 9
		},
		// TS_PNH  137
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "137"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#4C5B63",// #373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TIDSTR01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "137"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0],
			"imageFill" :dayImagePath + "TIDSTR01.svg",
			"zIndex" : 9
		},
		//   TS_PAD  138
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "138"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#4C5B63",// #373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "TIDSTR01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "138"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0],
			"imageFill" :dayImagePath + "TIDSTR01.svg",
			"zIndex" : 9
		},
		// TS_FEB  160
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "160"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CAT_TS",
				"Attribute_Value" : "3"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "CURENT01.svg",
			"zIndex" : 9,
			"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "160"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CAT_TS",
				"Attribute_Value" : "2"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "EBBSTR01.svg",
			"zIndex" : 9,
			"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "160"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CAT_TS",
				"Attribute_Value" : "1"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" :[0, 0 ],
			"imageFill" :dayImagePath + "FLDSTR01.svg",
			"zIndex" : 9,
			"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "160"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#4C5B63",// #373531
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 12.0, 6.0 ],
			"imageFill" :dayImagePath + "CURENT01.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "160"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CAT_TS",
				"Attribute_Value" : "3"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "CURENT01.svg",
			"zIndex" : 9,
			"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "160"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CAT_TS",
				"Attribute_Value" : "2"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "EBBSTR01.svg",
			"zIndex" : 9,
			"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
		},
		{
			"Condition" : "AND",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "160"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}, {
				"Comparision" : "==",
				"Attribute_Name" : "CAT_TS",
				"Attribute_Value" : "1"
			} , {
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :dayImagePath + "FLDSTR01.svg",
			"zIndex" : 9,
			"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "160"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [ 0, 0 ],
			"imageFill" :dayImagePath + "CURENT01.svg",
			"zIndex" : 9
		},
		// TSSRON 149
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "149"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#FF00FF",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [12.0, 6.0 ],
			"imageFill" :dayImagePath + "TSSRON51.svg",
			"zIndex" : 9
		},
		// TSSCRS 147
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "147"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#FF00FF",
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [12.0, 6.0 ],
			"imageFill" :dayImagePath + "TSSCRS51.svg",
			"zIndex" : 9
		},
		// TESARE 135
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "135"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#768C97",// #252221
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [12.0, 6.0 ],
			"imageFill" :dayImagePath + "TSSCRS51.svg",
			"zIndex" : 9
		},
		// SUBTLN 133
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "133"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",// #4f1b41
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [12.0, 6.0 ],
			"imageFill" :dayImagePath + "CTYARE51.svg",
			"zIndex" : 9
		},
		// STSLNE  132
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "132"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#768C97",// #252221
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [12.0, 6.0 ],
			"imageFill" :"transparent",
			"zIndex" : 9
		},
		// SPRING  130
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "130"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "SPRING02.svg",
			"zIndex" : 9
		},
		// SPLARE 120
		{
			"Condition" : "NONE",
			"Attributes" : [
			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "120"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#C045D1",// #4f1b41
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [12.0, 6.0 ],
			"imageFill" :dayImagePath + "CTYARE51.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "120"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "CHINFO06.svg",
			"zIndex" : 9
		},
  // RSCSTA 111
		{
			"Condition" : "NONE",
			"Attributes" : [

			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "111"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "RSCSTA02.svg",
			"zIndex" : 9
		},
		// ROADWY 116
		{
			"Condition" : "NONE",
			"Attributes" : [
			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "116"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			} ],

			"Stroke_color" : "#8D642E",// #2c200c
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :"transparent",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [
			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "116"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "2"
			} ],

			"Stroke_color" : "#8D642E",// #2c200c
			"Stroke_width" : "2",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :"transparent",
			"zIndex" : 9
		},
		// RCTLPT  110
		{
			"Condition" : "AND",
			"Attributes" : [
			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "110"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			} ],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "RCTLPT52.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [
			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "110"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			},{
				"Comparision" : "==",
				"Attribute_Name" : "ORIENT",
				"Attribute_Value" : null
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "RCTLPT52.svg",
			"zIndex" : 9
		},
		{
			"Condition" : "NONE",
			"Attributes" : [
			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "110"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "1"
			}],

			"Stroke_color" : "transparent",
			"Stroke_width" : "0",
			"Fill_color" : "transparent",
			"linedashstyle" : [0, 0 ],
			"imageFill" :dayImagePath + "RTLDEF51.svg",
			"zIndex" : 9
		},
		// RADRNG 100
		{
			"Condition" : "NONE",
			"Attributes" : [
			{
				"Comparision" : "==",
				"Attribute_Name" : "OBJL",
				"Attribute_Value" : "100"
			},{
				"Comparision" : "geometrytype",
				"Attribute_Name" : "PRIM",
				"Attribute_Value" : "3"
			}],

			"Stroke_color" : "#CBA9FA", //#4f1b41
			"Stroke_width" : "1",
			"Fill_color" : "transparent",
			"linedashstyle" : [12.0, 6.0 ],
			"imageFill" :"transparent",
			"zIndex" : 9
		}
		];


var genericNightJSON = [
// Group1 Objects

// 1. DEPARE - 42
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "42"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "0"
	} ],

	"Stroke_color" : "#191915",
	"Stroke_width" : "1",
	"Fill_color" : "#191915",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "BOTH_ORANDOR",
	"Attributes" : [ [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "42",
	} ],

	[ {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "0",
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "2.0",
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "1.8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "2.0"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "5.0"
	}]

	],

	"Stroke_color" : "#150a21",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "BOTH_ORANDOR",
	"Attributes" : [

	[ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "42",
	} ],

	[ {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "1.8",
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "3.6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "3.6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "5.4"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "9.0"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "10"
	} ]

	],

	"Stroke_color" : "#000000",
	"Stroke_width" : "1",
	"Fill_color" : "#000000",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "BOTH_ORANDOR",
	"Attributes" : [ [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "42",
	} ],

	[ {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "9.0",
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "18.2"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "9.0"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "18.2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "DRVAL2",
		"Attribute_Value" : "304.8"
	} ] ],

	"Stroke_color" : "#000000",
	"Stroke_width" : "1",
	"Fill_color" : "#000000",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// 2. DRGARE - 46
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "46"
	}, {
		"Comparision" : "<=",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "10.0"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : nightImagePath + "dredged1.png",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "46"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "DRVAL1",
		"Attribute_Value" : "10.0"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : nightImagePath + "dredged2.png",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// 3. LNDARE - 71
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "71"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",// "#201813",// "#FCF7E5",
	"Stroke_width" : "0",
	"Fill_color" : "#FF0000",// "#201813",// "#FCF7E5",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",// nightImagePath+"LNDARE01.svg",
	"textoffsetY" : "0",
	"textfont" : "",
	"textfeaturename" : "",
	"zIndex" : 1000,
	//"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',-1,-1,CHBLK,26)"
},

// 4. UNSARE - 154
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "154"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "2",
	"Fill_color" : nightImagePath + "unsurvyed.png",
	"linedashstyle" : [ 12, 6 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// 6. COALNE - 30
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "30"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],
	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// 7. DEPCNT - 43
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "43"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",// "#969f99",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

//5. SLCONS - 122 - PRIM - 3
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "122"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "3",
	"Fill_color" : "#decd8b",
	"linedashstyle" : [ 20.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "122"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 100
},

// 8. SLCONS - 122 - PRIM - 2
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "122"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "2",
	"Fill_color" : "#00FF00",
	"linedashstyle" : [ 20.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
//SLCONS 122
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "122"
	} , {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "#00FF00",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MORFAC03.svg",
	"rotation" : "0",
	"offset" : [ 5.44, 4.88 ],
	"zIndex" : 9
},

// Navigational Hazards
// 1. DMPGRD - 48 - PRIM - 3

  { "Condition" : "NONE", "Attributes" : [ { "Comparision" : "==",
  "Attribute_Name" : "OBJL", "Attribute_Value" : "48" }, { "Comparision" :
 "geometrytype", "Attribute_Name" : "PRIM", "Attribute_Value" : "3" } ],
 "Stroke_color" : "#c045d1", "Stroke_width" : "2", "Fill_color" :
 "transparent", "linedashstyle" : [ 12.0, 6.8 ], "imageFill" : "transparent" },


// 2. DMPGRD - 48 - PRIM - 1
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "48"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHINFO07.svg",
	"rotation" : "0",
	"offset" : [ 8.88, 9.60 ],
	"zIndex" : 9
},

// 3. OBSTRN - 86 - PRIM - 3

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	}  ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"textoffsetY" : "12",
	"textfont" : "12px sans-serif;#373531",
	//"textfeaturename" : "null",
	"zIndex" : 9,
	//"textfeaturename" : "VALSOU"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "7"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	//"textfeaturename" : "VALSOU"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "8"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	//"textfeaturename" : "VALSOU"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "9"
	}],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	//"textfeaturename" : "VALSOU"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "10"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	//"textfeaturename" : "VALSOU"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	//"textfeaturename" : "VALSOU"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	//"textfeaturename" : "VALSOU"
},

// 4. OBSTRN - 86 - PRIM - 2

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "8"
	}],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "9"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "10"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "7"
	}],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 1.0, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

// 5. OBSTRN - 86 - PRIM - 1

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FOULGND1.svg",
	"offset" : [ 7.60, 5.82 ],
	"rotation" : "0",
	"textoffsetX" : "7.60",
	"textoffsetY" : "5.82",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLTHAZ02.svg",
	"offset" : [ 12.25, 12.09 ],
	"rotation" : "0",
	"textoffsetX" : "12.25",
	"textoffsetY" : "12.09",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"offset" : [ 7.79, 9.94 ],
	"imageFill" : nightImagePath + "ACHARE02.svg",
	"rotation" : "0",
	"textoffsetX" : "7.79",
	"textoffsetY" : "9.94",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "10"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLTHAZ02.svg",
	"offset" : [ 12.25, 12.09 ],
	"rotation" : "0",
	"textoffsetX" : "12.25",
	"textoffsetY" : "12.09",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FOULGND1.svg",
	"offset" : [ 7.60, 5.82 ],
	"rotation" : "0",
	"textoffsetX" : "7.60",
	"textoffsetY" : "5.82",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLTHAZ02.svg",
	"offset" : [ 12.25, 12.09 ],
	"rotation" : "0",
	"textoffsetX" : "12.25",
	"textoffsetY" : "12.09",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "9"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"offset" : [ 7.79, 9.94 ],
	"imageFill" : nightImagePath + "ACHARE02.svg",
	"rotation" : "0",
	"textoffsetX" : " 7.79",
	"textoffsetY" : "9.94",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATOBS",
		"Attribute_Value" : "10"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLTHAZ02.svg",
	"offset" : [ 12.25, 12.09 ],
	"rotation" : "0",
	"textoffsetX" : "12.25",
	"textoffsetY" : "12.09",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLTHAZ02.svg",
	"offset" : [ 12.25, 12.09 ],
	"rotation" : "0",
	"textoffsetX" : "12.25",
	"textoffsetY" : "12.09",
	"textfont" : "9px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "86"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "OBSTRN01.svg",
	"offset" : [ 7.75, 7.75 ],
	"rotation" : "0",
	"textoffsetX" : "7.75",
	"textoffsetY" : "7.75",
	"textfont" : "10px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

// 6. WRECKS - 159 - PRIM - 3

// 7. WRECKS - 159 - PRIM - 1
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FOULGND1.svg",
	"offset" : [ 7.60, 5.82 ],
	"rotation" : "0",
	"textoffsetX" : "7.60",
	"textoffsetY" : "5.82",
	"textfont" : "12px sans-serif;#373531",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	}, {
		"Comparision" : "<=",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "30"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "OBSTRN01_1.svg",
	"offset" : [ 7.75, 7.75 ],
	"rotation" : "0",
	"textoffsetX" : "7.75",
	"textoffsetY" : "7.75",
	"textfont" : "12px sans-serif;#373531",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "30"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "OBSTRN02_1.svg",
	"offset" : [ 7.56, 7.56 ],
	"rotation" : "0",
	"textoffsetX" : "7.56",
	"textoffsetY" : "7.56",
	"textfont" : "12px sans-serif;#373531",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WRECKS04.svg",
	"offset" : [ 9.45, 5.67 ],
	"rotation" : "0",
	"textoffsetX" : "9.45",
	"textoffsetY" : "5.67",
	"textfont" : "12px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "OBSTRN02_1.svg",
	"offset" : [ 7.56, 7.56 ],
	"rotation" : "0",
	"textoffsetX" : "7.56",
	"textoffsetY" : "7.56",
	"textfont" : "12px sans-serif;#373531",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "2"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WRECKS05.svg",
	"offset" : [ 11.23, 7.94 ],
	"rotation" : "0",
	"textoffsetX" : "11.23",
	"textoffsetY" : "7.94",
	"textfont" : "12px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "3"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FOULGND1.svg",
	"offset" : [ 7.60, 5.82 ],
	"rotation" : "0",
	"textoffsetX" : "7.60",
	"textoffsetY" : "5.82",
	"textfont" : "12px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "4"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WRECKS05.svg",
	"offset" : [ 11.23, 7.94 ],
	"rotation" : "0",
	"textoffsetX" : "11.23",
	"textoffsetY" : "7.94",
	"textfont" : "12px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATWRK",
		"Attribute_Value" : "5"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WRECKS01.svg",
	"offset" : [ 13.23, 11.34 ],
	"rotation" : "0",
	"textoffsetX" : "13.23",
	"textoffsetY" : "11.34",
	"textfont" : "12px sans-serif",
	"textfeaturename" : "null",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "159"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WRECKS01.svg",
	"offset" : [ 13.23, 11.34 ],
	"textoffsetX" : "13.23",
	"textoffsetY" : "11.34",
	"textfeaturename" : "null",
	"zIndex" : 9
},

// 8. UWTROC - 153 - PRIM - 1

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "153"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "VALSOU",
		"Attribute_Value" : "0"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "OBSTRN02_1.svg",
	"offset" : [ 7.56, 7.56 ],
	"rotation" : "0",
	"textoffsetX" : "7.56",
	"textoffsetY" : "7.56",
	"textfont" : "12px sans-serif;#373531",
	"textfeaturename" : "VALSOU",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "153"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "UWTROC04.svg",
	"offset" : [ 7.67, 6.20 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "153"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "UWTROC03.svg",
	"offset" : [ 7.60, 7.60 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "153"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "UWTROC03.svg",
	"offset" : [ 7.60, 7.60 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "153"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "OBSTRN02.svg",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

// Soundings
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "129"
	},

	{
		"Comparision" : "<=",
		"Attribute_Name" : "z1",
		"Attribute_Value" : "30"
	} ],

	"Stroke_color" : "#000000",
	"Stroke_width" : "2",
	"Fill_color" : "#000000",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "drawimage",
	"rotation" : "0",
	"textoffsetY" : "0",
	"textoffsetX" : "0",
	"textfont" : "bold 14px sans-serif;#373531",
	"textfeaturename" : "z1+z2",
	"imgpoints" : "0",
	"imgradius" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "129"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "z1",
		"Attribute_Value" : "30"
	} ],

	"Stroke_color" : "#000000",
	"Stroke_width" : "2",
	"Fill_color" : "#000000",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "drawimage",
	"rotation" : "0",
	"textoffsetY" : "0",
	"textoffsetX" : "0",
	"textfont" : "bold 14px sans-serif;#373531",
	"textfeaturename" : "z1",
	"imgpoints" : "0",
	"imgradius" : "0",
	"zIndex" : 9
},

// Navigational Aids

// BCNCAR 5
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNSTK02.svg",
	"rotation" : "0",
	"offset" : [ 4.72, 17.05 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNTOW01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNLTC01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DAYSQR21.svg",
	"rotation" : "0",
	"offset" : [ 7.48, 23.43 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},
// BCNISD 6

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNSTK02.svg",
	"rotation" : "0",
	"offset" : [ 4.72, 17.05 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNTOW01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNLTC01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN03.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 16.86 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BCNLAT 7
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CAIRNS11.svg",
	"rotation" : "0",
	"offset" : [ 9.07, 16.63 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATLAM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PRICKE03.svg",
	"rotation" : "0",
	"offset" : [ 4.72, 16.44 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATLAM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PRICKE04.svg",
	"rotation" : "0",
	"offset" : [ 5.33, 16.78 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNSTK02.svg",
	"rotation" : "0",
	"offset" : [ 4.72, 17.05 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNTOW01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNLTC01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CAIRNS01.svg",
	"rotation" : "0",
	"offset" : [ 9.07, 16.63 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DAYSQR21.svg",
	"rotation" : "0",
	"offset" : [ 7.48, 23.43 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BCNSAW 8
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNSTK02.svg",
	"rotation" : "0",
	"offset" : [ 4.72, 17.05 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNTOW01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNLTC01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN03.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 16.86 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BCNSPP 9
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CAIRNS11.svg",
	"rotation" : "0",
	"offset" : [ 9.07, 16.63 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSPM",
		"Attribute_Value" : "44"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSPM",
		"Attribute_Value" : "18"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "NOTBRD11.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 15.12 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNSTK02.svg",
	"rotation" : "0",
	"offset" : [ 4.72, 17.05 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNTOW01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNLTC01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CAIRNS01.svg",
	"rotation" : "0",
	"offset" : [ 9.07, 16.63 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BCNSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-2,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "9"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BCNGEN03.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 16.86 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BOYCAR 14
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYCON01.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 16.55 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYCAN01.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 12.66 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPH01.svg",
	"rotation" : "0",
	"offset" : [ 10.51, 16.55 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYPIL01.svg",
	"rotation" : "0",
	"offset" : [ 11.60, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYBAR01.svg",
	"rotation" : "0",
	"offset" : [ 13.42, 14.74 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSUP01.svg",
	"rotation" : "0",
	"offset" : [ 16.21, 17.95 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "14"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYGEN03.svg",
	"rotation" : "0",
	"offset" : [ 10.05, 15.91 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BOYINB 15
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "15"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYINB01.svg",
	"rotation" : "0",
	"offset" : [ 16.21, 16.40 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BOYISD 16

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYCAN01.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 12.66 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPH01.svg",
	"rotation" : "0",
	"offset" : [ 10.51, 16.55 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYPIL01.svg",
	"rotation" : "0",
	"offset" : [ 11.60, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYBAR01.svg",
	"rotation" : "0",
	"offset" : [ 13.42, 14.74 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSUP01.svg",
	"rotation" : "0",
	"offset" : [ 16.21, 17.95 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "16"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYGEN03.svg",
	"rotation" : "0",
	"offset" : [ 10.05, 15.91 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BOYLAT 17
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYCON01.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 16.55 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYCAN01.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 12.66 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPH01.svg",
	"rotation" : "0",
	"offset" : [ 10.51, 16.55 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYPIL01.svg",
	"rotation" : "0",
	"offset" : [ 11.60, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYBAR01.svg",
	"rotation" : "0",
	"offset" : [ 13.42, 14.74 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSUP01.svg",
	"rotation" : "0",
	"offset" : [ 16.21, 17.95 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "17"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYGEN03.svg",
	"rotation" : "0",
	"offset" : [ 10.05, 15.91 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BOYSAW 18
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "18"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPH01.svg",
	"rotation" : "0",
	"offset" : [ 10.51, 16.55 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "18"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYPIL01.svg",
	"rotation" : "0",
	"offset" : [ 11.60, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "18"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "18"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYBAR01.svg",
	"rotation" : "0",
	"offset" : [ 13.42, 14.74 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "18"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSUP01.svg",
	"rotation" : "0",
	"offset" : [ 16.21, 17.95 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "18"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "18"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYGEN03.svg",
	"rotation" : "0",
	"offset" : [ 10.05, 15.91 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BOYSPP 19
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSPM",
		"Attribute_Value" : "9"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSUP01.svg",
	"rotation" : "0",
	"offset" : [ 16.21, 17.95 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSPM",
		"Attribute_Value" : "15"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSUP03.svg",
	"rotation" : "0",
	"offset" : [ 16.33, 21.62 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYCON01.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 16.55 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYCAN01.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 12.66 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPH01.svg",
	"rotation" : "0",
	"offset" : [ 10.51, 16.55 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYPIL01.svg",
	"rotation" : "0",
	"offset" : [ 11.60, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYBAR01.svg",
	"rotation" : "0",
	"offset" : [ 13.42, 14.74 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSUP01.svg",
	"rotation" : "0",
	"offset" : [ 16.21, 17.95 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-2,-1,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "19"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYGEN03.svg",
	"rotation" : "0",
	"offset" : [ 10.05, 15.91 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// BUISGL 12
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "33"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "!=",
		"Attribute_Name" : "OBJNAM",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DRGARE01P.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 7.56 ],
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,0,CHBLK,26)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL13.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL13.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "22"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL14.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 5.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "23"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL14.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 5.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "24"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL14.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 5.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "25"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL14.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 5.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "26"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL15.svg",
	"rotation" : "0",
	"offset" : [ 6.92, 13.80 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "27"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL15.svg",
	"rotation" : "0",
	"offset" : [ 6.92, 13.80 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "33"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN03.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "35"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON12.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "33"
	}, {
		"Comparision" : "!=",
		"Attribute_Name" : "OBJNAM",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN03.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,0,CHBLK,26)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUISGL11.svg",
	"rotation" : "0",
	"offset" : [ 4.99, 4.99 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "20"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL01.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "21"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL01.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "22"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL04.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 5.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "23"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL04.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 5.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "24"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL04.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 5.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "25"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL04.svg",
	"rotation" : "0",
	"offset" : [ 10.89, 5.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "26"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL05.svg",
	"rotation" : "0",
	"offset" : [ 6.99, 13.91 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "27"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL05.svg",
	"rotation" : "0",
	"offset" : [ 6.99, 13.91 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "33"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN03.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "35"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON02.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "12"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUISGL01.svg",
	"rotation" : "0",
	"offset" : [ 4.99, 4.99 ],
	"zIndex" : 9
},

// CRANES 35
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "35"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CRANES01.svg",
	"rotation" : "0",
	"offset" : [ 9.45, 17.01 ],
	"zIndex" : 9
},

// DAYMAR 39
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "39"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "19"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DAYSQR21.svg",
	"rotation" : "0",
	"offset" : [ 7.48, 23.43 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)s"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "39"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "20"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DAYSQR21.svg",
	"rotation" : "0",
	"offset" : [ 7.48, 23.43 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "39"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "21"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DAYSQR21.svg",
	"rotation" : "0",
	"offset" : [ 7.48, 23.43 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "39"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "24"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DAYTRI21.svg",
	"rotation" : "0",
	"offset" : [ 9.37, 25.06 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "39"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "25"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DAYTRI25.svg",
	"rotation" : "0",
	"offset" : [ 9.49, 22.15 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "39"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DAYSQR21.svg",
	"rotation" : "0",
	"offset" : [ 7.48, 23.43 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('bn %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// FOGSIG 58
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "58"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FOGSIG01.svg",
	"rotation" : "0",
	"offset" : [ 18.33, 0.00 ],
	"zIndex" : 9
},

// FORSTC 59
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "59"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	}, ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FORSTC11.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "59"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FORSTC01.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

// //*******OBJL NAVAIDS ******////

// TOPMAR - 144

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR02.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 25.51 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR04.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 25.89 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "13"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR05.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 34.96 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "14"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR06.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 34.20 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "11"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR07.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 34.58 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "10"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR08.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 34.20 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR10.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 26.27 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR12.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 34.58 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR13.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 28.16 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR14.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 25.32 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "9"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR16.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 26.65 ],
	"zIndex" : 9
},

{
	"Condition" : "OR",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "33"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR17.svg",
	"rotation" : "0",
	"offset" : [ 3.21, 28.72 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TOPSHP",
		"Attribute_Value" : "28"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR18.svg",
	"rotation" : "0",
	"offset" : [ 1.97, 28.72 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "144"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOPMAR30.svg",
	"rotation" : "0",
	"offset" : [ 4.16, 28.35 ],
	"zIndex" : 9
},
//SISTAW 124
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "124"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "SISTAT02.svg",
	"rotation" : "0",
	"offset" : [ 0.91, 0.91 ],
	"zIndex" : 9
},
//SISTAT 123
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "123"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "SISTAT02.svg",
	"rotation" : "0",
	"offset" : [ 0.91, 0.91 ],
	"zIndex" : 9
},
//SILTNK 125
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON02.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "SILBUI11.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 5.67 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON12.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS03.svg",
	"rotation" : "0",
	"offset" : [ 6.61, 21.88 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS12.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 18.90 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON12.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "SILBUI01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 5.67 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON02.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS01.svg",
	"rotation" : "0",
	"offset" : [ 6.54, 21.85 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS02.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 18.90 ],
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON02.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},
//RETRFL 113
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "113"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "RETRFL01.svg",
	"rotation" : "0",
	"offset" : [ 0.00, 13.04 ],
	"zIndex" : 9
},

//PILPNT 90
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "90"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PILPNT02.svg",
	"rotation" : "0",
	"offset" : [ 3.78, 3.78 ],
	"zIndex" : 9
},

// LITVES 77
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "77"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "LITVES01.svg",
	"rotation" : "0",
	"offset" : [ 17.01, 22.68 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('LtV %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// LITFLT 76
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "76"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "LITFLT01.svg",
	"rotation" : "0",
	"offset" : [ 17.01, 9.45 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('by %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},

// LIGHTS 75
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYBAR01.svg",
	"rotation" : "0",
	"offset" : [ 13.42, 14.74 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSUP01.svg",
	"rotation" : "0",
	"offset" : [ 16.21, 17.95 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYSPR01.svg",
	"rotation" : "0",
	"offset" : [ 5.56, 16.33 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "COLOUR",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "LIGHTS13.svg",
	"rotation" : "2.35619",
	"offset" : [ 4.54, 26.65 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "COLOUR",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "LIGHTS11.svg",
	"rotation" : "2.35619",
	"offset" : [ 4.54, 26.65 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "COLOUR",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "LIGHTS12.svg",
	"rotation" : "2.35619",
	"offset" : [ 4.54, 26.65 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "COLOUR",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "LIGHTS13.svg",
	"rotation" : "2.35619",
	"offset" : [ 4.54, 26.65 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

{
	"Condition" : "BOTH_ORANDOR",
	"Attributes" : [ [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "75",
	} ],

	[ {
		"Comparision" : "==",
		"Attribute_Name" : "COLOUR",
		"Attribute_Value" : "1,4",
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "COLOUR",
		"Attribute_Value" : "3,3"
	} ]

	],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "LIGHTS12.svg",
	"rotation" : "2.35619",
	"offset" : [ 4.54, 26.65 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('CATLIT','LITCHR','COLOUR','SIGPER','HEIGHT','VALNMR','SIGGRP','MLTYLT','15110')"
},

// RTPBCN 103
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "103"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "RTPBCN02.svg",
	"rotation" : "0",
	"offset" : [ 12.13, 11.49 ],
	"zIndex" : 9
},

// RDOSTA - 105
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "105"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATROS",
		"Attribute_Value" : "10"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DRFSTA01.svg",
	"rotation" : "0",
	"offset" : [ 11.34, 11.34 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "105"
	} ],
	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "RDOSTA02.svg",
	"rotation" : "0",
	"offset" : [ 11.23, 11.15 ],
	"zIndex" : 9
},

// NAVLNE 85
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "85"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// RADSTA 102
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "102"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATRAS",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "RDOSTA02.svg",
	"rotation" : "0",
	"offset" : [ 11.23, 11.15 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('ch %s','COMCHA',3,1,2,'15110',0,0,CHBLK,11)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "102"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "RDOSTA02.svg",
	"rotation" : "0",
	"offset" : [ 11.23, 11.15 ],
	"zIndex" : 9
},

// *************** ENC OTHERS ********************///

// ACHARE 4
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATACH",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9/*,
	"textfeaturename" : "TX(OBJNAM,2,1,2,'15110',-1,-2,CHBLK,26)"*/
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"offset" : [ 7.79, 9.94 ],
	"imageFill" : nightImagePath + "ACHARE02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,3,1,2,'15110',-1,2,CHBLK,26)"
},

// RESARE 112
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "112"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATREA",
		"Attribute_Value" : "27"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 11.33, 6.8 ],
	"imageFill" : dayImagePath + "ESSARE01.svg",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "112"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATREA",
		"Attribute_Value" : "28"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 11.33, 6.8 ],
	"imageFill" : dayImagePath + "PSSARE01.svg",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "112"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 11.33, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// CTNARE 27
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "27"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "27"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHINFO06.svg",
	"rotation" : "0",
	"offset" : [ 9.68, 9.60 ],
	"zIndex" : 9
},

// MIPARE 83
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "83"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.68, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "83"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHINFO06.svg",
	"rotation" : "0",
	"offset" : [ 9.68, 9.60 ],
	"zIndex" : 9
},

// ADMARE 1
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 11.33, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// CTSARE 25
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "25"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "25"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHINFO07.svg",
	"rotation" : "0",
	"offset" : [ 8.88, 9.60 ],
	"zIndex" : 9
},

// PRDARE 97
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "9"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLASTK11.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 21.05 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON12.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WIMCON11.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 23.17 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLASTK01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 21.05 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TMBYRD01.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON02.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPRA",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WIMCON01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 23.17 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "97"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PRDINS02.svg",
	"rotation" : "0",
	"offset" : [ 9.64, 10.39 ],
	"zIndex" : 9
},

// DOCARE 45
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "45"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "CONDTN",
		"Attribute_Value" : "0"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "45"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
},

// FSHFAC 55
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFIF",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFIF",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFIF",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFIF",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFIF",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FSHFAC03.svg",
	"rotation" : "0",
	"offset" : [ 11.41, 3.06 ],
	"zIndex" : 9

}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFIF",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FSHFAC02.svg",
	"rotation" : "0",
	"offset" : [ 10.58, 8.13 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFIF",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FSHFAC02.svg",
	"rotation" : "0",
	"offset" : [ 10.58, 8.13 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFIF",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FSHFAC02.svg",
	"rotation" : "0",
	"offset" : [ 10.58, 8.13 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "55"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FSHHAV01.svg",
	"rotation" : "0",
	"offset" : [ 23.62, 11.72 ],
	"zIndex" : 9
},

// CBLARE 20
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : nightImagePath + "CBLARE51.svg",
	"linedashstyle" : [ 22.67, 6.8 ],
	"imageFill" : "transparent",
	"offset" : [ 6.46, 21.39 ],
	"zIndex" : 9
},

// PIPARE 92
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "92"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPIP",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "92"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATPIP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "92"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "PRODCT",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
}, {
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "92"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9

}, {
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "92"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHINFO07.svg",
	"rotation" : "0",
	"offset" : [ 8.88, 9.60 ],
	"zIndex" : 9
},

// SBDARE 121
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "121"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "NATSUR",
		"Attribute_Value" : "0"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "121"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "NATSUR",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "transparent"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "121"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "NATSUR",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "transparent"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "121"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "NATSUR",
		"Attribute_Value" : "14"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "121"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "NATSUR",
		"Attribute_Value" : "0"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "121"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "121"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "121"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TX(NATSUR,1,2,2,'15110',0,0,CHBLK,25)"
},

// FAIRWY 51
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "51"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4C5B63",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "FAIRWY51.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "51"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4C5B63",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "FAIRWY51.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "51"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4C5B63",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "FAIRWY51.svg",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"
},{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "51"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4C5B63",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "FAIRWY52.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
},
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "51"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9/*,
	"textfeaturename" : "TX(OBJNAM,3,2,3,'15110',2,0,CHBLK,26)"*/
},

// PRCARE 96
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "96"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 22.6, 6.8 ],
	"imageFill" : nightImagePath + "PRCARE51.svg",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "96"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PRCARE12.svg",
	"rotation" : "0",
	"offset" : [ 6.69, 11.07 ],
	"zIndex" : 9
},

// HRBFAC 64
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "64"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "64"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATHAF",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "ROLROL01.svg",
	"rotation" : "0",
	"offset" : [ 13.87, 5.37 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "64"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATHAF",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "HRBFAC09.svg",
	"rotation" : "0",
	"offset" : [ 11.23, 11.00 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "64"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATHAF",
		"Attribute_Value" : "5"
	} , {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "SMCFAC02.svg",
	"rotation" : "0",
	"offset" : [ 12.85, 13.04 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "64"
	} , {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHINFO07.svg",
	"rotation" : "0",
	"offset" : [ 8.88, 9.60 ],
	"zIndex" : 9
},

// BRIDGE 11
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"zIndex" : 9
/*
 * , "imageFill" : "transparent", "textoffsetY" : "2", "textoffsetX" : "2",
 * "textfont" : "12px sans-serif;#4C5B63", "textfeaturename" : "OBJNAM"
 */
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"*/
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"offset" : [ 7.56, 7.52 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"offset" : [ 7.56, 7.52 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"offset" : [ 7.56, 7.52 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"offset" : [ 7.56, 7.52 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"offset" : [ 7.56, 7.52 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATBRG",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"offset" : [ 7.56, 7.52 ],
	"imageFill" : nightImagePath + "BRIDGE01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr cl %4.1lf','VERCCL',3,1,2,'15110',1,0,CHBLK,11)"
},
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "11"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "3",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
/*
 * , "textoffsetY" : "0", "textoffsetX" : "0", "textfont" : "12px
 * sans-serif;#4C5B63", "textfeaturename" : "OBJNAM", "imgpoints" : "0",
 * "imgradius" : "0"
 */
},
// No display available for Bridge - Point
/*
 * { "Condition" : "NONE", "Attributes" : [ { "Comparision" : "==",
 * "Attribute_Name" : "OBJL", "Attribute_Value" : "11" } ],
 *
 * "Stroke_color" : "transparent", "Stroke_width" : "0", "Fill_color" :
 * "transparent", "linedashstyle" : [ 0, 0 ], "imageFill" : "transparent",
 * "rotation" : "0",
 *
 * "offset" : [ 0, 0 ] },
 */

// CANALS - 23
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "23"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "23"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONDTN",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "23"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONDTN",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "23"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONDTN",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "23"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONDTN",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "23"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// DRYDOC - 47
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "47"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "#201813",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// DWRTPT - 41
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "41"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : "0"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : nightImagePath + "TSSLPT51.svg",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "41"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : "0"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" :  nightImagePath + "TSSLPT51.svg",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "41"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : "0"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" :  nightImagePath + "TSSLPT51.svg",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "41"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : ">",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : "0"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : nightImagePath + "DWRUTE51.svg",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "41"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : nightImagePath + "TSLDEF51.svg",
	"zIndex" : 9
},

// FLODOC - 57
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "57"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "57"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// FSHGRD - 56
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "56"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#768C97",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// HRBARE - 63
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "63"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 13.6, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// HULKES - 65
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "65"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "65"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "HULKES01.svg",
	"rotation" : "0",
	"offset" : [ 9.60, 5.33 ],
	"zIndex" : 9
},

// LAKARE - 69
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "69"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// LNDMRK 74
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "33"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,2,'15110',0,0,CHBLK,26)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "33"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,2,'15110',0,0,CHBLK,26)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#A19653",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "33"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS03.svg",
	"rotation" : "0",
	"offset" : [ 6.61, 21.88 ],
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,-1,CHBLK,26)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "15"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL13.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "15"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL13.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL13.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL13.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL13.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL13.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "26"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL15.svg",
	"rotation" : "0",
	"offset" : [ 6.92, 13.80 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "27"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL15.svg",
	"rotation" : "0",
	"offset" : [ 6.92, 13.80 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "31"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS15.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 26.46 ],
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,1,CHBLK,26)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "31"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS05.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 26.46 ],
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,1,CHBLK,26)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "33"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS01.svg",
	"rotation" : "0",
	"offset" : [ 6.54, 21.85 ],
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,3,2,2,'15110',1,1,CHBLK,26)"
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CAIRNS11.svg",
	"rotation" : "0",
	"offset" : [ 9.07, 16.63 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHIMNY11.svg",
	"rotation" : "0",
	"offset" : [ 6.61, 23.28 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DSHAER11.svg",
	"rotation" : "0",
	"offset" : [ 6.27, 18.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLGSTF01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLASTK11.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 21.05 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MSTCON14.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 22.68 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "8"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN03.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "9"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MONUMT12.svg",
	"rotation" : "0",
	"offset" : [ 7.45, 13.42 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "10"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MONUMT12.svg",
	"rotation" : "0",
	"offset" : [ 7.45, 13.42 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "12"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MONUMT12.svg",
	"rotation" : "0",
	"offset" : [ 7.45, 13.42 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "13"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MONUMT12.svg",
	"rotation" : "0",
	"offset" : [ 7.45, 13.42 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "15"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DOMES011.svg",
	"rotation" : "0",
	"offset" : [ 9.37, 14.02 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "16"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "RASCAN11.svg",
	"rotation" : "0",
	"offset" : [ 7.82, 18.60 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS03.svg",
	"rotation" : "0",
	"offset" : [ 6.61, 21.88 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "18"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WNDMIL12.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 11.34 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "19"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WIMCON11.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 23.17 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN03.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "20"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "FUNCTN",
		"Attribute_Value" : "20"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUIREL01.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CAIRNS01.svg",
	"rotation" : "0",
	"offset" : [ 9.07, 16.63 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHIMNY01.svg",
	"rotation" : "0",
	"offset" : [ 6.61, 23.28 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DSHAER01.svg",
	"rotation" : "0",
	"offset" : [ 6.27, 18.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLGSTF01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 17.01 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLASTK01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 21.05 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MSTCON04.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 22.68 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "8"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN03.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "9"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MONUMT02.svg",
	"rotation" : "0",
	"offset" : [ 7.45, 13.42 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "10"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MONUMT02.svg",
	"rotation" : "0",
	"offset" : [ 7.45, 13.42 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "12"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MONUMT02.svg",
	"rotation" : "0",
	"offset" : [ 7.45, 13.42 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "13"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MONUMT02.svg",
	"rotation" : "0",
	"offset" : [ 7.45, 13.42 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "15"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DOMES001.svg",
	"rotation" : "0",
	"offset" : [ 9.41, 14.36 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "16"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "RASCAN01.svg",
	"rotation" : "0",
	"offset" : [ 7.63, 18.67 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "17"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS01.svg",
	"rotation" : "0",
	"offset" : [ 6.54, 21.85 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "18"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WNDMIL02.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 11.34 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "19"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WIMCON01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 23.17 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATLMK",
		"Attribute_Value" : "20"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN01.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  , {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN03.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "74"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN01.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},

// LNDRGN 73
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "73"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "73"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN04.svg",
	"rotation" : "0",
	"offset" : [ 3.78, 3.78 ],
	"zIndex" : 9
},

// LOKBSN 79
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "79"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

// MARCUL 82
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "82"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "82"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#768C97",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "82"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MARCUL02.svg",
	"rotation" : "0",
	"offset" : [ 13.34, 7.63 ],
	"zIndex" : 9
},

// MORFAC 84
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYMOR01.svg",
	"rotation" : "0",
	"offset" : [ 13.04, 19.65 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	} ,{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "5"
	} ] ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PILPNT02.svg",
	"rotation" : "0",
	"offset" : [ 3.78, 3.78 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "7"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "BOYSHP",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYMOR03.svg",
	"rotation" : "0",
	"offset" : [ 10.77, 18.56 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MORFAC03.svg",
	"rotation" : "0",
	"offset" : [ 5.44, 4.88 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MORFAC04.svg",
	"rotation" : "0",
	"offset" : [ 6.80, 19.01 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PILPNT02.svg",
	"rotation" : "0",
	"offset" : [ 3.78, 3.78 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "5"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PILPNT02.svg",
	"rotation" : "0",
	"offset" : [ 3.78, 3.78 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "7"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYMOR11.svg",
	"rotation" : "0",
	"offset" : [ 14.36, 6.61 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	} ,{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	},],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "MORFAC03.svg",
	"rotation" : "0",
	"offset" : [ 5.44, 4.88 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATMOR",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "84"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

//SLOGRD 127
{
	"Condition" : "BOTH_ANDORAND",
	"Attributes" : [ [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "127"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	[ {
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "5"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "7"
	}, ], [ {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	} ],

	],
	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#373531",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "127"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "6"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "#373531",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "127"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "HILTOP01.svg",
	"rotation" : "0",
	"offset" : [ 19.20, 16.59 ],
	"zIndex" : 9
},

//SMCFAC 128
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "128"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "SMCFAC02.svg",
	"rotation" : "0",
	"offset" : [ 12.85, 13.04 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "128"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "#373531",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

//SWPARE 134
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "134"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "SWPARE51.svg",
	"zIndex" : 9/*,
	"textfeaturename" : "TE('swept to %5.1lf','DRVAL1',1,2,2,'15110',0,1,CHBLK,27)"*/
},

//VEGATN 155
{
	"Condition" : "BOTH_ORANDOR",
	"Attributes" : [ [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "155",
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	[ {
		"Comparision" : "==",
		"Attribute_Name" : "CATVEG",
		"Attribute_Value" : "7",
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATVEG",
		"Attribute_Value" : "21"
	} ]

	],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",//nightImagePath + "VEGATN04.svg",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "155"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",//nightImagePath + "VEGATN03.svg",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "155"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "BOTH_ORANDOR",
	"Attributes" : [ [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "155",
	} ],

	[ {
		"Comparision" : "==",
		"Attribute_Name" : "CATVEG",
		"Attribute_Value" : "7",
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATVEG",
		"Attribute_Value" : "21"
	} ] ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TREPNT05.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 11.34 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "155"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TREPNT04.svg",
	"rotation" : "0",
	"offset" : [ 6.65, 15.16 ],
	"zIndex" : 9
},

//OFSPLF 87
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "87"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}  ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "OFSPLF01.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('Prod %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "87"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "4.8",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TE('Prod %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},

//OSPARE 88
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "88"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

//PONTON 95
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "95"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "95"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

//PYLONS 98
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "98"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "98"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN03.svg",
	"zIndex" : 9
},

//RIVERS 114
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "114"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#150a21",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "114"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

//SILTNK 125
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "#231b0c",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "SILBUI11.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 5.67 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	},  {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON12.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	},  {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ,{
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS03.svg",
	"rotation" : "0",
	"offset" : [ 6.61, 21.88 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS12.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 18.90 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	},  {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ,{
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON12.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "SILBUI01.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 5.67 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON02.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS01.svg",
	"rotation" : "0",
	"offset" : [ 6.54, 21.85 ],
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "CATSIL",
		"Attribute_Value" : "4"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TOWERS02.svg",
	"rotation" : "0",
	"offset" : [ 5.67, 18.90 ],
	"zIndex" : 9
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "125"
	} , {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "TNKCON02.svg",
	"rotation" : "0",
	"offset" : [ 5.37, 5.33 ],
	"zIndex" : 9
},

//WEDKLP 158

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "158"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "WEDKLP03.svg",
	"rotation" : "0",
	"offset" : [ 18.90, 4.72 ],
	"zIndex" : 9
},

//TIDEWY 143
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "143"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,25)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "143"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}, ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

//ACHBRT 3
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29);LS(DASH,2,CHMGF)"
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "3"
	} , {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "ACHBRT07.svg",
	"rotation" : "0",
	"offset" : [ 9.60, 10.54 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)"
},

//BERTHS 10


{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "10"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9/*,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)"*/
},

{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "10"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',1,2,2,'15110',1,0,CHBLK,29)"
},
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "10"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BRTHNO01.svg",
	"offset" : [ 13.23, 13.23 ],
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,0,CHBLK,29)"
},
//FRPARE 60
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "60"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

//ICEARE 66
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "66"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "#000000",
	"linedashstyle" : [ 12, 6.8 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "162"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#CBA9FA",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//CAUSWY
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "26"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#8D642E",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "26"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#8D642E",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//CAUSWY POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "26"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "WATLEV",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "26"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//CBLOHD

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "VERCSA",
		"Attribute_Value" : null
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('sf clr %4.1lf','VERCSA',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "VERCSA",
		"Attribute_Value" : null
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('sf clr %4.1lf','VERCSA',3,1,2,'15110',1,0,CHBLK,11)"

}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "VERCLR",
		"Attribute_Value" : null
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "VERCLR",
		"Attribute_Value" : null
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "VERCSA",
		"Attribute_Value" : null
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('sf clr %4.1lf','VERCSA',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "VERCLR",
		"Attribute_Value" : null
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "21"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//CBLSUB
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "22"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATCBL",
		"Attribute_Value" : "6"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "22"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//CONVYR
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATCON",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATCON",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATCON",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATCON",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATCON",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATCON",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4C5B63",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
},
//CONVYR POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
},

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "34"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,0,CHBLK,11)"
},
//DAMCON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "38"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATDAM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#8D642E",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "38"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#8D642E",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//DAMCON POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "38"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATDAM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#3e3c37",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "38"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//DAMCON POINT
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "38"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATDAM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : dayImagePath + "CHINFO06.svg",
	"rotation" : "0",
	"offset" : [ 7.56, 7.56 ],
	"zIndex" : 9
},
//  DWRTCL

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	}, , {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "40"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#C045D1",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg',’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
},
//DYKCON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "49"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#8D642E",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "49"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#8D642E",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//DYKCON POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "49"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//FERYRT
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "53"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFRY",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "53"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFRY",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "53"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//FERYRT POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "53"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATFRY",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "53"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//FNCLNE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "52"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "52"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//FORSTC LINE 59
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "59"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//FORSTC POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "59"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ,{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "59"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//FORSTC POINT
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "59"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath +"FORSTC11.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "59"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",//transparent
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath +"FORSTC01.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//GATCON LINE 61
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATGAT",
		"Attribute_Value" : "5"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",//#3e3c37
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATGAT",
		"Attribute_Value" : "4"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",//#3e3c37
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATGAT",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",//#3e3c37
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATGAT",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",//#3e3c37
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",//#3e3c37
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//GATCON POLYGON 61
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#3e3c37",//#3e3c37
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//GATCON POINT 61
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATGAT",
		"Attribute_Value" : "4"
	},  {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath +"GATCON03.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATGAT",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath +"GATCON04.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATGAT",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath +"GATCON04.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "61"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath +"GATCON04.svg",
	"rotation" : "0",
	"zIndex" : 9
},

//LNDELV 72 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "72"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#2c200c",//#2c200c
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//point
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "72"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath +"POSGEN04.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%3.0lf m','ELEVAT',3,2,2,'15110',1,0,CHBLK,28)"
},
//LOCMAG 78 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "78"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4f1b41",//#4f1b41
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath +"LOCMAG01.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//polygon

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "78"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",//#4f1b41
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath +"LOCMAG01.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//point
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "78"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath+"LOCMAG01.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//MAGVAR 81 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "81"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4f1b41",//#4f1b41
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath +"MAGVAR51.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('varn %3.2f','VALMAG',3,1,2,'15110',1,-1,CHBLK,27)"
},
//polygon
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "81"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",//transparent
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath +"MAGVAR51.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//point
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "81"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",//transparent
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath +"MAGVAR01.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TX(VALMAG,3,1,2,'15110',1,-1,CHBLK,27)"
},

//NAVLNE 85 line

{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "85"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATNAV",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "85"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATNAV",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "85"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//OILBAR 89 Line
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "89"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//PIPOHD 93 Line
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "93"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath +"RACNSP01.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,-1,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "93"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : nightImagePath + "RDOCAL03.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,-1,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "93"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('clr %4.1lf','VERCLR',3,1,2,'15110',1,-1,CHBLK,11)"
},
//PIPSOL 94 Line
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "94"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATPIP",
		"Attribute_Value" : "5"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "EMPIPSL2.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "94"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATPIP",
		"Attribute_Value" : "4"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "EMPIPSL2.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "94"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATPIP",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "EMPIPSL2.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "94"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATPIP",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "EMPIPSL2.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "94"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "PRODCT",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "EMPIPSL2.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "94"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4f1b41",//#4f1b41
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "EMPIPSL1.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//RADLNE 99 Line
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "99"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",//#561d47
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
},
//RAILWY 106 Line
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "106"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#2c200c",//#2c200c
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE(‘%03.0lf deg’,’ORIENT’,1,1,2,’15110’,0,-1,CHBLK,11)"
},
//RAPIDS 107 Line
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "107"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" : "transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "transparent"
},
//RAPIDS 107 POLYGON
//RAPIDS 107 POINT

//RCRTCL 108 Line
//RDOCAL 104 Line
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",//#561d47
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "RDOCAL03.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",//#561d47
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "RDOCAL02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",//#561d47
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "RDOCAL02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",//#561d47
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "RDOCAL02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",//#561d47
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" : nightImagePath + "RCLDEF01.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
//RDOCAL 104 Point
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" : nightImagePath + "RDOCAL03.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" : nightImagePath + "RDOCAL02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" : nightImagePath + "RDOCAL02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" : nightImagePath + "RDOCAL02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "104"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" : nightImagePath + "RCLDEF01.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Nr %s','OBJNAM',3,2,2,'15110',1,-1,CHBLK,21)"
},
//RECTRC 109 LINE

//RECTRC 109 AREA
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC58.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC58.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC58.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC56.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC57.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC57.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC57.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATTRK",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC55.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC57.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC57.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC57.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	},{
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECTRC55.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "109"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8],
	"imageFill" : nightImagePath + "RECDEF51.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
//RUNWAY 117 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "117"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#2c200c",//#2c200c
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',3,2,2,'15110',4,0,CHBLK,11)"
},
//RUNWAY 117 POLYGON
//RUNWAY 117 POINT
//SLOTOP 126 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "126"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "126"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "6"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CONRAD",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "126"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "6"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "126"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "126"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CATSLO",
		"Attribute_Value" : "6"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "126"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#2c200c",//#2c200c
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},

//SNDWAV 118 line
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "118"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" :nightImagePath + "SNDWAV02.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//SNDWAV 118 AREA
//SNDWAV 118 POINT
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "118"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 0, 0 ],
	"imageFill" :nightImagePath + "SNDWAV02.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//STSLNE 132 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "132"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#252221",//#252221
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [ 12.0, 6.8 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//TSELNE 145 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "145"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#4f1b41",//#4f1b41
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :  [0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//TSSBND 146 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "146"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",//#561d47
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},// TSSCRS 147 AREA
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "147"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#C045D1",//#561d47
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//TUNNEL 151 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "151"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "BURDEP",
		"Attribute_Value" : "0"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "151"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//TUNNEL 151 POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "151"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "BURDEP",
		"Attribute_Value" : "0"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "151"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//TUNNEL 151 POINT

//WATFAL 157 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "157"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#3e3c37",//#3e3c37
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "157"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#252221",//#252221
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9
},
//WATFAL 157 POINT

//WATTUR 156 LINE
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "156"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" :nightImagePath + "WATTUR02.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//WATTUR 156 POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "156"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",//#373531
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.8 ],
	"imageFill" :nightImagePath + "WATTUR02.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//WATTUR 156 POINT
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "156"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" :nightImagePath + "WATTUR02.svg",
	"rotation" : "0",
	"zIndex" : 9
},
//SEAARE 119 POLYGON
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "119"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "119"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0],
	"imageFill" :"transparent",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
}
,// TSSLPT  148
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "148"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" :nightImagePath + "TSSLPT51.svg",
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,2,'15110',0,0,CHBLK,26)"
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "148"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" :nightImagePath + "CTNARE51.svg",
	"zIndex" : 9,
	"textfeaturename" : "TX(INFORM,1,1,2,'15110',0,-2,CHBLK,24)"
},
// TSSRON 	149
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "149"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" :nightImagePath + "TSSRON51.svg",
	"zIndex" : 9
},

//latest features
// AIRARE 2
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CONVIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "#373531",// #2c200c
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#2c200c",// #2c200c
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "AIRARE02.svg",
	"rotation" : "0",
	"zIndex" : 9
},
// BOYINB 15
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "15"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BOYMOR11.svg",
	"rotation" : "0",
	"zIndex" : 9
},
// BUAARE 13
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "13"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#2c200c",// #2c200c
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"zIndex" : 9,
	"textfeaturename" : "TX(OBJNAM,1,2,3,'15110',0,0,CHBLK,26)"
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "13"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "BUAARE02.svg",
	"rotation" : "0",
	"zIndex" : 9
},
// CGUSTA 29
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "29"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CGUSTA02.svg",
	"rotation" : "0",
	"zIndex" : 9
},
// CHKPNT 28
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "28"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN04.svg",
	"rotation" : "0",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "28"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHKPNT01.svg",
	"rotation" : "0",
	"zIndex" : 9
},
// CONZNE 31
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "31"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
// COSARE 32
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "32"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
// CTRPNT 33
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "33"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "POSGEN04.svg",
	"rotation" : "0",
	"zIndex" : 9
},
// CURENT 36
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "36"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CURVEL",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CURENT01.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "36"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CURENT01.svg",
	"rotation" : "0",
	"zIndex" : 9,
},

// {
// 	"Condition" : "AND",
// 	"Attributes" : [ {
// 		"Comparision" : "==",
// 		"Attribute_Name" : "OBJL",
// 		"Attribute_Value" : "36"
// 	}, {
// 		"Comparision" : "geometrytype",
// 		"Attribute_Name" : "PRIM",
// 		"Attribute_Value" : "1"
// 	} ],

// 	"Stroke_color" : "transparent",
// 	"Stroke_width" : "0",
// 	"Fill_color" : "transparent",
// 	"linedashstyle" : [ 0, 0 ],
// 	"imageFill" : nightImagePath + "CURDEF01.svg",
// 	"rotation" : "0",
// 	"zIndex" : 9,
// },
// CUSZNE 37
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "27"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
// DISMAR 44
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "44"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CATDIS",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DISMAR04.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TX(INFORM,2,1,2,'15110',2,0,CHBLK,21)"
}, {
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "44"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "DISMAR03.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TX(INFORM,2,1,2,'15110',2,0,CHBLK,21)"
},
//EXEZNE 50
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "50"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
//FRPARE 60
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "60"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
//FSHZNE  54
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "54"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
//GRIDRN 62
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "62"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
//ICNARE 67
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "67"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "67"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "CHINFO07.svg",
	"rotation" : "0",
	"zIndex" : 9,
},
//ISTZNE 68
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "68"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
//LITVES 77
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "77"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "LITVES02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('LtV %s','OBJNAM',2,1,2,'15110',-1,-1,CHBLK,21)"
},
//LOGPON 80
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "80"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "80"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "FLTHAZ02.svg",
	"rotation" : "0",
	"zIndex" : 9,
},
//PILBOP 91
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "91"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "91"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "PILBOP02.svg",
	"rotation" : "0",
	"zIndex" : 9,
	"textfeaturename" : "TE('Plt %s','OBJNAM',3,1,2,'15110',1,-1,CHBLK,21)"
},
//RADLNE 99
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "99"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"rotation" : "0",
	"offset" : [ 0, 0 ],
	"imageFill" : "transparent",
	"zIndex" : 9,
	"textfeaturename" : "TE('%03.0lf deg','ORIENT',1,1,2,'15110',0,-1,CHBLK,11)"
},
//RADRFL 101
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "101"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" : nightImagePath + "RADRFL03.svg",
	"rotation" : "0",
	"zIndex" : 9,
},
// NEWOBJ 163
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "163"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "SYMINS",
		"Attribute_Value" : null
	}],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "NEWOBJ01.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "163"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "NEWOBJ01.svg",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "163"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "SYMINS",
		"Attribute_Value" : null
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "EMNEWOB1.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "163"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "EMNEWOB1.svg",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "163"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "SYMINS",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0],
	"imageFill" :nightImagePath + "NEWOBJ01.svg",
	"rotation" : "0",	
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "163"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0],
	"imageFill" :nightImagePath + "NEWOBJ01.svg",
	"rotation" : "0",	
	"zIndex" : 9
},

// ASLXIS 162
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "162"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	}],

	"Stroke_color" : "#4f1b41", 
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "EMNEWOB1.svg",
	"zIndex" : 9
},
// ARCSLN 161
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "161"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "NEWOBJ01.svg",
	"zIndex" : 9
},
// T_TIMS  142
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "161"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TIDEHT01.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "142"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0],
	"imageFill" :nightImagePath + "TIDEHT01.svg",
	"rotation" : "0",	
	"zIndex" : 9
},
// T_HMON 140
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "140"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TIDEHT01.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [ {
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "140"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0],
	"imageFill" :nightImagePath + "TIDEHT01.svg",
	"rotation" : "0",	
	"zIndex" : 9
},

// TWRTPT 152

{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "152"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "4"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "4",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TWRTPT52.svg",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "152"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "4",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TWRTPT53.svg",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "152"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "2"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "4",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TWRTPT53.svg",
	"zIndex" : 9
},{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "152"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "TRAFIC",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "4",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TWRTPT53.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "152"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#561d47",
	"Stroke_width" : "4",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TWRDEF51.svg",
	"zIndex" : 9
},
// TS_TIS 139
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "139"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TIDSTR01.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "139"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0],
	"imageFill" :nightImagePath + "TIDSTR01.svg",
	"zIndex" : 9
},
// TS_PRH   136
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "136"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TIDSTR01.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "136"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0],
	"imageFill" :nightImagePath + "TIDSTR01.svg",
	"zIndex" : 9
},
// TS_PNH  137 
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "137"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TIDSTR01.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "137"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0],
	"imageFill" :nightImagePath + "TIDSTR01.svg",
	"zIndex" : 9
},
//   TS_PAD  138
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "138"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "TIDSTR01.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "138"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0],
	"imageFill" :nightImagePath + "TIDSTR01.svg",
	"zIndex" : 9
},
// TS_FEB  160
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "160"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CAT_TS",
		"Attribute_Value" : "3"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "CURENT01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "160"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CAT_TS",
		"Attribute_Value" : "2"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "EBBSTR01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "160"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CAT_TS",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" :[0, 0 ],
	"imageFill" :nightImagePath + "FLDSTR01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "160"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#373531",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 12.0, 6.0 ],
	"imageFill" :nightImagePath + "CURENT01.svg",
	"zIndex" : 9
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "160"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CAT_TS",
		"Attribute_Value" : "3"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "CURENT01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "160"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CAT_TS",
		"Attribute_Value" : "2"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "EBBSTR01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
},
{
	"Condition" : "AND",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "160"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}, {
		"Comparision" : "==",
		"Attribute_Name" : "CAT_TS",
		"Attribute_Value" : "1"
	} , {
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" :nightImagePath + "FLDSTR01.svg",
	"zIndex" : 9,
	"textfeaturename" : "TE('%4.1lf kn','CURVEL',3,1,2,'15110',1,-1,CHBLK,30)"
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "160"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [ 0, 0 ],
	"imageFill" :nightImagePath + "CURENT01.svg",
	"zIndex" : 9
},
// TSSRON 149
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "149"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#FF00FF",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [12.0, 6.0 ],
	"imageFill" :nightImagePath + "TSSRON51.svg",
	"zIndex" : 9
},
// TSSCRS 147
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "147"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#FF00FF",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [12.0, 6.0 ],
	"imageFill" :nightImagePath + "TSSCRS51.svg",
	"zIndex" : 9
},
// TESARE 135
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "135"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [12.0, 6.0 ],
	"imageFill" :nightImagePath + "TSSCRS51.svg",
	"zIndex" : 9
},
// SUBTLN 133
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "133"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [12.0, 6.0 ],
	"imageFill" :nightImagePath + "CTYARE51.svg",
	"zIndex" : 9
},
// STSLNE  132
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "132"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#252221",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [12.0, 6.0 ],
	"imageFill" :"transparent",
	"zIndex" : 9
},
// SPRING  130
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "130"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "SPRING02.svg",
	"zIndex" : 9
},
// SPLARE 120
{
	"Condition" : "NONE",
	"Attributes" : [
	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "120"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#4f1b41",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [12.0, 6.0 ],
	"imageFill" :nightImagePath + "CTYARE51.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "120"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "CHINFO06.svg",
	"zIndex" : 9
},
// RSCSTA 111
{
	"Condition" : "NONE",
	"Attributes" : [

	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "111"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "RSCSTA02.svg",
	"zIndex" : 9
},
// ROADWY 116
{
	"Condition" : "NONE",
	"Attributes" : [
	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "116"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :"transparent",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [
	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "116"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "2"
	} ],

	"Stroke_color" : "#2c200c",
	"Stroke_width" : "2",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :"transparent",
	"zIndex" : 9
},
// RCTLPT  110
{
	"Condition" : "AND",
	"Attributes" : [
	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "110"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	} ],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "RCTLPT52.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [
	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "110"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	},{
		"Comparision" : "==",
		"Attribute_Name" : "ORIENT",
		"Attribute_Value" : null
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "RCTLPT52.svg",
	"zIndex" : 9
},
{
	"Condition" : "NONE",
	"Attributes" : [
	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "110"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "1"
	}],

	"Stroke_color" : "transparent",
	"Stroke_width" : "0",
	"Fill_color" : "transparent",
	"linedashstyle" : [0, 0 ],
	"imageFill" :nightImagePath + "RTLDEF51.svg",
	"zIndex" : 9
},
// RADRNG 100
{
	"Condition" : "NONE",
	"Attributes" : [
	{
		"Comparision" : "==",
		"Attribute_Name" : "OBJL",
		"Attribute_Value" : "100"
	},{
		"Comparision" : "geometrytype",
		"Attribute_Name" : "PRIM",
		"Attribute_Value" : "3"
	}],

	"Stroke_color" : "#4f1b41", 
	"Stroke_width" : "1",
	"Fill_color" : "transparent",
	"linedashstyle" : [12.0, 6.0 ],
	"imageFill" :"transparent",
	"zIndex" : 9
}
];
