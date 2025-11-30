export default function Footer() {
  return (
    <div className="py-16 text-center border-t mt-10">
      <h3 className="text-2xl font-semibold">Every Bowl We Make</h3>

      <input
        type="email"
        placeholder="Your Email"
        className="mt-5 border px-4 py-2 rounded-md"
      />

      <button className="ml-2 border px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
        Subscribe
      </button>

      <p className="mt-10 text-gray-500">© 2025 Manufactura. All rights reserved.</p>
    </div>
  );
}
