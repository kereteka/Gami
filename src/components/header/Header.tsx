import React from "react";
import Button from "../Button";
import HeroText from "../HeroText";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="absolute w-[1440px] h-[62px] top-[10px] left-0">
      <Menu />
      <Button
        text="Buy GAMI"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        variant="dark"
        className="text-white"
      />
      <HeroText />
    </div>
  );
};

export default Header;
