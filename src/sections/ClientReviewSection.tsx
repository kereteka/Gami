import React from "react";
import CarouselElement from "../components/CarouselElement";
import HeroText from "../components/HeroText";

const ClientReviewSection = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-24 px-2 sm:px-0">
      <div className="w-full sm:w-[1066px] h-full flex flex-col justify-center items-center mb-24 ">
        <HeroText
          style={"text-center sm:w-[630px]"}
          text={{
            title: "Lorem Ipsum Dolor Sit Amet",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus. ",
          }}
        />
        <div className="w-[857px] h-[370px]">
          <CarouselElement />
        </div>
      </div>
    </div>
  );
};

export default ClientReviewSection;
