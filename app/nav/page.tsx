"use client";

import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, } from "react-icons/fa";

// Dropdown options
const dropdowns = {
  gallery: [
    { label: "Gallery Item 1", href: "/gallery/item1" },
    { label: "Gallery Item 2", href: "/gallery/item2" },
    { label: "Gallery Item 3", href: "/gallery/item3" },
  ],


};


type DropdownKey = keyof typeof dropdowns;

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const renderDropdown = (key: DropdownKey) => (
    <AnimatePresence>
      {openDropdown === key && (
        <motion.ul
          className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-md z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {dropdowns[key].map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}

        </motion.ul>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.nav
        className="bg-white shadow fixed top-0 left-0 w-full z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div style={{ fontFamily: 'Poppins' }} className="flex justify-between bg-amber-100 items-center w-full text-xs text-gray-700 px-4 py-2">

          <div className="flex items-center space-x-4">
            <p>
              <a href="tel:+1234567890" className="hover:text-blue-600 transition font-bold flex items-center space-x-2">
                <FaPhoneAlt />
                <span className="text-sm">+9175818 00555</span>

              </a>

            </p><p>
              <a href="tel:+1234567890" className="hover:text-blue-600 transition font-bold flex items-center space-x-2">
                <FaPhoneAlt />
                <span className="text-sm">+9175818 00555</span>

              </a>

            </p>
            <p>
              <a href="mailto:info@example.com" className="hover:text-red-500 transition flex items-center space-x-1">
                <FaEnvelope />
                <span className="text-sm"> Offiicialmaestrofilm@gmail.com</span>
              </a>
            </p>
          </div>

       
          <div className="flex items-center space-x-6 px-10">

            <p>
              <a href="https://www.instagram.com/maestrofilms6/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
                <FaInstagram />
              </a>
            </p>
            <p>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
                <FaPinterestP />
              </a>
            </p>
            <p>
              <a
                href="https://youtube.com/@maestrofilms-u8e"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
            </p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20 relative">

          {/* Logo (left) */}
          <Link href="/" className="flex items-center">
            <motion.img
              src="/mflog.png"
              alt="Logo"
              className="h-16"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {Object.keys(dropdowns).map((key) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key as DropdownKey)}
                  className="flex items-center space-x-1 px-4 py-2 rounded hover:bg-gray-100"
                >
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <FaChevronDown className="text-sm" />
                </button>
                {renderDropdown(key as DropdownKey)}
              </div>
            ))}
            <Link href="/service" className="px-4 py-2 rounded hover:bg-gray-100">
              Services
            </Link>
            <Link href="/company" className="px-4 py-2 rounded hover:bg-gray-100">
              Company
            </Link>
            <Link href="/blogs" className="px-4 py-2 rounded hover:bg-gray-100">
              Blogs
            </Link>
            <Link href="/aboutus" className="px-4 py-2 rounded hover:bg-gray-100">
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button (right) */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-2xl bg-red-300 px-4 py-2 flex items-center space-x-2 rounded"
          >
            <span className="text-base font-medium">Menu</span>
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              className="md:hidden bg-white px-4 pt-4 pb-6 shadow"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <Link href="/" className="block py-2">Home</Link>
              <Link href="/blogs" className="block py-2">Blogs</Link>
              {Object.entries(dropdowns).map(([key, items]) => (
                <div key={key} className="mt-2">
                  <button
                    onClick={() => toggleDropdown(key as DropdownKey)}
                    className="w-full flex justify-between items-center py-2 text-left"
                  >
                    <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                    <FaChevronDown className="text-sm" />
                  </button>
                  {items.map((item, i) => (
                    <Link key={i} href={item.href} className="block py-1">
                      {item.label}
                    </Link>
                  ))}

                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>);
};

export default Navbar;
