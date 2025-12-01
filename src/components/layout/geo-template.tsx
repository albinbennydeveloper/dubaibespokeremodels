import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GuideCTA } from "@/components/ui/guide-cta";
import Image from "next/image";

// Props to make the component reusable for any community
interface GeoPageProps {
  locationName: string; // e.g. "Jumeirah Park"
  serviceKeyword: string; // e.g. "Kitchen Remodel"
  description: string;
  heroImage: string;
}

// This is a reusable Template Component, not a Page itself.
// Usage: Create a new page.tsx in /app/location/[slug] and import this.
export function GeoLandingTemplate({
  locationName,
  serviceKeyword,
  description,
  heroImage,
}: GeoPageProps) {
  return (
    <main className="min-h-screen bg-luxury-black text-luxury-white selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={`${serviceKeyword} in ${locationName}`}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/40 to-luxury-black/90" />
        </div>

        <div className="container relative z-20 px-6 text-center">
          <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-6 block">
            Exclusive Service Area
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-luxury-white leading-tight mb-8">
            {serviceKeyword} <br />
            <span className="italic text-luxury-champagne">in {locationName}</span>
          </h1>
          <p className="text-luxury-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-12">
            {description}
          </p>
          <GuideCTA />
        </div>
      </section>

      {/* Local Authority Content */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert prose-headings:font-serif prose-a:text-luxury-gold">
          <h2>Why Choose Us for {locationName}?</h2>
          <p>
            Renovating in <strong>{locationName}</strong> requires specific knowledge of community guidelines, 
            master developer NOC processes, and architectural constraints. Whether it's a complete 
            <strong>{serviceKeyword}</strong> or a structural extension, our team manages the entire lifecycle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
            <div className="p-8 border border-white/10 bg-white/[0.02]">
              <h3 className="font-serif text-xl mb-4 text-luxury-gold">Community Compliance</h3>
              <p className="text-sm text-gray-400">
                We handle all approvals specific to {locationName}, ensuring zero fines or delays during your renovation.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/[0.02]">
              <h3 className="font-serif text-xl mb-4 text-luxury-gold">High-Value Returns</h3>
              <p className="text-sm text-gray-400">
                Our designs are data-driven to maximize property value per sq.ft in the {locationName} real estate market.
              </p>
            </div>
          </div>

          <h3>Our Process in {locationName}</h3>
          <ul>
            <li><strong>Initial Site Survey:</strong> We visit your property in {locationName} to assess structural integrity.</li>
            <li><strong>Design & Visualization:</strong> Photorealistic renders tailored to your villa's layout.</li>
            <li><strong>Approvals:</strong> We secure DCD and Developer NOCs (e.g. Nakheel/Emaar).</li>
            <li><strong>Execution:</strong> rapid, clean mobilization to minimize disruption to your neighbors.</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}

