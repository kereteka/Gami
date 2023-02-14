import React from "react";
import "react-multi-carousel/lib/styles.css";
import data from "./review.data";
import Reviews from "./Reviews";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CarouselElement: React.FC = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider") as HTMLElement | null;
    var reviews = document.getElementById("reviews") as HTMLElement | null;
    var slideAmount = reviews?.offsetWidth;
    if (slider && slideAmount) {
      slider.scrollLeft = slider.scrollLeft - slideAmount;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider") as HTMLElement | null;
    var reviews = document.getElementById("reviews") as HTMLElement | null;
    var slideAmount = reviews?.offsetWidth;
    if (slider && slideAmount) {
      slider.scrollLeft = slider.scrollLeft + slideAmount;
    }
  };

  return (
    <>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-gray-200 -left-16 mt-12 rounded-full border-solid border border-white hidden sm:flex sm:absolute opacity-50 hover:opacity-100 cursor-pointer z-10 "
          size={50}
        />
        <div
          id={"slider"}
          className="w-full h-full flex overflow-x-scroll scroll-smooth scrollbar-hide relative"
        >
          {data.map((data, id) => (
            <div key={id} id="reviews" className="basis-1/2 px-2">
              <Reviews key={id} data={data} />
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-gray-200 -right-16 mt-12 rounded-full border-solid border border-white hidden sm:flex sm:absolute opacity-50 hover:opacity-100 cursor-pointer z-10 "
          size={50}
        />
      </div>
    </>
  );
};

export default CarouselElement;
