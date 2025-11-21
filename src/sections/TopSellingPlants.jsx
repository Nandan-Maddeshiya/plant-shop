import React from "react";
import SectionTitle from "../components/SectionTitle";
import PlantCard from "../components/PlantCard";

import aglaonemaPlant from "../assets/img/Aglaonema-plant.png";
import plantainLilies from "../assets/img/Plantain-Lilies.png";
import Cactus from "../assets/img/Cactus.png";
import SwisscheesePlant from "../assets/img/Swiss-cheese-Plant.png";
import SansevieriaPlant from "../assets/img/Sansevieria-plant.png";
import agavePlant from "../assets/img/Agave-plant.png";

export default function TopSellingPlants() {
  const Plants = [
    { id: 1, img: aglaonemaPlant, title: "Aglaonema plant", desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care", price: "Rs. 300/-" },

    { id: 2, img: plantainLilies, title: "Plantain Lilies", desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,", price: "Rs. 380/-" },

    { id: 3, img: Cactus, title: "Cactus", desc: "It is known for their ability to thrive in arid environments", price: "Rs. 259/-" },

    { id: 4, img: SwisscheesePlant, title: "Swiss cheese Plant", desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves", price: "Rs. 400/-" },

    { id: 5, img: SansevieriaPlant, title: "Sansevieria plant", desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.", price: "Rs. 450/-" },

    { id: 6, img: agavePlant, title: "Agave plant", desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.", price: "Rs. 359/-" },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-8 py-5 ">
        <SectionTitle heading="Top Selling Plants" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 ">
          {Plants.map((p) => (
            <PlantCard
              key={p.id}
              img={p.img}
              title={p.title}
              desc={p.desc}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}