"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaHtml5,
  // FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiZod,
} from "react-icons/si";

const skills = [
  { label: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { label: "CSS3 / Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { label: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { label: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { label: "React.js", icon: <FaReact className="text-sky-400" /> },
  { label: "Next.js", icon: <SiNextdotjs className="text-white dark:text-gray-300" /> },
  { label: "Node.js", icon: <FaNode className="text-green-600" /> },
  { label: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { label: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
  { label: "Zod", icon: <SiZod className="text-pink-500" /> },
  { label: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
];

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-20 bg-background max-w-5xl mx-auto px-2">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar py-6 px-2 scroll-smooth"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="min-w-[140px] flex-shrink-0 border border-border rounded-2xl bg-muted backdrop-blur-lg p-5 shadow-md text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-foreground">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
