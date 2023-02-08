import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  data: { title: string; content: string };
}

const Accordion: React.FC<AccordionProps> = ({ data }: AccordionProps) => {
  const { title, content } = data;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full h-[60px] bg-gray-200 mt-1 rounded-lg ">
      <div className="flex" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      {isActive && <div className="h-auto">{content}</div>}
    </div>
  );
};

export default Accordion;
