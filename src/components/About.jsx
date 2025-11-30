import React from "react";
import ownerImg from "../assets/owner.jpeg"; // তোমার ছবি বসাও

export default function AboutSection() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE + NAME */}
        <div className="flex flex-col items-center text-center">

          {/* Modern Image Box */}
          <div className="
            w-[260px]
            h-[260px]
            rounded-2xl
            overflow-hidden
            border border-gray-300 dark:border-gray-700
            shadow-xl
            hover:scale-105
            hover:shadow-2xl
            transition-all duration-300
          ">
            <img
              src={ownerImg}
              className="w-full h-full object-cover"
              alt="owner"
            />
          </div>

          {/* Owner Name Under Image */}
          <div className="">
            <h3 className="mt-4 text-2xl font-semibold tracking-wide text-gray-800 dark:text-white">
              Aniruddha Kumar Roy
            </h3>
            <p className="font-medium">Managing Director
            </p>
          </div>

        </div>

        {/* RIGHT BOX ABOUT */}
        <div className="
          bg-white dark:bg-gray-800 
          border border-gray-300 dark:border-gray-700 
          p-10 shadow-md
        ">

          <h2 className="text-3xl font-bold tracking-wider mb-4 text-gray-800 dark:text-white">
            About Us
          </h2>

          {/* <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <span className="font-semibold">My name is Johnathan Glover.</span>
            <br />
            I am founder of wood crafting studio — <strong>Manufactura</strong>.
          </p> */}

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 mt-3">
            Leather Industries of Bangladesh Limited was established by a group of motivated and experienced individuals who aimed to enter the growing global market of Bag industry.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 mt-3">
            It is a private limited company established in 2017 and located in Hazaribagh, Dhaka, which specializes in the design and production of all kinds of leather, non leather and fabric bags like backpack, tote bag, wallets, purse, passport holder, card holder, etc. LIBL plans to revolutionize the industry with stylish and fashionable goods.
          </p>

          {/* Button */}
          <button className="
            px-6 py-2 
            border border-black dark:border-white 
            text-black dark:text-white 
            tracking-wide
            hover:bg-black hover:text-white 
            dark:hover:bg-white dark:hover:text-black
            transition
          ">
            Read MORE
          </button>

        </div>

      </div>
    </div>
  );
}
