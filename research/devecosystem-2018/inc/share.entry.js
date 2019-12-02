import dispatcher from 'utils/dispatcher';
import Share from 'webteam-ui/components/share';
import './share.scss';

dispatcher.domReady(function () {
  // prepare share buttons
  new Share('.js-share-buttons', {
    counters: false
  });
});