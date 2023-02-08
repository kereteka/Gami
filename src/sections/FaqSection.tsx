import React from "react";
import Accordion from "../components/Accordion";
import HeroText from "../components/HeroText";
import faqData from "../components/faq.data";

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
        <div className="w-[846px] h-[380px] rounded-lg">
          {faqData.map((data, i) => (
            <Accordion key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
