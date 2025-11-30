import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import p2 from "../assets/l3.jpeg";
import p1 from "../assets/l1.webp";
import p3 from "../assets/l3.jpeg";

const images = [p1, p2, p3];

// Autoplay Plugin
function AutoplayPlugin(slider) {
  let timeout;
  let delay = 3000;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => slider.next(), delay);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", clearNextTimeout);
    slider.container.addEventListener("mouseout", nextTimeout);
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [AutoplayPlugin]
  );

  return (
    <div className="w-full bg-white dark:bg-gray-900 flex justify-center py-12">
      <div className="relative w-[90%] max-w-[1200px] h-[580px] bg-[#f3f3f3] rounded-lg overflow-hidden shadow-md">

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl md:text-5xl font-black w-[720px] font-serif text-center px-4"
          >
            There is a story behind every hide
          </motion.h1>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider w-full h-full z-10">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="keen-slider__slide"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={src}
                className="w-full h-full object-contain"
                draggable="false"
              />
            </motion.div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={30} className="text-gray-700" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={30} className="text-gray-700" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 z-30 w-full flex justify-center gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => slider.current?.moveToIdx(i)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === i ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
