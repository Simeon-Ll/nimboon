import React from 'react'
import { motion } from "framer-motion"

function header() {
  return (
    <div className='py-8 md:py-4 px-10 md:px-5 w-full absolute top-0 flex justify-between items-center'>
      <h3 className=' text-white text-4xl md:text-2xl font-bold italic'>Nimboon</h3>
      <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='bg-white font-bold px-4 py-2 text-md md:text-xs rounded-3xl'>Register Now</motion.button>
    </div>
  )
}

export default header
