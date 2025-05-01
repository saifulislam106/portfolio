// components/Hero.tsx

import { Button } from "./ui/button";


const Hero = () => (
  <section className="pt-24 text-center">
    <h1 className="text-4xl font-bold mb-4">Hi, I am Saiful Islam</h1>
    <p className="text-gray-600 mb-6">MERN Stack Developer with a passion for clean code and intuitive UI.</p>
    <div className="space-x-4">
      <a href="/resume.pdf" target="_blank"><Button>View Resume</Button></a>
      <a href="#contact"><Button variant="outline">Hire Me</Button></a>
    </div>
  </section>
);

export default Hero;
