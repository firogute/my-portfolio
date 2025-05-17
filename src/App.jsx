import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/FooterSection";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#010e02] to-black text-white overflow-x-hidden"
    >
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#06890a] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating elements */}
      <div className="fixed -top-40 -right-40 w-80 h-80 bg-[#06890a] rounded-full filter blur-3xl opacity-10 -z-10"></div>
      <div className="fixed -bottom-20 -left-20 w-96 h-96 bg-[#4dc247] rounded-full filter blur-3xl opacity-5 -z-10"></div>

      <div className="max-w-[85rem] mx-auto relative flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <NavBar />
        <main className="w-full">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Background pattern */}
      <div className="fixed inset-0 -z-20 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      </div>
    </div>
  );
}

export default App;
