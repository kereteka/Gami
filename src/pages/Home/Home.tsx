import React from "react";
import Opener from "../../components/opener/Opener";
import ClientReviewSection from "../../sections/ClientReviewSection";
import FaqSection from "../../sections/FaqSection";
import PhotoSection from "../../sections/PhotoSection";
import WhatWeDoSection from "../../sections/WhatWeDoSection";

interface HomeProps {
  exploreGamiOnClick: () => void;
  buyGamiOnClick: () => void;
}

const Home: React.FC<HomeProps> = ({ exploreGamiOnClick, buyGamiOnClick }) => {
  return (
    <div className="">
      <Opener
        exploreGamiOnClick={exploreGamiOnClick}
        buyGamiOnClick={buyGamiOnClick}
      />
      <PhotoSection />
      <WhatWeDoSection />
      <ClientReviewSection />
      <FaqSection />
    </div>
  );
};

export default Home;
