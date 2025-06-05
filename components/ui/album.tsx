"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

interface GalleryWithModalProps {
  imageUrls: StaticImageData[][];
  imageVariants: Record<string, any>;
  modalOpacity?: number;
}

const GalleryWithModal: React.FC<GalleryWithModalProps> = ({
  imageUrls,
  imageVariants,
  modalOpacity = 0.7,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const flatImages = imageUrls.flat();
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(null);
  };

  const goToNextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % flatImages.length);
    }
  };

  const goToPreviousImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + flatImages.length) % flatImages.length
      );
    }
  };

  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowRight":
          goToNextImage();
          break;
        case "ArrowLeft":
          goToPreviousImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, currentImageIndex]);

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-0 p-0">
        {imageUrls.map((column, colIndex) => (
          <div key={colIndex} className="contents">
            {column.map((img, imgIndex) => (
              <motion.div
                key={`${colIndex}-${imgIndex}`}
                custom={colIndex * 3 + imgIndex}
                initial="hidden"
                animate="visible"
                variants={imageVariants}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${colIndex * 3 + imgIndex}`}
                  className="w-full aspect-square object-cover cursor-pointer"
                  onClick={() => openModal(colIndex * 3 + imgIndex)}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {modalOpen && currentImageIndex !== null && (
        <div
          ref={modalRef}
          className="fixed inset-0 flex justify-center items-center z-50 p-4 w-full"
          style={{ backgroundColor: `rgba(0, 0, 9, ${modalOpacity})` }}
        >
          <div className="relative w-full p-6 rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="fixed px-4 py-2 top-8 right-4 cursor-pointer rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="flex justify-center items-center relative">
              <button
                className="absolute left-4 text-white text-3xl bg-transparent border-none cursor-pointer"
                onClick={goToPreviousImage}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <motion.div
                key={currentImageIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  const velocity = info.velocity.x;
                  const offset = info.offset.x;
                  if (offset < -100 || velocity < -500) {
                    goToNextImage();
                  } else if (offset > 100 || velocity > 500) {
                    goToPreviousImage();
                  }
                }}
              >
                <Image
                  src={flatImages[currentImageIndex]}
                  alt={`Selected image ${currentImageIndex}`}
                  priority
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
              </motion.div>

              <button
                className="absolute right-4 text-white text-3xl bg-transparent border-none cursor-pointer"
                onClick={goToNextImage}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryWithModal;
