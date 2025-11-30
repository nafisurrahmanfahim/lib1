const Newsletter = () => (
  <section className="bg-gray-50 py-20">
    <div className="max-w-lg mx-auto text-center px-6">
      <h2 className="text-xl font-semibold mb-3">Subscribe for updates</h2>
      <form className="flex items-center border rounded overflow-hidden">
        <input
          type="email"
          className="flex-grow p-3 outline-none"
          placeholder="Enter your email"
        />
        <button className="px-5 py-3 bg-black text-white">
          Join
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;
