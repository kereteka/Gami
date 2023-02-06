import React from "react";
import Lottie from "react-lottie";
import animation from "../tarama-f12.json";

interface Props {}

const Animation: React.FC<Props> = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={400} width={400} />
    </>
  );
};

export default Animation;
