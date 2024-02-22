import React from 'react'
import MountainHeader from './MountainHeader'
import image from "../../public/photo-1417021423914-070979c8eb34.jpg";

function ThirdPart() {
  return (
    <div className="w-full mt-36" style={{ position: "relative" }}>
      <img src={image} alt="" className="w-full h-full " />
      <MountainHeader/>
      <div className=' w-80 h-48 px-9 pt-4' style={{position:'absolute',zIndex:3,top:100,left:300,backgroundColor:'rgba(255, 255, 255,0.7)'}}>
        <h1 className='font-bold text-3xl tracking-tightest mb-2' style={{color:'#3a496b'}}>SCHEDULE</h1>
        <div className='flex text-sm'>
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
  )
}

export default ThirdPart
