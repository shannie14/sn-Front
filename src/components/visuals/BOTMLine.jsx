import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    'Mar 2021',
    'Apr 2021',
    'May 2021',
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
    'Mar 2023',
  ],
  datasets: [
    {
      data: [
68,
25,
26,
36,
32,
46,
49,
49,
59,
131,
130,
134,
118,
105,
98,
92,
92,
85,
83,
81,
72,
66,
65,
60,
32,

      ],
      datalabels: {anchor: 'end', align: 'end', font:{color: "#ab966d", size: 10}},
      fill: false,
      backgroundColor: '#8884d8',
      borderColor: '#8884d8',
    },
  ],
};

const options = {
  
    plugins: {
    legend: {display: false},
  },
  
  scales: {
    x: {
      ticks: {
        autoSkip: false,
        maxTicksLimit: 10,
        color: "#Ab966d"
      },
      grid: {display: false},
    },
    y: {
      display: false,
      grid: {display: false},
      beginAtZero: false,
        ticks: {
        autoSkip: false,
        maxTicksLimit: 8,
        color: "#Ab966d"
      }
    },
    }
  }

const BOTMLine = () => {
  return <Line className="line" data={data} options={options} height="400" />;
};

export default BOTMLine;
