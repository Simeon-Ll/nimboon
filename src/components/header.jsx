import React from 'react'

function header() {
  return (
    <div className='py-8 md:py-4 px-10 md:px-5 w-full absolute top-0 flex justify-between items-center'>
      <h3 className=' text-white text-4xl md:text-2xl font-bold italic'>Nimboon</h3>
      <button className='bg-white font-bold px-3 py-1 text-md md:text-xs rounded-2xl'>Register Now</button>
    </div>
  )
}

export default header
