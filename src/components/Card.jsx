import React, { useState } from "react";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container flex my-5 mx-4">
      <div
        className={`bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
          isHovered
            ? "transform scale-105 shadow-lg"
            : "transform scale-100 shadow-md"
        } sm:flex`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="w-full h-48 object-cover my-5 px-5 sm:w-48 sm:h-auto"
          src="/Ellipse 325.png"
          alt="Profile"
        />
        <div className="p-6 sm:flex-1">
          <h2 className="text-xl font-bold mb-2">Web Developer</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet</p>
          <div className="flex space-x-4">
            <span className="inline-flex items-center space-x-1 text-yellow-500">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>8+</span>
            </span>
            <span className="inline-flex items-center space-x-1 text-gray-500">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>PHP, JavaScript</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
