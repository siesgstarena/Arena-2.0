import React from 'react';
import { Headline6 } from '@material/react-typography';
import Chart from 'react-google-charts';

const RatingsGraph = () => {
  const data = [
    ['Contests', 'Ratings'],
    ['SRM01', 1315],
    ['SEPT18', 1381],
    ['SRM08', 1316],
  ];

  const options = {
    hAxis: { title: 'Contests' },
    vAxis: { title: 'Ratings', minValue: 0, maxValue: 2000 },
    legend: 'none',
  };
  return (
    <div className="pl4 pr4">
      <Headline6 className="purple">Ratings</Headline6>
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      <hr className="ba mt3" style={{ borderColor: '#5E2CA5' }} />
    </div>
  );
};

export default RatingsGraph;
