$(document).ready(function() {
	var $headerForm = $(".js-main-header-form");
	var $headerButton = $(".js-header-form-button");
	var $formClose = $(".js-form-close");
	$headerButton.click(function() {
		event.preventDefault();
		// $headerForm.toggleClass("main-header__form-wrapper--closed");
		$headerForm.slideToggle();
	});
	$formClose.click(function() {
		event.preventDefault();
		// $headerForm.toggleClass("main-header__form-wrapper--closed");
		$headerForm.slideToggle();
	});
	$('a[href^="#"]').click(function() {
        var el = $(this).attr('href');
        var $headerButtonClose = $(".main-header__form-wrapper--closed");
        $('body').animate({
        scrollTop: $(el).offset().top}, 1000);
        return false; 
        $headerForm.toggleClass("main-header__form-wrapper--closed");
	});
});


