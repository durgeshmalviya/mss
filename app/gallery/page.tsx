'use client';

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import GalleryWithModal from '../../components/ui/album';

import img2 from '@/assets/Gallery/image 2.jpeg';
import img3 from '@/assets/Gallery/image 3.jpeg';

import img6 from '@/assets/Gallery/image 6.jpeg';

import img10 from '@/assets/Gallery/image 10.jpeg';
import img11 from '@/assets/Gallery/image 11.jpeg';
import img12 from '@/assets/Gallery/image 12.jpeg';
import img13 from '@/assets/Gallery/image 13.jpeg';
import img14 from '@/assets/Gallery/image 14.jpeg';
import img15 from '@/assets/Gallery/image 15.jpeg';
import img16 from '@/assets/Gallery/image 16.jpeg';
import img17 from '@/assets/Gallery/image 17.jpeg';
import img18 from '@/assets/Gallery/image 18.jpeg';
import img19 from '@/assets/Gallery/image 19.jpeg';
import img20 from '@/assets/Gallery/image 20.jpeg';
import img22 from '@/assets/Gallery/image 22.jpeg';
import img23 from '@/assets/Gallery/image 23.jpeg';
import img24 from '@/assets/Gallery/image 24.jpeg';


const imageUrls: StaticImageData[][] = [
  [img22, img23,],
  [img11, img24, img2],
  [img15, img12,],
  [img13, img14, img15],
  [img16, img18],
  [img19, img20],
  [img6, img3,],
  [img17, img10],
];

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type HeroSectionProps = {
  tagline?: 'Reliable Estimates for Reliable Results' | 'Clear Costs, Clear Commitments';
};

export default function Gallery({
  tagline = 'Reliable Estimates for Reliable Results',
}: HeroSectionProps) {
  return (
    <div className="min-h-screen py-10" >
      <motion.h1
        className="text-center text-4xl font-bold mb-2 mt-5 text-gray-800 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        IMAGE GALLERY
      </motion.h1>

      <GalleryWithModal imageUrls={imageUrls} imageVariants={imageVariants} />
    </div>
  );
}
