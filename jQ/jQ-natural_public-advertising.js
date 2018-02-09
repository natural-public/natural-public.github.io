$(document).ready(function(){	
	$(function() {
	  $(window).scroll(function() {
	  if($(this).scrollTop() != 0) {
	  $('.top_button').fadeIn();
	  } else {
	  $('.top_button').fadeOut();
	  }
	  });
	  $('.top_button').click(function() {
	  $('body,html').animate({scrollTop:0},700);
	  });
	});
	
	$("#div-table1").click(function(){
        $("#open_menu1").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
	$("#div-table2").click(function(){
        $("#open_menu2").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
	$("#div-table3").click(function(){
        $("#open_menu3").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
	/*arrow*/
	
	$("#div-table1").click(function(){
        $(".img_menu1").slideToggle("hide");
        $(".img_menu2").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
		$("#div-table2").click(function(){
        $(".img_menu3").slideToggle("hide");
        $(".img_menu4").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
		$("#div-table3").click(function(){
        $(".img_menu5").slideToggle("hide");
        $(".img_menu6").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	

});
