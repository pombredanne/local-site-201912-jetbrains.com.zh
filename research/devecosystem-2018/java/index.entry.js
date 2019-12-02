require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/java/java-outline';
import 'components/features-icon/refactoring/refactoringBlack';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/Java'));

dispatcher.domReady(function () {

  charts.bubbles(
    '.js-java-versions', 660, 350,
    data['which-version-s-of-java-do-you-regularly-use-'],
    {
      maxRadius: 140,
      positions: [
        [65, 156], // Java 9
        [285, 170], // Java 8
        [515, 100], // Java 7
        [465, 235], // Java 6
        [435, 290]  // Others
      ],
      labelsPositions: [ // labels
        null, // Java 9
        null, // Java 8
        null, // Java 7
        [120, -30], // Java 6
        [120, 30]  // Others
      ]
    }
  );

  charts.linesMonochrome(
    '.js-application-servers',
    440, 520,
    data['what-application-server-s-do-you-regularly-use-if-any-'],
    '#3688cb'
  );

  charts.linesMonochrome(
    '.js-frameworks',
    440, 350,
    data['which-framework-s-do-you-use-as-an-alternative-to-an-application-server-if-any-'],
    '#f9652f'
  );

  charts.bubbles(
    '.js-the-way-to-deploy', 600, 360,
    data['how-do-you-package-your-web-application-s-'],
    { minRadius: 5,
      maxRadius: 140,
      positions: [
        [150, 166], // Embedded
        [450, 140], // Artifacts
        [320, 280] // Not Sure
      ],
      labelsPositions: [
        null, // Embedded
        null, // Artifacts
        [110, 40] // Not Sure
      ]
    });

  charts.circles(
    '.js-web-frameworks', 1200, 400,
    data['what-web-framework-s-do-you-use-if-any-'],
    { topPadding: 15 }
  );

  // charts.verticalLinesMonochrome(
  //   '.js-web-frameworks', 800, 400,
  //   data['what-web-framework-s-do-you-use-if-any-'],
  //   '#8fc150',
  //   { topPadding: 15 }
  // );

  charts.linesMonochrome(
    '.js-build-systems',
    440, 350,
    data['which-build-system-s-do-you-regularly-use-if-any-'],
    '#3688cb'
  );

  charts.linesMonochrome(
    '.js-editors',
    500, 550,
    data['which-ide-editor-do-you-use-the-most-'],
    '#f9652f'
  );

});