$(document).ready(function() {
	var $headerForm = $(".js-main-header-form");
	var $headerButton = $(".js-header-form-button");
	var $formClose = $(".js-form-close");
	var $navMenuButton = $(".js-nav-menu-button");
	var $navMenu = $(".js-menu-closed");
	var $navMenuOpened = $(".js-menu-opened");
	var $navMenuToggle = $(".js-menu");
	var navMain = document.querySelector('.js-menu');
	var navButton = document.querySelector('.js-nav-menu-button');
	$headerButton.click(function() {
		event.preventDefault();
		$headerForm.slideToggle();
	});
	$formClose.click(function() {
		event.preventDefault();
		$headerForm.slideToggle();
	});
	$navMenuButton.click(function() {
		event.preventDefault();
		 if (navButton.classList.contains('js-arrow-down')) {
        navButton.classList.remove('js-arrow-down');
        navButton.classList.add('js-arrow-up');
    } else {
        navButton.classList.remove('js-arrow-up');
        navButton.classList.add('js-arrow-down');
		}
		$navMenu.slideToggle();
	});
	$('a[href^="#form"]').click(function(){
    var top = 0;
    $.when( $('body').animate({scrollTop: top}), 1000).then(function(){ 
        $headerForm.slideDown(); 
    });
  });
});



// var navMain = document.querySelector('.main-nav');
// var navToggle = document.querySelector('.main-nav__toggle');
// var HeaderToggle = document.querySelector('.main-header');

// HeaderToggle.classList.remove('main-header--nojs');

// navToggle.addEventListener('click', function() {
//     if (navMain.classList.contains('main-nav--closed')) {
//         navMain.classList.remove('main-nav--closed');
//         navMain.classList.add('main-nav--opened');
//         HeaderToggle.classList.add('main-header--opened');
//     } else {
//         navMain.classList.remove('main-nav--opened');
//         HeaderToggle.classList.remove('main-header--opened');
//         navMain.classList.add('main-nav--closed');
//     }
// });