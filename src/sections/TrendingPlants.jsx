import React from "react";
import SectionTitle from "../components/SectionTitle";
import FeaturedPlantCard from "../components/FeaturedPlantCard";
import plantainLilies from "../assets/img/Plantain-Lilies.png";
import zebraHoworthia from "../assets/img/Zebra-Howorthia.png";

export default function TrendingPlants() {
  return (
    <section className="">
      <div className="max-w-7xl mt-20 md:mt-0 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          heading="Our Trendy plants"
        />

        <div className="flex flex-col gap-30 mt-30">

          <FeaturedPlantCard
            img={plantainLilies}
            title="For Your Desks Decorations"
            subtitle="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
            price="Rs. 599/-"
            reverse={false}
          />

          <FeaturedPlantCard
            img={zebraHoworthia}
            title="For Your Desks Decorations"
            subtitle="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming"
            price="Rs. 399/-"
            reverse={true}
          />


        </div>

      </div>
    </section>
  );
}
