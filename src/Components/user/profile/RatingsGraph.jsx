import React from 'react';
import { Headline6 } from '@material/react-typography';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Inf = Infinity;

const options = {

  title: {
    text: '',
  },
  series: [
    {
      name: 'Ratings',
      data: [2000, 1100, 1250, 1340, 1450, 1670, 1800, 1960, 999],
    },
  ],
  xAxis: {
    title: {
      text: 'Contests',
      style: {
        fontWeight: 900,
      },
    },
    categories: ['SRM01', 'SEPT18', 'SRM08', 'SRM09', 'SRM10', 'SRM11', 'SRM12', 'SRM13', 'SRM14'],
  },
  yAxis: {
    title: {
      text: 'Ratings',
      style: {
        fontWeight: 900,
      },
    },
    series: [
      {
        name: 'Ratings',
        // data: [1315, 1381, 1316],
      },
    ],
    plotBands: [{
      from: 0,
      to: 999,
      color: 'rgba(128,128,128, 0.5)',
      label: {
        text: 'Novice',
        style: {
          color: 'black',
          fontWeight: 900,
        },
      },
    },
    {
      from: 1000,
      to: 1199,
      color: 'rgba(0,255,0, 0.5)',
      label: {
        text: 'Beginner',
        style: {
          color: 'black',
          fontWeight: 900,
        },
      },
    },
    {
      from: 1200,
      to: 1399,
      color: 'rgba(0,0,255, 0.5)',
      label: {
        text: 'Intermediate',
        style: {
          color: 'black',
          fontWeight: 900,
        },
      },
    },
    {
      from: 1400,
      to: 1599,
      color: 'rgba(128,0,128,0.5)',
      label: {
        text: 'Advanced',
        style: {
          color: 'black',
          fontWeight: 900,
        },
      },
    },
    {
      from: 1600,
      to: 1799,
      color: 'rgba(218, 165, 34, 0.5)',
      label: {
        text: 'Expert',
        style: {
          color: 'black',
          fontWeight: 900,
        },
      },
    },
    {
      from: 1800,
      to: 1999,
      color: 'rgba(240, 94, 35, 0.5)',
      label: {
        text: 'Master',
        style: {
          color: 'black',
          fontWeight: 900,
        },
      },
    },
    {
      from: 2000,
      to: Inf,
      // - to: 15,
      color: 'rgba(214, 6, 6, 0.5)',
      label: {
        text: 'Legend',
        style: {
          color: 'black',
          fontWeight: 900,
        },
      },
    }],
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
    line: {
      color: 'black',
    },
  },
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500,
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
        },
      },
    }],
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },
};

const RatingsGraph = () => (
  <div className="pl4 pr4">
    <Headline6 className="purple">Ratings</Headline6>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
    <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
  </div>
);

export default RatingsGraph;
