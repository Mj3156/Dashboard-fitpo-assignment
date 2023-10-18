import React from 'react';
import './mainContainer.css';
import { Chart, registerables} from 'chart.js';

import { Pie } from 'react-chartjs-2';
Chart.register(...registerables);

const chartData = {
  labels: ['Customers that buy products', 'Not buy Products'],
  datasets: [
    {
      data: [65,35], // Sample data values (percentage)
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384'],
    },
  ],
};


const PieChartComp = () => {
    return (
        <Pie
            className='pie-chart'
            data={chartData}
            options={{
            responsive: true,
            maintainAspectRatio: false,
            }}
        />
    );
};

export default PieChartComp;