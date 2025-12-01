import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GuideCTA } from "@/components/ui/guide-cta";
import { ShieldCheck, Gem, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Dubai Bespoke Remodels",
  description: "We connect you with Dubai's top-tier, pre-vetted contractors. One consultation, multiple premium quotes, zero stress.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-luxury-black text-luxury-white selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-luxury-charcoal/50 via-luxury-black to-luxury-black z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            The Bespoke Advantage
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Why Settle for One <br />
            <span className="italic text-luxury-champagne">When You Can Access the Best?</span>
          </h1>
          <p className="text-luxury-white/60 max-w-2xl text-lg font-light leading-relaxed">
            Navigating Dubai's renovation market is overwhelming. We simplify it. 
            We are your gateway to a curated network of the region's most elite, licensed, and proven contractors.
          </p>
        </div>
      </section>

      {/* Value Props Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-12 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 group">
              <div className="mb-8 text-luxury-gold opacity-60 group-hover:opacity-100 transition-opacity">
                <ShieldCheck size={48} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-3xl mb-4">Rigorous Vetting</h3>
              <p className="text-luxury-white/60 leading-relaxed">
                We don't work with just anyone. Our network consists only of contractors with verified trade licenses, insurance, and a proven track record of delivering luxury finishes in communities like Palm Jumeirah and Emirates Hills.
              </p>
            </div>

            <div className="p-12 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 group">
              <div className="mb-8 text-luxury-gold opacity-60 group-hover:opacity-100 transition-opacity">
                <Users size={48} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-3xl mb-4">Single Point of Entry</h3>
              <p className="text-luxury-white/60 leading-relaxed">
                Forget calling 10 different companies and repeating your story. Tell us your vision once, and we match you with the 2-3 most suitable architectural firms for your specific needs.
              </p>
            </div>

            <div className="p-12 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 group">
              <div className="mb-8 text-luxury-gold opacity-60 group-hover:opacity-100 transition-opacity">
                <TrendingUp size={48} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-3xl mb-4">Competitive Excellence</h3>
              <p className="text-luxury-white/60 leading-relaxed">
                When contractors know they are competing for your business through our platform, you get sharper pricing, clearer timelines, and their "A-Team" dedication.
              </p>
            </div>

            <div className="p-12 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 group">
              <div className="mb-8 text-luxury-gold opacity-60 group-hover:opacity-100 transition-opacity">
                <Gem size={48} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-3xl mb-4">Bespoke Matching</h3>
              <p className="text-luxury-white/60 leading-relaxed">
                We align you with specialists. If you need a marble-heavy Italian kitchen, we connect you with artisans, not generalists. Your project deserves expertise, not experimentation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Stop Searching. Start Building.</h2>
          <p className="text-luxury-white/60 mb-8 max-w-xl mx-auto">
            Let us do the heavy lifting. Secure your private consultation today.
          </p>
          <GuideCTA />
        </div>
      </section>

      <Footer />
    </main>
  );
}
