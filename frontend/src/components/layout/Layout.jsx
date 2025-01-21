import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/layout1.png",
    text: "Anywhere You Are",
  },
  {
    id: 2,
    image: "/layout2.png",
    text: "At Anytime You Want",
  },
  {
    id: 3,
    image: "/layout3.png",
    text: "Book Your Ride",
  },
];

const Layout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="h-screen flex flex-col justify-between items-center relative bg-gray-100">
      {/* Skip text */}
      <Link to="/user/login">
      <h3 className="absolute top-4 right-4 text-gray-600 text-md font-medium cursor-pointer">
        Skip
      </h3>
      </Link>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <img
          src={slides[currentSlide].image}
          alt={`layout${currentSlide + 1}`}
          className="w-4/5 max-w-md"
        />
        <h2 className="mt-6 text-xl font-semibold text-gray-800">
          {slides[currentSlide].text}
        </h2>
      </div>

      {/* Button with Progress Bar */}
      <div className="mb-8 relative w-20 h-20">
        {/* Outer Circle (Gray Background) */}
        <svg className="absolute top-0 left-0 w-full h-full">
          {/* Background Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#e5e5e5" // Gray background
            strokeWidth="4"
            fill="none"
          />
          {/* Progress Circle (Yellow) */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#facc15"
            strokeWidth="4"
            fill="none"
            strokeDasharray="176" // Circumference of the circle
            strokeDashoffset={(176 - (progress / 100) * 176).toFixed(2)} // Adjusting the offset to create progress
            style={{
              transition: "stroke-dashoffset 0.5s ease-in-out", // Smooth transition effect
            }}
          />
        </svg>

        {/* Button */}
        {currentSlide === slides.length - 1 ? (
          <Link to="/user/login">
            <button
              className="absolute top-2 left-2 w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-[#facc15] font-bold text-lg cursor-pointer"
              onClick={handleNext}
            >
              Go
            </button>
          </Link>
        ) : (
          <button
            className="absolute top-2 left-2 w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-[#facc15] font-bold text-lg cursor-pointer"
            onClick={handleNext}
          >
            <FaArrowRightLong />
          </button>
        )}
      </div>
    </div>
  );
};

export default Layout;
