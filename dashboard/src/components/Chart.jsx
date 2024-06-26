import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      type: 'linear',
      beginAtZero: true,
    },
  },
};

const ChartComponent = () => {
  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;

