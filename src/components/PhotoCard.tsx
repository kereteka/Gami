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
    <div className="text-white mt-[400px]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex w-[80%] h-48 ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div
            style={{
              backgroundImage: `url(/${item.photo}.jpeg)`,
            }}
            className={`basis-1/2 h-64 bg-cover bg-center `}
          ></div>
          <div className="basis-1/2">
            <h2 className="text-blue-gray-800 font-semibold">{item.header}</h2>
            <p className="text-blue-gray-400">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoCard;
