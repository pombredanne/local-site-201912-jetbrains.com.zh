require('../inc/general.scss');

import dispatcher from 'utils/dispatcher';

import 'components/logo/cpp/cpp-outline';
import 'components/features-icon/team';
import 'components/features-icon/flag';

import charts from '../inc/charts';
import pivot from 'webteam-ui/components/charts/_pivot';
var d3 = require('d3');


const data = charts.loadData(require.context('../inc/data/demography'));

dispatcher.domReady(function () {

  charts.pie(
    '.js-employment-status',
    '.js-employment-status-legend',
    400, 400,
    data['what-is-your-main-employment-status-'],
    {
      legendWidth: 320,
      pivot: pivot.align.TOP_LEFT
    }
  );

  charts.linesMonochrome(
    '.js-job-roles',
    770, 800,
    data['which-of-the-following-best-describes-your-job-role-s-regardless-of-your-position-level-'],
    '#3688cb'
  );

  // single line: research/devecosystem-2018/inc/data/demography/how-many-people-work-for-your-company-organization-.json
  charts.singleLine(
    '.js-how-many-workers',
    1200, 200,
    data['how-many-people-work-for-your-company-organization-'],
    {
      gap: 0.002,
      labelsPositions: [ 0.8, 0.65, 0.5, 0.65, 0.65, 0.8, 0.65, 0.5 ],
      showPercentage: true,
      showCalloutLine: true,
      calloutLineColor: '#666',
      alignLabelsToSidesAt: 50,
      strokeWidth: 40,
      lineOnTop: true
    }
  );

  // pie: research/devecosystem-2018/inc/data/demography/is-it-your-companys-core-business-.json
  charts.pie(
    '.js-is-core-business',
    '',
    500, 500,
    data['is-it-your-companys-core-business-'],
    { labelsOverValues: true, startAt: Math.PI * 2, valuesRadius: 1.17 }
  );

  // circles: research/devecosystem-2018/inc/data/demography/what-kind-of-development-does-your-company-do-.json
  charts.linesMonochrome(
    '.js-kind-of-development',
    560, 500,
    data['what-kind-of-development-does-your-company-do-'],
    '#3688cb'
  );

  //   // research/devecosystem-2018/inc/data/demography/how-long-have-you-been-working-in-the-it-industry-.json
  charts.pie(
    '.js-how-long-in-industry',
    '.js-how-long-in-industry-legend',
    400, 400,
    data['how-long-have-you-been-working-in-the-it-industry-'],
    { gap: 1.5, pivot: pivot.align.TOP_LEFT }
  );

  // research/devecosystem-2018/inc/data/demography/what-is-the-size-of-your-project-team-.json
  charts.linesMonochrome(
    '.js-project-team-size',
    440, 350,
    data['what-is-the-size-of-your-project-team-'],
    '#f9652f'
  );

  // what-agile-software-development-framework-do-you-use-in-your-team-if-any-
  charts.bubbles(
    '.js-agile-framework',
    1200, 310,
    data['what-agile-software-development-framework-do-you-use-in-your-team-if-any-'],
    {
      // "Scrum","Combined","Kanban","XP","Other","None"
      positions: [
        [95, 155], // Scrum
        [310, 72],  // Combined
        [260, 230], // Kanban
        [370, 200],  // XP
        [210, 146],  // Other
        [620, 146]  // None
      ],
      labelsPositions: [
        null, // Scrum
        [170, 25], // Combined
        [170, 25], // Kanban
        [120, -40],  // XP
        [170, 0], // Other
        null // None
      ]
    }
  );

  // research/devecosystem-2018/inc/data/demography/what-agile-software-development-framework-do-you-use-in-your-team-if-any-.json
  // charts.lines(
  //   '.js-agile-framework',
  //   440, 350,
  //   data['what-agile-software-development-framework-do-you-use-in-your-team-if-any-']
  // );

  // research/devecosystem-2018/inc/data/demography/how-is-your-team-distributed-.json
  const teamDistributionPadding = 100,
        teamDistributionWidth = 1200 - (teamDistributionPadding * 2),
        teamDistributionHeight = 285;

  charts.circles(
    '.js-team-distribution',
    teamDistributionWidth, teamDistributionHeight,
    data['how-is-your-team-distributed-'],
    {
      minRadius: 20,
      maxRadius: 55,
      minFontSize: 16,
      maxFontSize: 35,
      rows: 1
    }
  );

  // Generate Team Distribution background

  d3.select('.js-team-distribution svg')
    //.style('position', 'relative').style('top', '-245px')
    .style('width', (teamDistributionWidth + teamDistributionPadding) + 'px')
    .attr('transform', 'translate(' + teamDistributionPadding + ',0)');

  const bgWidth = teamDistributionWidth + teamDistributionPadding * 2;
  const bgHeight = teamDistributionHeight;

  const teamDistSvg = d3.select('.js-team-distribution-bg')
    .style('position', 'absolute')
    .append('svg').attr('width', bgWidth).attr('height', bgHeight);

  const bgHalfHeight = bgHeight / 2;
  const bgQuadHeight = bgHalfHeight / 2;

  /* var circleDistribution = d3.scaleLinear()
    .range([ 0, teamDistributionWidth ])
    .domain([ 0, 4 ]); */

  teamDistSvg.append('defs')
    .append('clipPath').attr('id', 'clip')
    .append('path').attr('d', 'M 0 ' + -bgQuadHeight + ' L 0 ' + bgQuadHeight +
                              'L ' + bgWidth + ' ' + bgHalfHeight +
                              'L ' + bgWidth + ' ' + -bgHalfHeight +
                              'Z')
    .attr('fill', 'black');

  const group = teamDistSvg.append('g')
    .attr('transform', 'translate(0, ' + bgHalfHeight + ')')
    .attr('clip-path', 'url(#clip)');

  group.append('line')
    .attr('stroke-width', 1)
    .attr('stroke', 'black')
    .attr('x1', 0)
    .attr('x2', bgWidth);

  group.selectAll('circle').data([0, 452, 748, 1037]).enter().append('circle')
    .attr('stroke-width', 1).attr('stroke-dasharray', '5, 7')
    .attr('stroke', '#999')
    .attr('fill', 'transparent')
    .attr('r', function(v, idx) { return v; });

  // research/devecosystem-2018/inc/data/demography/could-you-tell-us-your-age-range-.json
  charts.singleLine(
    '.js-age-range',
    1200, 200,
    data['could-you-tell-us-your-age-range-'],
    {
      gap: 0.002,
      strokeWidth: 40,
      labelsPositions: [0.8, 0.65, 0.5, 0.65, 0.5, 0.8],
      showPercentage: true,
      showCalloutLine: true,
      calloutLineColor: '#666',
      alignLabelsToSidesAt: 50,
      lineOnTop: true
    }
  );

});