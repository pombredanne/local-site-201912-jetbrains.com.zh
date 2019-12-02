require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/php/php-outline';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/php'));

dispatcher.domReady(function () {

  charts.bubbles(
    '.js-versions',
    660, 440,
    data['which-version-of-php-do-you-regularly-use-'],
    {
      maxRadius: 110,
      minRadius: 5,
      positions: [
        [370, 105],  // PHP 7.2
        [135, 135], // PHP 7.1
        [570, 90], // PHP 7.0
        [320, 315],   // PHP 5.6
        [450, 235],   // PHP 5.5
        [470, 315],   // PHP 5.4
        [450, 380],   // PHP 5.3
        [60, 330], // Other
      ],
      labelsPositions: [
        null, // PHP 7.2
        null, // PHP 7.1
        null, // PHP 7.0
        null,  // PHP 5.6
        [120, -5],  // PHP 5.5
        [120, 5], // PHP 5.4
        [120, 20], // PHP 5.3
        [120, -30] // Other
      ]
     }
  );

  charts.circles(
    '.js-frameworks',
    1200, 350,
    data['which-framework-s-do-you-regularly-use-if-any-'],
    {
      minRadius: 15,
      maxRadius: 50,
      minFontSize: 14,
      maxFontSize: 25
    }
  );

  charts.lines(
    '.js-editors',
    500, 750,
    data['which-editor-ide-do-you-use-the-most-']
  );

  charts.lines(
    '.js-unit-testing',
    500, 450,
    data['which-testingframeworks-do-you-regularly-use-if-any-']
  );

});