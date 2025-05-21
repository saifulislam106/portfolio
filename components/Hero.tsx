"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Saiful Islam
          </span>
          <span className="text-purple-500">.</span>
        </h1>

        {/* Dynamic Typing Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6 min-h-[30px]">
          <Typewriter
            words={["MERN Stack Developer", "Frontend Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-8">
          I specialize in building clean, functional, and responsive web applications using modern technologies like React, TypeScript, and Node.js. Passionate about creating great UX and solving real-world problems with code.
        </p>

        {/* Buttons with Dynamic Border Animation */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a href="./assets/Saiful Islam's Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="relative group inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-600 rounded-md shadow-md hover:shadow-purple-500/50">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-purple-600 duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                View Resume
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                View Resume
              </span>
              <span className="relative invisible">View Resume</span>
            </button>
          </a>

          <a href="#contact">
            <button className="relative group inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-purple-600 transition duration-300 ease-out border-2 border-purple-600 rounded-md shadow-md hover:shadow-purple-500/50">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease">
                Contact Me
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                Contact Me
              </span>
              <span className="relative invisible">Contact Me</span>
            </button>
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="mb-12 md:mb-0 relative"
      >
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-xl animate-pulse">
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden">
            <Image
              src="/assets/images/hero[1].jpg"
              alt="Saiful Islam"
              height={400}
              width={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
