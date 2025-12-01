"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { useLeadModal } from "@/components/ui/lead-modal-context";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const { openModal } = useLeadModal();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const child: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-luxury-black/90 z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overall dimming */}
        
        {/* Mesh Gradient Overlay for Texture */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] z-20 mix-blend-overlay" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          className="h-full w-full object-cover scale-105"
        >
          <source src="/videos/hero-luxury.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-30 h-full container mx-auto px-6 flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={child} className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-luxury-gold" />
            <span className="text-luxury-gold text-sm uppercase tracking-[0.3em]">
              Est. 2025
            </span>
          </motion.div>

        <motion.h1
          variants={child}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-luxury-white mb-6"
        >
          Dubai <span className="italic text-luxury-gold">Bespoke</span> Remodels
        </motion.h1>

          <motion.p
            variants={child}
            className="text-lg md:text-xl text-luxury-white/80 max-w-xl font-light leading-relaxed mb-10"
          >
            The premier authority in <span className="text-white">Luxury Apartment Renovation Dubai</span> and <span className="text-white">Bespoke Villa Fit-Outs</span>. 
            We transform properties into architectural masterpieces.
          </motion.p>

          <motion.div variants={child} className="flex flex-wrap gap-6">
            <Button size="lg" className="px-8" onClick={openModal}>
              Request Private Audit
            </Button>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-luxury-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>
    </section>
  );
}
