import React from 'react'
import Header from './header'
import { motion } from "framer-motion"

function hero() {
  return (
    <div className='hero h-svh w-full flex items-center justify-center'>
      <Header motion= {motion} />
      <div className='mt-20 w-4/6 xl:w- md:w-11/12 flex flex-col items-center text-center gap-3'>
        <h1 className='text-white text-5xl md:text-3xl font-extrabold '>Win Big, Give Back, and Connect with Others</h1>
        <p className='text-white md:text-xs w-9/12'>Join Nimboon, the social giveaway platform where you can win cash and coins, host your own giveaways, and connect with like-minded individuals</p>
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='bg-white mt-5 py-2 px-5 text-sm text-black rounded-3xl font-bold'>Join Now</motion.button>
      </div>
    </div>
  )
}

export default hero
