// Styles
require('./index.scss');

// JS modules
require('components/overview');
var $ = require('jquery');
var dispatcher = require('utils/dispatcher');
require('mixitup');

// Add logos customers
require('components/logo/ferrari');
require('components/logo/hp');
require('components/logo/oculus');

require('components/logo/citibank');
require('components/logo/ubisoft-mono');
require('components/logo/wargaming');

require('components/logo/salesforce');
require('components/logo/nike');
require('components/logo/teradata');

// Add icons
// Block Why TeamCity is better
require('components/features-icon/perfomance');
require('components/features-icon/saveTime');
require('components/features-icon/extend');
require('components/features-icon/features-support');
require('components/features-icon/scale');
require('components/features-icon/integrate');
require('components/features-icon/panda');
// Block It’s absolutely free
require('components/features-icon/editionProfessional');
// What’s new in TeamCity
require('components/features-icon/configure-build');
require('components/features-icon/scale/scale-big');
require('components/features-icon/cuttingEdge');

// Page scripts starts here
dispatcher.domReady(function() {

  $('.js-filter').mixItUp({
    selectors: {
      target: '.filter-box__item',
      filter: '.filter-nav__button'
    },
    load: {
      filter: '.for-you'
    },
    controls: {
      activeClass: '_active'
    },
    animation: {
      duration: 400,
      effects: 'fade scale'
    }
  })
});