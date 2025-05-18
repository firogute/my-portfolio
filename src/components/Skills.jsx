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
    icon: <FaHtml5 />,
    proficiency: 95,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    proficiency: 90,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    proficiency: 92,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    proficiency: 85,
    color: "text-blue-600",
  },
  { name: "React", icon: <FaReact />, proficiency: 93, color: "text-cyan-400" },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    proficiency: 30,
    color: "text-white",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    proficiency: 87,
    color: "text-purple-500",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    proficiency: 94,
    color: "text-sky-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    proficiency: 89,
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    proficiency: 86,
    color: "text-gray-300",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    proficiency: 82,
    color: "text-pink-600",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    proficiency: 84,
    color: "text-blue-800",
  },
  {
    name: "Three.js",
    icon: <TbBrandThreejs />,
    proficiency: 78,
    color: "text-green-300",
  },
  { name: "Git", icon: <FaGitAlt />, proficiency: 91, color: "text-red-500" },
  {
    name: "Docker",
    icon: <FaDocker />,
    proficiency: 80,
    color: "text-blue-400",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    proficiency: 83,
    color: "text-purple-300",
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
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const progress = {
    hidden: { pathLength: 0 },
    visible: (i) => ({
      pathLength: i.proficiency / 100,
      transition: {
        duration: 1.5,
        delay: 0.3 + i.index * 0.05,
        ease: "easeInOut",
      },
    }),
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
            My <span className="text-[#06890a]">Technical</span> Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Visual representation of my proficiency across key technologies
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/20 border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#06890a]/50 group-hover:bg-gray-800/30 group-hover:shadow-lg group-hover:shadow-[#06890a]/10">
                {/* Circular progress indicator - now with proper spacing */}
                <div className="relative w-28 h-28 mb-4 flex flex-col items-center justify-center">
                  <svg className="w-24 h-24" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#2d3748"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    {/* Animated progress circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      strokeDashoffset="283"
                      variants={progress}
                      custom={{ proficiency: skill.proficiency, index }}
                      initial="hidden"
                      animate="visible"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#06890a" />
                        <stop offset="100%" stopColor="#4dc247" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Skill icon centered in circle with absolute positioning */}
                  <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl ${skill.color}`}
                  >
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 text-center">
                  {skill.name}
                </h3>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#06890a] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
