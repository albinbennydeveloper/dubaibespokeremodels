"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLeadModal } from "@/components/ui/lead-modal-context";

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useLeadModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-luxury-black/80 backdrop-blur-md py-4 border-b border-white/5"
            : "bg-transparent py-8"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl tracking-widest text-luxury-white group-hover:text-luxury-gold transition-colors duration-300">
                 DUBAI
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] text-luxury-gold uppercase">
              BESPOKE Remodels
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-luxury-white/80 hover:text-luxury-gold transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button variant="outline" size="sm" className="ml-4" onClick={openModal}>
              Consultation
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-luxury-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-luxury-black z-40 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-luxury-white hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="primary"
                size="lg"
                className="mt-8"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
              >
                Book Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

