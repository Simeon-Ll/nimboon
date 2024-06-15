import React from 'react'
import facebook from '../assets/logo-facebook.svg'
import twitter from '../assets/logo-twitter.svg'
import instagram from '../assets/logo-instagram.svg'


function footer() {
  return (
    <footer className='bg-primary flex flex-col items-center py-10 text-white'>
      <a href='###' className='italic font-bold text-2xl md:text-xl'>Nimboon</a>

      <div className='flex gap-5 md:gap-3 py-3'>
        <a href="###"><img src={facebook} alt="" className='w-10 md:w-7' /></a>
        <a href="###"><img src={instagram} alt="" className='w-10 md:w-7' /></a>
        <a href="###"><img src={twitter} alt="" className='w-10 md:w-7' /></a>
      </div>

      <p className='md:text-sm'>&copy;2024 <span className='font-semibold italic'>Nimboon</span>. All Rights Reserved.</p>
    </footer>
  )
}

export default footer
