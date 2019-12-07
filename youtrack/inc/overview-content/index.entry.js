// Styles
require('./index.scss');

// JS modules
require('components/shortcut');
require('components/overview');
var dispatcher = require('utils/dispatcher');
var MarketoForm = require('components/form/marketo-form');
var FormYoutrackIncloud = require('components/form-youtrack-incloud');
var Tooltip = require('webteam-ui/components/tooltip');

//for scrollmagic

var EVENTS = require('utils/events');
var ScrollMagic = require('scrollmagic');
var debounce = require('mout/function/debounce');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');


// Add beams
require('./../../img/beam-1.svg');
require('./../../img/beam-2.svg');
require('components/icon/go-link/');

// Add product logo
require('components/jetbrains-logo/youtrack/youtrack-text');
require('components/jetbrains-logo/youtrack');

// Add logos customers
require('components/logo/bayer');
require('components/logo/couchsurfing');
require('components/logo/jaguar-land-rover');
require('components/logo/procter-and-gamble');
require('components/logo/ferrari');
require('components/logo/ncr');
require('components/logo/samsung');
require('components/logo/hp');
require('components/logo/ericsson');
require('components/logo/alcatel-lucent');

//Add icons
// Block: Follow your team’s flow
require('components/features-icon/b_workflow');
require('components/features-icon/b_tune');
require('components/features-icon/b_language');

// Block: Choose your edition
require('components/features-icon/edition-in-cloud');
require('components/features-icon/editionStandalone');

// Block: Designed with every team member in mind
require('components/features-icon/developers');
require('components/features-icon/designers');
require('components/features-icon/testers');
require('components/features-icon/managers');
require('components/features-icon/supportEngineers');


var controller;

//images that will change their size on resize

var $imageLeftGuyStart;
var $imageRightGalStart;
var $imageLeftGuyFull;
var $imageRightGalFull;
var $frameAnimationTeam;
var $imageTrackBackgroundWidthStart;

// Page scripts starts here
dispatcher.domReady(function () {



  $('.js-form-get-youtrack').each(function (idx, item) {
    let dataMarketo = '-' + (idx+1).toString();
    $(item).attr('data-marketo', dataMarketo);
    new FormYoutrackIncloud(this);
  });

  //Set images heights with JS on images load + fallback if image has already loaded


  initScrollMagic();

  var content = '<ol>\n' +
    '    <li>1. &nbsp; Register YouTrack InCloud or download a Standalone version.</li>\n' +
    '    <li>2. &nbsp;<a href="/buy/competitive/?product=youtrack" target="_blank">Fill the form</a> and provide a receipt of the license certificate.</li>\n' +
    '</ol>';


  new Tooltip({
    target: document.querySelector('.jb-tooltip-target-left-top'),
    content: content,
    position: 'left top'
  });

});

var lazyRedraw = debounce(function () {
  controller.destroy(true);
  initScrollMagic();
}, 200);

dispatcher.on(EVENTS.WINDOW.RESIZE, function () {
  lazyRedraw();
});

//all animations described here

