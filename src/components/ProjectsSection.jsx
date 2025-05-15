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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            >
              {/* Image and Hover Overlay */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-10 opacity-0 group-hover:opacity-50 transition-opacity flex justify-center items-center gap-4 text-3xl text-white">
                  {project.tech.map((icon, idx) => (
                    <span key={idx} className="hover:text-pink-400">
                      {icon}
                    </span>
                  ))}
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
