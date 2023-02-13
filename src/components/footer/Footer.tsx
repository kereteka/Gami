import React from "react";
import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col sm:mt-24 p-4 md:px-16">
      <div className="flex justify-between">
        <Logo />
        <Menu />
        <div className="flex gap-2 text-2xl ">
          <AiFillTwitterCircle />
          <AiFillTwitterCircle />
          <AiFillTwitterCircle />
          <AiFillTwitterCircle />
        </div>
      </div>
      <div className="mx-auto text-sm">
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
