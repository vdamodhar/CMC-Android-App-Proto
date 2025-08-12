$(document).ready(function() {

    $("#gotoofflinemap").click(function(){
    	$("#one").css("z-index", "0");
    });
    $("#offlinemapclose").click(function(){
       $("#one").css("z-index", "3");
    });

    $("#offlinemapdropdownbtn").click(function(){
        $("#offlinemapdropdown").slideToggle();
        $("#offlinemapdropdown-1").slideUp();
    });
    $("#offlinemapdropdownbtn-1").click(function(){
        $("#offlinemapdropdown-1").slideToggle();
        $("#offlinemapdropdown").slideUp();
    });
});