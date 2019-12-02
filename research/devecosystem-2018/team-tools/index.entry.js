require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/teamtools'));

dispatcher.domReady(function () {

  charts.circles(
    '.js-ci-systems',
    1200, 400,
    data['which-continuous-integration-ci-system-s-do-you-regularly-use-']
  );

  charts.lines(
    '.js-ci-systems-cloud',
    500, 800,
    data['which-continuous-integration-ci-system-s-do-you-regularly-use-shares-among-people-who-use-in-cloud-ci']
  );

  charts.lines(
    '.js-ci-systems-premises',
    500, 800,
    data['which-continuous-integration-ci-system-s-do-you-regularly-use-shares-among-people-who-use-on-premises-ci']
  );

  charts.circles(
    '.js-issue-tracking',
    1200, 400,
    data['which-issue-tracking-system-s-do-you-regularly-use-']
  );

  charts.lines(
    '.js-version-control-systems',
    500, 500,
    data['which-version-control-service-s-do-you-regularly-use-if-any-']
  );

  // charts.pie(
  //   '.js-deployment-process-involvement',
  //   '.js-deployment-process-involvement-legend',
  //   450, 450,
  //   data[?],
  //   { pivot: pivot.align.MIDDLE }
  // );

  // charts.bubbles(
  //   '.js-configuration-management',
  //   720, 320,
  //   data[?],
  //   { maxRadius: 150, minRadius: 30 }
  // );

  charts.lines(
    '.js-tools-in-cloud',
    960, 340,
    data['do-you-use-any-of-the-following-tools-in-cloud-']
  );


});