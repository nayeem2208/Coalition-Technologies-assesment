import React from 'react'
import image from '../../public/peak.jpg'

function SecondPart() {
  return (
    <div className='w-full mt-16' style={{position:'relative'}}>
        <img src={image} alt="" className='w-full h-full' style={{position:'absolute',top: 0, left: 0}}/>
        <h1 className='text-8xl' style={{position:'absolute',zIndex:4}}>01.</h1>
    </div>
  )
}

export default SecondPart
