import React, { useRef } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  data: { title: string; content: string };
  order: number;
  length: number;
  onToggle: () => void;
  active: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  data,
  order,
  length,
  onToggle,
  active,
}: AccordionProps) => {
  const { title, content } = data;
  const contentEl = useRef<HTMLDivElement>(null);

  const newHeight = active ? contentEl.current?.scrollHeight : "0px";
  const newRounded =
    order === 0 ? "rounded-t-lg" : order + 1 === length ? "rounded-b-lg" : "";
  const newMargin = order + 1 === length ? "" : "mb-0.5";
  return (
    <div className={`w-full h-auto min-h-[60px] flex border-white  `}>
      <div
        className={`flex flex-col cursor-pointer justify-center items-center  w-full h-auto sm:px-4  bg-gray-200 ${newMargin} ${newRounded} ${
          active ? "active" : ""
        }`}
        onClick={() => {
          onToggle();
        }}
      >
        <div className="flex w-full min-h-[60px] px-4 justify-between items-center ">
          <p className="">{title}</p>
          <i className="">{active ? <IoIosArrowUp /> : <IoIosArrowDown />}</i>
        </div>
        <div
          ref={contentEl}
          className={` w-full sm:w-[846px] bg-gray-50 overflow-hidden transition-[height] ease-in-out duration-200 `}
          style={{ height: newHeight }}
        >
          <p className="w-[90%] p-4 ml-2 text-blue-gray-400 ">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
