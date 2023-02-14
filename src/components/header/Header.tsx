import React from "react";
import Menu from "./Menu";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Button from "../Button";

type HeaderProps = {
  onClick: () => void;
};

const Header: React.FC<HeaderProps> = ({
  onClick,
}: HeaderProps): JSX.Element => {
  return (
    <div className="flex h-[70px] w-[100%] justify-between items-center px-4 lg:px-16  ">
      <div className="absolute w-[100%] border-b left-0 mt-[78px]"></div>
      <div>
        <Logo />
      </div>
      <Menu />
      <Button
        text="Buy GAMI"
        onClick={onClick}
        variant="dark"
        className="text-white w-[132px] h-[52px]"
      />
    </div>
  );
};

export default Header;
