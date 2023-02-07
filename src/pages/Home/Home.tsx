import React from "react";
import Opener from "../../components/opener/Opener";
import PhotoCard from "../../components/PhotoCard";
import PhotoSection from "../../sections/PhotoSection";
import WhatWeDoSection from "../../sections/WhatWeDoSection";

const Home = () => {
  return (
    <div className="">
      <Opener />
      <PhotoSection />
      <WhatWeDoSection />
    </div>
  );
};

export default Home;
