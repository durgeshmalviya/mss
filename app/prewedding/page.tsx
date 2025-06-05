'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

import img24 from '@/assets/Gallery/image 24.jpeg';
import img25 from '@/assets/Gallery/image 25.jpeg';
import img26 from '@/assets/Gallery/image 26.jpeg';

export default function WeddingPage() {
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };


  return (<>
    <section className="max-w-7xl mx-auto px-4 py-12"
      style={{
        backgroundColor: '#F2E9D9',
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
      onContextMenu={(e) => e.preventDefault()}
    >

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {slides.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={img.image}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-[300px] object-cover transition-all duration-500 ease-in-out hover:filter hover:grayscale"
              width={600}
              height={400}
              
            />
          </div>
        ))}
      </div>

      {/* Centered Text Below Grid */}
      <div className="mt-8 text-center">
        <h1 className="text-xs md:text-lg font-bold uppercase bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent drop-shadow">
          Prewedding & Wedding Shoot
        </h1>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 text-lg leading-relaxed p-10 text-center"
      >
        We are a Jaipur-based Pre-wedding and Wedding Photography company, offering our services across India. <strong className="text-black font-semibold">Maestro Films</strong>{' '}
        specializes in Couple Portraits, Candid Videos, Wedding Films/Photography,
        Pre and Post-Wedding Shoots, Advertising, and Event Coverage. With over a decade of experience in the industry,
        we create timeless memories for our clients. Our commitment to 100% customer satisfaction is backed by high-quality visuals captured with the latest camera technology and lighting equipment.
        <br />
        <br />
        Wedding Diaries By OMP is a proud subunit of Jaipur’s top film and music video production
        house, <strong className="text-black font-semibold">Our Minutes Production</strong>. That's what “OMP” stands for.
        We specialize in <span className="text-pink-600 font-medium">Pre-wedding Shoots in Jaipur</span>.
        <br /><br />
        <a
          href="tel:+1234567890"
          className="mt-6 md:mt-0  self-center text-center inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition-all uppercase"
        >
          Call Us Now
        </a>
      </motion.p>

    </section>






  </>);
}

const slides = [
  {
    image: img24,
    title: 'Elegant Couple Portraits',
    description: 'Capturing timeless love stories.',
    link: '/weddings',
  },
  {
    image: img25,
    title: 'Cinematic Wedding Vibes',
    description: 'Bringing your big day to life.',
    link: '/cinema',
  },
  {
    image: img26,
    title: 'Creative Direction by OMP',
    description: 'From shoots to screens, we deliver magic.',
    link: '/about',
  },
];
