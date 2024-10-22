// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          &copy; 2024 My Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#facebook" className="text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="#twitter" className="text-gray-400 hover:text-white">
            Twitter
          </a>
          <a href="#instagram" className="text-gray-400 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
