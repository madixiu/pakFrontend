"use client";

import { useState, useEffect } from "react";
import { GoArrowUpLeft } from "react-icons/go";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

function Banner() {
  const slides = [
    { image: "/Banner/1.jpg", title: "کره پاستوریزه پاک" },
    { image: "/Banner/2.jpg", title: "خامه فرادما و هموژنیزه پاک" },
    { image: "/Banner/3.jpg", title: "شیر کاکائو کم چرب پاک" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [prevFading, setPrevFading] = useState(false);
  const [currentVisible, setCurrentVisible] = useState(true);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // change slide helper: prepare prev overlay, then fade prev out and fade current in
  const changeSlide = (nextIndexOrFn) => {
    // use functional update to avoid stale closures (fixes interval bug)
    setCurrentSlide((prev) => {
      const next =
        typeof nextIndexOrFn === "function"
          ? nextIndexOrFn(prev)
          : nextIndexOrFn;
      if (next === prev) return prev;

      // set previous index so it can fade out
      setPrevSlide(prev);
      setPrevFading(false);

      // hide incoming overlay initially
      setCurrentVisible(false);

      // allow browser to render both overlays, then trigger transitions
      requestAnimationFrame(() => {
        setPrevFading(true); // fade out prev
        setCurrentVisible(true); // fade in current
      });

      // remove prev after transition (match duration below: 700ms)
      setTimeout(() => {
        setPrevSlide(null);
        setPrevFading(false);
      }, 700);

      return next;
    });
  };

  const nextSlide = () => changeSlide((s) => (s + 1) % slides.length);
  const prevSlideNav = () =>
    changeSlide((s) => (s - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay Content - fade only (no translate/position change) */}
      <div
        id="bannerContent"
        className="absolute top-0 right-0 w-[50%] h-full flex items-center justify-center p-4 pointer-events-none"
      >
        {/* previous (leaving) overlay -> fades out */}
        {prevSlide !== null && (
          <div
            key={`prev-${prevSlide}`}
            className={`text-right absolute right-56 pointer-events-auto transition-opacity duration-1000 ease-out ${
              prevFading ? "opacity-50" : "opacity-100"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow-lg leading-20">
              {slides[prevSlide].title}
            </h1>
            <button
              className={`bg-white text-black px-5 py-3 rounded-2xl hover:bg-neutral-200 cursor-pointer transition-opacity duration-400 ${
                prevFading ? "opacity-50" : "opacity-100"
              }`}
            >
              <div className="flex flex-row justify-center items-center gap-1">
                <span>مشاهده</span>
                <GoArrowUpLeft />
              </div>
            </button>
          </div>
        )}

        {/* current (entering) overlay -> fades in */}
        <div
          key={`current-${currentSlide}`}
          className={`text-right absolute right-56 pointer-events-auto transition-opacity duration-1000 ease-out ${
            currentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow-lg leading-20">
            {slides[currentSlide].title}
          </h1>
          <button
            className={`bg-white text-black px-5 py-3 rounded-2xl hover:bg-neutral-200 cursor-pointer transition-opacity duration-400 ${
              currentVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: currentVisible ? "120ms" : "0ms" }}
          >
            <div className="flex flex-row justify-center items-center gap-1">
              <span>مشاهده</span>
              <GoArrowUpLeft />
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 left-0 w-[50%] h-full flex items-center justify-center p-4">
        <div className="absolute left-[22%] bottom-[12%] gap-3 flex flex-row">
          <div
            className="bg-white opacity-50 rounded-xl shadow p-4 cursor-pointer hover:bg-neutral-200 hover:opacity-90"
            onClick={prevSlideNav}
          >
            <MdOutlineArrowForwardIos />
          </div>
          <div
            className="bg-white opacity-50 rounded-xl shadow p-4 cursor-pointer hover:bg-neutral-200 hover:opacity-90"
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
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
