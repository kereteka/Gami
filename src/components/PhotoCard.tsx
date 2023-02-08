import React from "react";

interface Data {
  header: string;
  text: string;
  photo: string;
}

const PhotoCard: React.FC = () => {
  const data: Data[] = [
    {
      header: "Aenean egestas libero amet vulputate.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.",
      photo: "photo1",
    },
    {
      header: "Aenean egestas libero amet vulputate.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.",
      photo: "photo2",
    },
    {
      header: "Aenean egestas libero amet vulputate.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.",
      photo: "photo3",
    },
  ];

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={index}
          className={` block sm:flex sm:w-[80%] h-auto  rounded-lg mt-8 sm:mt-16 ${
            index % 2 !== 0 ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div
            style={{
              backgroundImage: `url(/${item.photo}.jpeg)`,
            }}
            className={`sm:basis-1/2 h-[280px] mb-6 box-border border-solid border-2 border-white rounded-lg bg-cover bg-center shadow-lg`}
          ></div>
          <div className="sm:basis-1/2 flex flex-col sm:justify-center text-left sm:text-center ">
            <h2 className="text-2xl text-blue-gray-800 font-semibold ">
              {item.header}
            </h2>
            <p className="text-base text-blue-gray-400 ">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PhotoCard;
