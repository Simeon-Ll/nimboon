// import data from '../features-data' 
import React from 'react'
import data from '../features-data'


function features() {
  return (
    <div className=' py-20 flex flex-col items-center'>
      <h1 className='text-3xl font-semibold text-center'>What You Can Do on <span className='text-primary font-extrabold'>Nimboon</span>?</h1>
      <div className='grid grid-cols-3 lg:grid-cols-1 gap-10 py-14 items-center'>
      {data.map(items => (
            <div className='flex flex-col w-72 lg:w-60 gap-1 lg:items-center lg:text-center' key={items.icon}>
                <img src={items.icon} alt="" className='w-20'/>
                <h3 className='font-bold text-xl'>{items.title}</h3>
                <p className='text-sm'>{items.paragraph}</p>
            </div>
        ))}
      </div>

    </div>
  )
}

export default features
