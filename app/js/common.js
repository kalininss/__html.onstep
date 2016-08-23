$(function() {

	// закрытие всплывающих окон
	$(".open-popup").click(function (i) {
		$(".popup_bg").show();
		elementClick = $(this).attr("href")
		$(elementClick).show(300);
		return false;
	});
	$(".i-close").click(function(){
		$(this).parent().hide(300);
		$(".popup_bg").hide();
	});
	$(".popup_bg").click(function() {
		$(this).hide();
		$(".popup").hide(300);		
	});

	// вкладки в профиле
  $(".tabs").lightTabs();

	// маска для телефонов
	$("#d").mask("+7 (999) 999-9999");

	// навигация
	$(".nav_open-btn").click(function(e){
		$(this).parent().find("ul.nav").slideToggle(200);
		e.preventDefault();
	});
	
});