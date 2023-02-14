import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="w-[56px] h-[52px] bg-blue-gray-800 shadow-[0_0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex justify-center items-center">
      <div className="bg-transparent border-blue-gray-700 w-8 h-8 rounded-full border-4 absolute"></div>
      <div className="bg-transparent border-white w-8 h-8 rounded-full border-4 border-r-transparent animate-spin"></div>
    </div>
  );
};

export default Loading;
