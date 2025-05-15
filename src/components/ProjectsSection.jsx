import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const projects = [
  {
    title: "TalkASTU",
    description: "A university social media app using the PERN stack.",
    image: "https://placehold.co/400x250",
    link: "#",
    tech: [<FaReact />, <FaNodeJs />, <SiPostgresql />],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with React and Tailwind.",
    image: "https://placehold.co/400x250",
    link: "#",
    tech: [<FaReact />, <FaCss3Alt />],
  },
  {
    title: "TalkASTU",
    description: "A university social media app using the PERN stack.",
    image: "https://placehold.co/400x250",
    link: "#",
    tech: [<FaReact />, <FaNodeJs />, <SiPostgresql />],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with React and Tailwind.",
    image: "https://placehold.co/400x250",
    link: "#",
    tech: [<FaReact />, <FaCss3Alt />],
  },
  {
    title: "TalkASTU",
    description: "A university social media app using the PERN stack.",
    image: "https://placehold.co/400x250",
    link: "#",
    tech: [<FaReact />, <FaNodeJs />, <SiPostgresql />],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with React and Tailwind.",
    image: "https://placehold.co/400x250",
    link: "#",
    tech: [<FaReact />, <FaCss3Alt />],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                />

                {/* Icon Slide-Up Hover Overlay */}
                <div className="absolute inset-0 flex items-end justify-center bg-opacity-0 group-hover:bg-black/35 group-hover:bg-opacity-40 transition-all duration-500 pointer-events-none z-10">
                  <div className="flex gap-4 text-white text-2xl mb-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {project.tech.map((icon, idx) => (
                      <span
                        key={idx}
                        className="hover:text-pink-400 transition-colors"
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description Box */}
              <div className="p-4 bg-[#0f1a0f] text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-2">
                  {project.description}
                </p>

                {/* Static Tech Stack Below (Optional) */}
                <div className="flex gap-3 mt-2 text-xl text-gray-400">
                  {project.tech.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
