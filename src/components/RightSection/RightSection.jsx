import React from 'react';
import { FaMoneyCheck, FaRegBell, FaTags, FaThumbsUp, FaUsers } from 'react-icons/fa';
import Graph from '../Graph/Graph.jsx';
import Schedule from '../Schedule/Schedule.jsx';

const RightSection = () => {
  return (
    <section className='right--section col-span-4 flex flex-col'>
      <article className='top--section flex items-center justify-around w-full px-8 py-2 mb-6'>
        <span className='text-2xl text-left font-semibold mr-auto'> Dashboard </span>{' '}
        <input
          type='text'
          id='search'
          name='mail'
          placeholder='Search..'
          className='rounded-lg w-[90%] py-2 mx-8 px-4 w-fit'
        />
        <FaRegBell className='text-2xl' />
        <img
          src='https://avatars.githubusercontent.com/u/78724676?v=4'
          alt=''
          className='h-10 w-10 rounded-full mx-8'
        />
      </article>{' '}
      <article className='summary w-full h-full px-8'>
        <div className='top row-span-1 grid grid-row-1 grid-cols-4 gap-x-4'>
          <span className='revenue bg-[#DDEFE0] rounded-2xl flex justify-between w-full h-full px-8 py-4'>
            <div className='wrapper mt-auto flex-col text-left'>
              <span className='text-base font-medium opacity-80'> Total Revenue </span>{' '}
              <h1 className='text-3xl font-semibold m-0'> $22, 000 </h1>{' '}
            </div>{' '}
            <FaMoneyCheck className='icon self-start text-3xl opacity-80' />
          </span>{' '}
          <span className='transaction bg-[#F4ECDD] rounded-2xl flex justify-between w-full h-full px-8 py-4'>
            <div className='wrapper mt-auto flex-col self-start text-left'>
              <span className='text-base font-medium opacity-80'> Total Transaction </span>{' '}
              <h1 className='text-3xl font-semibold m-0'> 22, 000 </h1>{' '}
            </div>{' '}
            <FaTags className='icon self-start text-3xl opacity-80' />
          </span>{' '}
          <span className='likes bg-[#EFDADA] rounded-2xl flex justify-between w-full h-full px-8 py-4'>
            <div className='wrapper mt-auto flex-col text-left'>
              <span className='text-base font-medium opacity-80'> Total Likes </span>{' '}
              <h1 className='text-3xl font-semibold m-0'> 22, 000 </h1>{' '}
            </div>{' '}
            <FaThumbsUp className='icon self-start text-3xl opacity-80' />
          </span>{' '}
          <span className='users bg-[#DEE0EF] rounded-2xl flex justify-between w-full h-full px-8 py-4'>
            <div className='wrapper mt-auto flex-col text-left'>
              <span className='text-base font-medium opacity-80'> Total Users </span>{' '}
              <h1 className='text-3xl font-semibold m-0'> 22, 000 </h1>{' '}
            </div>{' '}
            <FaUsers className='icon self-start text-3xl opacity-80' />
          </span>{' '}
        </div>{' '}
        <div className='histogram bg-white h-[100%] w-full row-span-2 rounded-2xl'>
          <Graph />
        </div>{' '}
        <Schedule />
      </article>{' '}
    </section>
  );
};

export default RightSection;
