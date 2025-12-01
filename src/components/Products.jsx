import React from "react";
import HoverCard from "./HoverCard";

import p1 from "../assets/pp1.png";
import p2 from "../assets/pp2.png";
import p3 from "../assets/pp3.png";
import p4 from "../assets/pp4.png";
import p5 from "../assets/pp5.png";

export default function WoodLayout() {
  return (
    <div className="w-full bg-white flex flex-col items-center py-16">

      {/* MAIN 6-ITEM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1400px] gap-12">

        {/* 1 - Hover Image */}
        <HoverCard img={p1} title="Cherry Bowl" price="20.00" />

        {/* 2 - Wooden M Letter */}
        <HoverCard img={p2} title="Cherry Bowl" price="20.00" />


        {/* 3 - TEXT BLOCK */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold tracking-wider mb-4">
            WOOD AT ITS BEST
          </h1>

          <p className="text-[#b06e41] mb-4 tracking-wide">
            Significant evidence of advanced woodworking
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Objectively innovate empowered manufactured products whereas
            parallel platforms. Holistically predominate extensible
            testing procedures.
          </p>

          <button className="border border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition">
            VIEW MORE
          </button>
        </div>

        {/* 4 - Hover Image */}
        <HoverCard img={p3} title="Wood Spoon Set" price="18.00" />

        {/* 5 - TEXT BLOCK */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-wider mb-4">
            DEMAND FOR HAND <br /> CRAFTED WORK
          </h1>

          <p className="text-[#b06e41] mb-4">
            Wood crafted hand pipes
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Completely synergize resource taxing relationships via premier
            niche markets. Professionally cultivate one-to-one customer
            service with robust solutions.
          </p>

          <button className="border border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition">
            VIEW MORE
          </button>
        </div>

        {/* 6 - Hover Image */}
        <HoverCard img={p5} title="Crafted Log Slice" price="25.00" />

      </div>

    </div>
  );
}
