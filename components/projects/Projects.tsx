/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projectData = [
  {
    id: 1,
    title: "Paddy",
    description:
      "Paddy is a simple web application that helps farmers manage paddy field activities and track seasonal data efficiently.",
    technologies: ["JavaScript", "Tailwind", "DOM"],
    coreFeatures: [
      "uses raw javaScript and DOM manipulation",
      "Tailwind CSS for styling",
      "Responsive design for mobile usage",
      "Browser local storage support",
    ],
    challenges: [
      "Understanding DOM manipulation without a framework",
      "Implementing responsiveness using only Tailwind CSS",
    ],
    liveLink: "https://saifulislam106.github.io/paddy-re-a6/",
    image: "/assets/projectImgs/image.png",
    project_type: "Personal Project",
    codeLink: "https://github.com/saiful-dev/paddy",
  },
  {
    id: 2,
    title: "TutorLink",
    description:
      "TutorLink is a full-stack tutoring platform that connects students with tutors, offering session booking, dashboards, and secure payments.",
    technologies: ["Next.js", "Tailwind", "ShadCn", "MongoDB", "Stripe"],
    coreFeatures: [
      "Student-tutor booking system",
      "Tutor and student dashboards",
      "Secure Stripe payment integration",
      "Authentication with JWT",
    ],
    challenges: [
      "Handling role-based access in Next.js",
      "Integrating Stripe checkout securely",
    ],
    liveLink: "https://tutor-link-two.vercel.app/",
    image: "/assets/projectImgs/blogs.png",
    project_type: "Team Project",
    codeLink: "https://github.com/saiful-dev/tutorlink",
  },
  {
    id: 3,
    title: "BookStore",
    description:
      "BookStore is an e-commerce application for selling books online, featuring authentication, cart functionality, and product filtering.",
    technologies: ["Next.js", "Tailwind", "ShadCn", "MongoDB", "Stripe"],
    coreFeatures: [
      "User registration/login",
      "Shopping cart with quantity update",
      "Book filtering by category and price",
    ],
    challenges: [
      "Implementing persistent cart state",
      "Improving UX with instant feedback",
    ],
    liveLink: "https://book-shop-frontend-vert.vercel.app/",
    image: "/assets/projectImgs/book-shop.png",
    project_type: "Team Project",
    codeLink: "https://github.com/saiful-dev/bookstore",
  },
  {
    id: 4,
    title: "NestShop",
    description:
      "NestShop is a full-stack e-commerce site built with the MERN stack, offering users a seamless product browsing and purchasing experience.",
    technologies: ["JavaScript", "Tailwind", "Express"],
    coreFeatures: [
      "Product browsing and search",
      "User authentication",
      "Basic cart and order placement",
    ],
    challenges: [
      "Structuring the backend API cleanly",
      "Managing cart logic in localStorage",
    ],
    liveLink: "https://nest-shop-client.vercel.app/",
    image: "/assets/projectImgs/nest.png",
    project_type: "Personal Project",
    codeLink: "https://github.com/saiful-dev/nestshop",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="py-16 container">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-[#1e1e1e] rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
          >
            <Image
              src={project.image}
              alt={project.title}
              height={200}
              width={400}
              className="object-cover h-48 w-full"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-auto">
                <Button
                  // variant="outline"
                  onClick={() => setSelected(project)}
                  className="w-full bg-purple-600 px-4 py-2 rounded-md text-white hover:bg-purple-700 transition"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1e1e1e] rounded-xl shadow-lg p-6">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>
              <Image
                width={800}
                height={400}
                src={selected.image}
                alt={selected.title}
                className="rounded-md mb-6 object-cover w-full h-60"
              />
              <p className="text-base text-gray-800 dark:text-gray-300 mb-4">
                {selected.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                  Core Features:
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  {selected.coreFeatures?.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                  Challenges:
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  {selected.challenges?.map((challenge: string, idx: number) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-muted-foreground mb-4">
                <strong>Technologies:</strong> {selected.technologies.join(", ")}
              </div>

              <div className="text-sm text-muted-foreground mb-4">
                <strong>Project Type:</strong> {selected.project_type}
              </div>

              <div>
                <a
                  href={selected.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-purple-600 px-4 py-2 rounded-md text-white hover:bg-purple-700 transition">Live Site</Button>
                </a>
              
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
