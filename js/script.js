$(document).ready(function() {
	var $headerForm = $(".js-main-header-form");
	var $headerButton = $(".js-header-form-button");
	var $formClose = $(".js-form-close");
	$headerButton.click(function() {
		event.preventDefault();
		$headerForm.slideToggle();
	});
	$formClose.click(function() {
		event.preventDefault();
		$headerForm.slideToggle();
	});
	$('a[href^="#form"]').click(function(){
    var top = 0;
    $.when( $('body').animate({scrollTop: top}), 1000).then(function(){ 
        $headerForm.slideDown(); 
    });
  });
});



// $('a[href^="#form"]').click(function(){
// 	var el = $(this).attr('href');
//     $.when( $(el).animate({scrollTop: $(el).offset().top}), 1000).then(function(){ 
//          $headerForm.slideToggle(); 
//     });
// });


// $('a[href^="#form"]').click(function(){ 
// 	var el = $(this).attr('href');
//     $("#block").animate(
//         $('body').animate({
//         scrollTop: $(el).offset().top}), 1000);
//         return false; 
//         $headerForm.slideToggle();
//     ;
// });