function initScrollMagic() {
  // init controller


  controller = new ScrollMagic.Controller();

  //animations

  var $imageArrow = $('._arrow');
  var $imageCards = $('._cards');
  var $animationFrameWidth = $('.frame-container._first-row').width()  ;
  var $imageCardsPositionStart = $animationFrameWidth * 0.5;
  var $imageCardsPositionEnd = $animationFrameWidth * 0.8;

  // Scene for the first frame

  new ScrollMagic.Scene({
    triggerElement: '._row-animation-first',
    triggerHook: 0.5,
    offset: 160,
    duration: 100
  })
    .setTween(TweenMax.fromTo($imageCards, 1, {
      left: $imageCardsPositionStart,
      opacity: 0
    }, {left: $imageCardsPositionEnd, opacity: 1}))
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '._row-animation-first',
    triggerHook: 0.5,
    offset: 0,
    duration: 150
  })
    .setTween(TweenMax.fromTo($imageArrow, 1, {left: 0, opacity: 0}, {left: 20, opacity: 1}))
    .addTo(controller);


  var $imageChart = $('._chart');
  var $imageClockhand = $('._clockhand');

  new ScrollMagic.Scene({
    triggerElement: '._row-animation-first',
    triggerHook: 0.5,
    offset: 0,
    duration: 200
  })
    .setTween(TweenMax.fromTo($imageChart, 1, {left: 0, opacity: 0}, {left: 15, opacity: 1}))
    .addTo(controller);


  new ScrollMagic.Scene({
    triggerElement: '._row-animation-first',
    triggerHook: 0.5,
    offset: 0,
    duration: 200
  })
    .setTween(TweenMax.fromTo($imageClockhand, 1,
      {rotation: -15},
      {rotation: 45}))
    .addTo(controller);


  //scene for third frame - eye
  var $imageTrackBackground = $('._track-background');
  var $frameAnimationEye = $('._frame-animation-eye');

  $imageTrackBackgroundWidthStart = $frameAnimationEye.width() * 0.8 + 15;
  var $imageTrackBagckgroundWidthFull = $imageTrackBackgroundWidthStart / 0.8 + 15;
  var $positionStartLeft = $imageTrackBagckgroundWidthFull * 0.1;
  var $positionStartTop = ($imageTrackBackground.height() / 0.8) * 0.1;

  new ScrollMagic.Scene({
    triggerElement: '._row-animation-second',
    triggerHook: 0.5,
    offset: 0,
    duration: 200
  })
    .setTween(TweenMax.fromTo($imageTrackBackground, 1,
      {opacity: 0, width: $imageTrackBackgroundWidthStart, left: $positionStartLeft, top: $positionStartTop},
      {opacity: 1, width: $imageTrackBagckgroundWidthFull, left: 0, top: 0}))
    .addTo(controller);


  //scene for fourth frame

  //guy and gal vars

  var $imageLeftGuy = $('._team-leftguy');
  var $imageRightGal = $('._team-rightgal');
  $frameAnimationTeam = $('._frame-animation-team');

  $imageLeftGuyStart = $frameAnimationTeam.width() * 0.45;
  $imageRightGalStart = $frameAnimationTeam.width() * 0.36;

  $imageLeftGuyFull = $imageLeftGuyStart / 0.9;
  $imageRightGalFull = $imageRightGalStart / 0.9;

  new ScrollMagic.Scene({
    triggerElement: '._row-animation-second',
    triggerHook: 0.5,
    offset: 0,
    duration: 170
  })
    .setTween(TweenMax.fromTo($imageLeftGuy, 1,
      {opacity: 0, width: $imageLeftGuyStart},
      {opacity: 1, width: $imageLeftGuyFull}))
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '._row-animation-second',
    triggerHook: 0.5,
    offset: 0,
    duration: 170
  })
    .setTween(TweenMax.fromTo($imageRightGal, 1,
      {opacity: 0, width: $imageRightGalStart},
      {opacity: 1, width: $imageRightGalFull}))
    .addTo(controller);


  //scene for fifth frame

  var $imageFitCircles = $('._fit-circles');
  var $imageFitBackgr = $('._fit-backgr');
  var $imageFitBackgrWidth = $imageFitBackgr.width();

  new ScrollMagic.Scene({
    triggerElement: '._row-animation-third',
    triggerHook: 0.5,
    offset: 0,
    duration: 200
  })
    .setTween(TweenMax.fromTo($imageFitCircles, 1, {left: 0, opacity: 0}, {
      left: $imageFitBackgrWidth * 0.2,
      opacity: 1
    }))
    .addTo(controller);

  var $imageMigrate = $('._migrate');
  var $animationMigrateFrameWidth = $('.animation-migrate').width();

  new ScrollMagic.Scene({
    triggerElement: '._row-animation-third',
    triggerHook: 0.5,
    offset: 0,
    duration: 300
  })
    .setTween(TweenMax.fromTo($imageMigrate, 1, {left: 0, opacity: 0}, {
      left: $animationMigrateFrameWidth / 7,
      opacity: 1
    }))
    .addTo(controller);

  var $dotFirst = $('._dot-first');
  var $dotSecond = $('._dot-second');
  var $dotThird = $('._dot-third');
  var $smile = $('._smile');

  //scenes for main frame
  //set relative container height for correct absolute elements positioning
  let triggerElementClass = '._row-managers';

  addScrollMagicSceneOpacity (triggerElementClass, $dotFirst, 0.5, 0, 70);
  addScrollMagicSceneOpacity (triggerElementClass, $dotSecond, 0.5, 70, 70);
  addScrollMagicSceneOpacity (triggerElementClass, $dotThird, 0.5, 140, 70);
  addScrollMagicSceneOpacity (triggerElementClass, $smile, 0.5, 140, 70);

}

function addScrollMagicSceneOpacity (triggerElementClass, node, triggerHook, offset, duration) {
  new ScrollMagic.Scene({
    triggerElement: '._row-managers',
    triggerHook: triggerHook,
    offset: offset,
    duration: duration
  })
    .setTween(TweenMax.fromTo(node, 1, {opacity: 0}, {opacity: 1}))
    .addTo(controller);
}

function setStaticElementsDimensions () {
  $('.frame-managers-container').css({'width': '30%'});
  $('.frame-managers-headers').css({'width': '60%', 'margin-left': '8%'});
  $('.row-animation').css({'margin-bottom': '10%'});
  $('.row-animation._row-animation-first').css({'margin-bottom': '5%'});
  $('._row-managers').css({'margin-bottom': '10%'});
  $('.frame-container._icon-estimate__backgr img').css({'width': '100%'});
  $('.frame-container._icon-estimate__backgr img._icon-estimate__clockahnd-background ')
    .css({'width': '1.5%'}, {'left': '82.5%'}, {'top': '23%'});
}
