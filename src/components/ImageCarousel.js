import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Imágenes para el carrusel
const images = [
  "https://www.stgen.com/upload/slide/Website-banners-Ecofeed-WINNER.jpg",
  "https://www.stgen.com/upload/slide/Website-banners-Eco--Oct.jpg",
  "https://www.stgen.com/upload/slide/Website-banners-Ultraplus-Oct.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-4/5 mx-auto overflow-hidden rounded-lg shadow-lg">
      <motion.div
        className="w-full h-auto"
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto"
        />
      </motion.div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 shadow-md z-10 hover:bg-opacity-90"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 shadow-md z-10 hover:bg-opacity-90"
      >
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
