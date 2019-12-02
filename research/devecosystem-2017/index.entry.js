import dispatcher from 'utils/dispatcher';
import $ from 'jquery';

import Select from 'webteam-ui/components/select';
import Share from 'webteam-ui/components/share';
import pivot from 'webteam-ui/components/charts/_pivot';
import palettes from 'webteam-ui/components/charts/palettes';
import BeamsChart from 'webteam-ui/components/charts/beams';
import PieChart from 'webteam-ui/components/charts/pie';
import LinesChart from 'webteam-ui/components/charts/lines';
import SingleLineChart from 'webteam-ui/components/charts/single-line';
import GroupedLinesVerticalChart from 'webteam-ui/components/charts/grouped-lines-vertical';
import VerticalLinesChart from 'webteam-ui/components/charts/vertical-lines';
import DottieChart from 'webteam-ui/components/charts/dottie';
import BubblesChart from 'webteam-ui/components/charts/bubbles';

import 'components/features-icon/bracketsCurly';
import 'components/features-icon/faceSad';
import 'components/features-icon/osSimultaneously';
import 'components/features-icon/fullstack';
import 'components/features-icon/osMobile';
import 'components/features-icon/facePoker';
import 'components/features-icon/gamepad';
import 'components/logo/c-sharp';
import 'components/features-icon/sleepless';
import 'components/features-icon/sleepful';
import 'components/features-icon/phones';
import 'components/features-icon/hands';

import 'components/technologies-support';
import 'components/logo/go/go-outline';

import './inc/nav';
import './inc/share';

import './index.scss';

