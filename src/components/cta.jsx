import React from 'react'
import { motion } from "framer-motion"

function cta() {
  return (
    <div className=' overlay bg-top bg-cover text-white py-60 flex flex-col gap-5 items-center'>
      <h1 className='font-bold text-4xl text-center'>Ready to Join the Fun?</h1>
      <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='text-black bg-white px-4 py-2 font-semibold rounded-3xl'>Sign Up Now</motion.button>
    </div>
  )
}

export default cta
