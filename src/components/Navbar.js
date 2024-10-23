// import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_stgenetics.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-5 z-50 bg-gradient-to-b from-pink-100 to-blue-100 backdrop-blur-md shadow-md p-4 rounded-lg mx-4">
      <div className="container mx-auto flex justify-between items-center mt-3">
        <div className="flex flex-row">
          <img src={logo} alt="Company logo" className="h-10 w-auto mr-10" />
          <div className="space-x-4">
            <Link
              to="/home"
              className={`text-gray-600 ${
                location.pathname === "/home" ? "font-bold" : ""
              } hover:text-blue-600`}
            >
              News
            </Link>
            <Link
              to="/sales"
              className={`text-gray-600 ${
                location.pathname === "/sales" ? "font-bold" : ""
              } hover:text-blue-600`}
            >
              Sales
            </Link>
            <Link
              to="/contact"
              className={`text-gray-600 ${
                location.pathname === "/contact" ? "font-bold" : ""
              } hover:text-blue-600`}
            >
              Contact
            </Link>
          </div>
        </div>
        <Link to="/sales">
          <FaShoppingCart className="mr-2" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
