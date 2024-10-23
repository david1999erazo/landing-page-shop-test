import React from "react";

const CardTopNews = ({ image, title, description, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-64 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Contenido de la card */}
      <div className="card bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
        <div className="content mb-4">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-700 flex-grow">{description}</p>
          <button className="bg-gradient-to-b mt-4 from-pink-200 to-blue-200 text-gray px-4 py-2 rounded-md ease-in-out hover:from-pink-300 hover:to-blue-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTopNews;
