require('../inc/general.scss');
require('./index.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/c/c-outline';
import 'components/features-icon/refactoring/refactoringBlack';

import palettes from 'webteam-ui/components/charts/palettes';
import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/C'));

dispatcher.domReady(function () {

  charts.lines(
    '.js-c-standards',
    800, 300,
    data['which-c-standards-do-you-regularly-use-']
  );

  charts.linesMonochrome(
    '.js-ide',
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
    '.js-build-systems',
    900, 600,
    data['which-project-model-s-or-build-system-s-do-you-regularly-use-if-any-'],
    '#8fc150',
    { maxValue: 0.4, ticksCount: 2, legendHeight: 165 }
  );

  charts.lines(
    '.js-c-compiler',
    820, 360,
    data['which-compiler-s-do-you-regularly-use-']
  );

});