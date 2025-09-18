"use client";

import { useState, useEffect } from "react";
import { GoArrowUpLeft } from "react-icons/go";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

function Banner() {
  const slides = [
    {
      image: "/banner.jpg",
      title: "شیر پرچرب و کم چرب فراپاستوریزه",
    },
    {
      image: "/banner.jpg",
      title: "محصول دوم",
    },
    {
      image: "/banner.jpg",
      title: "محصول سوم",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden" style={{ aspectRatio: "2/1" }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div
        id="bannerContent"
        className="absolute top-0 right-0 w-[50%] h-full flex items-center justify-center p-4"
      >
        <div className="text-right absolute right-56">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow-lg leading-20">
            {slides[currentSlide].title}
          </h1>
          <button className="bg-white text-black px-5 py-3 rounded-2xl hover:bg-neutral-200 cursor-pointer">
            <div className="flex flex-row justify-center items-center gap-1">
              <span>مشاهده</span>
              <GoArrowUpLeft />
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        id="bannerContent"
        className="absolute top-0 left-0 w-[50%] h-full flex items-center justify-center p-4"
      >
        <div className="absolute left-[22%] bottom-[12%] gap-3 flex flex-row">
          <div
            className="bg-white rounded-xl shadow p-4 cursor-pointer hover:bg-neutral-200"
            onClick={prevSlide}
          >
            <MdOutlineArrowForwardIos />
          </div>
          <div
            className="bg-white rounded-xl shadow p-4 cursor-pointer hover:bg-neutral-200"
            onClick={nextSlide}
          >
            <MdOutlineArrowBackIos />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
