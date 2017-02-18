jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
        moveRight();
      }, 3000);
    });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
      $('#slider ul').animate({
        left: + slideWidth
      }, 300, function () {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('left', '');
      });
    };

    function moveRight() {
      $('#slider ul').animate({
        left: - slideWidth
      }, 300, function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
      });
    };

    $('a.control_prev').click(function () {
      moveLeft();
    });

    $('a.control_next').click(function () {
      moveRight();
    });

  });    

  $(".caption").imageTitle({
    type:"caption"
  });

  var x = 0;
  function myFunction() {

  }
  function init() {
    window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 130,
      header = document.querySelector("header");
      if (distanceY >= shrinkOn) {
       $("#mainLogo").hide(350);
       $("#smallLogo").show("slow");
       $('.pad').hide(400);
     } else {
      if ($("#mainLogo").hide()) {
       $("#smallLogo").hide();
       $("#mainLogo").show();
     }
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
