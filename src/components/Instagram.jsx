import p1 from "../assets/i1.jpg";
import p2 from "../assets/i2.jpg";
import p3 from "../assets/i3.jpg";
import p4 from "../assets/i4.jpg";
import p5 from "../assets/i5.jpg";
import p6 from "../assets/i6.jpg";



export default function Instagram() {
  const images = [p1, p2, p3, p4, p5, p6];


  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-20 ">
        <h2 className="text-center text-3xl font-semibold mb-10">INSTAGRAM FEED</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <img key={i} src={img} className="rounded-xl shadow-lg" />
          ))}

        </div>
      </div>
    </div>
  );
}
