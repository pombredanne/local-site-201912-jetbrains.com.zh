require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/ruby/ruby-outline';

import charts from '../inc/charts';

const data = charts.loadData(require.context('../inc/data/ruby'));

dispatcher.domReady(function () {

  charts.bubbles(
    '.js-versions',
    660, 300,
    data['which-version-of-ruby-do-you-use-the-most-'],
    {
      positions: [
        [60, 60], // Ruby 2.5
        [205, 90],  // Ruby 2.4
        [350, 132], // Ruby 2.3
        [250, 220], // Ruby 2.2
        [60, 195],   // Ruby 2.1
        [310, 40],   // Ruby 2.0
        [430, 110], // Ruby 1.8
        [420, 240] // Other
      ],
      labelsPositions: [
        null, // Ruby 2.5
        null, // Ruby 2.4
        null, // Ruby 2.3
        [90, 10], // Ruby 2.2
        [90, 10],  // Ruby 2.1
        [90, 0], // Ruby 2.0
        [90, 10], // Ruby 1.8
        [90, -30] // Other
      ]
    }
  );

  charts.lines(
    '.js-version-managers',
    500, 310,
    data['which-ruby-version-manager-s-do-you-regularly-use-if-any-']
  );

  charts.lines(
    '.js-gem-management',
    500, 250,
    data['which-gem-management-tool-s-do-you-regularly-use-if-any-']
  );

  charts.lines(
    '.js-web-tools',
    500, 400,
    data['what-web-development-tool-s-and-or-framework-s-do-you-regularly-use-if-any-']
  );

  charts.lines(
    '.js-editors',
    500, 550,
    data['what-editor-s-ide-s-do-you-use-the-most-']
  );

  charts.circles(
    '.js-rails-versions',
    1200, 400,
    data['which-version-of-rails-do-you-use-']
  );

  charts.lines(
    '.js-servers',
    550, 310,
    data['which-server-s-do-you-regularly-use-in-production-if-any-'],
/*     {
      maxRadius: 130,
      minRadius: 10,
      positions: [
        // ["Puma","Unicorn","Passenger (mod_rails)","Thin","FastCGI","None"]
        [250, 150],  // Puma
        [465, 90], // Unicorn
        [640, 80], // Passenger
        [420, 220],   // Thin
        [630, 185],   // FastCGI
//        [650, 235]   // Others
        [60, 130], // None
      ],
      labelsPositions: [
        null, // Puma
        null, // Unicorn
        null, // Passenger
        [120, 0],  // Thin
        [120, -30],  // FastCGI
        //[120, 20], // Others
        null // None
      ]
     } */
  );

  charts.lines(
    '.js-unit-testing',
    550, 350,
    data['which-unit-testing-framework-s-do-you-regularly-use-if-any-']
  );

});