import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiRedux,
  SiExpress,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    proficiency: 95,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    proficiency: 90,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    proficiency: 92,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    proficiency: 85,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    proficiency: 93,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    proficiency: 88,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
    proficiency: 87,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400" />,
    proficiency: 94,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    proficiency: 89,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-300" />,
    proficiency: 86,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="text-pink-600" />,
    proficiency: 82,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-800" />,
    proficiency: 84,
  },
  {
    name: "Three.js",
    icon: <TbBrandThreejs className="text-green-300" />,
    proficiency: 78,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, proficiency: 91 },
  {
    name: "Docker",
    icon: <FaDocker className="text-blue-400" />,
    proficiency: 80,
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-purple-300" />,
    proficiency: 83,
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-28 overflow-hidden" id="skills">
      {/* Background elements */}
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
            My <span className="text-[#06890a]">Technical</span> Arsenal
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I'm proficient with to build exceptional
            digital experiences
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/20 border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#06890a]/50 group-hover:bg-gray-800/30 group-hover:shadow-lg group-hover:shadow-[#06890a]/10">
                <div className="text-5xl mb-4 transform transition-transform duration-500 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#06890a] to-[#4dc247] h-2 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-2">
                  {skill.proficiency}% proficiency
                </span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#06890a] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating tech labels */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="inline-flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          >
            {[
              "Full-Stack Development",
              "Responsive Design",
              "Web Performance",
              "Clean Architecture",
              "UI/UX Principles",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700/50 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
