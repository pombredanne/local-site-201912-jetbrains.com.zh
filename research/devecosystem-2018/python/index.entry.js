require('../inc/general.scss');
require('./index.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/python/python-outline';
import 'components/logo/python';

import charts from '../inc/charts';
import pivot from 'webteam-ui/components/charts/_pivot';

const data = charts.loadData(require.context('../inc/data/python'));

dispatcher.domReady(function () {

  charts.pie(
    '.js-versions',
    '',
    300, 300,
    data['which-version-of-python-do-you-use-the-most-'],
    {
      labelsOverValues: true,
      valuesRadius: 0.45,
      innerRadius: 0.7,
      outerRadius: 0.9,
      margin: 0,
      pivot: pivot.align.CENTER
    }
  );

  /* charts.lines(
    '.js-which-ide',
    300, 700,
    data['which-ide-editor-do-you-use-the-most-']
  ); */

  // charts.circles(
  //   '.js-frameworks',
  //   1200, 400,
  //   data['what-libraries-and-or-frameworks-do-you-use-in-addition-to-python-if-any-'],
  //   {
  //     minRadius: 10,
  //     maxRadius: 50,
  //     minFontSize: 14,
  //     maxFontSize: 25
  //   }
  // );

  charts.linesMonochrome(
    '.js-frameworks',
    400, 1200,
    data['what-libraries-and-or-frameworks-do-you-use-in-addition-to-python-if-any-'],
    '#3688cb'
  );

  charts.linesMonochrome(
    '.js-python-for',
    400, 800,
    data['what-do-you-use-python-for-'],
    '#f9652f'
  );

});