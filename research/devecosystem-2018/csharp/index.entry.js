require('../inc/general.scss');
require('./index.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/c-sharp/c-sharp-outline';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/csharp'));

dispatcher.domReady(function () {

  charts.lines(
    '.js-versions',
    500, 350,
    data['what-version-s-of-c-do-you-regularly-use-'],
    {
      lineHeight: 10
    }
  );

  charts.bubbles(
    '.js-runtimes',
    420, 270,
    data['what-runtime-s-do-you-regularly-use-'],
    {
      maxRadius: 120,
      minRadius: 45,
      positions: [
        [130, 130], // .NET Framework
        [340, 80],  //  .NET Core
        [330, 220] // Mono
      ],
      labelsPositions: [
        null, // .NET Framework
        null, // .NET Core
        null  // Mono
      ]
    }
  );

  charts.circles(
    '.js-frameworks',
    1200, 470,
    data['which-technologies-frameworks-do-you-use-if-any-'],
    {
      rows: 2,
      minRadius: 15,
      maxRadius: 70,
      minFontSize: 14,
      maxFontSize: 25,
      topPadding: 15
    }
  );

  charts.linesMonochrome(
    '.js-editors',
    500, 350,
    data['which-editor-ide-do-you-use-the-most-'],
    '#3688cb',
    {
      lineHeight: 10
    }
  );

  charts.linesMonochrome(
    '.js-unit-testing',
    500, 350,
    data['which-unit-testing-framework-s-do-you-regularly-use-if-any-'],
    '#f9652f',
    {
      lineHeight: 10
    }
  );

  charts.verticalLinesMonochrome(
    '.js-performance',
    900, 600,
    data['what-performance-or-diagnostic-tool-s-do-you-regularly-use-if-any-'],
    '#8fc150',
    { maxValue: 0.5, ticksCount: 2 }
  );


});
