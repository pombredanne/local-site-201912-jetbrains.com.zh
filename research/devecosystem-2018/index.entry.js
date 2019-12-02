require('./index.scss');
require('./inc/general.scss');


import dispatcher from 'utils/dispatcher';

import 'components/logo/go/go-outline';
import 'components/features-icon/tools';
import 'components/features-icon/terminal';
import 'components/features-icon/customize';
import 'components/features-icon/cloud';
import 'components/features-icon/cloudMajor';
import 'components/features-icon/hobby';
import 'components/features-icon/money';
import 'components/features-icon/hands';
import 'components/features-icon/darkSide';
import 'components/features-icon/editor';
import 'components/features-icon/music';
import 'components/features-icon/electronic';
import 'components/features-icon/rock';
import 'components/features-icon/classical';
import 'components/features-icon/home-office';
import 'components/features-icon/coffee';
import 'components/features-icon/tea';

import charts from './inc/charts';


require('components/technologies-support');

const Select = require('webteam-ui/components/select');
const $ = require('jquery');

import Share from 'webteam-ui/components/share';

const data = charts.loadData(require.context('./inc/data/General'));
const dataFun = charts.loadData(require.context('./inc/data/fun'));

dispatcher.domReady(function () {

  // === DOWNLOAD SELECT ===

  const select = Select('.js-select');
  const $downloadButton = $('.js-download-button');

  select.onChange(function () {
    const val = $(this).val();

    $downloadButton.attr('href', val);
  });

  // === SHARE KEY TAKEAWAYS ===

  const takeaways = [
    '#Java is the most popular primary programming language among developers. #DevEcosystem18',
    '#JavaScript is the most popular programming language among developers (overall). #DevEcosystem18',
    '#golang is the most promising programming language among developers. #DevEcosystem18'
  ];

  takeaways.forEach(function(text, idx) {
    new Share('.js-takeaway-' + idx, {
      url: 'https://www.jetbrains.com/research/devecosystem-2018/',
      data: { via: 'jetbrains' },
      title: text,
      counters: false
    });
  });

  function toDiscrete(contPalette, count) {
    if (count <= 0) return [];
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(contPalette(i / (count - 1)));
    }
    return result;
  }

  // === CHARTS ===

  charts.dottie(
    '.js-programming-languages',
    '.js-programming-languages-legend',
    data['what-programming-language-s-do-you-regularly-use-'],
    data['do-you-plan-to-adopt-migrate-to-other-language-s-in-the-next-months-if-so-to-which-one-s-'],
    {
      categoryLabels: ['Used regularly (%)', 'Adopted in the future (%)'],
      legendWidth: 250
    }
  );

  charts.linesMonochrome(
    '.js-which-tools-regularly-use',
    660, 450,
    data['which-of-the-following-tools-do-you-regularly-use-'],
    '#3688cb'
  );

  charts.linesMonochrome(
    '.js-which-languages-learn',
    660, 850,
    data['what-programming-languages-have-you-started-learning-continued-to-learn-in-the-last-months-if-any-'],
    '#2a2a6a'
  );

  charts.linesMonochrome(
    '.js-where-host-database',
    660, 550,
    data['where-do-you-host-your-database-s-and-or-service-s-and-or-applications-that-you-or-your-company-develop-'],
    '#f9652f'
  );

  charts.pie(
    '.js-unit-testing',
    '.js-unit-testing-legend',
    400, 400,
    data['do-you-do-unit-testing-in-your-projects-']
  );

  charts.pie(
    '.js-contribute-open-source',
    '.js-contribute-open-source-legend',
    400, 400,
    data['do-you-contribute-to-open-source-projects-'],
    { legendWidth: 252 }
  );

  charts.wings(
    '.js-fullstack',
    1200, 750,
    data['what-type-s-of-applications-do-you-develop-for-a-living-'],
    data['what-type-s-of-applications-do-you-develop-just-for-fun-']
  );

  charts.bubbles(
    '.js-development-environment-operating-systems',
    500, 350,
    data['what-operating-system-s-are-your-development-environment-s-'],
    { maxRadius: 90,
      positions: [
            [ 95, 116 ], // Windows
            [ 275, 85 ], // Unix/Linux
            [ 280, 250 ], // macOS
            [ 55, 275 ] // Others
      ],
      labelsPositions: [
        null, // Windows
        null, // Unix/Linux
        null, // macOS
        [ 120, -60 ], // Others
      ]
    }
  );

  charts.bubbles(
    '.js-which-mobile-os',
    560, 300,
    data['for-which-mobile-operating-system-s-do-you-develop-'],
    { maxRadius: 120,
      positions: [
        [ 125, 125 ], // Android
        [ 340, 85 ], // iOS
        [ 265, 180 ] // Other
      ],
      labelsPositions: [
        null, // Windows
        null, // macOS
        [ 120, 30 ] // Other
      ]
    }
  );

  charts.bubbles(
    '.js-how-do-you-develop',
    800, 400,
    data['how-do-you-develop-for-mobile-operating-systems-'],
    { minRadius: 115,
      maxRadius: 155,
      positions: [
        [ 160, 240 ], // Windows
        [ 430, 120 ] // macOS
      ],
      labelsPositions: [
        null, // Windows
        null // macOS
      ]
    }
  );

  // FUN SECTION

  charts.pie(
    '.js-listen-music',
    '',
    400, 400,
    dataFun['do-you-listen-to-music-when-coding-'],
    { labelsOverValues: true, valuesRadius: 1.18 }
  );

  charts.linesMonochrome(
    '.js-music-genre',
    440, 850,
    dataFun['which-music-genres-do-you-prefer-choose-up-to-of-your-favorites-'],
    '#3688cb'
  );

  charts.singleLine(
    '.js-sleeptime',
    1200,//-35-10, /* we subtract paddings defined in CSS */
    200,
    dataFun['how-many-hours-a-day-do-you-sleep-'],
    { labelsPositions: [ 0.8, 0.5, 0.5, 0.5, 0.8 ] }
  );

  charts.groupedLines(
    '.js-hours-week-spend-coding',
    '.js-hours-week-spend-coding-legend',
    500, 400,
    dataFun['how-many-hours-a-week-do-you-spend-coding-for-your-day-job-or-primary-activity-'],
    dataFun['how-much-time-do-you-spend-on-personal-programming-or-side-projects-not-related-to-your-day-job-or-primary-activity-'],
    {
      // labels: ['<1', '1-2', '3-8', '9-16', '17-32', '>32'],
      legendLabels: ['For your day job (or primary activity), %', 'For your personal or side projects, %'],
      legendIds: ['all', 'dev'],
      legendWidth: 335
    });

  charts.pie(
    '.js-code-weekends-chart',
    '',
    400, 400,
    dataFun['do-you-code-on-weekends-'],
    { labelsOverValues: true, valuesRadius: 1.19 }
  );

  charts.linesMonochrome(
    '.js-where-code-chart',
    440, 300,
    dataFun['where-do-you-code-the-most-'],
    '#3688cb'
  );

  charts.linesMonochrome(
    '.js-smart-phone',
    440, 300,
    dataFun['do-you-have-and-use-a-cell-smart-phone-'],
    '#3688cb'
  );

  charts.singleLine(
    '.js-tea-or-coffee',
    1200,//-35-10, /* we subtract paddings defined in CSS */
    200,
    dataFun['do-you-prefer-tea-or-coffee-'],
    { labelsPositions: [ 0.5, 0.5, 0.5 ] }
  );

});

