// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// CSS Variables
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

var rootStyle = document.documentElement.style;
var windowWidth = 0;
var windowHeight = 0;
var documentHeight = 0;
var windowInnerHeight = 0;
var navbarHeight = 0;
var navbarPresent = true;
var navbarCurrentHeight = 0;

function updateCSSVariables() {
  windowWidth = $(window).width(); // width without scrollbar
  windowHeight = $(window).height(); // height minus navbar on touch
  documentHeight = $(document).height(); // entire document height
  windowInnerHeight = window.innerHeight; // height minus current navbar on touch
  fullTouch = $('.full-touch').outerHeight(); // height including navbar on touch
  navbarHeight = $('.full-touch').outerHeight() - windowHeight;
  navbarPresent = windowInnerHeight == windowHeight ? 1 : 0;
  navbarCurrentHeight = navbarPresent * navbarHeight;

  rootStyle.setProperty('--window-width', windowWidth + 'px');
  rootStyle.setProperty('--window-height', windowHeight + 'px');
  rootStyle.setProperty('--document-height', documentHeight + 'px');
  rootStyle.setProperty('--inner-height', windowInnerHeight + 'px');
  rootStyle.setProperty('--navbar-height', navbarHeight + 'px');
  rootStyle.setProperty('--current-navbar-height', navbarCurrentHeight + 'px');
}

updateCSSVariables();

var prevWindowWidth = $(window).width();

$(window).resize(function () {
  if ($(window).width() !== prevWindowWidth) {
    updateCSSVariables();
    prevWindowWidth = windowWidth;
  }
});

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Fade in animation
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

$('.fade-in').on('inview', function (event, isInView) {
  if (isInView) {
    $(this).addClass('in-view');
  }
});

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Hero carousel
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

$('.hero__carousel').on('ready.flickity change.flickity', function (event, index) {
  var $selectedCarouselItem = $('.hero__carousel__item.is-selected');
  var $otherCarouselItems = $selectedCarouselItem.siblings();

  $otherCarouselItems
    .removeClass('hero__carousel__item--step-2 hero__carousel__item--step-3')
    .addClass('hero__carousel__item--step-1');

  $selectedCarouselItem
    .removeClass('hero__carousel__item--step-1')
    .addClass('hero__carousel__item--step-2');

  // setTimeout(function () {
  //   $selectedCarouselItem
  //     .removeClass('hero__carousel__item--step-2')
  //     .addClass('hero__carousel__item--step-3');

  //   var carouselBackgroundImage = $selectedCarouselItem.find('img').attr('src');
  //   $('.hero__carousel').css('background-image', 'url(' + carouselBackgroundImage + ')');
  // }, 5000);
});

$('.hero__carousel').flickity({
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  imagesLoaded: true,
  draggable: false,
  freeScroll: false,
  resize: true,
});

// $('.hero__carousel').on('change.flickity', function (event, index) {
//   var $selectedCarouselItem = $('.hero__carousel__item.is-selected');
//   var themeClass = 'theme--' + $selectedCarouselItem.data('theme');

//   $('body').removeClass('theme--grey theme--pink theme--blue').addClass(themeClass);
// });

// if ($('.hero').length > 0) {
//   setInterval(function () {
//     $('.hero__carousel').flickity('next', true, true);
//   }, 7000);
// }

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Video button
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// $('body').on('mouseenter', '.js-open-video-modal', function () {
//   $(this)
//     .find('video')
//     .each(function () {
//       this.play();
//     });
// });

// $('body').on('mouseleave', '.js-open-video-modal', function () {
//   $(this)
//     .find('video')
//     .each(function () {
//       this.pause();
//     });
// });

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Video modal
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// function openVideoModal() {
//   $('.video-modal').removeClass('is-hidden');
// }

// function closeVideoModal() {
//   $('.video-modal video')[0].pause();
//   $('.video-modal').addClass('is-hidden');
// }

// if ($('.video-modal').length > 0) {
//   $('.js-open-video-modal').click(function (e) {
//     $('.video-modal video')[0].currentTime = 0;
//     $('.video-modal video')[0].play();
//     openVideoModal();
//     e.preventDefault();
//   });

//   $('.video-modal').click(function (e) {
//     if (!$(e.target).is('video')) {
//       closeVideoModal();
//     }
//   });

//   // Close video modal item when pressing 'esc'
//   $(document).on('keyup', function (evt) {
//     if (evt.keyCode == 27) {
//       closeVideoModal();
//     }
//   });
// }

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// FAQ
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

$('.faq__overview__item__button').click(function () {
  if ($(this).parent().hasClass('is-active')) {
    $(this).parent().removeClass('is-active');
  } else {
    $(this).parent().addClass('is-active').siblings().removeClass('is-active');
  }
});

// Close FAQ items when pressing 'esc'
$(document).on('keyup', function (evt) {
  if (evt.keyCode == 27) {
    $('.faq__overview__item').removeClass('is-active');
  }
});
