import React from 'react'
import logo from '../../public/Vector Smart Object.png'

function MainHeader() {
  return (
    <div style={{ zIndex: 10, position: 'absolute' }} className='w-full'>
    <div className='flex justify-evenly  items-center'>
      <img src={logo} alt="Logo" className='w-9 h-9 mt-2'/>
 
      <div className='flex underline underline-offset-8 text-white italic opacity-75'>
        <h1>0.1 History</h1>
        <h1 className='ml-8'>0.2 Team</h1>
      </div>
    </div>
  </div>
  )
}

export default MainHeader
