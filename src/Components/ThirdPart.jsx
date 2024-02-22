import React from 'react';
import MountainHeader from './MountainHeader';
import image from '../../public/photo-1417021423914-070979c8eb34.jpg';

function ThirdPart() {
  return (
    <div className="w-full mt-36 relative">
      <img src={image} alt="" className="w-full h-96 lg:h-full " />
      <MountainHeader />
      <div
        className='w-64 md:w-80 mt-16 lg:mt-0 h-48 px-4 md:px-9 pt-4 ml-6 md:ml-0'
        style={{
          position: 'absolute',
          zIndex: 3,
          top: "40%",
          left: "32%",
          transform: "translate(-50%, -50%)",
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <h1
          className='font-bold text-lg mg:text-1xl lg:text-3xl tracking-tightest mb-2 '
          style={{ color: '#3a496b' }}
        >
          SCHEDULE
        </h1>
        <div className='flex text-xs lg:text-sm'>
          <ul>
            <li>25 Nov 2016</li>
            <li>28 Nov 2016</li>
            <li className='mt-4'>18 Dec 2016</li>
            <li className='mt-4'>7 Jan 2017</li>
          </ul>
          <ul className='ml-9'>
            <li>Vestibulum viverra</li>
            <li>Vestibulum viverra</li>
            <li className='mt-4'>Vestibulum viverra</li>
            <li className='mt-4'>Vestibulum viverra</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ThirdPart;
