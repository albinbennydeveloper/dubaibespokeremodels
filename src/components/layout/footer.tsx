"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useLeadModal } from "@/components/ui/lead-modal-context";

export function Footer() {
  const { openModal } = useLeadModal();

  return (
    <footer className="bg-luxury-black text-luxury-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="block mb-8">
              <span className="font-serif text-3xl text-luxury-white">
                Dubai <span className="text-luxury-gold">Bespoke</span> Remodels
              </span>
            </Link>
            <p className="text-luxury-white/60 max-w-md leading-relaxed mb-8">
              Elevating Dubai's most prestigious properties with architectural precision and bespoke interior craftsmanship.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-gold text-xs uppercase tracking-widest mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/portfolio" className="text-luxury-white/60 hover:text-luxury-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-luxury-white/60 hover:text-luxury-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-luxury-white/60 hover:text-luxury-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-luxury-white/60 hover:text-luxury-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-luxury-gold text-xs uppercase tracking-widest mb-8">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-luxury-white/60 text-sm leading-relaxed mb-4">
                For all inquiries, please use our secure consultation portal.
              </li>
              <li>
                <Button variant="outline" size="sm" onClick={openModal}>
                  Book Private Consultation
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-2">
            <div className="text-luxury-white/40 text-sm">
              © 2025 Dubai Bespoke Remodels. All rights reserved.
            </div>
            <p className="text-[10px] text-luxury-white/20 max-w-xl leading-relaxed">
              Dubai Bespoke Remodels operates as a premier renovation consultancy and lead generation service. We are not a direct contracting entity; we curate and vet top-tier licensed contractors to ensure your project is executed by the region's best.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-luxury-white/40">
            <Link href="/privacy" className="hover:text-luxury-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-luxury-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
