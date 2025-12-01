"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Concept",
    description: "We begin with a private consultation to understand your vision, lifestyle, and the unique architectural constraints of your property.",
  },
  {
    number: "02",
    title: "Design & Approvals",
    description: "Our team handles all DCD, Emaar, or Nakheel approvals while crafting photorealistic 3D renders of your new space.",
  },
  {
    number: "03",
    title: "Precision Build",
    description: "Our master craftsmen execute the renovation with surgical precision, adhering to strict timelines and quality standards.",
  },
  {
    number: "04",
    title: "Curated Styling",
    description: "The final layer. We source exclusive furniture, art, and lighting to turn a renovated house into a bespoke home.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(212, 175, 55, 0)", "rgba(212, 175, 55, 1)", "rgba(212, 175, 55, 0)"]
  );

  return (
    <section ref={containerRef} className="py-32 bg-luxury-charcoal relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-4">
            The Methodology
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-luxury-white">
            Precision at Every Step
          </h3>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <motion.div
            style={{ background: lineColor }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number (Desktop Center) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-luxury-black border border-luxury-gold/30 rounded-full items-center justify-center text-luxury-gold font-serif text-lg z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                     <span className="text-luxury-gold font-serif text-2xl">{step.number}</span>
                     <div className="h-px flex-1 bg-white/10" />
                  </div>
                  
                  <h4 className="font-serif text-3xl text-luxury-white mb-4">
                    {step.title}
                  </h4>
                  <p className="text-luxury-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Empty Space for alternating grid */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

