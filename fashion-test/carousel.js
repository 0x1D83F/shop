'use strict';

$(document).on('ready', function () {

  //Settings for activation carousels
  //More information about settings here: https://github.com/kenwheeler/slick/

  var amount = $('#main-slider-background .slide').length;
  if (amount < 10) {
    $('.count-items').text('/ 0' + amount);
  } else {
    $('.count-items').text('/ ' + amount);
  }

  $("#main-slider-background").slick({
    // normal options...
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    vertical: true,
    dotsClass: 'main-slider-dots',
    mobileFirst: true,
    speed: 800
  });

  function positionControls() {
    var t = $('.slide.active').offset().top - 250;
    $('.main-slider-dots').css({ 'top': t });
    $('.content-wrapper.first-screen-controls').css({ 'top': t });
    var b = t + $('.slide.active').height() + 40;
    var w = $('.first-screen-slider-wrapper').width() / 2;
    var h = $('.first-screen-slider-wrapper').height();

    var doc_w = $(window).width();
    if (doc_w < 1007) {
      $('.first-screen-slider-wrapper').css({ 'left': '20px' });
    } else {
      $('.first-screen-slider-wrapper').css({ 'left': 'calc(50% - ' + w + 'px)' });
    }

    $('.content-wrapper.first-screen-controls.first-screen-controls-mob').css({ 'top': b, 'left': '0px' });

    if (doc_w > 1006) {
      h += 500;
    } else if (doc_w > 750 && doc_w < 1007) {
      h += 416;
    } else {
      h += 267;
    }
    $('.first-screen.first-screen-slider-wrap').css({ 'height': h });
    $('#main-slider-background .slide').css({ 'height': h });
  }

  positionControls();
  var h = $('.first-screen-slider-wrapper').height();
  var doc_w = $(window).width();
  if (doc_w > 1006) {
    h += 500;
  } else if (doc_w > 750 && doc_w < 1007) {
    h += 416;
  } else {
    h += 267;
  }

  var str = 'translate3d(0px, -' + h + 'px, 0px)';
  $('.slick-track').css({ 'transform': str });

  var arrSlides = $('#main-slider .slide');

  $("#main-slider-background").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide != nextSlide) {
      var html = '0' + (currentSlide + 1) + '<br>' + '0' + (nextSlide + 1);
      $('.current-item-num').html(html);

      $('.current-item-num').css({ 'transform': 'translateY(0)', 'transition': 'all 0s' });
      setTimeout(function () {
        $('.current-item-num').removeAttr('style');
      }, 5);

      $('#main-slider .animated').addClass('slideOutDown');
      setTimeout(function () {
        $(arrSlides[currentSlide]).removeClass('active');
        $(arrSlides[nextSlide]).addClass('active');
        $('#main-slider .animated').removeClass('slideOutDown').addClass('slideInDown');
      }, 650)
    }
  });

  $(window).on('resize', function () {
    $("#main-slider-background").slick('refresh');
    positionControls();
  });

  $('.main-slider-prev').on('click', function () {
    $("#main-slider-background").slick('slickPrev');
  });

  $('.main-slider-next').on('click', function () {
    $("#main-slider-background").slick('slickNext');
  });
});



////////////Sales slider

$(".sale-carousel-product").slick({
  // normal options...
  infinite: true,
  arrows: true,
  // autoplay: true,
  autoplaySpeed: 5000,
  mobileFirst: true,
  speed: 800
});


