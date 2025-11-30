import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ResponsiveNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#About us" },
    { label: "Products", href: "#Products" },
    { label: "Other Units", href: "#Other Units" },
    { label: "Accessory Division", href: "#Accessory Division" },
    { label: "HR Compliance", href: "#HR Compliance" },
    { label: "Utility", href: "#Utility" },
    { label: "LIB CSR", href: "#LIB CSR" },
    { label: "Logistics", href: "#Logistics" },
    { label: "Our IT", href: "#Our IT" },
  ];

  return (
    <header className="w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          {/* <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <div className="py-2 px-5 rounded-lg bg-gradient-to-br from-red-600 to-black flex items-center justify-center text-white font-bold">
                Manufactura
              </div>
              <span className="sr-only">Brand</span>
            </a>
          </div> */}

          {/* Desktop menu - center */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-4 whitespace-nowrap">
              {menu.map((m) => (
                <li key={m.label} className="group">
                  <a
                    href={m.href}
                    className="relative inline-block px-1 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 transition-all duration-300 hover:text-black dark:hover:text-white"
                  >
                    {m.label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-red-600 to-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Right side */}
          <div className="flex items-center gap-4">

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#shop" className="text-sm px-3 py-1 rounded-md border border-gray-200 dark:border-gray-600 hover:shadow-lg transition">
                Shop
              </a>
              <a href="#contact" className="text-sm px-3 py-1 rounded-md bg-red-600 text-white hover:opacity-90 transition">
                Contact
              </a>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {open ? <X size={28} className="text-gray-800 dark:text-gray-200" />
                : <Menu size={28} className="text-gray-800 dark:text-gray-200" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div className={`md:hidden mt-2 origin-top-right transform transition-all duration-300 ease-in-out
          ${open ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"} overflow-hidden`}>
          <div className="bg-white/95 dark:bg-gray-900/95 rounded-xl shadow-lg p-4 transition-colors duration-300">
            <ul className="flex flex-col gap-3">
              {menu.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Company</div>
              <button
                onClick={() => setOpen(false)}
                className="text-sm px-3 py-1 rounded-md border border-gray-200 dark:border-gray-600 hover:shadow-sm transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}
