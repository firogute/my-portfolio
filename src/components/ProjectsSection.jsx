import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectSection/ProjectCard";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const projects = [
  {
    title: "TalkASTU",
    description:
      "A university social network with real-time messaging, event management, and academic resources sharing built with PERN stack.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=TalkASTU",
    link: "#",
    github: "#",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiPostgresql className="text-blue-800" />, name: "PostgreSQL" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    ],
    category: "Full-Stack",
  },
  {
    title: "Portfolio Pro",
    description:
      "An interactive portfolio template with 3D elements, analytics dashboard, and CMS integration for easy content updates.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=Portfolio+Pro",
    link: "#",
    github: "#",
    tech: [
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <TbBrandThreejs className="text-green-300" />, name: "Three.js" },
      { icon: <FaFigma className="text-purple-300" />, name: "Figma" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    ],
    category: "Frontend",
  },
  {
    title: "EcoTrack",
    description:
      "Sustainability dashboard tracking carbon footprint with data visualization and actionable insights for businesses.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=EcoTrack",
    link: "#",
    github: "#",
    tech: [
      { icon: <FaPython className="text-yellow-400" />, name: "Python" },
      { icon: <SiDjango className="text-emerald-800" />, name: "Django" },
      { icon: <SiPostgresql className="text-blue-800" />, name: "PostgreSQL" },
      { icon: <SiFirebase className="text-amber-500" />, name: "Firebase" },
    ],
    category: "Full-Stack",
  },
  {
    title: "TaskFlow",
    description:
      "AI-powered task management system with natural language processing for intuitive task creation and prioritization.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=TaskFlow",
    link: "#",
    github: "#",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React Native" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiFirebase className="text-amber-500" />, name: "Firebase" },
    ],
    category: "Mobile",
  },
  {
    title: "DesignHub",
    description:
      "Collaborative design platform with real-time co-editing, version control, and design system management.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=DesignHub",
    link: "#",
    github: "#",
    tech: [
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <FaFigma className="text-purple-300" />, name: "Figma API" },
      { icon: <SiPostgresql className="text-blue-800" />, name: "PostgreSQL" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    ],
    category: "SaaS",
  },
  {
    title: "HealthTrack",
    description:
      "Wearable integration platform aggregating health metrics with personalized wellness recommendations.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=HealthTrack",
    link: "#",
    github: "#",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    ],
    category: "HealthTech",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const categories = [...new Set(projects.map((project) => project.category))];

  return (
    <section
      className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-900 to-black"
      id="projects"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#06890a] rounded-full filter blur-3xl opacity-10 -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#4dc247] rounded-full filter blur-3xl opacity-5 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            My <span className="text-[#06890a]">Projects</span> Showcase
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A curated collection of my best work demonstrating technical
            expertise and creative problem-solving
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 text-sm font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700/50 hover:text-white transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
