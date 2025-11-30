import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import logo from '../assets/bd.jpeg'

export default function FooterLast() {

  return (
    <footer className="bg-black text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <div className="flex">
            <div className="">
              <img src={logo} className="w-[80px] rounded-full" alt="" />
            </div>
            <h2 className="text-white text-xl font-bold mb-4 pl-[20px]">
              Leather Industries of Bangladesh Ltd
            </h2>
          </div>
          <p className="text-gray-400 text-sm">
            Trusted leather manufacturer delivering premium quality leather & leather goods worldwide.
          </p>
        </div>

        {/* Pages */}
        <div className="ml-[60px]">
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Factory Profile</li>
            <li className="hover:text-white">Other Unit</li>
            <li className="hover:text-white">HR Compliance</li>
            <li className="hover:text-white">LIB CSR</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white">Mash Leather</li>
            <li className="hover:text-white">Plain Leather</li>
            <li className="hover:text-white">Hand Made</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              54/1 Sher-E-Bangla Road, Hazaribagh, Dhaka-1209, Bangladesh
            </li>

            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-yellow-500" />
              +8801722949800 (WhatsApp Available)
            </li>

            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-yellow-500" />
              info@libtd.com
            </li>
          </ul>

          <div className="flex gap-4 mt-5">
            <a className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>

            <a className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>

            <a className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 py-4 text-center text-xs text-gray-500">
        © 2022 Leather Industries of Bangladesh. All Rights Reserved.
        <br />
        Designed & Developed by <span className="text-white">BD WEB MART</span>
      </div>

    </footer>
  );
}
