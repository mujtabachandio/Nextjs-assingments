"use client";
import React from "react";

// Define an interface for project data
interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

// Define props for ProjectCard component
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

// ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tags,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black dark:bg-gray-800 transition-colors duration-300 ease-in-out hover:bg-red-600 dark:hover:bg-gray-900">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// ProjectsPage Component
const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      image: "https://img.freepik.com/premium-vector/web-design-ui-ux-programmer-with-computer-software-development-flat-illustration-vector_128772-1425.jpg?semt=ais_hybrid",
      title: "Project One",
      description:
        "This is a brief description of Project One. It highlights the main features and technologies used.",
      tags: ["#React", "#Node.js", "#CSS"],
    },
    {
      id: 2,
      image: "https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-project-idea-1024x683.webp",
      title: "Project Two",
      description:
        "A brief overview of Project Two. It includes notable achievements and challenges faced during development.",
      tags: ["#Django", "#Python", "#API"],
    },
    {
      id: 3,
      image: "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-2fa3a14/www.spinxdigital.com/app/uploads/2022/10/Awwwards-Nominee_-Spinx-Digital.png",
      title: "Project Three",
      description:
        "An overview of Project Three, focusing on user experience and design.",
      tags: ["#UI/UX", "#JavaScript", "#HTML"],
    },
    {
      id: 4,
      image: "https://designthing.co.uk/img/Website-Design-Essex.gif",
      title: "Project Four",
      description:
        "This project showcases innovative solutions for complex problems.",
      tags: ["#AI", "#MachineLearning", "#Python"],
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiX_s0BY8DiVhtXKRee6nFOTgx1Pn5kFGVA&s",
      title: "Project Five",
      description:
        "An exciting project that leverages modern web technologies.",
      tags: ["#Next.js", "#TypeScript", "#TailwindCSS"],
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvg9_QEbkPZeUraumTVfqq40ghy0pMB_XBPQ&s",
      title: "Project Six",
      description:
        "This project demonstrates effective use of API integrations.",
      tags: ["#API", "#React", "#Node.js"],
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-center text-6xl font-extrabold tracking-tight mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
