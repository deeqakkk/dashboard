import React from 'react';
import { Pie } from 'react-chartjs-2';
import tempData from '../../helpers/data.json';

const storeData = JSON.stringify(tempData);
localStorage.setItem('data', storeData);

const inpData = JSON.parse(localStorage.getItem('data')).pieChart;

const data = {
  labels: inpData.labels,
  datasets: [
    {
      data: inpData.data,
      backgroundColor: inpData.backgroundColor,
      hoverBackgroundColor: inpData.hoverBackgroundColor,
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'right',
      label: {
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
    labels: {
      render: 'percentage',
      precision: 2,
      fontColor: 'black',
      position: 'outside',
      textMargin: 10,
    },
  },
};

const PieChart = () => {
  return (
    <div className='h-[100%] w-fit'  style={{marginTop:'6px',height:'150px'}}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
