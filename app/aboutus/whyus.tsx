"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="bg-[#f5f5dc] px-6 py-12 md:py-16 rounded-full  "  >
      <div className="max-w-5xl mx-auto text-center bg-red-300" >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Why Choose Maestro Films?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="  text-gray-800 leading-relaxed mb-6"
        >
          In today’s digital age, finding a wedding or pre-wedding photographer
          isn’t difficult—but finding the right one is a true challenge.
          With countless photographers out there, choosing someone who can truly understand and capture your story is what makes all the difference.
          Your wedding day is more than just an event—it’s a collection of priceless moments you’ll want to relive forever.
          That’s where Meaatro Films steps in. At Meaatro Films, we believe that photography isn’t just about clicking pictures; it’s about building trust and
          preserving your most cherished memories with heart, creativity, and emotion.
          From dreamy pre-wedding shoots to capturing every candid smile at your wedding, we are with you every step of the way.
        </motion.p>
        <center>After Booking Process</center>
        <p>
          Once your booking is confirmed, we begin the creative journey together.
          We sit down with you to understand your vision, preferences, and the style you want—be it cinematic, traditional,
          or candid. From locations and outfits to storyboarding your shoot, everything is planned to perfection.
          Your comfort and clarity are our priority.</p>
        <center>Gear That Matches Our Passion</center>
        <p>
          At Meaatro Films, we use only the latest high-end photography and videography
          equipment to ensure top-notch quality.We offer a unique blend of traditional, candid & cinematic 
          photography that capturs all your special moments.
        </p>
      </div>
    </section>
  );
}
