// Styles


// JS modules
const dispatcher = require('utils/dispatcher');
const TimelineWhatsnew = require('components/timeline-whatsnew');

// Page scripts starts here
dispatcher.domReady(function() {
  TimelineWhatsnew();
});
