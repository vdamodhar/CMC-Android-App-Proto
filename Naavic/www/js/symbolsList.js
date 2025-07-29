var symbol_list = [
               {
                   "Description": "Chimney",
                   "imagename": "Chimney"
               },
               {
                   "Description": "Dish aerial",
                   "imagename": "dishaerial"
               },
               {
                   "Description": "Dome",
                   "imagename": "Dome"
               },
               {
                   "Description": "Dune",
                   "imagename": "Dune"
               },
               {
                   "Description": "Fixed Bridge",
                   "imagename": "FixedBridge"
               },
               {
                   "Description": "Flagstaff (flag pole)",
                   "imagename": "flagstaff"
               },
               {
                   "Description": "Flare stack",
                   "imagename": "flarestack"

               },
               {
                   "Description": "Mast",
                   "imagename": "mast"
               },
               {
                   "Description": "Monument",
                   "imagename": "monument"
               },
               {
                   "Description": "Quarry",
                   "imagename": "quarry"
               },
               {
                   "Description": "Radar sacnner",
                   "imagename": "radarSacnner"
               },
               {
                   "Description": "Radio tower",
                   "imagename": "radiotower"
               },
               {
                   "Description": "Refinery area",
                   "imagename": "refineryarea"
               },
               {
                   "Description": "Soil in general",
                   "imagename": "soilingeneral"
               },
               {
                   "Description": "Spire/minaret",
                   "imagename": "spireOrminaret"
               },
               {
                   "Description": "Tank farm",
                   "imagename": "tankfarm"
               },
               {
                   "Description": "Tank in general",
                   "imagename": "tankingeneral"
               },
               {
                   "Description": "Tower",
                   "imagename": "tower"
               },
               {
                   "Description": "Tree in general",
                   "imagename": "treeingeneral"
               },
               {
                   "Description": "Vegetation",
                   "imagename": "Vegetation"
               },
               {
                   "Description": "Water tower",
                   "imagename": "watertower"
               },
               {
                   "Description": "Wind farm",
                   "imagename": "windfarm"
               },
               {
                   "Description": "Windmill",
                   "imagename": "windmill"
               },
               
               {
                   "Description": "Wind motor",
                   "imagename": "windmotor"
               },
			   {
                   "Description": "Airport/airfield",
                   "imagename": "Airportairfield"
               },
			   {
                   "Description": "Building,single",
                   "imagename": "BuildingSingle"
               },
			   {
                   "Description": "Built-up area",
                   "imagename": "Builtuparea"
               },
			   {
                   "Description": "Cable,overhead",
                   "imagename": "CableOverhead"
               },
			   {
                   "Description": "Coastline,surveyed",
                   "imagename": "CoastlineSurveyed"
               },
			   {
                   "Description": "Coastline,unsurveyed",
                   "imagename": "CoastlineUnsurveyed"
               },
			   {
                   "Description": "Fortified structure",
                   "imagename": "Fortifiedstructure"
               },
              {
                   "Description": "Pipeline,Overhead",
                   "imagename": "PipelineOverhead"
               },
			   {
                   "Description": "Land elevation",
                   "imagename": "LandElevation"
               },
			   {
                   "Description": "Radar reflector",
                   "imagename": "Radarreflector"
               },
			   {
                   "Description": "River,stream",
                   "imagename": "RiverStreams"
               },
			   {
                   "Description": "Road",
                   "imagename": "Roads"	
               },
			   
           ];

