
// Toggle menu

$(document).ready(function() {
	$(".toggle-menu").click( function() {
		$(this).toggleClass("on");
		$(".user-icon").removeClass("on-user-icon");
		$(".dropdown-menu-user").hide();
		$(".dropdown-menu").slideToggle();
			return false;
	});
});


// Clicks - hides

$(".btn-signin").on("click", function(e) {
	$(".dropdown-menu-user").hide();
	$(".user-icon").removeClass("on-user-icon");
});

$(document).on("click", function(e) {
	if (!$(e.target).closest("#menu-wrapper").length) {
		$(".dropdown-menu-user").fadeOut();
		$(".user-icon").removeClass("on-user-icon");
	}

	e.stopPropagation();
});

$(document).on("click", function(e) {
	if (!$(e.target).closest("#menu-wrapper").length) {
		$(".dropdown-menu").fadeOut();
		$(".toggle-menu").removeClass("on");
	}

	e.stopPropagation();
});



// Scroll hidden

$(function() {
  $(".btn-signin").click(function() {
   	$("body").toggleClass("scroll-hidden");
  });
});

jQuery(document).ready( function($) {
	var authorizationForm = $(".authorization__form"),
			authorizationBtn = $(".authorization__btn"),
			authorizationBtnSignin = $(".authorization__btn-signin"),
			authorizationBtnIcon = $(".authorization-btn-icon");
			scrollHidden = $("body"),

			authorizationBtn.on("click", ".btn-signin", is_visible);
			authorizationBtnSignin.on("click", ".btn-signin", is_visible);
			authorizationBtnIcon.on("click", ".btn-signin", is_visible);

			
			authorizationForm.on("click", function(event) {
				if ( $(event.target).is(authorizationForm) || $(event.target).is(".close-form") ) {
					authorizationForm.removeClass("is-visible");
			
					scrollHidden.removeClass("scroll-hidden");
				}	
		});
	
	function is_visible() {
		authorizationForm.addClass("is-visible");
	}
});