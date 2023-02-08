import React from "react";
import Animation from "../Animation";
import Button from "../Button";
import HeroText from "../HeroText";

const Opener = () => {
  return (
    <div className="w-full h-screen sm:flex px-2 sm:px-12 pt-8 items-center">
      <div className="basis-1/2 mt-12 h-full sm:p-12 ">
        <HeroText
          style={""}
          text={{
            title: "Lorem Ipsum Dolor Sit Amet",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus. ",
          }}
        />
        <div className="flex mt-12 gap-8">
          <Button
            text={"Explore GAMI"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            variant="lightShadow"
          />
          <Button
            text={"Buy GAMI"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            variant="lightShadow"
          />
        </div>
      </div>
      <div className="basis-1/2 h-full">
        <Animation />
      </div>
    </div>
  );
};

export default Opener;
