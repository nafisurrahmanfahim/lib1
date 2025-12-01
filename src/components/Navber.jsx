import React, { useState } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ResponsiveNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const menu = [
    { label: "Home", href: "#home" },

    {
      label: "Products",
      href: "#products",
      dropdown: [
        { label: "Product 1", href: "#p1" },
        { label: "Product 2", href: "#p2" },
        { label: "Product 3", href: "#p3" },
      ],
    },

    {
      label: "Who we are",
      href: "#who",
      dropdown: [
        { label: "About Us", href: "#about" },
        { label: "Our Mission", href: "#mission" },
        { label: "Team", href: "#team" },
      ],
    },

    { label: "Blog/News", href: "#blog" },

    {
      label: "Shop",
      href: "#shop",
      dropdown: [
        { label: "All Products", href: "#all" },
        { label: "Accessories", href: "#acc" },
      ],
    },

    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-sm sticky top-0 z-50 transition">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-6">
              {menu.map((m) => (
                <li key={m.label} className="relative group">

                  {/* Main Button */}
                  <button className="flex items-center gap-1 px-1 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition">
                    {m.label}

                    {m.dropdown && (
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  {m.dropdown && (
                    <div className="
                      absolute left-1/2 -translate-x-1/2 top-full w-44
                      bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow-lg
                      opacity-0 scale-95 translate-y-2 pointer-events-none
                      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                      transition-all duration-200 z-50
                    ">
                      <ul className="py-2">
                        {m.dropdown.map((d) => (
                          <li key={d.label}>
                            <a
                              href={d.href}
                              className="
                                relative block px-4 py-2 text-sm text-gray-700 dark:text-gray-200
                                hover:bg-gray-100 dark:hover:bg-gray-700 transition-all

                                before:content-[''] before:absolute 
                                before:left-0 before:top-0 before:h-full 
                                before:w-0 before:bg-red-600 
                                before:transition-all before:duration-200

                                hover:before:w-[3px] hover:before:opacity-100
                              "
                            >
                              {d.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-2 transition-all duration-300 overflow-hidden ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4">

            <ul className="flex flex-col gap-2">
              {menu.map((m, index) => (
                <li key={m.label}>

                  <div className="flex items-center justify-between">
                    <a
                      href={m.href}
                      className="px-3 py-2 text-gray-800 dark:text-gray-200 font-medium"
                    >
                      {m.label}
                    </a>

                    {m.dropdown && (
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === index ? null : index
                          )
                        }
                      >
                        <ChevronDown
                          size={18}
                          className={`transition ${
                            mobileDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {m.dropdown && (
                    <div
                      className={`
                        pl-4 transition-all overflow-hidden
                        ${
                          mobileDropdown === index
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }
                      `}
                    >
                      {m.dropdown.map((d) => (
                        <a
                          key={d.label}
                          href={d.href}
                          className="block py-1 text-sm text-gray-600 dark:text-gray-300"
                        >
                          {d.label}
                        </a>
                      ))}
                    </div>
                  )}

                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <div>© {new Date().getFullYear()} Company</div>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 border rounded-md text-sm"
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
