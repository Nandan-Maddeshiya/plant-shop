import React from "react";
import SectionTitle from "../components/SectionTitle";
import aglaonemaPlant from "../assets/img/Aglaonema-plant.png";
import rightArrow from "../assets/icons/Right-Arrow1.png";
import Button from "../components/Button";

export default function OxygenPlants() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle heading="Our Best o2" />

        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-3xl px-6 md:px-10 flex flex-col md:flex-row items-center gap-10 border border-white/10 max-w-sm md:max-w-4xl lg:max-w-none mx-auto">

          <div className="w-full h-auto flex items-center justify-center -mt-16 z-10"> 
            <img
              src={aglaonemaPlant}
              alt="aglaonemaPlant"
              className="object-contain mx-auto w-100 sm:w-120 md:w-200 lg:w-120 h-auto " 
            />
          </div>


          <div className="text-white font-inter space-y-4 pt-4 pb-6 md:py-10">

            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              We Have Small And Best O2 Plants Collections
            </h2>

            <div className="opacity-80 text-sm md:text-base leading-relaxed space-y-4">
              <p >
                Oxygen-producing plants, often referred to as “O2 plants”, are those that release
                oxygen into the atmosphere through the process of photosynthesis.
              </p>
              <p>
                Many plants can help filter out pollutants and toxins from the air, such as
                formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and
                healthier to breathe.
              </p>
            </div>


            <div className="flex items-center justify-between mt-6">
              <Button variant="outline">Explore</Button>
              <div className="flex items-center gap-4 opacity-80">
                <img src={rightArrow} alt="Next" className="w-5 h-5 rotate-180" />
                <span>01/04</span>
                <img src={rightArrow} alt="Next" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          <span className="w-3 h-1 bg-white/50 rounded-full"></span>
          <span className="w-3 h-1 bg-white/30 rounded-full"></span>
          <span className="w-3 h-1 bg-white/20 rounded-full"></span>
        </div>

      </div>
    </section>
  );
}