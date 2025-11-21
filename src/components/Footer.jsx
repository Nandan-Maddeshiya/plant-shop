import React from "react";
import logo from "../assets/icons/logo1.png"; 
import Button from "./Button";

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto  pt-12 pb-8 text-white font-inter">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 justify-between">

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <img src={logo} alt="FloraVision" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">FloraVision.</span>
            </div>

            <p className="text-white/75 sm:max-w-sm">
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
            </p>

            <div className="flex items-center font-inter font-bold gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="">
                FB
              </a>
              <a href="#" aria-label="Twitter" className="">
                TW
              </a>
              <a href="#" aria-label="LinkedIn" className="">
                LI
              </a>
            </div>
          </div>

          <div className="md:text-right  md:mx-auto">
            <h4 className="text-white font-semibold mb-4 ">Quick Link's</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="" >Home</a></li>
              <li><a href="#" className="" >Type's Of plant's</a></li>
              <li><a href="#" className="" >Contact</a></li>
              <li><a href="#" className="" >Privacy</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="text-white font-semibold mb-4">For Every Update.</h4>
            <form className="flex gap-2 max-w-sm">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 rounded-md bg-white/6 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                required
              />
             <Button variant="solid">SUBSCRIBE</Button>
                
             
            </form>

            <p className="text-white/60 text-sm mt-4">
              FloraVision © all right reserve
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;