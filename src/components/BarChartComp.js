import React from 'react';
import './mainContainer.css';
import { Chart, registerables} from 'chart.js';

import { Bar } from 'react-chartjs-2';
Chart.register(...registerables);



const chartData = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","jul","Aug","Sep","Oct","Nov","Dec",],
  datasets: [
    {
        label: 'Sample Data',
        data: [30,20,50,30,40,15,40,50,45,30,25,40], // Sample data values
          backgroundColor: ["rgba(230,230,230,0.8","rgba(230,230,230,0.8","rgba(230,230,230,0.8","rgba(230,230,230,0.8","rgba(230,230,230,0.8","rgba(230,230,230,0.8","rgba(230,230,230,0.8","#5A32EA","rgba(230,230,230,0.8","rgba(230,230,230,0.8","rgba(230,230,230,0.8","rgba(230,230,230,0.8",
          ],
          hoverBackgroundColor: "#5A32EA",
        ActiveXObject:true,
        borderColor: 'transparent',
        borderWidth: 1,
          borderRadius: 5,
        
    },
  ],
};


const BarChartComp = () => {


    return (
      
        <Bar
            className='bar-chart'
            data={chartData}
            
            options={{
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: true,
                    maintainAspectRatio: false,
                layout: {
                    padding: 10
                    },
                scales:{
                    x: {
                        max:60,
                        grid: {
                            display: false,
                            drawBorder: false,
                            borderColor:"transparent"
                        }
                    },
                    y: {
                        max: 60,
                        
                        grid: {
                            display: false,
                            drawBorder: false, 
                        }
                    },
                },
            }}
      />
  );
};

export default BarChartComp;