function getAttributesimagename1(){
	var text = '';
    for(var i=0;  i<symbol_list.length; i++){
       /*  if(symbol_list[i].Description == Description){
            return symbol_list[i].imagename;
            break;
        } */
		text = '<tr> <td><img src="./INCIMAGES/natural/'+symbol_list[i].imagename+'.PNG"></td><td><span>'+symbol_list[i].Description+'</span></td></tr>';
		$("#content1").append(text);
    }
	
}
//category 2
var symbol_list2 = [
               {
                   "Description": "Back water",
                   "imagename": "Backwater"
               },
               {
                   "Description": "Berth",
                   "imagename": "Berth"
               },
               {
                   "Description": "Caisson",
                   "imagename": "Caisson"
               },
               {
                   "Description": "Crane",
                   "imagename": "Crane"
               },
               {
                   "Description": "Dam",
                   "imagename": "Dam"
               },
               {
                   "Description": "Deviation dolphin",
                   "imagename": "Deviationdolphin"
               },
               {
                   "Description": "Distance mark",
                   "imagename": "Distancemark"

               },
               {
                   "Description": "Distance mark not physically installed ",
                   "imagename": "Distancemarkntphinst"
               },
               {
                   "Description": "Dolphin",
                   "imagename": "Dolphin"
               },
               {
                   "Description": "Fishing harbour",
                   "imagename": "Fishingharbour"
               },
               {
                   "Description": "Hulk",
                   "imagename": "Hulk"
               },
               {
                   "Description": "Lockgate",
                   "imagename": "Lockgate"
               },
               {
                   "Description": "pier(jetty)",
                   "imagename": "pierjetty"
               },
               {
                   "Description": "post or pile",
                   "imagename": "postorpile"
               },
               {
                   "Description": "RoRo-terminal",
                   "imagename": "RoRo-terminal"
               },
               {
                   "Description": "Tidal",
                   "imagename": "Tidal"
               },
               {
                   "Description": "Timber yard",
                   "imagename": "Timberyard"
               },
               {
                   "Description": "yacht harbour/Marina",
                   "imagename": "yachtharbourMarina"
               },
			   {
                   "Description": "New Object",
                   "imagename": "newobj"
               },
               
           ];

function getAttributesimagename2(){
	var text = '';
    for(var i=0;  i<symbol_list2.length; i++){
       /*  if(symbol_list[i].Description == Description){
            return symbol_list[i].imagename;
            break;
        } */
		text = '<tr> <td><img src="./INCIMAGES/portfeatures/'+symbol_list2[i].imagename+'.PNG"></td><td><span>'+symbol_list2[i].Description+'</span></td></tr>';
		$("#content2").append(text);
    }
	
}

//category 3
var symbol_list3 = [
               {
                   "Description": "Current-non-gravitational",
                   "imagename": "Current-non-gravitational"
               },
               {
                   "Description": "Ebb stream",
                   "imagename": "ebbstream"
               },
               {
                   "Description": "Flood stream",
                   "imagename": "Floodstream"
               },
               {
                   "Description": "Tidal stream panel data",
                   "imagename": "Tidalstreampaneldata"
               },
               {
                   "Description": "Tidal streams-Flood Ebb",
                   "imagename": "Tidalstreams-FloodEbb"
               },
               {
                   "Description": "tide-hormonic prediction",
                   "imagename": "tide-hormonicprediction"
               },
               {
                   "Description": "Water turbulence",
                   "imagename": "Waterturbulence"

               },
               {
                   "Description": "Dredged area",
                   "imagename": "Dredgedarea"
               },
               {
                   "Description": "Incompletely surveyed area",
                   "imagename": "incompletelysurveyedarea"
               },
               {
                   "Description": "Swept area",
                   "imagename": "Sweptarea"
               },
               {
                   "Description": "Tidal stream area",
                   "imagename": "Tidalstreamarea"
               },
               {
                   "Description": "unsuryed area",
                   "imagename": "unsuryedarea"
               },
               {
                   "Description": "Soundings",
                   "imagename": "Soundings"
               },
			   {
                   "Description": "",
                   "imagename": "deptharea2"
               },
			   {
                   "Description": "",
                   "imagename": "deptharea"
               },
               
           ];

