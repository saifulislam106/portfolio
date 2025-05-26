
import Hero from '@/components/Hero';

import Skills from '@/components/Skills';
import Contact from '@/components/contact/Contact';
import Education from '@/components/Education';
import Projects from '@/components/projects/Projects';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
