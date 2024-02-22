// MainHeader.js
import React from 'react';
import logo from '../../public/Vector Smart Object.png';
import { Link as ScrollLink } from 'react-scroll';

function MainHeader() {
  return (
    <div style={{ zIndex: 7,position: 'sticky', width: '100%' }} className='w-full'>
      <div className='flex justify-evenly items-center'>
        <img src={logo} alt='Logo' className='w-6 h-6 md:w-9 md:h-9 mt-2' />

        <div className='flex underline underline-offset-8 text-white italic opacity-75 text-sm md:text-base lg:text-lg'>
          <ScrollLink to='secondHeader' spy={true} smooth={true} duration={500} offset={-50}>0.1 History</ScrollLink>
          <ScrollLink to='thirdPart' spy={true} smooth={true} duration={500} offset={-50}><h1 className='ml-4 md:ml-8'>0.2 Team</h1></ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
