import React from "react";


function TestimonialCard({ avatar, name, starImg, text , className="", textClass=""}) {

  return (
    <article className={`bg-white/6 backdrop-blur-sm rounded-2xl border border-white/10 p-5 md:p-6 max-w-sm font-inter text-white ${className}`}>
      <div className="flex items-start gap-10">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-lg sm:text-xl">{name}</h4>
          <div className="mt-1">
            <img src={starImg} alt="" className="h-3"/>
          </div>
        </div>
      </div>
      <p className={`text-white/80 text-sm sm:text-lg ${textClass || "mt-8"}`}>
        {text}
      </p>
    </article>
  );
}

export default TestimonialCard;