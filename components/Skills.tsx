// components/Skills.tsx
import { Badge } from '@/components/ui/badge';

const skills = [
  'HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Express', 'MongoDB', 'Redux', 'Mongoose'
];

const Skills = () => (
  <section id="skills">
    <h2 className="text-2xl font-semibold mb-6">Skills</h2>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}
    </div>
  </section>
);

export default Skills;
