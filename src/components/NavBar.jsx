import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl mx-auto transition-all duration-300 ${
          scrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div className="relative">
          <motion.div
            className={`bg-black/20 backdrop-blur-xl border border-white/10 rounded-full overflow-hidden flex items-center justify-between transition-all duration-300 ${
              scrolled ? "shadow-2xl" : "shadow-lg"
            }`}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              className="p-2 pl-4 flex-shrink-0"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src="https://placehold.co/400"
                alt="My Logo"
                className="w-10 h-10 object-contain rounded-full border-2 border-white/20 hover:border-[#06890a] transition-all"
              />
            </motion.div>

            <nav className="hidden md:block">
              <ul className="flex gap-1 px-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`block px-5 py-3 text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-[#06890a]"
                          : "text-white/80 hover:text-white"
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute bottom-2 left-1/2 w-4 h-0.5 bg-[#06890a] rounded-full"
                          layoutId="navIndicator"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <button
              className="md:hidden p-4 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl md:hidden"
          >
            <ul className="flex flex-col divide-y divide-white/10">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={`block px-6 py-4 text-lg font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-[#06890a] bg-white/5"
                        : "text-white/80 hover:text-white hover:bg-white/5"
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
