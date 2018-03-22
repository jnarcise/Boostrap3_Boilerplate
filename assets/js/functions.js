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
// Nav toggle at 767px for sub-menu
// $(document).ready(function(){
//   $("#chev1").click(function(){
//       $("#sub1").slideToggle();
//   });
// });
// $(document).ready(function(){
//   $("#chev2").click(function(){
//       $("#sub2").slideToggle();
//   });
// });
// $(document).ready(function(){
//   $("#chev3").click(function(){
//       $("#sub3").slideToggle();
//   });
// });
// $(document).ready(function(){
//   $("#chev4").click(function(){
//       $("#sub4").slideToggle();
//   });
// });
// $(document).ready(function(){
//   $("#chev5").click(function(){
//       $("#sub5").slideToggle();
//   });
// });
// $(document).ready(function(){
//   $("#chev6").click(function(){
//       $("#sub6").slideToggle();
//   });
// });
// $(document).ready(function(){
//   $("#chev7").click(function(){
//       $("#sub7").slideToggle();
//   });
// });

// $('.dropdown-toggle').click(function(e) {
//   if ($(document).width() < 768) {
//     e.preventDefault();
//     var url = $(this).attr('href');
//     if (url !== '#') {
//       window.location.href = url;
//     }
//   }
// });

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
