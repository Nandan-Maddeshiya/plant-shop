import React from "react";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";

import a1 from "../assets/img/Shelly-Russel.png";
import a2 from "../assets/img/Lula-Rolfson.jpg";
import a3 from "../assets/img/Carol-Huels.png";
import star from '../assets/icons/Group7.png'

function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      avatar: a1,
      name: "Shelby Russell",
      rating: star,
      text: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },
    {
      id: 2,
      avatar: a2,
      name: "Luke Rolfson",
      rating: star,
      text: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
      id: 3,
      avatar: a3,
      name: "Carol Huels",
      rating: star,
      text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle  heading="Customer Review" />
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {reviews.map(r => (
            <TestimonialCard
              key={r.id}
              avatar={r.avatar}
              name={r.name}
              starImg={r.rating}
              text={r.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;