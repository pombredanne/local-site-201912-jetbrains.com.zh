import './index.pcss';
import '@webteam/card/lib/styles';

import $ from 'jquery';
import Carousel from 'webteam-ui/components/carousel';
import FormYoutrackIncloud from 'components/form-youtrack-incloud';
import AnchorScroll from 'utils/anchor-scroll';

// Add beam
require('./../../img/beam-1.svg');


// Add logos customers
import 'components/logo/couchsurfing';
import 'components/logo/ferrari';
import 'components/logo/renault';
import 'components/logo/bayer';
import 'components/logo/hp';
import 'components/logo/procter-and-gamble';
import 'components/logo/vkontakte';
import 'components/logo/blizzard';
import 'components/logo/warhorse';
import 'components/logo/kingdom-come-deliverance';
import 'components/logo/gaijin-entertainment';


$(document).ready(function() {
  const carousel = new Carousel('.js-example-carousel', {
    dots: true,
    innerArrows: true
  });
  // new FormYoutrackIncloud('.js-form-get-youtrack');
});