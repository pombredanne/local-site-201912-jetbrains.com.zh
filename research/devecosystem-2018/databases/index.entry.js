require('../inc/general.scss');
require('./index.scss');

import dispatcher from 'utils/dispatcher';

import 'components/icon/databases';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/sql'));

dispatcher.domReady(function () {

  charts.circles(
    '.js-databases', 1200, 350,
    data['which-database-s-do-you-regularly-use-if-any-'],
    { maxRadius: 55 }
  );

  charts.circles(
    '.js-will-you-migrate', 1200, 350,
    data['do-you-plan-to-adopt-migrate-to-other-database-s-in-the-next-months-if-so-to-which-one-s-'],
    { maxRadius: 50 }
  );

  charts.circles(
    '.js-management-tools', 1200, 350,
    data['which-tool-s-do-you-regularly-use-for-working-with-databases-'],
    {
      maxRadius: 40,
      minRadius: 10
    }
  );

});