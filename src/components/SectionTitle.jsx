import React from 'react';

function SectionTitle({ heading }) {
  return (
    <div className='flex items-center justify-center p-4'>
      <h2
        className="section-title-border 
                  font-inter text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold
                      md:mt-0 text-white/70">
        {heading || "Default Title"}
      </h2>
    </div>
  );
}

export default SectionTitle;