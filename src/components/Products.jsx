import { useState } from "react";
import { motion } from "framer-motion";

import pp1 from "../assets/pp1.png";
import pp2 from "../assets/pp2.png";
import pp3 from "../assets/pp3.png";
import pp4 from "../assets/pp4.png";
import pp5 from "../assets/pp5.png";
import pp6 from "../assets/pp6.png";


export default function ProductsShowcase() {
  const products = [
    { id: 1, img: pp1, title: "Blue Bag" },
    { id: 2, img: pp2, title: "Beige Bag" },
    { id: 3, img: pp3, title: "Black Office Bag" },
    { id: 4, img: pp4, title: "Cream Mini Bag" },
    { id: 5, img: pp5, title: "Black Shoulder Bag" },
    { id: 6, img: pp6, title: "Brown Bag" },
    // { id: 7, img: pp7, title: "Extra Bag 1" },
    // { id: 8, img: pp8, title: "Extra Bag 2" },
    // { id: 9, img: pp9, title: "Extra Bag 3" },
    // { id: 10, img: pp10, title: "Extra Bag 4" },
    // { id: 11, img: pp11, title: "Extra Bag 5" },
    // { id: 12, img: pp12, title: "Extra Bag 6" }
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Check out our products</h2>
        <p className="text-gray-500 mt-2">Take a peek inside our Wonderworld</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {visibleProducts.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-2xl shadow-md overflow-hidden bg-white p-4 cursor-pointer hover:shadow-xl transition"
          >
            <img src={item.img} alt={item.title} className="w-full h-64 object-contain" />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition">
              <p className="text-lg font-semibold mb-3">{item.title}</p>
              <button className="bg-white text-black font-medium px-4 py-2 rounded-xl shadow-md mb-2">
                View Details
              </button>
              <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-xl shadow-md">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}