import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    'soft launch',
    'Jun 2021',
    'Jul 2021',
    'Aug 2021',
    'Sep 2021',
    'Oct 2021',
    'Nov 2021',
    'Dec 2021',
    'Jan 2022',
    'Feb 2022',
    'Mar 2022',
    'Apr 2022',
    'May 2022',
    'Jun 2022',
    'Jul 2022',
    'Aug 2022',
    'Sep 2022',
    'Oct 2022',
    'Nov 2022',
    'Dec 2022',
    'Jan 2023',
    'Feb 2023',
    'March 2023',
  ],
  datasets: [
    {
      label: 'Sales',
      data: [
        29270,
        1136,
        3306,
        790,
        1403,
        1241,
        1155,
        135180,
        15703,
        3229,
        2595,
        1333,
        926,
        1931,
        4145,
        3951,
        2997,
        2806,
        5417,
        4524,
        3051,
        1782,
        161,
      ],
      fill: false,
      backgroundColor: '#8884d8',
      borderColor: '#8884d8',
    },
  ],
};

const options = {
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 12,
      },
    },
  },
};

const SalesLineChart = () => {
  return <Line data={data} options={options} />;
};

export default SalesLineChart;
