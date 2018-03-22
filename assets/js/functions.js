// Nav toggle animation script 
$(document).ready(function() {
  var nav = 1;
  $(".cover").click(function() {
    $('.slide').slideToggle();
    if(nav % 2 === 0) {
    $(".line").removeClass('animate');
    $(".line").toggleClass('reverse');
    } else {
    $(".line").removeClass('reverse');
    $('.line').toggleClass('animate');
    }
    nav = nav + 1;
  });
});
// Owl Slider Functions
$(document).ready(function() {
 var owl = $('.owl-carousel');
 owl.owlCarousel({
   items: 1,
   loop: true,
   margin: 10,
   autoplay: false,
   animateOut: 'fadeOut',
   autoplayTimeout: 7000,
   autoplayHoverPause: false
 });
 $('.play').on('click', function() {
   owl.trigger('play.owl.autoplay', [7000])
 })
 $('.stop').on('click', function() {owl.trigger('stop.owl.autoplay')})
})

// If window above 768px (Table/Desktop) fadein dropdown on hover
if ($(window).width() > 768) {
  $('ul.nav li.dropdown').on('hover', function() {
    $(this).find('.dropdown-menu').fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').fadeOut(500);
  });
};
