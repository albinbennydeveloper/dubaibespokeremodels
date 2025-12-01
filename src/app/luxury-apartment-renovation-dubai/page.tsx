import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GuideCTA } from "@/components/ui/guide-cta";
import { CheckCircle, Star, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Apartment Renovation Dubai | Penthouse & Loft Specialists",
  description: "The #1 choice for luxury apartment renovation in Dubai. We specialize in high-end fit-outs for Downtown, Marina, and Palm Jumeirah residences.",
  keywords: [
    "Luxury Apartment Renovation Dubai",
    "Penthouse Renovation Dubai",
    "Apartment Fit Out Dubai",
    "Dubai Marina Apartment Renovation",
    "Downtown Dubai Penthouse Design",
    "Luxury Interior Design Dubai"
  ],
  openGraph: {
    title: "Luxury Apartment Renovation Dubai | Bespoke Fit-Outs",
    description: "Transform your Dubai apartment into a world-class residence. Expert design and build services for luxury properties.",
    images: ["/images/hero-poster.jpg"],
  },
};

export default function ApartmentRenovationPage() {
  return (
    <main className="min-h-screen bg-luxury-black text-luxury-white selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />

      {/* SEO Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] z-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/90 to-luxury-black z-0" />
        
        {/* Background Image Hint */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 z-0">
           <Image 
             src="/images/hero-poster.jpg" 
             alt="Luxury Apartment Renovation Dubai" 
             fill 
             className="object-cover mask-image-gradient"
             priority
           />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="inline-flex items-center gap-2 border border-luxury-gold/30 rounded-full px-4 py-1.5 mb-6 bg-luxury-gold/5 backdrop-blur-sm">
            <Star size={12} className="text-luxury-gold" fill="currentColor" />
            <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-medium">
              #1 Rated for Penthouse & Apartment Fit-Outs
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 max-w-4xl">
            Luxury Apartment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-luxury-champagne italic pr-4">
              Renovation Dubai
            </span>
          </h1>
          
          <p className="text-luxury-white/70 text-xl max-w-2xl leading-relaxed mb-10 font-light">
            Elevate your residence in <strong>Downtown</strong>, <strong>Dubai Marina</strong>, or <strong>Palm Jumeirah</strong>. 
            We deliver turnkey apartment renovations with precision engineering and Italian craftsmanship.
          </p>

          <GuideCTA />
        </div>
      </section>

      {/* Trust Signals Grid */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <Award className="text-luxury-gold" size={32} strokeWidth={1} />
              <div>
                <h3 className="font-serif text-2xl">Top Tier</h3>
                <p className="text-xs uppercase tracking-widest text-white/40">Licensed Contractors</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <Clock className="text-luxury-gold" size={32} strokeWidth={1} />
              <div>
                <h3 className="font-serif text-2xl">12 Weeks</h3>
                <p className="text-xs uppercase tracking-widest text-white/40">Avg. Turnaround</p>
              </div>
            </div>
             <div className="flex flex-col items-center text-center gap-4">
              <CheckCircle className="text-luxury-gold" size={32} strokeWidth={1} />
              <div>
                <h3 className="font-serif text-2xl">100%</h3>
                <p className="text-xs uppercase tracking-widest text-white/40">Approval Record (DCD)</p>
              </div>
            </div>
             <div className="flex flex-col items-center text-center gap-4">
              <Star className="text-luxury-gold" size={32} strokeWidth={1} />
              <div>
                <h3 className="font-serif text-2xl">5-Star</h3>
                <p className="text-xs uppercase tracking-widest text-white/40">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative h-[600px] border border-white/10">
             <Image 
               src="/images/project-marina.jpg" 
               alt="Modern Apartment Renovation Dubai Marina"
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
             <div className="absolute bottom-8 left-8">
                <p className="text-luxury-gold text-xs uppercase tracking-widest mb-2">Project Spotlight</p>
                <h4 className="font-serif text-3xl">Marina Gate Duplex</h4>
             </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Why We Are the Leaders in <span className="text-luxury-gold">Apartment Renovations</span>
            </h2>
            
            <div className="space-y-6 text-luxury-white/70 leading-relaxed">
              <p>
                Renovating an apartment in Dubai comes with unique challenges: <strong>strata approvals</strong>, <strong>noise restrictions</strong>, and <strong>logistics</strong> (elevators, parking).
              </p>
              <p>
                Unlike general contractors, our specialized teams understand the nuances of working in high-rise towers like <em>Burj Khalifa</em>, <em>Princess Tower</em>, and <em>The Address</em>. We handle all NOCs (No Objection Certificates) from master developers like Emaar and Nakheel.
              </p>
              <p>
                From maximizing limited square footage with smart storage solutions to installing acoustic flooring that meets building codes, we ensure your <strong>luxury apartment renovation</strong> is seamless and stress-free.
              </p>
            </div>

            <div className="pt-4">
               <h3 className="text-white font-medium mb-4">Our Apartment Expertise Includes:</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 {["Penthouse Structural Changes", "Smart Home Integration", "Custom Joinery & Wardrobes", "Luxury Bathroom Remodeling", "Open-Plan Kitchen Conversions", "Acoustic Soundproofing"].map((item) => (
                   <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                     <CheckCircle size={14} className="text-luxury-gold" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-12">Prime Communities We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Downtown Dubai", "Dubai Marina", "Palm Jumeirah", "Jumeirah Beach Residence (JBR)", "Business Bay", "DIFC", "City Walk", "Bluewaters Island"].map((area) => (
              <span key={area} className="px-6 py-3 border border-white/10 rounded-full text-sm hover:border-luxury-gold hover:text-luxury-gold transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl mb-6">Transform Your Apartment Today</h2>
            <p className="text-white/60 mb-8">Book your complimentary site survey and feasibility study.</p>
            <GuideCTA />
         </div>
      </section>

      <Footer />
    </main>
  );
}

