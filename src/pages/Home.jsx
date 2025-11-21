import React from 'react'
import TopSellingPlants from '../sections/TopSellingPlants'
import CustomerReviews from '../sections/CustomerReviews'
import OxygenPlants from '../sections/OxygenPlants'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroSection from '../sections/HeroSection'

function Home() {
  return (
    <div className=''>
      <Navbar/>
      <HeroSection/>
      <div className='bg-[#1a2217] '>
      <TopSellingPlants/>
      <CustomerReviews/>
      <OxygenPlants/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
