$(document).ready(function () {

     // header Slider start
     $('#main-slider').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          animateIn:true,
          animateOut:'fadeIn',
          autoplay: 'fadeOut',
          autoplayTimeout: 3000,
          // slideTransition:'linear',
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 3
               },
               1000: {
                    items: 1
               }
          }
     })
     // header Slider end

     $(window).scroll(function () {
          var sticky = $('.sticky'),
               scroll = $(window).scrollTop();

          if (scroll >= 820) sticky.addClass('fixed');
          else sticky.removeClass('fixed');
     });


     // property Slider start
     $('#property-slider').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          autoplay: true,
          autoplayTimeout: 3000,
          navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 3
               },
               1000: {
                    items: 3
               }
          }
     })
     // header Slider end

     // Testimonial slider start
     $('#Testimonial-slider').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: false,
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 3
               },
               1000: {
                    items: 3
               }
          }
     })
     // Testimonial slider end

     // Agent section slider start
     $('#Agent-slider').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: false,
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 3
               },
               1000: {
                    items: 3
               }
          }
     })
     // Agent section slider end
});

var owl = $('#main-slider');
owl.on('changed.owl.carousel', function (event) {
     new WOW().init();
})
wow = new WOW(
     {
          boxClass: 'wow',      // default
          animateClass: 'animated', // default
          offset: 0,          // default
          mobile: true,       // default
          live: true        // default
     }
)
wow.init();