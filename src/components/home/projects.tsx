"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Palm Jumeirah Signature Villa",
    category: "Total Renovation",
    location: "Frond N, The Palm",
    // High-end modern white villa with pool, dusk lighting
    image: "/images/project-palm.jpg",
    size: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    category: "Interior Fit-Out",
    location: "Burj Khalifa District",
    // Luxury dark interior, very architectural
    image: "/images/hero-poster.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Emirates Hills Mansion",
    category: "Architecture & Landscape",
    location: "Sector E",
    // Grand exterior, manicured garden
    image: "/images/project-emirates.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Dubai Marina Duplex",
    category: "Modernization",
    location: "Marina Gate",
    // Double height ceiling, modern
    image: "/images/project-marina.jpg",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
];

export function Projects() {
  return (
    <section className="py-32 bg-luxury-black text-luxury-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-4">
              Selected Works
            </h2>
            <h3 className="font-serif text-4xl md:text-6xl leading-tight flex flex-col">
              <TextReveal text="Curated" />
              <span className="italic text-luxury-champagne">
                 <TextReveal text="Excellence" delay={0.1} />
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Link href="/portfolio">
              <Button variant="outline" className="group">
                View All Projects 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden border border-white/5 ${project.size} min-h-[300px]`}
            >
              {/* Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-luxury-gold text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </p>
                  <h4 className="font-serif text-2xl md:text-3xl text-white mb-1">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-sm font-light">
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
