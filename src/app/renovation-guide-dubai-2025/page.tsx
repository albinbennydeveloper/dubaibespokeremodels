import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GuideCTA } from "@/components/ui/guide-cta";

export const metadata: Metadata = {
  title: "The Complete Dubai Home Renovation Guide (2025) | Permits, Costs & Process",
  description: "The definitive 2025 guide to luxury home renovation in Dubai. Covers DCD approvals, Emaar/Nakheel NOCs, villa extension rules, and premium fit-out costs.",
  openGraph: {
    title: "Dubai Luxury Renovation Guide 2025",
    description: "Everything you need to know before renovating a villa or penthouse in Dubai.",
    type: "article",
  },
};

export default function RenovationGuide() {
  return (
    <main className="bg-white text-luxury-black selection:bg-luxury-gold selection:text-white">
      <Navbar />
      
      {/* Hero Header */}
      <header className="relative h-[60vh] bg-luxury-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-charcoal/50 via-luxury-black to-luxury-black z-10" />
        <div className="container relative z-20 px-6 text-center">
          <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] block mb-6">
            The 2025 Authority Guide
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-luxury-white leading-tight mb-8">
            The Complete Dubai <br />
            <span className="italic text-luxury-champagne">Renovation Manual</span>
          </h1>
          <p className="text-luxury-white/60 max-w-2xl mx-auto text-lg font-light">
            A definitive resource for homeowners navigating permits, contractors, and luxury design standards in the UAE.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16">
        
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 hidden lg:block">
          <div className="sticky top-32 p-8 border border-luxury-black/5 bg-luxury-black/5 rounded-sm">
            <h4 className="font-serif text-xl mb-6">Table of Contents</h4>
            <nav className="space-y-4 text-sm">
              <a href="#approvals" className="block text-luxury-black/60 hover:text-luxury-gold transition-colors">1. DCD & Developer Approvals</a>
              <a href="#structural" className="block text-luxury-black/60 hover:text-luxury-gold transition-colors">2. Structural Modifications</a>
              <a href="#costs" className="block text-luxury-black/60 hover:text-luxury-gold transition-colors">3. Cost Breakdown (2025)</a>
              <a href="#contractors" className="block text-luxury-black/60 hover:text-luxury-gold transition-colors">4. Selecting a Contractor</a>
              <a href="#materials" className="block text-luxury-black/60 hover:text-luxury-gold transition-colors">5. Luxury Material Standards</a>
              <a href="#timeline" className="block text-luxury-black/60 hover:text-luxury-gold transition-colors">6. Timeline Expectations</a>
            </nav>
            
            <div className="mt-12 pt-8 border-t border-luxury-black/10">
              <p className="text-xs text-luxury-black/40 mb-4">Need expert guidance?</p>
              <GuideCTA />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <article className="lg:w-3/4 prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-luxury-gold">
          
          <section id="introduction" className="mb-16">
            <p className="lead text-2xl font-light text-luxury-black/80 leading-relaxed">
              Renovating a luxury property in Dubai is an exercise in precision. Whether you are looking for a <strong>Kitchen Remodel in Jumeirah Park</strong> or seeking an <strong>Emirates Hills Villa Contractor</strong>, the regulatory landscape here requires a strategic approach.
            </p>
          </section>

          <section id="approvals" className="mb-16 scroll-mt-32">
            <h2>1. Navigating Approvals: The &quot;Golden Permit&quot; Strategy</h2>
            <p>
              The most common bottleneck for Dubai renovations is not capital, but paperwork. Depending on your location (Palm Jumeirah, Emirates Hills, Downtown), you will face a unique matrix of required No Objection Certificates (NOCs).
            </p>
            
            <div className="my-8 p-8 bg-luxury-black text-luxury-white rounded-sm">
              <h4 className="text-luxury-gold mb-4 text-lg">The &quot;Big 3&quot; Permitting Bodies</h4>
              <ul className="list-none space-y-4 pl-0 m-0">
                <li className="flex gap-4">
                  <span className="text-luxury-gold font-bold">01.</span>
                  <div>
                    <strong className="block text-white">Dubai Municipality (DM)</strong>
                    <span className="text-white/60 text-sm">Required for all structural changes, external modifications, and layout alterations.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-luxury-gold font-bold">02.</span>
                  <div>
                    <strong className="block text-white">Dubai Civil Defense (DCD)</strong>
                    <span className="text-white/60 text-sm">Mandatory for fire safety compliance, especially in villas and high-rise penthouses.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-luxury-gold font-bold">03.</span>
                  <div>
                    <strong className="block text-white">Master Developer (Emaar/Nakheel/DP)</strong>
                    <span className="text-white/60 text-sm">The final gatekeeper. You cannot proceed without their specific community NOC.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="structural" className="mb-16 scroll-mt-32">
            <h2>2. Structural Modifications: What is Possible?</h2>
            <p>
              Many clients wish to extend their villas or combine penthouse units. In 2025, the rules for <strong>FAR (Floor Area Ratio)</strong> have become stricter in premium communities.
            </p>
            <ul>
              <li><strong>Villa Extensions:</strong> Generally allowed up to 10-15% of the plot limit, subject to setbacks.</li>
              <li><strong>Load Bearing Walls:</strong> Removal requires a structural engineer's calculation and DM approval.</li>
              <li><strong>Façade Changes:</strong> Altering the external look of a villa in a uniform community (like Meadows or Springs) is often restricted, whereas custom plots (Emirates Hills) offer more freedom.</li>
            </ul>
          </section>

          <section id="costs" className="mb-16 scroll-mt-32">
            <h2>3. The Investment: 2025 Cost Breakdown</h2>
            <p>
              &quot;Luxury&quot; is a broad term. In Dubai&apos;s high-end market, renovation costs generally fall into three tiers. Clients often ask about the <strong>High-End Bathroom Renovation Cost in Dubai</strong>, which can range significantly based on finishes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
              <div className="p-6 border border-luxury-black/10 bg-luxury-black/5">
                <h4 className="font-serif text-xl mb-2">Premium</h4>
                <p className="text-3xl font-light mb-4">AED 350<span className="text-sm text-gray-500">/sqft</span></p>
                <p className="text-sm text-gray-600">High-quality finishes, standard joinery, local marble.</p>
              </div>
              <div className="p-6 border border-luxury-gold bg-luxury-black text-white relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-luxury-gold text-luxury-black px-3 py-1 text-xs font-bold uppercase tracking-widest">Recommended</div>
                <h4 className="font-serif text-xl mb-2 text-luxury-gold">Luxury</h4>
                <p className="text-3xl font-light mb-4">AED 650<span className="text-sm text-gray-400">/sqft</span></p>
                <p className="text-sm text-gray-400">Italian marble, smart home integration, bespoke joinery, European fixtures.</p>
              </div>
              <div className="p-6 border border-luxury-black/10 bg-luxury-black/5">
                <h4 className="font-serif text-xl mb-2">Ultra-Prime</h4>
                <p className="text-3xl font-light mb-4">AED 1,200+<span className="text-sm text-gray-500">/sqft</span></p>
                <p className="text-sm text-gray-600">Rare materials, structural changes, complete automation, branded design.</p>
              </div>
            </div>
          </section>

          <section id="contractors" className="mb-16 scroll-mt-32">
            <h2>4. The &quot;Contractor Trap&quot; &amp; How to Avoid It</h2>
            <p>
              The Dubai market is flooded with &quot;turnkey&quot; fit-out companies. The danger lies in the details. A true luxury finish requires specialists, not generalists.
            </p>
            <p>
              <strong>Red Flags to Watch For:</strong>
            </p>
            <ul>
              <li><strong>&quot;We can start tomorrow&quot;</strong> - Good contractors have a waiting list or mobilization period.</li>
              <li><strong>&quot;We don&apos;t need DM approval for this&quot;</strong> - Never accept work without permits. You risk heavy fines.</li>
              <li><strong>Vague BOQs (Bill of Quantities)</strong> - Ensure every material is specified by brand, origin, and grade.</li>
            </ul>
          </section>

          <section id="faq" className="mb-16 scroll-mt-32">
            <h2>5. Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-6 mt-8">
              <div className="border border-luxury-black/10 rounded-sm p-6 bg-luxury-black/5">
                <h3 className="font-serif text-lg font-medium mb-2">How much does it cost to renovate a villa in Dubai?</h3>
                <p className="text-sm text-gray-600 m-0">
                  For a luxury finish, expect to pay between <strong>AED 350 to AED 650 per sq.ft</strong>. This includes premium materials, new joinery, and smart home integration. Ultra-luxury turnkey projects can exceed AED 800 per sq.ft.
                </p>
              </div>
              
              <div className="border border-luxury-black/10 rounded-sm p-6 bg-luxury-black/5">
                <h3 className="font-serif text-lg font-medium mb-2">Do I need approval for bathroom renovation in Dubai?</h3>
                <p className="text-sm text-gray-600 m-0">
                  If you are only changing tiles and fixtures, usually no. However, if you are moving plumbing points or modifying walls, you will need <strong>Dubai Municipality (DM) approval</strong> and an NOC from your building developer.
                </p>
              </div>

              <div className="border border-luxury-black/10 rounded-sm p-6 bg-luxury-black/5">
                <h3 className="font-serif text-lg font-medium mb-2">What is the difference between fit-out and renovation?</h3>
                <p className="text-sm text-gray-600 m-0">
                  &quot;Renovation&quot; typically implies restoring an old property (often involving structural changes), while <strong>&quot;Fit-out&quot;</strong> refers to installing interiors (ceilings, floors, partitions) into a new shell and core unit.
                </p>
              </div>

              <div className="border border-luxury-black/10 rounded-sm p-6 bg-luxury-black/5">
                <h3 className="font-serif text-lg font-medium mb-2">How long does a complete home renovation take?</h3>
                <p className="text-sm text-gray-600 m-0">
                  A standard 3-bedroom apartment takes <strong>3-4 months</strong>. A large 5-bedroom villa with structural extensions can take <strong>6-9 months</strong> to complete, including the permitting phase.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-24 pt-12 border-t border-gray-200 text-center">
             <h3 className="font-serif text-3xl mb-6">Planning a Renovation?</h3>
             <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
               Skip the uncertainty. Let our architectural team conduct a feasibility study for your property.
             </p>
             <GuideCTA />
          </section>

        </article>
      </div>
      
      <Footer />
    </main>
  );
}
