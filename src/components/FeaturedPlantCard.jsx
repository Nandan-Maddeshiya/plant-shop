import React from 'react'
import cart from '../assets/icons/Cart.png'
import Button from './Button'

function FeaturedPlantCard({ img,
  title,
  subtitle,
  price,
  reverse = false, }) {
  return (
    <>
      <div className={`bg-white/10 backdrop-blur-sm rounded-4xl border border-white/10  mx-auto shadow-xl w-full max-w-sm md:max-w-4xl lg:max-w-none`}>
        <div className={` flex flex-col gap-1 justify-evenly
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
        `}>
          <div className="w-full h-40 md:h-44 flex items-center justify-center">
            <img
              src={img}
              alt={title}
              className="object-contain mx-auto rounded-lg drop-shadow-lg  w-100 sm:w-120 md:w-200 lg:w-120 h-auto"
            />
          </div>
          <div className="sm:p-10 p-5 max-w-lg font-inter mt-20 md:mt-0">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl">
                {title}
              </h3>
              <p className='text-sm sm:text-base mt-3'>{subtitle}</p>

              <h3 className='font-semibold text-xl sm:text-2xl mt-3'>{price}</h3>
            </div>

            <div className='flex items-center gap-2 sm:gap-4 mt-4'>
              <Button variant='outline'>Explore</Button>
               <Button variant='cart'>
                <img src={cart} alt="Shopping Cart Icon" className='w-5 h-5 object-contain' />
                </Button> 
            </div>

          </div>

        </div>
      </div>



    </>
  )
}

export default FeaturedPlantCard
