import React from 'react'
import image from '../../public/photo-1459666644539-a9755287d6b0.jpg'
import mountain from '../../public/photo-1459666644539-a9w755287d6b0.png'
import MainHeader from './mainHeader';


function FirstPart() {
    return (
      <div className='w-full' style={{ height: '130vh', position: 'relative' }}>
        <MainHeader/>
        <img src={mountain} alt="" className='w-full h-full  '
          style={{ position: 'absolute', top: 0, left: 0,zIndex:4 }}/>
         <h1 style={{ position: 'absolute', zIndex: 3,top:230,left:350,fontWeight:600 }} className='tracking-tightest  h-full text-8xl font-sans  '>
         <span className='text-gray-600'>
        LOSANGELES
      </span>
        <br/>
        <span style={{
        background: 'linear-gradient(0deg,rgba(54,55,60,1)0%,rgba(86,99,150,1)  80%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}>
        MOUNTAINS
      </span>
      </h1>
        <img
          src={image}
          alt=""
          className='w-full h-full '
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    );
  }

export default FirstPart
