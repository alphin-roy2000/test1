var x = 'True';
(function() {
    'use strict';
    $('.burger').click(function (e) {
        e.preventDefault();
        if ($(window).width() <= 1153){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.menu-overlay').fadeToggle( 'fast', 'linear' );
            $('.topnav').slideToggle( 'default');
            $('.logo-nav-display').slideToggle( 'easeInExpo' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        } else {
            $(this).addClass('active');
            $('.menu-overlay').fadeToggle( 'fast', 'linear' );
            $('.topnav').slideToggle( 'default' );
            $('.logo-nav-display').slideToggle('easeOutExpo');
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }}
    })
})();
// $(window).resize(function(){
// 	if ($(window).width() <= 1153){	
// 		if ($('.burger').hasClass('active')){
//             $('.burger').removeClass('active');
//             $('.menu-overlay').fadeToggle( 'fast', 'linear' );
//             $('.topnav').slideToggle( 'default');
//             $('.logo-nav-display').slideToggle( 'easeInExpo' );
//             $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
//         }
// 	}	
// });