'use client';

import { motion } from 'framer-motion';
import WhyUs from './whyus';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (<>
  <WhyUs/>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen px-6 py-20 bg-white text-gray-800"
    >
      <motion.h1
        variants={childVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        About Us
      </motion.h1>

      <motion.div
        variants={childVariants}
        className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6"
      >
        <p>
          Welcome to <strong>Our Company</strong>, where innovation meets passion.
          We are a team of creative thinkers, developers, and designers dedicated
          to building outstanding digital experiences.
        </p>

        <p>
          Our mission is to deliver high-quality software that solves real-world problems
          and empowers businesses to reach their full potential. We take pride in our
          attention to detail, user-centric design, and agile workflows.
        </p>

        <p>
          Whether you're a startup looking for a product launch or an enterprise seeking
          digital transformation, we’re here to help you grow.
        </p>
      </motion.div>

      <motion.div
        variants={childVariants}
        className="mt-12 flex flex-col items-center"
      >
        <p className="text-xl font-semibold mb-2">Let’s build something amazing together.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </motion.div>
 </> );
}
