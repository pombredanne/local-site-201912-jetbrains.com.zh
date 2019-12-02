// Styles
require('./index.scss');

// JS modules
require('components/overview');
var $ = require('jquery');
var EVENTS = require('utils/events');
var dispatcher = require('utils/dispatcher');
var ScrollMagic = require('scrollmagic');
var debounce = require('mout/function/debounce');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

/** @type ProductsService */
var products = require('utils/data-services/products-service');
/** @type ProductsCodes */
var config = require('config/products-codes');

// Add beams
require('./../../img/beam-2.svg');

// Add product logo
require('components/jetbrains-logo/clion');
require('components/jetbrains-logo/clion/clion-text');

// Icons
require('components/features-icon/supportCmake');
require('components/features-icon/terminal');
require('components/features-icon/shortcutAltEnter');
require('components/features-icon/integrationVCS');

// Logos
require('components/logo/ice');
require('components/logo/nasa');
require('components/logo/lyft');
require('components/logo/quantlab-financial');
require('components/logo/magic-leap');
require('components/logo/imc');
require('components/logo/vkontakte');
require('components/logo/google');
require('components/logo/bmw');


var controller;

// Page scripts starts here
dispatcher.domReady(function() {
  var productCode = [config.clion];

  products.getLatestReleaseByCode(productCode).done(products.replacePagePlaceholders);
  initScrollMagic();
});

var lazyRedraw = debounce(function () {
  controller.destroy(true);
  initScrollMagic();
}, 300);

dispatcher.on(EVENTS.WINDOW.RESIZE, lazyRedraw);


function initScrollMagic () {
  // init controller
  controller = new ScrollMagic.Controller();

  // Base screen
  var $overview = $('#screen-trigger'),
    $screenshot = $('#overview-screen'),
    navHeight = $('.page__header').height()/2,
    offsetStart = $screenshot.height()/2,
    overviewBottom = $overview.offset().top + $overview.height(),
    screenshotBottom = $screenshot.offset().top + $screenshot.height();

  new ScrollMagic.Scene({
    triggerElement: "#overview-screen",
    triggerHook: 0.5,
    offset: offsetStart - navHeight/3,
    duration: overviewBottom - screenshotBottom + navHeight
  })
    .setPin("#overview-screen", {pushFollowers: false})
    .addTo(controller);


  // Screens
  $('.overview-info__item').each(function(index, item) {
    var screen = document.getElementById(item.getAttribute("data-screen"));

    new ScrollMagic.Scene({
      triggerElement: item,
      triggerHook: 1,
      duration: offsetStart
    })
      .setTween(TweenMax.from(item, 1, {top: 100, opacity: 1}))
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: item,
      triggerHook: 1,
      offset: window.innerHeight/5,
      duration: 10
    })
      .setTween(TweenMax.to(screen, 1, {opacity: 1}))
      .addTo(controller);
  });



}