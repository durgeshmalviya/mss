'use client';
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface ParallaxScrollProps {
  media: MediaItem[];
}

export function ParallaxScroll({ media }: ParallaxScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemWidth = 320; // Approx width with padding
  const totalItems = media.length;

  const scrollTo = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, totalItems - 1));
    setCurrentIndex(clampedIndex);
  };

  return (
    <section ref={containerRef} className="relative h-auto mb-10 p-5 bg-red-100 overflow-hidden">
      <div className="sticky top-0   flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ x: `-${currentIndex * itemWidth}px` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex gap-4 px-4"
        >
          {media.map((item, index) => (
            <div
              key={index}
              className="w-[400px] h-[500px] bg-white rounded-xl overflow-hidden shadow-md flex items-center justify-center"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`media-${index}`}
                  className="object-cover w-full h-full"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scrollTo(currentIndex - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-neutral-200"
        >
          ◀
        </button>
        <button
          onClick={() => scrollTo(currentIndex + 1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-neutral-200"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="absolute  bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-red-300' : 'bg-orange-700'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
