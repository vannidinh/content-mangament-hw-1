			
/* $(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
}); */

$(document).ready(function(){
	$("#container").hide();


    });
$(document).ready(function(){
    $("#button1").click(function(){
        $("#container").hide();
    });
    $("#button2").click(function(){
        $("#container").show();
    });
});
