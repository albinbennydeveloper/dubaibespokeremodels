import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { blogPosts } from "@/lib/blog/posts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Renovation Insights | Dubai Bespoke Remodels Blog",
  description: "Expert advice on luxury villa renovation, interior design trends, and fit-out costs in Dubai. Your guide to navigating property improvements in the UAE.",
  keywords: [
    "home renovation Dubai",
    "property renovation Dubai",
    "house renovation specialists in Dubai",
    "renovation company in Dubai",
    "home improvements Dubai",
    "interior design Dubai",
    "fit out company Dubai",
    "villa renovation Dubai",
    "apartment renovation Dubai",
    "luxury villa renovation company Dubai"
  ],
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-luxury-black text-luxury-white selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-luxury-charcoal/50 via-luxury-black to-luxury-black z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            The Journal
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Insights on <span className="italic text-luxury-champagne">Living Well</span>
          </h1>
          <p className="text-luxury-white/60 max-w-2xl text-lg font-light">
            Expert perspectives on the Dubai property market, luxury renovation trends, and the art of architectural transformation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative h-64 w-full overflow-hidden border border-white/5 mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                
                <div className="flex items-center gap-4 text-xs text-luxury-gold/80 uppercase tracking-widest mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl text-luxury-white mb-3 group-hover:text-luxury-champagne transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-luxury-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-luxury-gold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

