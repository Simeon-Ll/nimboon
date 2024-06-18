import React from 'react'
import Features from './components/features'
import Hero from './components/hero'
import Footer from './components/footer'
import CTA from './components/cta'
import ImageSlider from './components/image-slider'



function App() {
  return (
    <div>
      <Hero />
      <ImageSlider />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
