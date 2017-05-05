jQuery(document).ready(function ($) {
  // $( "#slider" ).click(function() {
  //   $('.pad').hide(400);
  // });
  // $('#checkbox').change(function(){
  //   setInterval(function () {
  //     moveRight();
  //   }, 3000);
  // });
  //
  // var slideCount = $('#slider ul li').length;
  // var slideWidth = $('#slider ul li').width();
  // var slideHeight = $('#slider ul li').height();
  // var sliderUlWidth = slideCount * slideWidth;
  //
  // $('#slider').css({ width: slideWidth, height: slideHeight });
  //
  // $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  //
  // $('#slider ul li:last-child').prependTo('#slider ul');
  //
  // function moveLeft() {
  //   $('#slider ul').animate({
  //     left: + slideWidth
  //   }, 400, function () {
  //     $('#slider ul li:last-child').prependTo('#slider ul');
  //     $('#slider ul').css('left', '');
  //   });
  // };
  //
  // function moveRight() {
  //   $('#slider ul').animate({
  //     left: - slideWidth
  //   }, 400, function () {
  //     $('#slider ul li:first-child').appendTo('#slider ul');
  //     $('#slider ul').css('left', '');
  //   });
  // };

  // $('a.control_prev').click(function () {
  //   moveLeft();
  // });
  //
  // $('a.control_next').click(function () {
  //   moveRight();
  // });

});
var $slider=$('#slider');
  var $slides=$slider.find('#slides');
  var $slide=$slides.find('.slide');
  var currentslide=1;
  $('.control_next').click(function(){
    if(currentslide <= ($( ".slide" ).size()-1)){
      currentslide++;
    $('#slider .slides').animate({'margin-left':'-=720px'},1000);
   }
  else{

  }
  });
  $('.control_prev').click(function(){
    if(currentslide>1){
      currentslide--;
    $('#slider .slides').animate({'margin-left':'+=720px'},1000);
  }
  });
$(".caption").imageTitle({
  type:"caption"
});

var x = 0;
function myFunction() {

}
function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    shrinkOn = 113,
    header = document.querySelector("header");
    if ((distanceY > shrinkOn)) {
     $("#mainLogo").hide(450);

   } else {
     $("#mainLogo").show(450);
   }
   if ((distanceY > 1)) {
    $('.pad').hide(400);
   }
 });
}
window.onload = init();

$('.pad').hide();
$('.heading').click(function () {
  $(this).next('.pad').slideToggle();
  if($(this).find('.span1').attr('id') == 'yes') {
    $(this).find('.span1').attr('id', '').html('&#8744;');
  } else {
    $(this).find('.span1').attr('id', 'yes').html('&#8743;');
  }
});
