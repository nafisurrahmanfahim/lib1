import { motion } from "framer-motion";

const Features = () => {
  const items = [
    {
      title: "WOOD AT ITS BEST",
      text: "Handcrafted natural wooden masterpieces."
    },
    {
      title: "PREMIUM HANDWORK",
      text: "100% handmade products with perfection."
    },
    {
      title: "MODERN QUALITY",
      text: "The perfect balance of tradition & design."
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center justify-center">
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: i * 0.1 }}
          >
            <h2 className="text-lg font-bold tracking-wide mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Features;
