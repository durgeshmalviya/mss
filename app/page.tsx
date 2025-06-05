import Image from "next/image";

import SpotlightNewDemo from "./main/page";
import Navbar from "./nav/page";
import { motion, AnimatePresence } from "framer-motion";
import WeddingPage from "@/app/prewedding/page";
import { ParallaxScrollDemo } from '../app/main/reels'
import Gallery from "./gallery/page";
import Footer from "./footer/page";
import InstagramGallery from "./Cities/page";
import WhyUs from "./aboutus/whyus";



export default function Home() {
  return (
    <>
      <Navbar/>
      <SpotlightNewDemo/>
      <WeddingPage/>
  
      <InstagramGallery/>
     
      <Gallery/>
   
      <ParallaxScrollDemo/>
  
      <WhyUs/>
      <Footer/>

    </>
  );
}
