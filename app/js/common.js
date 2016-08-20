$(function() {

	$(".nav_open-btn").click(function(e){
		$(this).parent().find("ul.nav").slideToggle(200);
		e.preventDefault();
	});
	
});