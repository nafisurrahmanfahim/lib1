import React from "react";
import { motion } from "framer-motion";
import {
  FaCut,
  FaStar,
  FaThLarge,
  FaPaintRoller,
  FaSitemap,
  FaBarcode,
  FaTag,
} from "react-icons/fa";

const items = [
  { icon: <FaCut size={40} />, label: "Cutting" },
  { icon: <FaStar size={40} />, label: "Skiving & Splitting" },
  { icon: <FaThLarge size={40} />, label: "Assembling" },
  { icon: <FaPaintRoller size={40} />, label: "Edge Painting" },
  { icon: <FaSitemap size={40} />, label: "Sewing" },
  { icon: <FaBarcode size={40} />, label: "Finishing" },
  { icon: <FaTag size={40} />, label: "QC & Packing" },
];

// Reusable Icon Box
const IconBox = ({ item }) => (
  <div className="flex flex-col items-center min-w-[150px] opacity-80 hover:opacity-100 transition">
    <div className="text-gray-600">{item.icon}</div>
    <p className="mt-3 text-gray-700 font-medium">{item.label}</p>
  </div>
);

const Production = () => {
  return (
    <div className="pt-[80px] pb-[50px]">
      <h3 className="text-center text-[40px] font-bold mb-12">
        Our Production Process
      </h3>

      <div className="relative w-full overflow-hidden">
        {/* Moving Track */}
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {/* Original + Duplicate for Loop */}
          {[...items, ...items].map((item, i) => (
            <IconBox key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Production;
