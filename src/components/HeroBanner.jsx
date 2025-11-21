import React from 'react'
import polygon2 from '../assets/icons/Polygon2.png'
import rightArrow from '../assets/icons/Right-Arrow1.png'
import ronnieHamill from '../assets/img/Ronnie-Hamill.png'
import aglaonemaPlant from "../assets/img/Aglaonema-plant.png";
import group7 from '../assets/icons/Group7.png'
import TrendingPlants from '../sections/TrendingPlants'
import TestimonialCard from './TestimonialCard'
import Button from './Button'





function HeroBanner() {
  return (
    <>
      <div className='mx-auto px-8 py-5 '>
        <div className='relative flex items-center min-h-screen justify-center '>

          <div className="grid grid-cols-1 lg:grid-cols-12  md:grid-cols-12 items-center w-full gap-20 md:gap-10 mt-30 md:mt-0">

            <div className="lg:col-span-7 md:col-span-7">
              <div className='max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto'>

                <div className='max-w-lg font-inter'>
                  <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight'>
                    Earth’s Exhale
                  </h1>
                  <p className='max-w-xl  text-sm sm:text-base opacity-75'>
                    "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
                  </p>
                </div>

                <div className="flex items-center text-sm md:text-base lg:text-xl gap-4 mt-6">
                  <Button variant="outline">Buy Now</Button>
                  <a href='#' className="flex items-center justify-center rounded-full border-2 border-white w-10 h-10 md:w-13 md:h-13 p-1">
                    <img src={polygon2} alt="Play Icon" className='h-5 w-5' />
                  </a>
                  <button className="font-indie-flower flex items-center font-normal">
                    Live Demo...
                  </button>
                </div>

                <TestimonialCard
                  key={`1`}
                  avatar={ronnieHamill}
                  name={'Ronnie Harrell'}
                  starImg={group7}
                  text={"I can't believe how beautiful it feels with the plants. It's totally changed the vibe of my workspace!"}
                  className='mt-10'
                  textClass='mt-2'
                />



              </div>
            </div>

            <div className="lg:col-span-5 md:col-span-5">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 max-w-sm mx-auto shadow-xl font-inter">
                <div className='-mt-20'>
                  <img
                    src={aglaonemaPlant}
                    alt="Aglaonema Plant"
                    className="object-contain mx-auto rounded-lg drop-shadow-lg"
                  />
                </div>

                <div className="px-5">
                  <p className="opacity-70 text-sm sm:text-base">
                    Indoor Plant
                  </p>
                  <div className='flex items-center justify-between mt-1 '>
                    <h3 className="text-lg sm:text-xl lg:text-2xl">
                      Aglaonema Plant
                    </h3>
                    <img src={rightArrow} alt="" className='size-5 ' />
                  </div>
                  <Button variant='outline' className='mt-3'>Buy Now</Button>
                </div>

                <div className="mt-5 flex justify-center gap-2">
                  <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                  <span className="w-2 h-2 bg-white/30 rounded-full"></span>
                  <span className="w-2 h-2 bg-white/20 rounded-full"></span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>



    </>
  )
}

export default HeroBanner