dispatcher.domReady(() => {
  // === DOWNLOAD SELECT ===

  const select = Select('.js-select');
  const $downloadButton = $('.js-download-button');

  select.onChange(function() {
    const val = $(this).val();

    $downloadButton.attr('href', val);
  });

  // === SHARE KEY TAKEAWAYS ===

  const takeaways = [
    '#Java is the most popular primary programming language among developers',
    '#JavaScript is the most programming language among developers (overall)',
    '#golang is the most promising programming language among developers'
  ];

  takeaways.forEach((text, idx) => {
    // eslint-disable-next-line no-new
    new Share(`.js-takeaway-${idx}`, {
      url: 'https://www.jetbrains.com/research/devecosystem-2017/',
      data: { via: 'jetbrains' },
      title: text,
      counters: false
    });
  });

  // === CHARTS ===

  // eslint-disable-next-line no-new
  new BeamsChart('.js-how-often-use-tools', {
    width: 1200,
    height: 1100,
    useMinValue: true,
    rowFontSize: 13,
    columnFontSize: 14,
    leftAxisWidth: 270,
    rows: [
      {
        id: 'GitHub',
        label: 'Source code collaboration tool (e.g. GitHub, GitLab, Bitbucket)'
      },
      {
        id: 'YouTrack',
        label: 'Issue tracker (e.g. JIRA, YouTrack)'
      },
      {
        id: 'Upsource',
        label: 'Code review tool (e.g. Crucible, Upsource)'
      },
      {
        id: 'Travis',
        label:
          'Continuous Integration (CI) tool (e.g. Travis, Jenkins, TeamCity)'
      },
      {
        id: 'CodeClimate',
        label: 'Static analysis tool (e.g. CodeClimate)'
      },
      {
        id: 'IDE',
        label: 'IDE (e.g. Eclipse, IntelliJ IDEA)'
      },
      {
        id: 'Desktop',
        label:
          'Lightweight Desktop Editor (e.g. Sublime Text, Atom, VS Code, Vim)'
      },
      {
        id: 'In-cloud',
        label: 'In-cloud Editor or IDE'
      }
    ],
    columns: [
      {
        id: 'all',
        label: 'All day long'
      },
      {
        id: 'day',
        label: 'Several times\na day'
      },
      {
        id: 'week',
        label: 'Several times\na week'
      },
      {
        id: 'less',
        label: 'Less Frequently'
      },
      {
        id: 'Never',
        label: 'Never'
      }
    ],
    values: [
      //'all 'day 'week 'less 'never
      [44, 25, 15, 10, 5], // GitHub
      [22, 21, 13, 17, 28], // YouTrack
      [6, 8, 11, 22, 55], // Upsource
      [15, 15, 16, 18, 36], // Travis
      [5, 6, 10, 22, 57], // CodeClimate
      [64, 12, 7, 8, 9], // IDE
      [43, 24, 14, 10, 8], // Desktop
      [5, 5, 7, 24, 59] // In-cloud
    ],
    rowMaxHeight: 100,
    colors: [
      '#ff6923', // 0
      '#fe365d', // 1
      '#ea3f8b', // 2
      '#e65fd2', // 3
      '#8d72fc' // 4
    ]
  });

  // eslint-disable-next-line no-new
  new PieChart('.js-unit-testing', '.js-unit-testing-legend', {
    width: 400,
    height: 400,
    gap: 1.0,
    thickness: 15,
    labels: [
      'Yes, I write unit tests',
      "Yes, I use unit tests,\nbut I don't write them",
      'No'
    ],
    values: [0.55, 0.16, 0.29],
    legendWidth: 220,
    margin: 0.3,
    colors: [
      '#afc52c', // 0
      '#34d7a1', // 1
      '#38d1ff' // 2
    ],
    pivot: pivot.align.TOP_LEFT
  });

  // eslint-disable-next-line no-new
  new PieChart(
    '.js-contribute-open-source',
    '.js-contribute-open-source-legend',
    {
      width: 400,
      height: 400,
      gap: 1.0,
      thickness: 15,
      labels: [
        'I work full time on\nopen-source code',
        'Yes, regularly',
        'Yes, from time to time',
        'Only contributed\na few times',
        'No, but willing to',
        'No, and not willing to'
      ],
      values: [0.03, 0.08, 0.2, 0.22, 0.44, 0.03],
      //startAt: Math.PI + (0.03 * Math.PI * 2),
      legendWidth: 220,
      margin: 0.3,
      colors: [
        '#ff3085', // 0
        '#ff76ff', // 1
        '#9c69ff', // 2
        '#7fb9ff', // 3
        '#ffc247', // 4
        '#ff8839' // 5
      ],
      pivot: pivot.align.CENTER
    }
  );

  // eslint-disable-next-line no-new
  new LinesChart('.js-fullstack', {
    width: 440,
    height: 450,
    lineHeight: 12,
    labelsAtEnd: true,
    labels: [
      'Web Back-end',
      'Web Front-end',
      'Mobile',
      'Enterprise Back-end Service',
      'Desktop',
      'Data analysis / BI',
      'Embedded / IoT',
      'Others'
    ],
    values: [0.67, 0.64, 0.34, 0.28, 0.22, 0.16, 0.08, 0.04],
    colors: palettes.eightColorsStyleTwo()
  });

  // eslint-disable-next-line no-new
  new LinesChart('.js-mobile-operating-system', {
    width: 440,
    height: 220,
    lineHeight: 12,
    labelsAtEnd: true,
    labels: ['Android', 'iOS', 'Windows', 'Others'],
    values: [0.84, 0.58, 0.21, 0.02],
    colors: [
      '#9ed450', // 0
      '#e988e1', // 1
      '#70d3f4', // 2
      '#18d68c' // 3
    ]
  });

  // eslint-disable-next-line no-new
  new SingleLineChart('.js-video-games', {
    width: 100,
    height: 400,
    vertical: true,
    values: [0.65, 0.35],
    showLabels: true,
    labelSide: 'right',
    labelAlign: 'start',
    strokeWidth: 10,
    gap: 0.01,
    colors: [
      '#5ac3cf', // 0
      '#ffce64' // 1
    ]
  });

  // eslint-disable-next-line no-new
  new LinesChart('.js-video-games-genre', {
    width: 440,
    height: 500,
    lineHeight: 12,
    labelsAtEnd: true,
    labels: [
      'Role-playing',
      'Strategy',
      'Action-adventure',
      'Action',
      'Sports',
      'Simulation',
      'Adventure',
      'Casual',
      'Others'
    ],
    values: [0.21, 0.2, 0.2, 0.12, 0.07, 0.07, 0.05, 0.04, 0.03],
    colors: [
      '#79d3f0', // 0
      '#8e8efc', // 1
      '#c778ff', // 2
      '#f881ff', // 3
      '#ff7aa9', // 4
      '#ff7e6d', // 5
      '#ffa360', // 6
      '#ffc45c', // 7
      '#f7ff71' // 8
    ]
  });

  // eslint-disable-next-line no-new
  new GroupedLinesVerticalChart(
    '.js-hours-week-spend-coding',
    '.js-hours-week-spend-coding-legend',
    {
      width: 500,
      height: 400,
      legendWidth: 310,
      lineGap: 10,
      labels: ['<1', '1-2', '3-8', '9-16', '17-32', '>32'],
      values: [
        [0.03, 0.06], // Less than 1 hour a week
        [0.03, 0.19], // 1-2 hours a week
        [0.15, 0.36], // 3-8 hours a week
        [0.17, 0.2], // 9-16 hours a week
        [0.27, 0.05], // 17-32 hours a week
        [0.35, 0.03] // 32 hours a week or more
      ],
      legendLabels: [
        'For your day job (or primary activity)',
        'For your personal or side projects'
      ],
      legendIds: ['all', 'dev'],
      stretchToMax: true,
      remainderColor: 'rgba(255,255,255,.1)',
      showRemainderOnHover: true,
      underline: true,
      colors: [
        '#91b5ff', // 0
        '#d666ff' // 1
      ]
    }
  );

  // eslint-disable-next-line no-new
  new PieChart('.js-code-weekends-charts', '.js-code-weekends-legend', {
    width: 400,
    height: 400,
    //startAt: (2 * Math.PI) * 0.16,
    labels: ['Yes', 'No'],
    values: [0.84, 0.16],
    legendWidth: 100,
    thickness: 10,
    margin: 0.3,
    gap: 1.5,
    colors: [
      '#ffbc52', // 0
      '#82e4ff' // 1
    ],
    pivot: pivot.align.TOP_LEFT
  });

  // eslint-disable-next-line no-new
  new LinesChart('.js-phone', {
    width: 440,
    height: 300,
    lineHeight: 12,
    labelsAtEnd: true,
    labels: [
      'Yes, Android',
      'Yes, Apple iOS',
      'Yes, Windows-based',
      'Others',
      'No'
    ],
    values: [0.65, 0.41, 0.04, 0.02, 0.02],
    colors: [
      '#85e364', // 0
      '#e87aff', // 1
      '#42ccff', // 2
      '#a17cff', // 3
      '#ffc051' // 4
    ]
  });

  // eslint-disable-next-line no-new
  new LinesChart('.js-mouse', {
    width: 440,
    height: 170,
    lineHeight: 12,
    labelsAtEnd: true,
    labels: ['Keyboard', 'Mouse', 'Others'],
    values: [0.8, 0.17, 0.04],
    colors: [
      '#998eff', // 0
      '#ff8282', // 1
      '#91ffc5' // 2
    ]
  });

  // eslint-disable-next-line no-new
  new LinesChart('.js-ambidextrous', {
    width: 440,
    height: 170,
    lineHeight: 12,
    labelsAtEnd: true,
    labels: ['Right-handed', 'Left-handed', 'Ambidextrous'],
    values: [0.86, 0.07, 0.06],
    colors: [
      '#74c2e6', // 0
      '#cc82ff', // 1
      '#f27aa7' // 2
    ]
  });

  // eslint-disable-next-line no-new
  new DottieChart(
    '.js-programming-languages',
    '.js-programming-languages-legend',
    {
      dotRadius: 4,
      blocksInARow: 8,
      dotsInARow: 10,
      blockPaddingX: 50,
      showValueLabels: true,
      legendWidth: 340,
      colors: [
        '#0cb0f2', // 0
        '#ff318c' // 1
      ],
      categoryLabels: [
        'Used regularly (%)',
        'To be adopted / migrated to soon (%)'
      ],
      labels: [
        'JavaScript',
        'HTML / CSS',
        'Java',
        'SQL',
        'Python',
        'PHP',
        'C#',
        'C++',
        'C',
        'TypeScript',
        'Ruby',
        'Swift',
        'Go',
        'Objective-C',
        'Scala',
        'Visual Basic',
        'Groovy',
        'R',
        'CoffeeScript',
        'Kotlin',
        'Clojure / CLJS' /* FIXME: ClojureScript, two lines */,
        'Elixir',
        'Haskell',
        'Other'
      ],
      values: [
        [65, 5], // JavaScript
        [60, 3], // HTML / CSS
        [47, 6], // Java
        [42, 4], // SQL
        [32, 12], // Python
        [30, 5], // PHP
        [20, 4], // C#
        [17, 5], // C++
        [15, 3], // C
        [12, 9], // TypeScript
        [10, 6], // Ruby
        [9, 11], // Swift
        [8, 11], // Go
        [7, 2], // Objective-C
        [7, 6], // Scala
        [5, 1], // Visual Basic
        [3, 1], // Groovy
        [3, 5], // R
        [3, 2], // CoffeeScript
        [2, 3], // Kotlin
        [2, 2], // Clojure/ClosureScript
        [1, 3], // Elixir
        [1, 3], // Haskell
        [8, 9] // Other
      ]
    }
  );

  // eslint-disable-next-line no-new
  new BubblesChart('.js-development-environment-operating-systems', {
    width: 480,
    height: 300,
    labels: ['Windows', 'macOS', 'Unix / Linux', 'Others'],
    values: [0.57, 0.49, 0.4, 0.01],
    colors: ['#f95a56', '#f88156', '#ffc052', '#0cc500'],
    linearScale: true, // TODO: fix and remove
    positions: [
      [90, 116], // Windows
      [265, 75], // macOS
      [215, 225], // Unix/Linux
      [285, 193] // Others
    ],
    labelsPositions: [
      null, // Windows
      null, // macOS
      null, // Unix/Linux
      [150, -60] // Others
    ]
  });

  // eslint-disable-next-line no-new
  new VerticalLinesChart('.js-primary-programming-language', {
    height: 400,
    width: 1000,
    lineWidth: 10,
    padding: 45,
    labels: [
      'C',
      'C#',
      'C++',
      'Go',
      'HTML / CSS',
      'Java',
      'JavaScript',
      'Objective-C',
      'PHP',
      'Python',
      'Ruby',
      'Scala',
      'Swift',
      'Others'
    ],
    values: [
      0.04,
      0.09,
      0.05,
      0.01,
      0.04,
      0.26,
      0.16,
      0.01,
      0.12,
      0.1,
      0.03,
      0.02,
      0.02,
      0.05
    ],
    maxValue: 0.3,
    colors: [
      '#f8a857', // C
      '#fa5402', // C#
      '#fa1f46', // C++
      '#e12481', // Go
      '#d63bea', // HTML/CSS
      '#9136de', // Java
      '#941e8b', // JavaScript
      '#5e2294', // Objective-C
      '#5747f4', // PHP
      '#0bc1fc', // Python
      '#17d58b', // Ruby
      '#92cd00', // Scala
      '#fbba48', // Swift
      '#eb7a45' // Others
    ]
  });

  // eslint-disable-next-line no-new
  new SingleLineChart('.js-sleeptime', {
    width: 1200, //-35-10, /* we subtract paddings defined in CSS */
    height: 200,
    gap: 0.002,
    values: [0.01, 0.05, 0.38, 0.49, 0.06],
    strokeWidth: 40,
    colors: ['#ff6161', '#fe8d49', '#acbb67', '#85dcb8', '#64b3dc'],
    labels: [
      'I dont’ sleep',
      'Less than 3 hours',
      '3-6 hours',
      '7-8 hours',
      'More than 8 hours'
    ],
    labelsPositions: [0.8, 0.5, 0.5, 0.5, 0.8],
    labelsBackground: '#3b3e43',
    showPercentage: true,
    showCalloutLine: true,
    alignLabelsToSidesAt: 100,
    lineOnTop: true
  });
});
