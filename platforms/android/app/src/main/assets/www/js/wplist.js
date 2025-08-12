/**
 * Method to add way point list
 */
function wpList(){
	$("#wpListId").html('');
	$("#wpListId_tab").html('');
	var list ="";
	var wpArrLength = wpArr.length;
	if(wpArrLength>0){
	for(var i=0; i<wpArrLength;i++){
	    var coordinates = ol.coordinate.toStringHDMS(wpArr[i].coordinates);
        var positionInLatLon = coordinates.split(" ");

        var latLonText = "";

        if($("#selectPositions").val() == "dm"){
            latLonText = wpArr[i].coordinates[1].toFixed(5) +" " +positionInLatLon[3] + " " + wpArr[i].coordinates[0].toFixed(5) +" " +positionInLatLon[7];
            console.log("IN IF -- latLonText  :: "+latLonText)
        }else{
            latLonText = coordinates;
            console.log("IN ELSE --latLonText  :: "+latLonText)
        }

        if(i ==0){
            list ='<div class="wpitem bg-change"><ul><li><h6>WP '+i+'</h6></li><li>  '+ latLonText +'</li></ul>';
            list +='<button onclick="wpListEdit(0)" class="btn btn-sm wpbtn" style="background:#4e7ba9; color:#fff;" >Edit</button></div>';
        }
        else{
            // pattern is  D 1 2 3
            //for D
            if(i==wpArrLength-1){
                wpNumber =1;
            }
            //for 1 2 3
            else{
                wpNumber =i+1;
            }

            list +='<div class="wpitem bg-change"><ul><li><h6>WP '+i+'</h6></li><li> '+ latLonText +'</li></ul>';
            list +='<button onclick="wpListEdit('+wpNumber+')" class="btn btn-sm wpbtn" style="background:#4e7ba9; color:#fff;">Edit</button></div>';
            }
        }
        $("#wpListId").append(list);
        $("#wpListId_tab").append(list);
    }
}

function wpListEdit(wpNumber){
	wpClickIndex = wpNumber;
	showAttributesPopup();
}