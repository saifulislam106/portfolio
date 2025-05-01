
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="space-y-24 py-12">
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}
