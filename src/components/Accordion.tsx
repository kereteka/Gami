import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  data: { title: string; content: string };
  order: number;
  length: number;
}

const Accordion: React.FC<AccordionProps> = ({
  data,
  order,
  length,
}: AccordionProps) => {
  const { title, content } = data;
  const [isActive, setIsActive] = useState(false);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const contentEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWrapperHeight(contentEl.current?.scrollHeight || 0);
  }, [contentEl]);

  const newRounded =
    order === 0 ? "rounded-t-lg" : order + 1 === length ? "rounded-b-lg" : "";
  const newMargin = order + 1 === length ? "" : "mb-0.5";
  return (
    <div className={`w-full h-auto min-h-[60px] flex border-white  `}>
      <div
        className={`flex flex-col cursor-pointer justify-center items-center  w-full h-auto px-4  bg-gray-200 ${newMargin} ${newRounded}`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className="flex w-full min-h-[60px] px-4 justify-between items-center ">
          <p className="">{title}</p>
          <i className="">{isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}</i>
        </div>
        <div
          ref={contentEl}
          className={` w-[846px] h-0  bg-gray-50 overflow-hidden transition-[height] ease-in-out duration-200 ${
            isActive ? `h-[${wrapperHeight}px]` : " h-0 "
          }`}
        >
          <p className="w-[90%] p-4 ml-2 text-blue-gray-400 ">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
