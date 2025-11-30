const images = [
  "/images/g1.jpg",
  "/images/g2.jpg",
  "/images/g3.jpg",
  "/images/g4.jpg",
  "/images/g5.jpg",
  "/images/g6.jpg",
];

const Gallery = () => (
  <section className="max-w-6xl mx-auto py-20 px-6">
    <h2 className="text-center text-2xl font-bold mb-10 tracking-wide">
      Instagram Feed
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          className="rounded-xl object-cover w-full h-60"
          src={src}
          alt=""
        />
      ))}
    </div>
  </section>
);

export default Gallery;
