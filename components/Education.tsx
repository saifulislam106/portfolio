"use client";

import { motion } from "framer-motion";

const educationList = [
  {
    degree: "M.Sc. in Mathematics",
    year: "2024 – 2025",
    institution: "Chattogram College, National University, Bangladesh",
  },
  {
    degree: "B.Sc. in Mathematics",
    year: "2018 – 2023",
    institution: "National University, Bangladesh",
    cgpa: "CGPA: 3.21 (out of 4.00)",
  },
 
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-2 max-w-5xl mx-auto bg-background">
      <div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Educational Info</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey has built a strong foundation in mathematics, logical thinking,
            and problem-solving — all of which shape my approach to software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-500 pl-6 space-y-12">
          {educationList.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 bg-indigo-500 border-4 border-background dark:border-gray-950 rounded-full shadow-md animate-pulse" />

              {/* Content */}
              <div className="bg-muted rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground">
                  {edu.degree}{" "}
                  <span className="text-sm text-indigo-500">({edu.year})</span>
                </h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                {edu.cgpa && (
                  <p className="text-sm mt-1 text-muted-foreground">{edu.cgpa}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
