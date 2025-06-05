"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 p-2 font-semibold font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            <strong>Maestro Films</strong> was originally founded as{" "}
            <strong>Sharda Photo Studio</strong> in 1982 by{" "}
            <strong>Lt. Prem Solanki</strong> in Hoshangabad. After his passing
            in 2014, his son <strong>Mr. Kamad Solanki</strong> launched{" "}
            <strong>Maestro Films</strong> in 2024 to carry on the legacy with a
            modern touch in filmmaking and photography.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm text-gray-300 space-y-2 ">
            <li>+91 75818 00555</li>
            <li>+91 75820 05558</li>
            <li>Officialmaestrofilm@gmail.com</li>
            <li>Amar Chowk, Hoshangabad, MP</li>
            <li>Office Timing: Monday to Sunday (6 AM–11:30 PM)</li>
          </ul>

        </motion.div>

        {/* Map & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          <div className="w-full h-56 rounded-md overflow-hidden border border-gray-700 shadow-md mb-4">
            <iframe
              title="Maestro Films Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5380196485655!2d77.7350021!3d22.744108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c435e1a44c7d9%3A0x6bc3b33be14506f2!2sAmar%20Chowk%2C%20Hoshangabad%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717084050926!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </motion.div>
      </div>


    </footer>
  );
}
