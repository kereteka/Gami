import React from "react";
import FlipCardBase from "../components/FlipCardBase";
import HeroText from "../components/HeroText";

const text = {
  title: "Lorem Ipsum Dolor Sit Amet",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus. ",
};
const WhatWeDoSection = () => {
  return (
    <div className="bg-gray-200 w-full h-full px-2 sm:px-0 mt-24 ">
      <div className="w-[50%] justify-center mx-auto pt-24">
        <HeroText style="text-center" text={text} />
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-24">
        <FlipCardBase />
      </div>
    </div>
  );
};

export default WhatWeDoSection;
