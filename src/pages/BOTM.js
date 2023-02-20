import Bargraph from "../components/visuals/Bargraph"
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


import { Box } from "@mui/material";
import Header from "../components/visuals/Header"

import { useTheme } from "@mui/material";
import { tokens } from "../theme"

Chart.register(ChartDataLabels);

const Botm = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const data = {
        labels:
            ['Agave', 'American Whiskey', 'World Whiskey']
        ,
        datasets: [
            {
                data: [14, 31, 32],
                backgroundColor: ['#11bfae', '#bf6211', '#e3ac17'],
                borderWidth: 1,
                datalabels: { display: false }
            },
        ],
    };

    const options = {
        radius: 150,

        plugins: {
            datalabels: {},
            legend: {
                position: 'left', display: true,
                labels: {
                    boxWidth: 40,
                    boxHeight: 40,
                    font: { size: 18 }
                }
            }
        },

        scales: {
            x: {
                ticks: { display: false, font: { size: 10 } },
                grid: { display: false, color: '#fff' },
            },

            y: {
                ticks: { display: false, font: { size: 10 } },
                grid: { display: false, color: '#fff' },
            },
        },


    };

    return (

        <div>
            <Box m="20px">

                <Header
                    title="Monthly Subscribers"
                    subtitle="since March 2021"
                />

                <Bargraph />

                <Header title="Current Members by Category" />

                <div className="chart-container">
                    <Doughnut data={data} options={options} onClick={null} />

                </div>



            </Box >
        </div >
    )
}
export default Botm;

