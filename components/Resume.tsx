// components/Resume.tsx
import { Button } from '@/components/ui/button';

const Resume = () => (
  <section id="resume">
    <h2 className="text-2xl font-semibold mb-4">Resume</h2>
    <p className="mb-4">You can view or download my resume below.</p>
    <a href="/resume.pdf" target="_blank">
      <Button>Download Resume</Button>
    </a>
  </section>
);

export default Resume;
