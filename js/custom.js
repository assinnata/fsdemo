$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
	var windowheight = $( window ).height();
	$('.cb-nav-left').css('height',windowheight);
	$('.cb-nav-ricerca-rapida').click(function() {
		 $('.cb-ricerca-rapida').toggleClass('active');
		 $('.cb-operazioni-rapide').removeClass('active');
		 $('.cb-ricerca-rapida').css('display','block');
		if ($(".cb-ricerca-rapida").hasClass("active")) {
		 $('.cb-nav-ricerca-rapida p').html('chiudi');
		 $('.cb-nav-ricerca-rapida span').removeClass('icon-search');
		 $('.cb-nav-ricerca-rapida span').addClass('icon-close');
		}
		else{
		$('.cb-nav-ricerca-rapida p').html('Ricerca<br>rapida');
		 $('.cb-nav-ricerca-rapida span').addClass('icon-search');
		 $('.cb-nav-ricerca-rapida span').removeClass('icon-close');
		}
		 if ($(".cb-operazioni-rapide").hasClass("active")) {
		 $('.cb-nav-operazioni-rapide p').html('chiudi');
		 $('.cb-nav-operazioni-rapide span').removeClass('icon-operazioni-rapide');
		 $('.cb-nav-operazioni-rapide span').addClass('icon-close');
		}
		else{
		$('.cb-nav-operazioni-rapide p').html('Operazioni<br>rapide');
		 $('.cb-nav-operazioni-rapide span').addClass('icon-operazioni-rapide');
		 $('.cb-nav-operazioni-rapide span').removeClass('icon-close');
		}
	});
	$('.cb-nav-operazioni-rapide').click(function() {
		 $('.cb-operazioni-rapide').toggleClass('active');
		 $('.cb-ricerca-rapida').removeClass('active');
		 $('.cb-operazioni-rapide').css('display','block');
		 if ($(".cb-operazioni-rapide").hasClass("active")) {
		 $('.cb-nav-operazioni-rapide p').html('chiudi');
		 $('.cb-nav-operazioni-rapide span').removeClass('icon-operazioni-rapide');
		 $('.cb-nav-operazioni-rapide span').addClass('icon-close');
		}
		else{
		$('.cb-nav-operazioni-rapide p').html('Operazioni<br>rapide');
		 $('.cb-nav-operazioni-rapide span').addClass('icon-operazioni-rapide');
		 $('.cb-nav-operazioni-rapide span').removeClass('icon-close');
		}
		if ($(".cb-ricerca-rapida").hasClass("active")) {
		 $('.cb-nav-ricerca-rapida p').html('chiudi');
		 $('.cb-nav-ricerca-rapida span').removeClass('icon-search');
		 $('.cb-nav-ricerca-rapida span').addClass('icon-close');
		}
		else{
		$('.cb-nav-ricerca-rapida p').html('Ricerca<br>rapida');
		 $('.cb-nav-ricerca-rapida span').addClass('icon-search');
		 $('.cb-nav-ricerca-rapida span').removeClass('icon-close');
		}
		 
	});
	
	
	
	$('.icon-hamburger').click(function() {
		$('.cb-nav-left').addClass('cb-state-open');
		$('.cb-nav-left').addClass('cb-state-openmd');
		$('.cb-manageable-area').addClass('cb-navleft-opened');
		$('.cb-manageable-area').removeClass('cb-navright-opened');
		$('.cb-nav-right').removeClass('cb-state-open');
		$('.cb-nav-right').addClass('cb-state-closed');
	});
	$('.openRightpanel').click(function() {
		$('.cb-nav-right').addClass('cb-state-open');
		$('.cb-nav-right').addClass('cb-state-openmd');
		$('.cb-manageable-area').addClass('cb-navright-opened');
		$('.cb-manageable-area').removeClass('cb-navleft-opened');
		$('.cb-nav-left').removeClass('cb-state-open');
		$('.cb-nav-left').addClass('cb-state-closed');
	});
	$(".ilmioprofilo").click(function() {
		$(".cb-navright-profile").removeClass('hidden');
		$(".cb-navright-chat").addClass('hidden');
	});
	$(".onlineCollaboration").click(function() {
		$(".cb-navright-profile").addClass('hidden');
		$(".cb-navright-chat").removeClass('hidden');
	});
	// ricerca rapida e operazioni rapide
	
	$("#content-loader").load("home.html");

	setTimeout(function(){ $(".arrow-down").parent().parent().next().addClass('border-top'); }, 1000);
	setTimeout(function(){ $(".arrow-down").parent().addClass('dropdown'); }, 1000);
	
});


		
$( window ).resize(function() {
	if ($(window).width() > 1599) {
	}
	else {
	}
	var windowheight = $( window ).height();
	$('.cb-nav-left').css('height',windowheight);
	$('.cb-nav-ricerca-rapida').click(function() {
		 $('.cb-ricerca-rapida').toggleClass('active');
	});
});