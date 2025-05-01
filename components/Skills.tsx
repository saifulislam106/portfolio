// components/Skills.tsx

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-950 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Over the past year, I've cultivated a robust skill set while building real-world projects. My background in mathematics also strengthens my logical thinking and problem-solving abilities.
        </p>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-800 dark:text-gray-100">
            <SkillBadge label="HTML5" />
            <SkillBadge label="CSS3 / Tailwind CSS" />
            <SkillBadge label="JavaScript (ES6+)" />
            <SkillBadge label="TypeScript" />
            <SkillBadge label="React.js" />
            <SkillBadge label="Next.js" />
            <SkillBadge label="Node.js" />
            <SkillBadge label="Express.js" />
            <SkillBadge label="MongoDB" />
            <SkillBadge label="Mongoose" />
            <SkillBadge label="Redux Toolkit" />
            <SkillBadge label="REST API" />
            <SkillBadge label="JWT / Auth" />
            <SkillBadge label="Zod / Form Validation" />
            <SkillBadge label="ShadCn" />
            <SkillBadge label="Git & GitHub" />
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-200">
            <SkillBadge label="Communication" />
            <SkillBadge label="Team Collaboration" />
            <SkillBadge label="Adaptability" />
            <SkillBadge label="Continuous Learning" />
            <SkillBadge label="Attention to Detail" />
            <SkillBadge label="Self-Motivation" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable badge component
const SkillBadge = ({ label }: { label: string }) => (
  <span className="inline-block bg-gray-200 dark:bg-gray-800 text-sm font-medium px-3 py-1 rounded-xl shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-800 transition">
    {label}
  </span>
);

export default Skills;