function getAttributesimagename3(){
	var text = '';
    for(var i=0;  i<symbol_list3.length; i++){
       /*  if(symbol_list[i].Description == Description){
            return symbol_list[i].imagename;
            break;
        } */
		text = '<tr> <td><img src="./INCIMAGES/Depthsandcurrents/'+symbol_list3[i].imagename+'.PNG"></td><td><span>'+symbol_list3[i].Description+'</span></td></tr>';
		$("#content3").append(text);
    }
	
}
//category 4
var symbol_list4 = [
               {
                   "Description": "Cable,submarine",
                   "imagename": "Cablesubmarine"
               },
               {
                   "Description": "Fishing facility",
                   "imagename": "FishingFacility"
               },
               {
                   "Description": "Pipeline,Oil",
                   "imagename": "PipelineOil"
               },
			   {
                   "Description": "Pipeline,Water",
                   "imagename": "PipelineWater"
               },
               {
                   "Description": "Dangerous line obstruction",
                   "imagename": "Dangerouslineobs"
               },
               {
                   "Description": "Line Obstruction,shallower than 20m",
                   "imagename": "LineObstructionshallow"
               },
               {
                   "Description": "Line Obstruction,deeper than 20m",
                   "imagename": "LineObstructiondeep"

               },
               {
                   "Description": "Obstruction,low accuracy",
                   "imagename": "Obstructionlowaccuracy"
               },
               
               {
                   "Description": "Underwater/awashrock",
                   "imagename": "underwaterawashrock"
               },
               {
                   "Description": "New object point",
                   "imagename": "Newobjectpoint"
               },
               {
                   "Description": "Area of wrecks or obstructions in safe waters",
                   "imagename": "Areaofwrecks"
               },
               {
                   "Description": "Cable area",
                   "imagename": "CableArea"
               },
			   {
                   "Description": "pipe area,oil",
                   "imagename": "pipeareaoil"
               },
			   
               {
                   "Description": "Restricted area,navigate with caution",
                   "imagename": "restrictedarea"
               },
			   {
                   "Description": "Rock or coral seabed area and fish haven",
                   "imagename": "Rockorcoral"
               },
			   {
                   "Description": "Sand waves",
                   "imagename": "Sandwaves"
               },
			   
           ];

function getAttributesimagename4(){
	var text = '';
    for(var i=0;  i<symbol_list4.length; i++){
       /*  if(symbol_list[i].Description == Description){
            return symbol_list[i].imagename;
            break;
        } */
		text = '<tr> <td><img src="./INCIMAGES/Seabedsobstructions/'+symbol_list4[i].imagename+'.PNG"></td><td><span>'+symbol_list4[i].Description+'</span></td></tr>';
		$("#content4").append(text);
    }
	
}
//category 5
var symbol_list5 = [
               {
                   "Description": "Aero marine radio beacon",
                   "imagename": "aeromarineradiobeacon"
               },
               {
                   "Description": "Cost gaurd station",
                   "imagename": "Costgaurdstation"
               },
               {
                   "Description": "Flood light",
                   "imagename": "floodlight"
               },

               {
                   "Description": "Harbour facility",
                   "imagename": "Harbourfacility"
               },
               {
                   "Description": "Horn fog signal",
                   "imagename": "hornfogsignal"
               },
               {
                   "Description": "Light float",
                   "imagename": "Lightfloat"

               },
               {
                   "Description": "Light vessel",
                   "imagename": "Lightvessel"
               },
               
               {
                   "Description": "Pilot boarding place",
                   "imagename": "pilotboardingplace"
               },
               {
                   "Description": "Radar beacon trasmitting continuously",
                   "imagename": "radarbeacontrasmittingcontinusly"
               },
               {
                   "Description": "Radar reflector",
                   "imagename": "radarreflector"
               },
               {
                   "Description": "Radar surveillance station",
                   "imagename": "Radarsurveillancestation"
               },
			   {
                   "Description": "Radio differential GPS",
                   "imagename": "radiodifferentialGPS"
               },
			   {
                   "Description": "Radio station",
                   "imagename": "radiostation"
               },
               {
                   "Description": "Red Light",
                   "imagename": "RedLight"
               },
			   {
                   "Description": "Green light",
                   "imagename": "GreenLight"
               },
			   {
                   "Description": "Yellow light",
                   "imagename": "YellowLight"
               },
			   {
                   "Description": "Megenta light",
                   "imagename": "MegentaLight"
               },
			   {
                   "Description": "Rescue station",
                   "imagename": "rescuestation"
               },
			   {
                   "Description": "Reto-reflector",
                   "imagename": "Reto-reflector"
               },
			   {
                   "Description": "Signal station warning",
                   "imagename": "Signalstationwarning"
               },
			   {
                   "Description": "Strip light",
                   "imagename": "Striplight"
               },
			   {
                   "Description": "Recomemded track",
                   "imagename": "recomemdedtrack"
               },
           ];

