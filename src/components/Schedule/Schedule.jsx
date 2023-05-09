import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PieChart from '../PieChart/PieChart';

const ulStyle = {
  width: '200px',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontSize: '1.2rem',
  fontWeight: '500',
  listStyleType: 'disc',
  textAlign: 'left',
  marginLeft: '3rem',
};
const Schedule = () => {
  return (
    <div className='summarys h-full w-full row-span-2 grid grid-rows-1 grid-cols-2 gap-8'>
      <div className='pie--chart relative box-border bg-white rounded-2xl '>
        <div
          style={{ display: 'flex', width: '70rem', justifyContent: 'space-around' }}
          className='mt-5'
        >
          <h1 className='text-2xl absolute top-1 left-1 text-left px-8 py-1 font-semibold'>
            Top products{' '}
          </h1>{' '}
          <select
            id='cars'
            name='cars'
            className='abolute top-4 right-4 w-fit px-4 py-2 opacity-70 self-end rounded-lg font-medium text-gray-600'
          >
            <option value='volvo'>May-June 2021</option>
            <option value='saab'>June-July 2021</option>
            <option value='fiat'>July-Aug 2021</option>
            <option value='audi'>Aug-Sep 2021</option>
          </select>
        </div>
        <div className='text-center ml-10  h-full w-full flex'>
          <PieChart />
          <ul style={ulStyle}>
            <li>
              <h5>Basic Trees</h5>
              <span className='text-gray-400 mt-5'>55%</span>
            </li>
            <li>
              <p>Custom Short Pants</p>
              <span className='text-gray-400 mt-5'>35%</span>
            </li>
            <li>
              <p>Super Hoodies</p>
              <span className='text-gray-400 mt-5'>15%</span>
            </li>
          </ul>
        </div>
      </div>{' '}
      <div className='more--details relative bg-white rounded-2xl flex-col'>
        <a href='#' className='absolute top-[10px] right-[10px] px-8 py-4 flex text-gray-700'>
          <span className='px-4'> See more </span> <FaArrowRight />
        </a>{' '}
        <h1 className='text-2xl text-left px-8 py-4 font-semibold'>Today 's Schedule </h1>{' '}
        <div className='event--wrapper flex flex-col justify-around px-8'>
          <div className='item border-l-4 border-[red] px-4 my-2'>
            <h1 className='title text-lg font-semibold text-left my-0'>
              Meeting with suppliers from Kuta Bali{' '}
            </h1>{' '}
            <p className='time text-left text-lg opacity-60'> 14.00-15.00</p>{' '}
            <p className='location text-left'>at Sunset Road, Kuta, Bali </p>{' '}
          </div>{' '}
          <div className='item border-l-4 border-[green] px-4 my-2'>
            <h1 className='title text-lg font-semibold text-left my-0'>
              Check operation at Giga Factory 1
            </h1>{' '}
            <p className='time text-left text-lg opacity-60'>18.00-20.00</p>{' '}
            <p className='location text-left'> at Central Jakarta </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default Schedule;
