import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const initialData = JSON.parse(localStorage.getItem('data')).lineGraph;

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: initialData.labels,
        datasets: [
          {
            data: initialData.data,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [data]);

  return (
    <div className='w-full h-full px-2 py-4 overflow-hidden box-border'>
      <canvas ref={chartRef} className='h-full w-full' />
    </div>
  );
};

export default Graph;
