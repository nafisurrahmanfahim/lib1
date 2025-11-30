import React from "react";
import { motion } from "framer-motion";
import pr1 from "../assets/Tannery.jpeg";
import branch from '../assets/branch1 (1).jpeg';
import branch2 from '../assets/branch1 (3).jpeg';


const Production = () => {
  return (
    <div className="pt-[100px] pb-[80px] bg-gray-50 overflow-hidden">
      {/* Section Title */}
      <h3 className="text-center text-[42px] font-bold mb-6">
        Visit Us
      </h3>
      <p className="text-center text-gray-600 max-w-[700px] mx-auto mb-16 text-lg">
        Experience a clean, modern, and smooth flowing production timeline with
        elegant animations.
      </p>

      {/* Main Timeline Wrapper */}
      <div className="relative w-full max-w-[1100px] mx-auto px-6">
        {/* Moving Background Logo Line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute top-1/2 left-0 w-full h-[120px] flex items-center opacity-10"
        >
          <img src={pr1} alt="logo" className="w-[140px] h-[140px] object-cover rounded-full" />
        </motion.div>

        {/* Steps Container */}
        <div className="relative z-10 grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-6 text-center border border-gray-200"
          >
            <img src={pr1} className="w-full h-[200px] object-cover rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Design & Planning</h4>
            <p className="text-gray-600 text-sm">We start by designing and planning the perfect structure.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-2xl p-6 text-center border border-gray-200"
          >
            <img src={branch} className="w-full h-[200px] object-cover rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Production</h4>
            <p className="text-gray-600 text-sm">Smooth production workflow with top-quality output.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-xl rounded-2xl p-6 text-center border border-gray-200"
          >
            <img src={branch2} className="w-full h-[200px] object-cover rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Final Delivery</h4>
            <p className="text-gray-600 text-sm">We deliver the final product with excellent finishing.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Production;





// import React from "react";
// import { motion } from "framer-motion";
// import visitImg from "../assets/Tannery.jpeg";

// const VisitUs = () => {
//   return (
//     <div className="relative py-32 px-6 bg-white overflow-hidden">
      
//       {/* BACKGROUND ANIMATION SHAPE */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ 
//           opacity: 0.4,
//           scale: [1, 1.1, 1],
//           x: [0, 50, 0],
//           y: [0, -30, 0]
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//         className="absolute inset-0 flex justify-center items-center"
//       >
//         <div className="w-[600px] h-[600px] bg-blue-400/20 blur-[120px] rounded-full"></div>
//       </motion.div>

//       {/* CONTENT */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        
//         <div>
//           <h2 className="text-4xl font-bold mb-6">Visit Us</h2>
//           <p className="text-lg leading-8 text-gray-700">
//             We have our own tannery to process skins and hides of animals to 
//             produce leather. Tanning hides permanently alters the protein structure,
//             making them durable, flexible and long-lasting.
//           </p>
//         </div>

//         {/* IMAGE BLOCK */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="rounded-xl shadow-xl overflow-hidden"
//         >
//           <img src={visitImg} alt="" className="rounded-xl" />
//         </motion.div>

//       </div>
//       <div className="">Other Branch</div>
//     </div>
//   );
// };

// export default VisitUs;





