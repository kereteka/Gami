import React, { useState } from "react";
import cardData from "./card.data";
import { Link } from "react-router-dom";

interface CardDataProps {
  header: string;
  text: string;
  link: string;
}

const FlipCardBase: React.FC = () => {
  return (
    <>
      {cardData.map(({ header, text, link }: CardDataProps, i) => (
        <div key={i} className="group [perspective:1000px] w-auto h-auto  ">
          <div className="relative transition-all duration-500  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className=" absolute [transform:rotateY(180deg)] [backface-visibility:hidden] text-white bg-cool-gray-800 box-border flex flex-col items-center text-center w-[413px] h-[250px] border-solid border-1 border-white rounded-lg pt-5 gap-4">
              <div className="w-[70px] h-[70px] flex justify-center items-center ">
                <img className="absolute  " src={`${header}W.svg`} alt="" />
              </div>
              <h3 className="text-2xl leading-8 font-semibold text-white">
                {header}
              </h3>
              <p className="text-base leading-6 font-normal text-white">
                {text}
              </p>
              <Link to={link}>
                <p className="text-sm leading-5 font-medium underline">visit</p>
              </Link>
            </div>
            <div className=" box-border flex flex-col items-center text-center w-[413px] h-[250px] bg-cool-gray-100 border-solid border-1 border-white rounded-lg pt-5 gap-4 [backface-visibility:hidden]">
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
          </div>
        </div>
      ))}

      <div className="group [perspective:1000px] w-auto h-auto  ">
        <div className="relative transition-all duration-500  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute [transform:rotateY(180deg)] [backface-visibility:hidden] box-border flex flex-col items-center justify-center text-center w-[413px] h-[250px] bg-cool-gray-800 border-solid border-1 border-white rounded-lg">
            <img className="absolute" src={`gsW.svg`} alt="" />
            <img
              className="w-[180px] h-[210px]"
              src={`GALATASARAY_3D-F3 1.png`}
              alt=""
            />
          </div>
          <div className="box-border flex flex-col items-center justify-center text-center w-[413px] h-[250px] bg-cool-gray-100 border-solid border-1 border-white rounded-lg [backface-visibility:hidden]">
            <img className="absolute" src={`gs.svg`} alt="" />
            <img
              className="w-[180px] h-[210px]"
              src={`GALATASARAY_3D-F3.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCardBase;
