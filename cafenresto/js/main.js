function mobileCheck(){
	var winWidth=$(window).width();
	if (winWidth<=768) {
		$("#sidebar").after($("#body .pagination:first"))
	} else {
		$(".products-wrap").before($("#body .pagination:first"))
	}
}
$(function(){$('a[href*="#"]:not([href="#"])').click(function() {if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {var target = $(this.hash);target = target.length ? target : $('[name=' + this.hash.slice(1) +']');if (target.length) {$('html, body').animate({scrollTop: target.offset().top-70}, 1000);return false;}}});});

$(document).ready(function() {
	$('.overlay').height($(window).height());
	$(".burger-menu").click(function(e){
		if($(this).hasClass("is-active")){
			$(this).removeClass("is-active");
			$("#menu").animate({left:-300},200);
			$(".overlay").fadeOut("fast");
		}else{
			$(this).addClass("is-active");
			$("#menu").animate({left:0},200);
			$(".overlay").fadeIn();
		}
	});
	$(".tabs .nav a").click(function() {
		var container = $(this).parentsUntil(".tabs").parent();
		if (!$(this).parent().hasClass("active")) {
			container.find(".nav .active").removeClass("active")
			$(this).parent().addClass("active")
			container.find(".tab-content").hide()
			$($(this).attr("href")).show();
		};
		return false;
	});
	$("#menu .trigger").click(function() {
		$(this).toggleClass("active").next().toggleClass("active")
	});

	mobileCheck();
	$(window).resize(function() {
		mobileCheck();
	});
});