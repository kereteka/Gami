import React from "react";
import Opener from "../../components/opener/Opener";
import PhotoCard from "../../components/PhotoCard";
import ClientReviewSection from "../../sections/ClientReviewSection";
import FaqSection from "../../sections/FaqSection";
import PhotoSection from "../../sections/PhotoSection";
import WhatWeDoSection from "../../sections/WhatWeDoSection";

const Home = () => {
  return (
    <div className="">
      <Opener />
      <PhotoSection />
      <WhatWeDoSection />
      <ClientReviewSection />
      <FaqSection />
    </div>
  );
};

export default Home;
