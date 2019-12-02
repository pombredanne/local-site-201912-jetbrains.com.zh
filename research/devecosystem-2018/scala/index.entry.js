require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/scala/scala-outline';
import 'components/logo/java/java-outline';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/scala'));

dispatcher.domReady(function () {

  // charts.lines(
  //   '.js-version',
  //   660, 350,
  //   data['which-version-s-of-scala-do-you-regularly-use-']
  // );

  charts.bubbles(
      '.js-version',
      800, 400,
      data['which-version-s-of-scala-do-you-regularly-use-'],
      {
        maxRadius: 120,
        positions: [
          [ 140, 340 ], // Typelevel Scala
          [ 480, 140 ], // dotty
          [ 320, 100 ], // 2.13
          [ 125, 170 ], // 2.12
          // [ 80, 100 ], // 2.13
          // [ 290, 160 ], // 2.12
          [ 420, 260 ], // 2.11
          [ 450, 80 ] // 2.10 or older
        ],
        labelsPositions: [
          [ 120, -40 ],
          [ 120, -30 ],
          null,
          null,
          null,
          [ 120, -30 ]
        ]
      }
  );

  charts.lines(
    '.js-java-version',
    660, 250,
    data['which-version-s-of-java-do-you-regularly-use-']
  );

  charts.lines(
    '.js-environments',
    660, 600,
    data['which-interactive-scala-environment-s-do-you-regularly-use-']
  );

  charts.lines(
    '.js-unit-testing',
    660, 500,
    data['which-unit-testing-framework-s-do-you-regularly-use-if-any-']
  );

  charts.circles(
    '.js-frameworks-web',
    1200, 400,
    data['which-frameworks-libraries-do-you-regularly-use-for-web-development-if-any-']
  );

  charts.circles(
    '.js-frameworks',
    1200, 400,
    data['which-frameworks-libraries-do-you-regularly-use-']
  );

  charts.lines(
    '.js-build-systems',
    660, 500,
    data['which-build-system-s-do-you-regularly-use-if-any-']
  );

});