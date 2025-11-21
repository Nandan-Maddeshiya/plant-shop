import React from 'react'
import HeroBanner from '../components/HeroBanner'
import heroBanner from '../assets/img/HeroBanner.jpg'
import TrendingPlants from './TrendingPlants'


function HeroSection() {
  return (

    <section
      className="relative w-full bg-no-repeat min-h-screen text-white"
    >
      <img
        src={heroBanner}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full 
                         object-cover z-0"
      />
      <HeroBanner />
      <TrendingPlants />

    </section>


  )
}

export default HeroSection
