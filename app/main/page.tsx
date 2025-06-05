'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import teaser from '@/assets/Teaser.gif' 
import img22 from '@/assets/Gallery/image 22.jpg'
import img2 from '@/assets/Gallery/image 2.jpeg'

import img23 from '@/assets/Gallery/image 23.jpg'


export default function SpotlightNewDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 10000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (<>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, type: 'spring' }}
      className="mt-20"
    >
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded shadow-lg">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="keen-slider__slide relative flex items-center justify-center"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-[600px] object-cover"
                style={{ objectFit: 'cover' }}
                width={1920}
                height={600}
                priority={idx === 0}
              />


              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                {/* Semi-transparent dark background for readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                <h2 className="relative text-4xl font-bold drop-shadow-lg bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                  {slide.title}
                </h2>

                <p className="relative text-white mt-2 text-lg drop-shadow-md max-w-xl">
                  {slide.description}
                </p>
                {slide.link && (
                  <a
                    href={slide.link}
                    className="relative text-white mt-2 text-lg drop-shadow-md max-w-xl underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {slide.link}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 left-4 cursor-pointer transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-lime-500' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6, type: 'spring' }}
      className="flex flex-col md:flex-row items-center justify-center bg-transparent max-w-9xl mx-auto px-4 py-6"
    >
      <h1 className="text-3xl px-20 p-10 md:text-4xl font-bold text-red-400 text-center md:text-left text-gray-800 uppercase">
        Get Your Dream Prewedding and Wedding Photography
      </h1>

      <a
        href="tel:+1234567890"
        className="mt-4 md:mt-0 inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition-all uppercase"
      >
        Call Us Now
      </a>
    </motion.div>


  </>);
}

const slides = [
  {
    image:teaser,
    title: 'Wedding Diaries By Maestro Film’s',
    description: 'Capturing love locally.',
    link: '/weddings',
  },
  {
    image:  img22,
    title: 'Wedding Diaries By Maestro Film’s',
    description: 'Styled to perfection.',
    link: '/fashion',
  },
  {
    image: img2,
    title: 'Wedding Diaries By Maestro Film’s',
    description: 'From concept to screen.',
    link: '/cinema',
  },
  {
    image:  img23,
    title: 'Wedding Diaries By Maestro Film’s',
    description: 'From concept to screen.',
    link: '/cinema',
  },
  {
    image: 'https://tinyurl.com/yc4c64rr',
    title: 'Wedding Diaries By Maestro Film’s',
    description: 'From concept to screen.',
    link: '/cinema',
  },
];
