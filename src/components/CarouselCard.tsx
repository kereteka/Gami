import React from "react";
import CarouselElement from "./CarouselElement";
import Reviews from "./Reviews";

interface CarouselCardProps {
  data: {
    name: string;
    img: string;
    comment: string;
    star: number;
  };
}
const CarouselCard: React.FC<CarouselCardProps> = (data, i) => {
  console.log(data, "dataaaa");
  return <div>{/* <Reviews key={i} data={data} /> */}</div>;
};

export default CarouselCard;
