import React from "react";
import cardData from "./card.data";
import { ReactComponent as Corein } from "../../src/assets/Corein.svg";
import { Link } from "react-router-dom";
// import GS from "../../public/GALATASARAY_3D-F3.png";

interface CardData {
  header: string;
  text: string;
  link: string;
}

const FlipCardBase: React.FC = () => {
  return (
    <>
      {cardData.map(({ header, text, link }: CardData, i) => (
        <div className="box-border flex flex-col items-center text-center w-[413px] h-[250px] bg-cool-gray-100 border-solid border-1 border-white rounded-lg pt-5 gap-4">
          <div className="w-[70px] h-[70px] flex justify-center items-center ">
            <img className="absolute " src={`${header}.svg`} alt="" />
          </div>
          <h3 className="text-2xl leading-8 font-semibold text-blue-gray-800">
            {header}
          </h3>
          <p className="text-base leading-6 font-normal text-blue-gray-400">
            {text}
          </p>
          <Link to={link}>
            <p className="text-sm leading-5 font-medium underline">visit</p>
          </Link>
        </div>
      ))}
      <div className="box-border flex flex-col items-center justify-center text-center w-[413px] h-[250px] bg-cool-gray-100 border-solid border-1 border-white rounded-lg">
        <img className="absolute" src={`gs.svg`} alt="" />
        <img
          className="w-[180px] h-[210px]"
          src={`GALATASARAY_3D-F3.png`}
          alt=""
        />
      </div>
    </>
  );
};

export default FlipCardBase;
