import React from "react";
import Accordion from "../components/Accordion";
import HeroText from "../components/HeroText";
import faqData from "../components/faq.data";
import AccordionItem from "../components/opener/AccordionItem";

const FaqSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col  items-center">
      <div className="w-[846px] h-full ">
        <HeroText
          style={"text-center"}
          text={{
            title: "Lorem Ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci sapien, malesuada sollicitudin mi vel, tristique eleifend metus.",
          }}
        />
        <ul className="w-[846px] h-auto bg-white flex flex-col border border-white rounded-lg mb-12">
          {faqData?.map((data, i) => (
            <Accordion key={i} data={data} order={i} length={faqData.length} />
            // <AccordionItem faq={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaqSection;
