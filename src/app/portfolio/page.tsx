import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GuideCTA } from "@/components/ui/guide-cta";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Portfolio | Dubai Bespoke Remodels",
  description: "Explore our curated collection of luxury villa renovations, penthouse fit-outs, and architectural masterpieces in Dubai's most exclusive communities.",
};

const projects = [
  {
    id: 1,
    title: "Signature Villa Transformation",
    location: "Palm Jumeirah, Frond N",
    category: "Total Renovation",
    description: "A complete structural overhaul of a garden home, converting a standard layout into an open-plan masterpiece with floor-to-ceiling glazing and Travertine flooring.",
    image: "/images/project-palm.jpg",
    stats: ["6,500 sq.ft", "8 Months", "Turnkey"],
  },
  {
    id: 2,
    title: "The Sky Penthouse",
    location: "Downtown Dubai",
    category: "Interior Fit-Out",
    description: "Ultra-modern minimalist interior for a triplex penthouse. Featuring smart automation, acoustic paneling, and a bespoke marble kitchen island.",
    image: "/images/hero-poster.jpg",
    stats: ["4,200 sq.ft", "5 Months", "Fit-Out"],
  },
  {
    id: 3,
    title: "Emirates Hills Estate",
    location: "Sector E, Emirates Hills",
    category: "Architecture & Landscape",
    description: "Classic contemporary fusion. We extended the living quarters, redesigned the façade for modern curb appeal, and landscaped the private grounds.",
    image: "/images/project-emirates.jpg",
    stats: ["12,000 sq.ft", "14 Months", "Construction"],
  },
  {
    id: 4,
    title: "Marina Heights Duplex",
    location: "Dubai Marina",
    category: "Modernization",
    description: "Revitalizing a dated duplex into a chic, industrial-luxe living space. Custom steel joinery and polished concrete floors define this urban retreat.",
    image: "/images/project-marina.jpg",
    stats: ["3,800 sq.ft", "4 Months", "Renovation"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-luxury-black text-luxury-white selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-luxury-charcoal/50 via-luxury-black to-luxury-black z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            Our Masterpieces
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Curated <span className="italic text-luxury-champagne">Excellence</span>
          </h1>
          <p className="text-luxury-white/60 max-w-2xl text-lg font-light leading-relaxed">
            A showcase of our finest work across Dubai's most prestigious addresses. 
            Each project is a testament to our obsession with detail, quality, and architectural integrity.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-3/5 relative h-[50vh] lg:h-[70vh] group overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute bottom-0 left-0 bg-luxury-black/90 border-t border-r border-luxury-gold/30 p-6 z-20 backdrop-blur-md">
                    <div className="flex gap-6 text-xs uppercase tracking-widest text-luxury-gold">
                      {project.stats.map((stat, i) => (
                        <span key={i} className={i !== 0 ? "pl-6 border-l border-white/10" : ""}>
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5 space-y-6">
                  <span className="text-luxury-gold text-xs uppercase tracking-widest">
                    {project.category} • {project.location}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-luxury-white leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-luxury-white/60 leading-relaxed text-lg font-light">
                    {project.description}
                  </p>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-luxury-charcoal/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to start your transformation?</h2>
          <p className="text-luxury-white/60 mb-8 max-w-xl mx-auto">
            Our schedule for {new Date().getFullYear()} is filling up. Secure your consultation slot today.
          </p>
          <GuideCTA />
        </div>
      </section>

      <Footer />
    </main>
  );
}
