// components/Projects.tsx
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'TutorLink',
    description: 'A full-stack tutoring platform with booking, dashboards, and payment integration.',
    tech: ['Next.js', 'MongoDB', 'Stripe'],
    link: 'https://tutorlink.vercel.app',
  },
  // Add more projects as needed
];

const Projects = () => (
  <section id="projects">
    <h2 className="text-2xl font-semibold mb-6">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card key={project.title}>
          <CardContent className="p-4">
            <CardTitle>{project.title}</CardTitle>
            <p className="text-sm text-gray-600 my-2">{project.description}</p>
            <p className="text-xs text-gray-500">Tech: {project.tech.join(', ')}</p>
            <a href={project.link} target="_blank" className="text-blue-600 text-sm mt-2 block">View Project</a>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Projects;
