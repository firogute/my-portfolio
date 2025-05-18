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
  FaAws,
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
  SiMongodb,
  SiFirebase,
  SiJest,
  SiStorybook,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
      { name: "Three.js", icon: <TbBrandThreejs />, color: "text-green-300" },
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
      { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-600" },
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-800" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
      { name: "AWS", icon: <FaAws />, color: "text-amber-500" },
      { name: "Jest", icon: <SiJest />, color: "text-red-700" },
      { name: "Storybook", icon: <SiStorybook />, color: "text-pink-500" },
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Design & Services",
    skills: [
      { name: "Figma", icon: <FaFigma />, color: "text-purple-300" },
      { name: "Vercel", icon: <SiVercel />, color: "text-white" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-green-400" },
    ],
    gradient: "from-violet-500 to-fuchsia-600",
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

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
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
            My <span className="text-[#06890a]">Technical</span> Stack
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive collection of technologies I work with
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="relative group"
            >
              {/* Category card */}
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/20 border border-gray-700/50 rounded-2xl p-6 transition-all duration-500 group-hover:border-[#06890a]/50 group-hover:bg-gray-800/30 group-hover:shadow-lg group-hover:shadow-[#06890a]/10 overflow-hidden">
                {/* Gradient header */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}
                ></div>

                {/* Category title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-2xl ${category.skills[0].color}`}>
                    {category.skills[0].icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skills grid */}
                <motion.div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className={`text-3xl mb-2 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-xs font-medium text-center text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#06890a] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full">
            <div className="w-2 h-2 bg-[#4dc247] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">
              Continuously expanding my skill set
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
