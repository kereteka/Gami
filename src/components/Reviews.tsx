import React from "react";
// import data from "./review.data";
import Star from "../assets/Star.svg";

interface ReviewsProps {
  data: { name: string; img: string; comment: string; star: number };
}

const Reviews: React.FC<ReviewsProps> = ({ data }: ReviewsProps) => {
  const { name, img, comment, star } = data;
  return (
    <>
      <div className="flex flex-col items-center w-[413px] h-[350px] text-center bg-gray-200 mt-16 rounded-lg border-2 border-white mx-auto">
        <div className="flex my-6">
          {new Array(star).fill(null).map(() => (
            <img src={Star} alt="img" />
          ))}
        </div>
        <p className="text-2xl leading-8 font-semibold w-[344px]">{comment}</p>
        <img src={img} alt="" className="mt-4" />
        <p className="mt-1 text-base leading-6 font-semibold">{name}</p>
      </div>
    </>
  );
};

export default Reviews;
