import React from 'react';
import { render } from 'react-dom';

// JS modules
import 'components/shortcut';
import 'components/overview';
import dispatcher from 'utils/dispatcher';
import Tooltip from 'webteam-ui/components/tooltip';
import $ from 'jquery';

import FormYoutrackIncloud from 'components/form-youtrack-incloud';
import UAParserWrapper from 'utils/ua-sniffer';

// Add beam
import '../../img/beam-1.svg';

// Add product logo
import 'components/jetbrains-logo/youtrack/youtrack-text';
import 'components/jetbrains-logo/youtrack';
import 'components/logo/jira/jira-colorful';
import 'components/logo/trello/';

//Add icons
// Block: comparison - features icons
import 'components/features-icon/agile-boards';
import 'components/features-icon/smart-search';
import 'components/features-icon/rt-updates';
import 'components/features-icon/merge-columns';
import 'components/features-icon/productivity-charts';
import 'components/features-icon/check-in-round-icon';
import 'components/features-icon/smart-notifications';
import 'components/features-icon/issue-draft';
import 'components/features-icon/customize-workflow';
import 'components/features-icon/image-icon';
import 'components/features-icon/incloud-standalone';
import 'components/features-icon/award-badge-2';
import 'components/features-icon/backlog';
import 'components/features-icon/ide';

// Block: Choose your edition
import 'components/features-icon/edition-in-cloud';
import 'components/features-icon/editionStandalone';

// Block: Designed with every team member in mind
import 'components/features-icon/developers';
import 'components/features-icon/designers';
import 'components/features-icon/testers';
import 'components/features-icon/managers';
import 'components/features-icon/supportEngineers';

// Styles
import './index.scss';

// eslint-disable-next-line import/no-commonjs
const YoutrackPriceCalculator = require('../../../../ui/blocks/buy/youtrack/incloud/price-calculator.jsx');

// Page scripts starts here

dispatcher.domReady(() => {
  //hide button for mobile version
  if (UAParserWrapper.isMobile()) {
    $('body').addClass('is-mobile');
  }

  //hide link for landing page
  if ($('.landing-header').get(0)) {
    $('.link-comparison').hide();
    $('.text-main').hide();
    $('.text-landing').show();
  } else {
    $('.text-main').show();
    $('.text-landing').hide();
  }

  $('.js-form-get-youtrack').each(function() {
    // eslint-disable-next-line no-new
    new FormYoutrackIncloud(this);
  });

  const content =
    '<ol>\n' +
    '    <li>1. &nbsp; Register YouTrack InCloud or download a Standalone version.</li>\n' +
    '    <li>2. &nbsp;<a href="/buy/competitive/?product=youtrack" target="_blank">Fill the form</a> and provide a receipt of the license certificate.</li>\n' +
    '</ol>';

  // eslint-disable-next-line no-new
  new Tooltip({
    target: document.querySelector('.jb-tooltip-target-left-top'),
    content,
    position: 'left top'
  });

  render(
    React.createElement(YoutrackPriceCalculator.default, {
      noHeader: true,
      onDark: true
    }),
    document.getElementById('youtrack-pricing')
  );
});
