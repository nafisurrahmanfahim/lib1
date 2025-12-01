import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "../assets/l1.webp";
import p2 from "../assets/l3.jpeg";
import p3 from "../assets/l3.jpeg";

const images = [p1, p2, p3];

// Autoplay
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
    <div className="w-full bg-white flex justify-center py-0">
      <div className="relative w-full max-w-[1500px] h-[600px] overflow-hidden">

        {/* SLIDER */}
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {images.map((src, i) => (
            <div key={i} className="keen-slider__slide">
              <img
                src={src}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* LEFT ARROW (thin like demo) */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-30 p-2"
        >
          <ChevronLeft
            size={45}
            strokeWidth={1.3}
            className="text-black opacity-70 hover:opacity-100"
          />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-30 p-2"
        >
          <ChevronRight
            size={45}
            strokeWidth={1.3}
            className="text-black opacity-70 hover:opacity-100"
          />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => slider.current?.moveToIdx(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === i ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
