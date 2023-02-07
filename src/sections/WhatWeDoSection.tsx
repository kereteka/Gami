import React from "react";
import FlipCardBase from "../components/FlipCardBase";
import HeroText from "../components/HeroText";

const text = {
  title: "Lorem Ipsum Dolor Sit Amet",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
const WhatWeDoSection = () => {
  return (
    <div className="bg-gray-200 w-full h-full container flex flex-wrap">
      <div className="w-full flex justify-center">
        <HeroText style="text-center" text={text} />
      </div>
      <FlipCardBase />
    </div>
  );
};

export default WhatWeDoSection;
