require('../inc/general.scss');
require('./index.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/kotlin/kotlin-outline';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/kotlin'));

dispatcher.domReady(function () {

  charts.lines(
    '.js-kotlin-version',
    500, 300,
    data['which-version-of-kotlin-do-you-use-']
  );

  charts.lines(
    '.js-kotlin-jvm-version',
    500, 400,
    data['which-version-of-kotlin-do-you-use-kotlin-jvm-']
  );

  charts.lines(
    '.js-kotlin-android-version',
    500, 500,
    data['which-version-of-kotlin-do-you-use-kotlin-android-']
  );

  charts.lines(
    '.js-kotlin-js-version',
    500, 170,
    data['which-version-of-kotlin-do-you-use-kotlin-js-']
  );

  /* charts.singleLine(
    '.js-how-long-kotlin',
    1200,
    200,
    data['how-long-have-you-been-using-kotlin-'],
    { colors: [ '#ff6161', '#fe8d49', '#acbb67', '#85dcb8', '#64b3dc' ],
      labelsPositions: [ 0.5, 0.5, 0.8, 0.5, 0.8 ] }
  ); */

  charts.lines(
    '.js-how-long-kotlin',
    560, 300,
    data['how-long-have-you-been-using-kotlin-']
  );

  // charts.pie(
  //   '.js-true-background',
  //   '.js-true-background-legend',
  //   500, 500,
  //   data['what-is-true-about-your-kotlin-background-'],
  //   { legendWidth: 350 }
  // );

  charts.lines(
    '.js-true-background',
    500, 300,
    data['what-is-true-about-your-kotlin-background-']
  );

  /* charts.lines(
    '.js-languages-before',
    500, 500,
    data['what-language-s-did-you-use-before-you-switched-to-kotlin-']
  ); */

  charts.circles(
    '.js-languages-regularly-used',
    1200, 750,
    data['what-other-programming-languages-do-kotlin-developers-regualry-use-'],
    { rows: 4 }
  );

  charts.circles(
    '.js-types-of-applications',
    1200, 430,
    data['what-types-of-applications-do-you-develop-']
  );

});