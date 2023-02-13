import React from "react";
import HeroText from "../HeroText";
import Menu from "./Menu";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Button from "../Button";

const Header = () => {
  return (
    // <div className="w-full h-[75px]  pt-4">
    <div className="flex h-[70px] w-[100%] justify-between items-center px-4 lg:px-16  ">
      <div className="absolute w-[100%] border-b-2 left-0 mt-[78px]"></div>
      <div>
        <Logo />
      </div>
      <Menu />
      <Button
        text="Buy GAMI"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        variant="dark"
        className="text-white w-[132px] h-[52px]"
      />
    </div>
    // </div>
  );
};

export default Header;
