import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getBlogPost, blogPosts } from "@/lib/blog/posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { GuideCTA } from "@/components/ui/guide-cta";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate Metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Dubai Bespoke Remodels`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.image],
    },
  };
}

// Generate Static Params for SSG
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white text-luxury-black selection:bg-luxury-gold selection:text-white">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 pb-12">
          <div className="container mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-luxury-white/80 hover:text-luxury-gold mb-6 transition-colors text-sm uppercase tracking-widest"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Journal
            </Link>
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-white/20 text-white text-[10px] uppercase tracking-widest rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-white max-w-4xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-luxury-gold prose-img:rounded-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Post-Article CTA */}
          <div className="mt-16 p-8 bg-luxury-black/5 border border-luxury-black/10 rounded-sm">
            <h3 className="font-serif text-2xl mb-4">Inspired to renovate?</h3>
            <p className="mb-6 text-gray-600">
              Whether it's a villa extension or a complete fit-out, our team is ready to bring this vision to life.
            </p>
            <GuideCTA />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-12">
          <div className="sticky top-32">
            <div className="p-8 bg-luxury-black text-white">
              <h4 className="font-serif text-xl mb-4 text-luxury-gold">About Us</h4>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Dubai Bespoke Remodels is the premier <strong>renovation company in Dubai</strong>, specializing in luxury turnkey solutions for villas and penthouses.
              </p>
              <Link href="/portfolio" className="w-full">
                <Button variant="outline" className="w-full">View Portfolio</Button>
              </Link>
            </div>
          </div>
        </aside>
      </article>

      <Footer />
    </main>
  );
}
