"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import mb from "../../../public/mb.jpeg";
import wed from "../../../public/wed.jpg";
import jai from "../../../public/jai.jpg";
import rj from "../../../public/rj.jpg";

 
const media = [
  { type: "video" as const, src: "/videos/reel1.mp4" },
  { type: "video" as const, src: "/videos/reel2.mp4" },
  { type: "video" as const, src: "/videos/reel3.mp4" },
  { type: "video" as const, src: "/videos/reel4.mp4" },
  { type: "video" as const, src: "/videos/reel2.mp4" },
  { type: "video" as const, src: "/videos/reel3.mp4" },
  { type: "image" as const, src: mb, alt: "Couple near water", name: "" },
  { type: "image" as const, src: rj, alt: "Couple in Jodhpur", name: "JO" },
  { type: "image" as const, src: wed, alt: "Couple with pigeons", name: "" },
  { type: "image" as const, src: jai, alt: "Couple with pigeons", name: "" },
];

export function ParallaxScrollDemo() {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center relative" style={{backgroundColor:'#FAF9F6'}}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        REELS
      </h2>

      {/* Navigation Buttons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        centeredSlides
        initialSlide={1}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 2.8, spaceBetween: 32 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full max-w-7xl"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`transition-all duration-500 overflow-hidden relative rounded-xl shadow-lg mt-6 mb-10
                ${index === activeIndex ? "scale-105 z-10 shadow-2xl" : "scale-95 opacity-80"}
              `}
            >
              <div className="relative w-full h-[450px] sm:h-[450px] md:h-[400px] lg:h-[480px] bg-gray-200 rounded-xl">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt || "Image"}
                    fill
                    className="object-cover rounded-xl cursor-pointer select-none"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </div>
              {"name" in item && item.name && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 text-lg md:text-xl font-semibold">
                  {item.name}
                </div>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
        

    </div>
  );
}



 