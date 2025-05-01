import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => (
  <section className="mt-12 py-10 flex flex-col md:flex-row items-center justify-between bg-gray-50 dark:bg-gray-900 p-4">
    <div className="max-w-lg text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Saiful Islam
        </span>
        
      </h1>
      <p className="text-gray-600 text-base dark:text-gray-300 mb-6">
        A web developer skilled in HTML, CSS, JavaScript, React, Node.js,
        Next.js, Express, MongoDB, and TypeScript. I enjoy building clean,
        functional websites and applications, and I&apos;m always eager to learn
        new technologies. I&apos;m passionate about creating seamless user
        experiences and solving problems with code. Let’s connect!
      </p>
      <div className="space-x-4">
        <a href="/resume.pdf" target="_blank">
          <Button>View Resume</Button>
        </a>
        <a href="#contact">
          <Button variant="outline">Hire Me</Button>
        </a>
      </div>
    </div>
    <div className="relative mt-8 md:mt-0">
      {/* Image with gradient overlay */}
      <div className="relative w-full max-w-xs">
        <Image
          src="/assets/images/hero[1].jpg" 
          alt="Hero Image"
          height={400}
          width={400}
          className="mx-auto object-cover rounded-full shadow-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 rounded-full"></div>
      </div>
    </div>
  </section>
);

export default Hero;
