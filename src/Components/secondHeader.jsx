import React from 'react'
import logo from '../../public/Vector Smart Object.png'
function SecondHeader() {
  return (
    <div style={{ zIndex: 10, position: 'absolute' }} className='w-full mt-3 lg:mt-0'>
    <div className='flex justify-evenly  items-center'>
        <div className='flex'>
      <img src={logo} alt="Logo" className='w-6 h-6 md:w-9 md:h-9 mt-2'/>
      <h1  className='h-full font-sans text-xs md:text- flex flex-col ml-3 mt-2  ' style={{fontWeight:600}}>
         <span className='text-gray-800 ' >
        LOSANGELES
      </span>
        <span className='mb-2' style={{
            position:'absolute',top:22,
        background: 'linear-gradient(0deg,rgba(54,55,60,1)0%,rgba(86,99,150,1)  80%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}>
        MOUNTAINS
      </span>
      </h1>
      </div>
      <div className='flex underline underline-offset-8 text-sm lg:text-base  italic opacity-75 font-semibold'>
        <h1>0.1 History</h1>
        <h1 className='ml-8'>0.2 Team</h1>
      </div>
    </div>
  </div>
  )
}

export default SecondHeader
