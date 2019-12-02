// Styles
require('./index.scss');

// JS modules
require('components/overview');
var $ = require('jquery');
var dispatcher = require('utils/dispatcher');

// Add beams
require('./../../img/beam-1.svg');
require('components/icon/go-link/');


// Add product logo
require('components/jetbrains-logo/pycharm/pycharm-text');
require('components/jetbrains-logo/pycharm-edu/');
require('components/logo/python');

// Customers
require('components/logo/symantec');
require('components/logo/groupon');
require('components/logo/yelp');
require('components/logo/telefonica');
require('components/logo/hp');
require('components/logo/dice');
require('components/logo/workiva');
require('components/logo/twitter');
require('components/logo/thoughtworks');


// Block: Enjoy Productive Python
require('components/features-icon/supportPython');
require('components/features-icon/technologiesPC');
require('components/features-icon/frameworks');
require('components/features-icon/remoteDevelopment');
require('components/features-icon/tools');
require('components/features-icon/educational');

// Page scripts starts here
dispatcher.domReady(function() {

});
