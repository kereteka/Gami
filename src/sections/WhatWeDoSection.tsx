import React from "react";
import FlipCardBase from "../components/FlipCardBase";
import HeroText from "../components/HeroText";

interface TextData {
  title: string;
  description: string;
}

const text: TextData = {
  title: "What We Do",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus. ",
};

const WhatWeDoSection: React.FC = () => {
  return (
    <div className="bg-gray-200 w-full h-full px-2 sm:px-0 mt-24 pb-24">
      <div className="w-[50%] justify-center mx-auto pt-24">
        <HeroText className="text-center" text={text} />
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-24 px-10">
        <FlipCardBase />
      </div>
    </div>
  );
};

export default WhatWeDoSection;
