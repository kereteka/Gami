import React from "react";
import HeroText from "../components/HeroText";
import PhotoCard from "../components/PhotoCard";

const PhotoSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-2 sm:px-0 sm:mt-36">
      <HeroText
        style={"text-center sm:w-[40%]"}
        text={{
          title: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus.",
        }}
      />
      <PhotoCard />
    </div>
  );
};

export default PhotoSection;
