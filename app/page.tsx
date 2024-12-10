import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Pricing } from '@/components/sections/pricing';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-[2000px]">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  );
}