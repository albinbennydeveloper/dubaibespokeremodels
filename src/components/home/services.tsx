"use client";

import { motion } from "framer-motion";
import { Paintbrush, Ruler, Hammer, Gem } from "lucide-react";

const services = [
  {
    title: "Luxury Villa Renovation",
    description: "Complete structural transformation of luxury Dubai villas. From extension approvals to final handover.",
    icon: Hammer,
  },
  {
    title: "Luxury Apartment Renovation",
    description: "Turnkey fit-outs for Downtown penthouses and Marina apartments. Maximizing views, space, and exclusivity.",
    icon: Ruler,
  },
  {
    title: "Turnkey Design Build",
    description: "A seamless, all-in-one service. We handle design, permits, and construction for a stress-free experience.",
    icon: Paintbrush,
  },
  {
    title: "Interior Styling",
    description: "Curated furniture, art sourcing, and lighting design to elevate your property's final aesthetic.",
    icon: Gem,
  },
];

export function Services() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="mb-24 md:flex md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-4">
              Our Expertise
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-luxury-white leading-tight">
              We Craft Spaces That <br />
              <span className="italic text-luxury-champagne">Define Distinction</span>
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-luxury-white/60 max-w-md mt-8 md:mt-0 text-sm leading-relaxed"
          >
             Specializing in turnkey renovations for Palm Jumeirah, Emirates Hills, and Downtown Dubai properties.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
    >
      <div className="mb-8 text-luxury-gold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <service.icon strokeWidth={1} size={40} />
      </div>
      
      <h4 className="font-serif text-2xl text-luxury-white mb-4 group-hover:text-luxury-champagne transition-colors duration-300">
        {service.title}
      </h4>
      
      <p className="text-luxury-white/50 text-sm leading-relaxed mb-8">
        {service.description}
      </p>

      <div className="absolute bottom-8 left-8 w-8 h-px bg-luxury-gold/30 group-hover:w-16 transition-all duration-500" />
    </motion.div>
  );
}

