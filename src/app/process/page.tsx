import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GuideCTA } from "@/components/ui/guide-cta";

export const metadata: Metadata = {
  title: "Our Process | Dubai Bespoke Remodels",
  description: "How we curate the perfect renovation team for your luxury property. From consultation to contractor matching.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-luxury-black text-luxury-white selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            The Workflow
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Precision in <br />
            <span className="italic text-luxury-champagne">Every Step</span>
          </h1>
          <p className="text-luxury-white/60 max-w-2xl text-lg font-light leading-relaxed">
            We have refined the renovation journey into a seamless, transparent experience. 
            We act as your filter, ensuring only the most qualified professionals ever set foot on your property.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="relative border-l border-luxury-gold/20 ml-4 md:ml-12 space-y-24">
            
            {/* Step 1 */}
            <div className="relative pl-12 md:pl-24">
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-luxury-gold" />
              <span className="text-luxury-gold text-xs uppercase tracking-widest mb-2 block">01. Consultation</span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-white mb-6">The Discovery Call</h3>
              <p className="text-luxury-white/60 max-w-xl leading-relaxed">
                We begin with a deep dive into your vision. We discuss your property type, desired aesthetic, budget parameters, and timeline. This allows us to build a "Project Profile" that serves as the brief for our network.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 md:pl-24">
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-luxury-gold" />
              <span className="text-luxury-gold text-xs uppercase tracking-widest mb-2 block">02. Curated Matching</span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-white mb-6">The Selection</h3>
              <p className="text-luxury-white/60 max-w-xl leading-relaxed">
                We analyze our roster of vetted contractors and select the 2-3 firms that are perfectly suited for your specific requirements. We look at their current availability, specialization (e.g., villas vs. penthouses), and past performance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pl-12 md:pl-24">
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-luxury-gold" />
              <span className="text-luxury-gold text-xs uppercase tracking-widest mb-2 block">03. Introduction & Quotes</span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-white mb-6">The Connection</h3>
              <p className="text-luxury-white/60 max-w-xl leading-relaxed">
                We facilitate the introduction. You receive detailed proposals from the selected contractors. Because they come through us, you are assured of their "priority status" attention and competitive pricing.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative pl-12 md:pl-24">
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-luxury-gold" />
              <span className="text-luxury-gold text-xs uppercase tracking-widest mb-2 block">04. Selection & Build</span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-white mb-6">The Realization</h3>
              <p className="text-luxury-white/60 max-w-xl leading-relaxed">
                You choose the partner you feel most comfortable with. Contracts are signed, and the transformation begins. We remain available as an impartial advisor throughout the process.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Your Vision. Our Network.</h2>
          <GuideCTA />
        </div>
      </section>

      <Footer />
    </main>
  );
}
