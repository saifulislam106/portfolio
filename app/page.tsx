
import Hero from '@/components/Hero';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/contact/Contact';
import Education from '@/components/Education';

export default function Home() {
  return (
    <div className="space-y-24 py-12">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
