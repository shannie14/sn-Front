import React from 'react';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Bar} from 'react-chartjs-2';


import { useTheme } from "@mui/material";
import {tokens} from "../../theme"

Chart.register(ChartDataLabels);

function Bargraph () {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

const data = {

    labels: ['Mar21', 'Apr21', 'May21', 'Jun21', 'Jul21', 'Aug21', 'Sep21', 'Oct21', 'Nov21', 'Dec21', 'Jan22', 'Feb22', 'Mar22', 'Apr22', 'May22', 'Jun22', 'Jul22', 'Aug22', 'Sept22', 'Oct22', 'Nov22', 'Dec22', 'Jan23', 'Feb23'],
    
    datasets: [{
        backgroundColor: '#ab966d',
        // borderColor: '#ab966d',
        data: [68, 25, 26, 36, 32, 46, 49, 49, 59, 131, 130, 134, 118, 105, 98, 92, 92, 85, 83, 81, 72, 66, 65, 58],
       datalabels: { anchor: 'end', align: 'end', font: {size: 18}}
    }],
};


const options = {
  layout: {padding:20},

  plugins: {
    legend: {display: false},
  },

  scales: {
    x: {
        ticks: {font:{size: 18}},
        grid: {display: false, color: '#fff'},
    },
    
    y: {
        ticks: {display: false, color: '#fff'},
        grid: {display: false, color: '#fff'},
    },
  },  
};

    return(
        <Bar
            data={data}
            options={options}
            width={100}
            height={30}
        />
    );    
}

export default Bargraph;

    
