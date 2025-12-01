import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { Projects } from "@/components/home/projects";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-black selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Footer />
    </main>
  );
}
