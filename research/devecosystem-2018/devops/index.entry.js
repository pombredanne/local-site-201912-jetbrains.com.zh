require('../inc/general.scss');
require('./index.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/cpp/cpp-outline';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/devops'));

dispatcher.domReady(function () {

  charts.circles(
    '.js-infrastructure-code-tools',
    1200, 450,
    data['what-infrastructure-as-a-code-tools-do-you-or-your-organization-use-if-any-']
  );

  charts.pie(
    '.js-involvement',
    '.js-involvement-legend',
    400, 400,
    data['to-what-degree-are-you-personally-involved-in-infrastructure-development-'],
    { legendWidth: 340 }
  );

  charts.lines(
    '.js-configuration-management',
    500, 350,
    data['what-configuration-management-tool-s-do-you-your-organization-use-']
  );

  charts.lines(
    '.js-server-templating',
    500, 350,
    data['what-server-templating-tool-s-do-you-your-organization-regularly-use-']
  );

  charts.lines(
    '.js-infrastructure-prov-tools',
    500, 350,
    data['what-infrastructure-provisioning-tools-do-you-your-organization-use-']
  );

  charts.lines(
    '.js-container-orchestration',
    500, 350,
    data['what-container-orchestration-services-do-you-use-if-any-']
  );

  charts.lines(
    '.js-artifacts',
    500, 350,
    data['where-do-you-keep-your-artifacts-if-you-do-']
  );


});
