import { motion } from "framer-motion";


export default function Sections() {
  const sectionData = [
    {
      title: "WOOD AT ITS BEST",
      text: "Significant evidences of advanced woodworking.",
      img: "../src/assets/p2.jpg"
    },
    {
      title: "HAND CRAFTED WORK",
      text: "Completely superior resource carving relationships by premier artisans.",
      img: "../src/assets/p1.jpg"
    },
    {
      title: "HIGH QUALITY TOOLS",
      text: "Individually inspected wooden tools produced under strict quality procedures.",
      img: "../src/assets/p3.jpg"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-24 px-6 space-y-24">
        {sectionData.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-16 items-center 
            ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >

            <img src={s.img} className="rounded-xl shadow-lg" />

            <div>
              <h2 className="text-3xl font-semibold mb-2">{s.title}</h2>
              <p className="text-gray-600 mb-4">{s.text}</p>
              <button className="border px-6 py-2 rounded-md hover:bg-black hover:text-white 
              transition">View More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
