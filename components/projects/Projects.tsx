// components/Projects.tsx
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    title: 'TutorLink',
    description: 'A full-stack tutoring platform with booking, dashboards, and payment integration.',
    tech: ['Next.js', 'Tailwind', 'ShadCn', 'MongoDB', 'Stripe'],
    link: 'https://tutor-link-two.vercel.app/',
    image: '/assets/projectImgs/blogs.png',
    project_type: 'Team Project',
  },
  {
    title: 'BookStore',
    description: 'An online bookstore with user authentication and a shopping cart.',
    tech: ['Next.js', 'Tailwind', 'ShadCn', 'MongoDB', 'Stripe'],
    link: 'https://book-shop-frontend-vert.vercel.app/',
    image: '/assets/projectImgs/book-shop.png',
    project_type: 'Team Project',
  },
  {
    title: 'NestShop',
  description: 'An e-commerce platform with user authentication and a shopping cart.',
    tech: ["JavaScript",'Tailwind', "Express" ],
    link: 'https://nest-shop-client.vercel.app/',
    image: '/assets/projectImgs/nest.png',
    project_type: 'Personal Project',
  },
  {
    title: 'Paddy',
  description: 'A simple web application for managing paddy fields.',
    tech: ["JavaScript",'Tailwind', "DOM" ],
    link: 'https://saifulislam106.github.io/paddy-re-a6/',
    image: '/assets/projectImgs/image.png',
    project_type: 'Personal Project',
  },
];

const Projects = () => (
  <section id="projects" className="py-16 px-4 md:px-8">
    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Card
          key={project.title}
          className="rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <CardContent className="p-4">
            {/* Project Image */}
            <Image
              src={project.image || '/assets/default.png'}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />

            {/* Title and Project Type inline */}
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium ml-2">
                {project.project_type}
              </span>
            </div>

            {/* Project Description */}
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>

            {/* Tech Stack Section */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold dark:text-gray-400 text-gray-800 mb-2">Using Technology:</h4>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className=" text-white font-medium px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* View Project Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-white bg-purple-600 px-4 py-2 rounded-md transition"
            >
              View Project
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Projects;
