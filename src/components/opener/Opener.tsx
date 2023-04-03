import React from "react";
import Animation from "../Animation";
import Button from "../Button";
import HeroText from "../HeroText";

type OpenerProps = {
  exploreGamiOnClick: () => void;
  buyGamiOnClick: () => void;
};

const Opener: React.FC<OpenerProps> = ({
  exploreGamiOnClick,
  buyGamiOnClick,
}: OpenerProps): JSX.Element => {
  return (
    <div className="w-full h-full sm:flex px-2 md:px-12 pt-8 items-center">
      <div
        className="basis-1/2 mt-12 h-full md:p-12 "
        style={{ backgroundImage: "url(illustration.png)" }}
      >
        <HeroText
          className={""}
          text={{
            title: "Lorem Ipsum Dolor Sit Amet",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus. ",
          }}
        />
        <div className="flex mt-12 gap-8">
          <Button
            text={"Explore GAMI"}
            onClick={exploreGamiOnClick}
            variant="lightShadow"
          />
          <Button
            text={"Buy GAMI"}
            onClick={buyGamiOnClick}
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
