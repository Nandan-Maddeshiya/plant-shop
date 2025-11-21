import React, { useState } from 'react';
import logo from '../assets/icons/logo1.png';
import polygon from '../assets/icons/Polygon1.png';
import searchSymbol from '../assets/icons/SearchSymbol.png';
import cart from '../assets/icons/Cart.png';
import line1 from '../assets/icons/Line1.png'
import line2 from '../assets/icons/Line2.png'

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='absolute  top-0 left-0 w-full z-20 text-white '>
      <div className='container mx-auto flex items-center justify-between px-4 py-3'>

        <div className='flex items-center gap-2 sm:gap-3'>
          <img src={logo} alt="FloraVision logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
          <span className="font-inter text-l sm:text-2xl font-bold">FloraVision.</span>
        </div>

        <nav className='hidden lg:flex items-center gap-8 text-2xl font-indie-flower'>
          <a href="#home" className="">Home</a>
          <a href="#plants" className="flex items-center gap-2">
            Plants Type
            <img src={polygon} alt="" className="w-3 h-3 object-contain" />
          </a>
          <a href="#more" className="">More</a>
          <a href="#contact" className="">Contact</a>
        </nav>

        <div className='flex items-center gap-2 sm:gap-3' >
          <button type="button" className="p-1  hover:opacity-80 transition-opacity">
            <img src={searchSymbol} alt="Search" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
          </button>
          <button type="button" className="p-1 hover:opacity-80 transition-opacity">
            <img src={cart} alt="Cart" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
          </button>

          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-controls="menu-panel"
            aria-expanded={open ? "true" : "false"}
          >

            <div className="flex flex-col items-end gap-1">
              <img src={line1} alt="Menu line 1" className="w-6 object-contain" />
              <img src={line2} alt="Menu line 2" className="w-4 self-end object-contain" />
            </div>
          </button>
        </div>

      </div>

      {open && (
        <div
          id="menu-panel"
          className="lg:hidden top-10 w-full z-10 inset-0 bg-black/45 flex flex-col items-end"
        >
          <div className="px-6 py-4 space-y-4">
            <a href="#home" className="block text-white text-lg p-2 " onClick={() => setOpen(false)}>Home</a>
            <a href="#plants" className="block text-white text-lg p-2 " onClick={() => setOpen(false)}>
              Plants Type <img src={polygon} alt="" className="inline w-3 h-3 ml-2" />
            </a>
            <a href="#more" className="block text-white text-lg p-2 " onClick={() => setOpen(false)}>More</a>
            <a href="#contact" className="block text-white text-lg p-2 " onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
     
    </header>
  );
}

export default Navbar;