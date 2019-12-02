require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/javascript/javascript-outline';

import charts from '../inc/charts';
import pivot from 'webteam-ui/components/charts/_pivot';


const data = charts.loadData(require.context('../inc/data/js'));

dispatcher.domReady(function () {

  charts.pie(
    '.js-ecmascript-6',
    '',
    350, 370,
    data['do-you-use-the-features-of-ecmascript-'],
    { gap: 1.5,
      legendWidth: 90,
      margin: 0.1,
      colors: [
        '#70c8ff', // 0
        '#fa44ad'  // 1
      ],
      pivot: pivot.align.CENTER,
      centerStroke: true,
      valuesRadius: 0.67,
      outerRadius: 0.95,
      labelsOverValues: true
    }
  );

  charts.circles(
    '.js-frameworks',
    1200, 400,
    data['what-javascript-framework-s-do-you-regularly-use-if-any-'],
    {
      minRadius: 20,
      maxRadius: 50
    }
  );

  charts.lines(
    '.js-editors',
    500, 550,
    data['what-editor-ide-do-you-use-the-most-'],
    {
      lineHeight: 10
    }
  );

  charts.lines(
    '.js-unit-testing',
    500, 450,
    data['which-unit-testing-framework-s-tool-s-do-you-regularly-use-if-any-'],
    {
      lineHeight: 10
    }
  );

  charts.bubbles(
    '.js-module-loaders',
    800, 300,
    data['what-module-loader-s-do-you-regularly-use-if-any-'],
    {
      maxRadius: 100,
      minRadius: 5,
      positions: [
        [110, 135], // Webpack
        [270, 120], // RequireJS
        [340, 60], // Browserify
        [230, 205],  // Rollup
        [520, 95],  // SystemJS
        [390, 200],  // Other
        [500, 160] // None
      ],
      labelsPositions: [
        null, // Webpack
        [120, 30], // RequireJS
        [120, 30], // Browserify
        [120, 30],  // Rollup
        [120, 30],  // SystemJS
        [120, 30],  // Other
        [120, 30] // None
      ]
    }
  );

});