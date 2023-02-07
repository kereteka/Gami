// import React from "react";

// const HeroText = () => {
//   return (
//     <div className="w-[528px]">
//       <h1 className="font-semibold text-7xl text-blue-gray-800 leading-none">
//         Lorem Ipsum Dolor Sit Amet
//       </h1>
//       <p className="text-xl font-normal text-blue-gray-400 leading-7 pt-10">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
//         sapien, malesuada sollicitudin mi vel, tristique eleifend metus.{" "}
//       </p>
//     </div>
//   );
// };

// export default HeroText;
import React from "react";

interface HeroTextProps {
  style: string;
  text: {
    title: string;
    description: string;
  };
}

const HeroText: React.FC<HeroTextProps> = ({ style, text }) => {
  return (
    <div className={`${style}`}>
      <h1 className="font-semibold text-7xl text-blue-gray-800 leading-none">
        {text.title}
      </h1>
      <p className="text-xl font-normal text-blue-gray-400 leading-7 pt-10">
        {text.description}
      </p>
    </div>
  );
};

export default HeroText;
