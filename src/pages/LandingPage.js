// src/pages/LandingPage.js
import React from "react";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 font-sans">
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to Our Shop
          </h1>
          <p className="text-md text gray-300 mb-4">
            Here you can find the best products everything you need in one place
          </p>
          <ImageCarousel />
          <button className="mt-10  backdrop-blur-md px-6 py-3 bg-sky-700 font-bold	 text-fuchsia-200	 rounded-full hover:bg-sky-900">
            Shop Now
          </button>
        </div>
      </section>

      {/* Long News Section */}
      <section id="news" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example News Articles */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  News Article {index + 1}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nunc vel consequat...
                </p>
                <a
                  href="#read-more"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
