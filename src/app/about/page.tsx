import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GuideCTA } from "@/components/ui/guide-cta";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Dubai Bespoke Remodels",
  description: "We are Dubai's premier renovation consultancy. We advocate for the homeowner, connecting you with the region's most trusted contractors.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-luxury-black text-luxury-white selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            Who We Are
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            The Homeowner's <br />
            <span className="italic text-luxury-champagne">Advocate</span>
          </h1>
          <p className="text-luxury-white/60 max-w-2xl text-lg font-light leading-relaxed">
            We noticed a gap in the Dubai market: the disconnect between discerning homeowners and reliable, high-quality contractors. 
            Dubai Bespoke Remodels was founded to bridge that gap.
          </p>
        </div>
      </section>

      {/* Mission Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <h2 className="font-serif text-3xl text-luxury-white">Our Role</h2>
              <p className="text-luxury-white/60 leading-relaxed">
                We are not a construction company. We are a specialized consultancy and lead generation service dedicated to the luxury renovation sector.
              </p>
              <p className="text-luxury-white/60 leading-relaxed">
                Think of us as your "Renovation Concierge." Instead of you vetting dozens of unknown companies, checking licenses, and hoping for the best, we provide you with a shortlist of pre-vetted excellence.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="font-serif text-3xl text-luxury-white">Our Standard</h2>
              <p className="text-luxury-white/60 leading-relaxed">
                We only partner with contractors who have demonstrated:
              </p>
              <ul className="space-y-4 text-luxury-white/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                  Financial stability and proper licensing.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                  A portfolio of high-end finishes in premium zones.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                  Transparent pricing structures without hidden costs.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                  Consistent adherence to project timelines.
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-24 p-12 border border-luxury-gold/20 bg-luxury-gold/5 text-center">
             <h3 className="font-serif text-2xl mb-4">Transparency Commitment</h3>
             <p className="text-luxury-white/60 max-w-3xl mx-auto leading-relaxed">
               We believe in absolute clarity. Our service connects you with independent contracting entities. 
               All construction agreements, warranties, and liabilities are directly between you (the client) and the chosen contractor. 
               Our role is to facilitate the perfect introduction.
             </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Experience the Difference.</h2>
          <GuideCTA />
        </div>
      </section>

      <Footer />
    </main>
  );
}
