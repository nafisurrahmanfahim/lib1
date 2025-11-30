import { useState } from "react";

import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";

const buyers = [
  { id: 1, img: b1 },
  { id: 2, img: b2 },
  { id: 3, img: b3 },
  { id: 4, img: b4 },
  { id: 5, img: b5 },
  { id: 6, img: b6 },
  { id: 7, img: b7 },
  { id: 8, img: b8 },
];

export default function Buyers() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? buyers : buyers.slice(0, 4);

  return (
    <div className="py-20 bg-[#E8EFE9]">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Valued Buyers
      </h2>
      <p className="text-center text-gray-500 mt-2">across the world</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12 max-w-5xl mx-auto">
        {visibleItems.map((b) => (
          <div key={b.id} className="flex justify-center">
            <img src={b.img} alt="buyer" className="w-[120px] object-contain grayscale hover:grayscale-0 transition" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-md text-white bg-black hover:bg-gray-800 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
