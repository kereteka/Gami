import React from "react";
import HeroText from "../HeroText";
import Menu from "./Menu";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Button from "../Button";

const Header = () => {
  return (
    <div className="flex w-full h-16 justify-between items-center pt-10 p-4 sm:px-16 sm:ml-7">
      <Logo />
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
  );
};

export default Header;
