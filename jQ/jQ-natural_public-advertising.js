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
});