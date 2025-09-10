import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Testimonials from "../components/Testimonials.jsx";
import LimitedOffer from "../components/LimitedOffer.jsx";
import CTABanner from "../components/CTABanner.jsx";
import FAQ from "../components/FAQ.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-1 bg-indigo-50">
      <Hero />

     {/* Awards, Ratings, and Certifications Image below quiz */}
<div className="flex justify-center py-6 bg-white">
  <motion.img
    src="./images/image1.png"
    alt="Awards, Ratings, and Certifications"
    className="w-[clamp(896px,100vw,1344px)] relative z-10"
    whileHover={{ y: -2, scale: 1.04 }}
    transition={{ type: "spring", stiffness: 350, damping: 20 }}
    draggable={false}
  />
</div>
      {/* Features */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Limited time Quiz Offer */}
      <LimitedOffer />

      {/* Spacer */}
      <section className="py-8" />

      {/* FAQ */}
      <FAQ />

      {/* Call to Action Banner */}
      <CTABanner />
    </main>
  );
}
