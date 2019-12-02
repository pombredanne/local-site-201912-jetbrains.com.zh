require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/swift/swift-outline';
import 'components/logo/xcode-outline';

import charts from '../inc/charts';
import pivot from 'webteam-ui/components/charts/_pivot';

const data = charts.loadData(require.context('../inc/data/Swift_and_Objective-C'));

dispatcher.domReady(function () {

  charts.lines(
    '.js-apple-platforms',
    400, 350,
    data['which-apple-platforms-do-you-develop-for-']
  );

  charts.bubbles(
    '.js-versions',
    600, 250,
    data['which-version-of-swift-do-you-regularly-use-'],
    {
      positions: [
        [125, 125], // 4.1
        [290, 130], // 4
        [380, 90], // 3.1
        [430, 120] // 3
      ],
      labelsPositions: [
        null, // 4.1
        null, // 4
        [ 130, -50 ],  // 3.1
        [ 120, 50 ]  // 3
      ]
    }
  );

  charts.lines(
    '.js-unit-testing',
    500, 300,
    data['which-unit-testingframework-s-do-you-regularly-use-if-any-']
  );

  charts.pie(
    '.js-ui-tests',
    '.js-ui-tests-legend',
    350, 350,
    data['do-you-use-ui-tests-'],
    {
      gap: 1.5,
      pivot: pivot.align.CENTER,
      legendWidth: 90,
      margin: 0.33,
      valuesRadius: 1.13,
      labelsOverValues: true
    }
  );

  charts.bubbles(
    '.js-dependency-manager',
    660, 350,
    data['which-dependency-manager-do-you-use-if-any-'],
    {
      maxRadius: 100,
      minRadius: 45,
      positions: [
        [120, 120], // CocoaPods
        [280, 140], // Carthage
        [390, 80] // None
      ],
      labelsPositions: [
        null, // CocoaPods
        null, // None
        null // Carthage
      ]
    }
  );

  charts.lines(
    '.js-database-engine',
    500, 350,
    data['which-database-engine-framework-combination-do-you-use-']
  );

  charts.pie(
    '.js-swift-linux',
    '.js-swift-linux-legend',
    400, 400,
    data['do-you-develop-with-swift-on-linux-'],
    {
      gap: 1.5,
      pivot: pivot.align.CENTER,
      legendWidth: 400,
      margin: 0.3
    }
  );

  charts.pie(
    '.js-swift-objc-shares',
    '.js-swift-objc-shares-legend',
    400, 400,
    data['shares-of-swift-and-objective-c-developers'],
    {
      gap: 1.5,
      pivot: pivot.align.CENTER,
      legendWidth: 240,
      margin: 0.3
    }
  );


});