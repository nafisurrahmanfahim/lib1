import React from "react";

export default function HoverCard({ img, title, price }) {
    return (
        <div className="relative w-full h-[380px] overflow-hidden group cursor-pointer">

            {/* IMAGE */}
            <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* DARK BLUR HOVER BACKGROUND */}
            <div
                className="
          absolute inset-0 
          bg-black/30 backdrop-blur-[2px]
          opacity-0 group-hover:opacity-100
          transition-all duration-500
        "
            ></div>

            {/* CENTER BOX WITH BORDER & TEXT */}
            <div
                className="
          absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-all duration-500
        "
            >
                <div
                    className="border w-full border-[#d0b08a] px-10 py-4 items-center gap-8 text-[#d0b08a] text-sm tracking-wide">
                    {/* <span>{title}</span> */}
                    <div className="text-center">
                        {title}
                    </div>
                    <div className="flex border-[#d0b08a] border-t-2" >
                        <div className="w-[50%] text-center">{price}</div>
                        <div className="w-[50%] text-center">Add to Cart</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
