import React from "react";

const CardSecondNews = ({ image, title, description, date }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md p-4">
      {image !== "" ? (
        <div className="image-card">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-contain rounded-md mb-4"
          />
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4 flex-grow">{description}</p>
          <button className="bg-gradient-to-b mt-auto from-pink-200 to-blue-200 text-gray px-4 py-2 rounded-md ease-in-out hover:from-pink-300 hover:to-blue-300 self-start">
            Read more
          </button>
        </div>
      )}
    </div>
  );
};

export default CardSecondNews;
