import React from 'react'

function MountainHeader() {
  return (
    <div className=' flex w-full h-9' style={{position:'absolute',top:0,backgroundColor:'#3a496b'}}>
        <div className='flex text-gray-400 items-center font-bold text-lg' style={{position:'absolute',left:250,top:5}} >
      <h1>MOUNTAIN 1</h1>
      <h1 className='ml-3' >MOUNTAIN 2</h1>
      </div>
    </div>
  )
}

export default MountainHeader
