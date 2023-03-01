import Bargraph from '../components/visuals/Bargraph'
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

const Botm = () => {


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
        // radius: 100,
        cutoutPercentage: 20,
        maintainAspectRatio: false,
        responsive: true,
        // height: 400,
        // width: 800,
        plugins: {
            datalabels: {},
            legend: {
                position: 'left', display: true,
                labels: {
                    boxWidth: 30,
                    boxHeight: 30,
                    font: { size: 16 }
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

        <div display="flex" justifyContent="center" alignItems="top" flex-direction="column">
            <div className="chart-container">
                <h2>Monthly Subscribers</h2>
                <Bargraph />
            </div >
            <div className="donut">
                <h2>Current Members By Category</h2>
                <div>
                    <Doughnut data={data} options={options} onClick={null} width="200" justifyContent="left" />
                </div>

            </div>
        </div>)
}
export default Botm;

