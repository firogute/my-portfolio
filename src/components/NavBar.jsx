import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const progress = Math.min(latest / 300, 1);
    setScrollProgress(progress);
  });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "#", label: "GitHub" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
  ];

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl mx-auto"
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#06890a] via-[#4dc247] to-[#06890a] pointer-events-none"
            style={{
              background: `conic-gradient(from ${
                scrollProgress * 360
              }deg, #06890a, #4dc247, #06890a)`,
            }}
            animate={{
              background: `conic-gradient(from ${
                scrollProgress * 360
              }deg, #06890a, #4dc247, #06890a)`,
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className={`relative bg-gradient-to-b from-gray-900/80 to-gray-900/90 backdrop-blur-2xl rounded-full flex items-center justify-between transition-all duration-500 ${
              scrollProgress > 0.1
                ? "shadow-2xl shadow-[#06890a]/20"
                : "shadow-lg"
            }`}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              className="p-2 pl-5 flex-shrink-0"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#06890a] to-[#4dc247] rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  src="https://placehold.co/400"
                  alt="Logo"
                  className="relative z-10 w-10 h-10 object-contain rounded-full border-2 border-transparent group-hover:border-[#06890a] transition-all duration-500"
                />
              </div>
            </motion.div>

            <nav className="hidden md:block">
              <ul className="flex gap-1 px-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="relative"
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`relative z-10 block px-6 py-4 text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? "text-[#4dc247]"
                          : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute bottom-3 left-1/2 w-4 h-0.5 bg-[#4dc247] rounded-full"
                          layoutId="navIndicator"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </a>

                    {hoveredItem === item.id && (
                      <motion.span
                        className="absolute inset-0 bg-gray-800/30 rounded-full"
                        layoutId="navHoverBg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:flex items-center gap-3 pr-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 hover:text-[#4dc247] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-4 py-2 text-xs font-semibold bg-[#06890a]/20 text-[#4dc247] border border-[#4dc247]/30 rounded-full flex items-center gap-1 hover:bg-[#06890a]/30 transition-all"
              >
                Resume <FiArrowUpRight className="text-xs" />
              </motion.button>
            </div>

            <button
              className="md:hidden p-4 text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-gray-900/95 backdrop-blur-2xl border border-gray-700/30 rounded-2xl overflow-hidden shadow-2xl md:hidden"
          >
            <div className="relative p-[1px] rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(
                    from 0deg,
                    #06890a,
                    #4dc247,
                    #06890a
                  )`,
                }}
                animate={{
                  background: `conic-gradient(
                    from ${scrollProgress * 360}deg,
                    #06890a,
                    #4dc247,
                    #06890a
                  )`,
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative bg-gray-900/95 rounded-2xl backdrop-blur-2xl">
                <ul className="flex flex-col divide-y divide-gray-700/30">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: item.id * 0.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`block px-6 py-4 text-lg font-medium transition-colors ${
                          activeSection === item.id
                            ? "text-[#4dc247] bg-[#06890a]/10"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        }`}
                        onClick={() => {
                          setActiveSection(item.id);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}

                  <motion.li
                    className="flex justify-center gap-6 p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-2xl text-gray-400 hover:text-[#4dc247] transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
