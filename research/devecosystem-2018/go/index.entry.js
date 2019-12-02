require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/go/go-outline';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/go'));

dispatcher.domReady(function () {

  charts.bubbles(
    '.js-packages',
    660, 330,
    data['which-package-manager-s-do-you-use-regularly-use-if-any-'],
    {
      minRadius: 5,
      maxRadius: 120,
      positions: [
        [ 125, 125 ], // golang
        [ 330, 220 ], // godep
        [ 320, 70 ], // glide
        [ 210, 280 ], // govendor
        [ 410, 85 ], // gpm
        [ 420, 170 ], // gvt
        [ 460, 115 ], // Other
        [ 510, 250 ] // None
      ],
      labelsPositions: [
        null,
        null,
        null,
        null, // govendor
        [120, -45], // gpm
        [120, -45], // gvt
        [120, -45], // Other
        null // None
      ]
    }
  );

  charts.lines(
    '.js-frameworks',
    600, 450,
    data['which-go-web-framework-s-do-you-regularly-use-if-any-']
  );

  charts.lines(
    '.js-go-router',
    600, 450,
    data['which-go-router-do-you-use-regularly-if-any-']
  );

  charts.bubbles(
    '.js-unit-testing',
    660, 400,
    data['which-testing-framework-s-do-you-use-regularly-if-any-'],
    {
      minRadius: 5,
      maxRadius: 150,
      positions: [
        // "built-in testing","testify","ginkgo","gomock","gomega","gocheck","httpexpect","goconvey","Other","None"
        [ 155, 155 ], // built-in
        [ 360, 190 ], // testify
        [ 340, 70 ], // ginkgo
        [ 200, 350 ], // gomock
        [ 435, 95 ], // gomega
        [ 440, 190 ], // gocheck
        [ 520, 50 ], // httpexpect
        [ 540, 175 ], // goconvey
        [ 520, 280 ], // Other
        [ 425, 300 ] // None
      ],
      labelsPositions: [
        null, // built-in
        null, // testify
        null, // ginkgo
        [100, 0], // gomock
        [100, 30], // gomega
        [100, 30], // gocheck
        [100, 30], // httpexpect
        [80, 10], // goconvey
        [100, 30], // Other
        null, // none
      ]
    }
  );

});