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
	var width = $( window ).width();
	var desktop = 1140;
	var tablet = 800;
	var mobile = 320;
	var tzTitleButton = $(".js-tz-title-button");
	var tzTitleDescription = $(".js-tz-title-description");
	var tzAmountButton = $(".js-tz-amount-button");
	var tzAmountDescription = $(".js-tz-amount-description");
	var tzPurposeButton = $(".js-tz-purpose-button");
	var tzPurposeDescription = $(".js-tz-purpose-description");
	var tzRequirementsButton = $(".js-tz-requirements-button");
	var tzRequirementsDescription = $(".js-tz-requirements-description");
	var tzEducationButton = $(".js-tz-education-button");
	var tzEducationDescription = $(".js-tz-education-description");
	var tzElectronicButton = $(".js-tz-electronic-button");
	var tzElectronicDescription = $(".js-tz-electronic-description");
	var tzRemoteButton = $(".js-tz-remote-button");
	var tzRemoteDescription = $(".js-tz-remote-description");
	var tzAttestationButton = $(".js-tz-attestation-button");
	var tzAttestationDescription = $(".js-tz-attestation-description");
	var tzDocumentsButton = $(".js-tz-documents-button");
	var tzDocumentsDescription = $(".js-tz-documents-description");

	// var $floatDocument = $('.js-floating-document');
	// var footerTop = $("footer").offset().top;
	// var footerExtremePosition = $("footer").offset().top - 450;
	// var docTop = $floatDocument.offset().top;

	// $(window).scroll(function(e) {
	// 	e.preventDefault();
	// var scrollTop = $(this).scrollTop();

	// 	if (scrollTop > docTop - 50) {
	// 		$floatDocument.addClass('fixed');
	// 		$floatDocument.css({top: scrollTop + 50});
	// 	} else {
	// 		$floatDocument.removeClass('fixed');
	// 		$floatDocument.css({top: 'initial'});
	// 	}

	// 	if (scrollTop >= footerExtremePosition) {
	// 		console.log('before');
	// 		console.log($floatDocument.offset().top);
	// 		$floatDocument.css({top: footerExtremePosition});
	// 		console.log('after');
	// 		console.log(footerExtremePosition);
	// 	} else {

	// 	}
	// });

	initPage();

	function initPage() {

		// Buttons TZ

		tzTitleButton.click(function() {
			event.preventDefault();
			tzTitleDescription.slideToggle();
			tzTitleButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		tzAmountButton.click(function() {
			event.preventDefault();
			tzAmountDescription.slideToggle();
			tzAmountButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		tzPurposeButton.click(function() {
			event.preventDefault();
			tzPurposeDescription.slideToggle();
			tzPurposeButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		tzRequirementsButton.click(function() {
			event.preventDefault();
			tzRequirementsDescription.slideToggle();
			tzRequirementsButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		tzEducationButton.click(function() {
			event.preventDefault();
			tzEducationDescription.slideToggle();
			tzEducationButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		tzElectronicButton.click(function() {
			event.preventDefault();
			tzElectronicDescription.slideToggle();
			tzElectronicButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		tzRemoteButton.click(function() {
			event.preventDefault();
			tzRemoteDescription.slideToggle();
			tzRemoteButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		tzAttestationButton.click(function() {
			event.preventDefault();
			tzAttestationDescription.slideToggle();
			tzAttestationButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		tzDocumentsButton.click(function() {
			event.preventDefault();
			tzDocumentsDescription.slideToggle();
			tzDocumentsButton.toggleClass("technical-task__customer-requirements-item-title--active");
		});

		// end Buttons TZ

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

		
		// кнопка в футере с пролистыванием в хедер

		// $('a[href^="#form"]').click(function(){
		// 	var top = 0;
		// 	$headerForm.slideDown(); 
		// });


		$('a[href^="#form"]').click(function(){
			var top = 0;
			
			$.when( $('body').animate({scrollTop: top}), 1000).then(function(){ 
				$headerForm.slideDown(); 
			});

		});

		// Дениска-сосиска
		$(window).resize(function() {
			width = $( this ).width();

			if (width >= tablet) {
				$navMenuToggle.show();
			} else {
				$navMenuToggle.hide();
			}
		});
		
	}
	
});