function getAttributesimagename5(){
	var text = '';
    for(var i=0;  i<symbol_list5.length; i++){
       /*  if(symbol_list[i].Description == Description){
            return symbol_list[i].imagename;
            break;
        } */
		text = '<tr> <td><img src="./INCIMAGES/navaidsandservices/'+symbol_list5[i].imagename+'.PNG"></td><td><span>'+symbol_list5[i].Description+'</span></td></tr>';
		$("#content5").append(text);
    }
	
}
//category 6
var symbol_list6 = [
               {
                   "Description": "Buoy,lateral",
                   "imagename": "Buoylateral"
               },
               {
                   "Description": "Buoy,special purpose/general",
                   "imagename": "Buoyspecialpurposeorgeneral"
               },
               {
                   "Description": "Buoy,isolated danger",
                   "imagename": "Buoyisolateddanger"
               },

               {
                   "Description": "Buoy,safe water",
                   "imagename": "Buoysafewater"
               },
               {
                   "Description": "Buoy,East cardinal mark",
                   "imagename": "Eastcardinalmark"
               },
               {
                   "Description": "Buoy,South cardinal mark",
                   "imagename": "Southcardinalmark"

               },
               {
                   "Description": "Buoy,North cardinal mark",
                   "imagename": "Northcardinalmark"
               },
               
               {
                   "Description": "Buoy,West cardinal mark",
                   "imagename": "Westcardinalmark"
               },
               {
                   "Description": "General warning mark",
                   "imagename": "Generalwarningmark"
               },
               {
                   "Description": "Traffic separation scheme",
                   "imagename": "Trafficseparationscheme"
               },
               {
                   "Description": "Large automatic navigational buoy",
                   "imagename": "LANBY"
               },
			   {
                   "Description": "Mooring buoy",
                   "imagename": "Mooringbuoy"
               },
			   {
                   "Description": "Beacon,lateral",
                   "imagename": "Beaconlateral"
               },
               {
                   "Description": "Beacon,East cardinal mark",
                   "imagename": "BeaconEastcardinalmark"
               },
			   {
                   "Description": "Beacon,North cardinal mark",
                   "imagename": "BeaconNorthcardinalmark"
               },
			   {
                   "Description": "Beacon,South cardinal mark",
                   "imagename": "BeaconSouthcardinalmark"
               },
			   {
                   "Description": "Beacon,West cardinal mark",
                   "imagename": "BeaconWestcardinalmark"
               },
			   {
                   "Description": "Beacon,special purpose/general",
                   "imagename": "Beaconspecialpurposeorgeneral"
               },
			   {
                   "Description": "Beacon,isolated danger",
                   "imagename": "Beaconisolateddanger"
               },
			   {
                   "Description": "Beacon,safe water",
                   "imagename": "Beaconsafewater"
               },
			   {
                   "Description": "Daymark",
                   "imagename": "Daymark"
               },
			   {
                   "Description": "notice mark",
                   "imagename": "noticemark"
               },
           ];

function getAttributesimagename6(){
	var text = '';
    for(var i=0;  i<symbol_list6.length; i++){
       /*  if(symbol_list[i].Description == Description){
            return symbol_list[i].imagename;
            break;
        } */
		text = '<tr> <td><img src="./INCIMAGES/Buoysbeacons/'+symbol_list6[i].imagename+'.PNG"></td><td><span>'+symbol_list6[i].Description+'</span></td></tr>';
		$("#content6").append(text);
    }
	
}
//category 7
var symbol_list7 = [
               {
                   "Description": "Beacon,topmark",
                   "imagename": "Beacontopmarks"
               },
               {
                   "Description": "Buoys,topmark",
                   "imagename": "Buoystopmarks"
               },
               
           ];

function getAttributesimagename7(){
	var text = '';
    for(var i=0;  i<symbol_list7.length; i++){
       /*  if(symbol_list[i].Description == Description){
            return symbol_list[i].imagename;
            break;
        } */
		text = '<tr> <td><img src="./INCIMAGES/Topmark/'+symbol_list7[i].imagename+'.PNG"></td><td><span>'+symbol_list7[i].Description+'</span></td></tr>';
		$("#content7").append(text);
    }
	
}

function getallsymbols(){
	getAttributesimagename1();
	getAttributesimagename2();
	getAttributesimagename3();
	getAttributesimagename4();
	getAttributesimagename5();
	getAttributesimagename6();
	getAttributesimagename7();
	
}



