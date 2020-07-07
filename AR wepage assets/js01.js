var x = 'True';
(function() {
    'use strict';
    $('.burger').click(function (e) {
        e.preventDefault();
        
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.menu-overlay').fadeToggle( 'fast', 'linear' );
            $('.topnav').toggleClass('navopen')
            $('.ar-below-line').toggleClass('navopen')
            $('.logo-nav-display').toggleClass('navopen')
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        } else {
            
            $(this).addClass('active');
            $('.menu-overlay').fadeToggle( 'fast', 'linear' );
            $('.topnav').toggleClass('navopen')
            $('.ar-below-line').toggleClass('navopen')
            $('.logo-nav-display').toggleClass('navopen')
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }
    })
})();
// $(window).resize(function(){
// 	if ($(window).width() >= 1153){	
// 		if ($('.burger').hasClass('active')){
//             $('.burger').removeClass('active');
//             $('.burger').removeClass('open');
//             $('.menu-overlay').fadeToggle( 'fast', 'linear' );
//             $('.topnav').slideToggle( 'fast');
//             $('.logo-nav-display').slideToggle( 'easeInExpo' );
//             $('.hamburger-menu-wrapper').toggleClass('bounce-effect');

//         }
// 	}	
// });
  
(function() {
    'use strict';
    $('.hamburger-menu').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.menu-overlay').fadeToggle( 'fast', 'linear' );
            $('.menu-list').slideToggle( 'slow', 'swing' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        } else {
            $(this).addClass('active');
            $('.menu-overlay').fadeToggle( 'fast', 'linear' );
            $(' .menu-list').slideToggle( 'slow', 'swing' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }
    })
})();

                var swiper = new Swiper('.swiper-container', {
                  effect: 'coverflow',
                  grabCursor: true,
                  centeredSlides: true,
                  slidesPerView: 'auto',
                  coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true,
                  },
                  pagination: {
                    el: '.swiper-pagination',
                  },
                });
            