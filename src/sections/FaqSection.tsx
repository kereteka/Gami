import React, { useState } from "react";
import Accordion from "../components/Accordion";
import HeroText from "../components/HeroText";
import faqData from "../components/faq.data";

const FaqSection: React.FC = () => {
  const [clicked, setClicked] = useState(-1);
  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
  };
  return (
    <div className="w-full h-full px-2 sm:px-0 flex flex-col items-center mt-24">
      <div className="w-full md:w-[846px] h-full ">
        <HeroText
          className={"text-center"}
          text={{
            title: "Lorem Ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus.",
          }}
        />
        <ul className="w-[100%] md:w-[846px] h-auto bg-white flex flex-col border border-white rounded-lg mb-12 mt-24">
          {faqData?.map((data, i) => (
            <Accordion
              onToggle={() => handleToggle(i)}
              key={i}
              data={data}
              order={i}
              length={faqData.length}
              active={clicked === i}
            />
            // <AccordionItem faq={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaqSection;
