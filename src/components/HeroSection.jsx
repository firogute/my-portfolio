import React, { useEffect, useState } from "react";
import { FaGithub, FaXTwitter, FaLinkedin, FaMedium } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative mt-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#06890a] opacity-10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4dc247] opacity-5 rounded-full filter blur-3xl -z-10"></div>

      <motion.div
        variants={itemVariants}
        className="w-full md:w-1/3 flex flex-col items-center relative"
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#06890a] to-[#4dc247] rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-300 animate-tilt"></div>
          <img
            src="https://placehold.co/400"
            alt="Firomsa Guteta portrait"
            className="relative w-60 h-60 object-cover rounded-full shadow-2xl border-4 border-[#06890a] z-10 transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <motion.ul
          variants={itemVariants}
          className="flex gap-6 mt-8 text-white text-2xl"
        >
          {[
            {
              icon: <FaGithub />,
              url: "https://github.com/yourusername",
              label: "GitHub",
            },
            {
              icon: <FaXTwitter />,
              url: "https://twitter.com/yourusername",
              label: "Twitter",
            },
            {
              icon: <FaLinkedin />,
              url: "https://linkedin.com/in/yourusername",
              label: "LinkedIn",
            },
            {
              icon: <FaMedium />,
              url: "https://medium.com/@yourusername",
              label: "Medium",
            },
          ].map((social, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} Profile`}
                className="relative p-2 block group"
              >
                <span className="absolute -inset-1 bg-gradient-to-r from-[#06890a] to-[#4dc247] rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300"></span>
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Text Content */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-2/3 text-center md:text-left"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm{" "}
          <span
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10 text-[#06890a]">Firomsa Guteta</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-[#4dc247]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I specialize in crafting{" "}
          <span className="text-white font-medium">high-performance</span>{" "}
          full-stack applications using the{" "}
          <span className="relative inline-block group">
            <span className="relative z-10 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#06890a] to-[#4dc247]">
              PERN & MERN stack
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4dc247] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
          . With a focus on clean architecture, pixel-perfect UIs, and scalable
          solutions, I transform ideas into{" "}
          <span className="text-white font-medium">production-ready</span>{" "}
          software.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-gradient-to-r from-[#06890a] to-[#4dc247] text-white font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Download Resume</span>
            <MdOutlineFileDownload className="size-5 group-hover:translate-y-1 transition-transform duration-300 relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#056d08] to-[#3a9e36] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden border-2 border-[#06890a] text-white font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-[#06890a]/10"
          >
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute inset-0 bg-[#06890a] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {[
            "React",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "TypeScript",
            "Tailwind",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
