import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./review.data";
// import Star from "../assets/Star.svg";
// import CarouselCard from "./CarouselCard";
import Reviews from "./Reviews";

// interface CarouselDataProps {
//   data: { name: string; img: string; comment: string; star: number };
// }

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 900 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 900, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const customLeftArrow = (
  <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-red-900">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6  text-white w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  </div>
);

const customRightArrow = (
  <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-red-900  ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 text-white w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </div>
);

const CarouselElement: React.FC = () => {
  return (
    <>
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4"
      >
        {data
          ?.slice(0)
          .reverse()
          .map((data, i) => (
            <Reviews key={i} data={data} />
          ))}
      </Carousel>
    </>
  );
};

export default CarouselElement;
