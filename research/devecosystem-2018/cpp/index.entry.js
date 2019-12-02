require('../inc/general.scss');
require('./index.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/cpp/cpp-outline';
import 'components/features-icon/refactoring/refactoringBlack';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/cpp'));

dispatcher.domReady(function () {

  charts.lines(
    '.js-standards',
    700, 370,
    data['which-c-standard-s-do-you-regularly-use-']
  );

  charts.linesMonochrome(
    '.js-editors',
    600, 650,
    data['which-ide-editor-do-you-use-the-most-'],
    '#3688cb'
  );

  charts.linesMonochrome(
    '.js-unit-testing',
    600, 400,
    data['which-unit-testing-framework-s-do-you-regularly-use-if-any-'],
    '#f9652f'
  );

  charts.verticalLinesMonochrome(
    '.js-project-model',
    900, 600,
    data['which-project-model-s-or-build-system-s-do-you-regularly-use-if-any-'],
    '#8fc150',
    { maxValue: 0.4, ticksCount: 2, legendHeight: 165 }
  );

  charts.lines(
    '.js-compilers',
    750, 380,
    data['which-compiler-s-do-you-regularly-use-']
  );

});
