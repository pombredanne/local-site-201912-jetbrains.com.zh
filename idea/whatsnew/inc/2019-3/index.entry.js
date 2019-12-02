import $ from 'jquery';
import EmbeddedVideo from 'webteam-ui/components/embedded-video';
import './index.scss';

$(document).ready(() => {
  // eslint-disable-next-line no-new
  new EmbeddedVideo('.js-video');
});
