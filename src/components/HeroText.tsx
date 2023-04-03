import React from "react";

export interface HeroTextProps {
  className: string;
  text: {
    title: string;
    description: string;
  };
}

const HeroText: React.FC<HeroTextProps> = ({ className, text }) => {
  return (
    <div className={className}>
      <h1 className="font-semibold text-4xl sm:text-7xl text-blue-gray-800 leading-10 sm:leading-none">
        {text.title}
      </h1>
      <p className="text-xl font-normal text-blue-gray-400 leading-7 pt-10">
        {text.description}
      </p>
    </div>
  );
};

export default HeroText;
