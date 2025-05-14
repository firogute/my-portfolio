import React from "react";
import NavBar from "./components/NavBar";
import ScrollResetComponent from "./components/ScrollTest";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-[#010e02] text-white m-0 p-0">
        <div className="max-w-[60rem] mx-auto bg-amber-500 relative h-[2000px] flex flex-col items-center">
          <NavBar />
          <HeroSection />
          <SkillsSection />
          <ScrollResetComponent />
        </div>
      </div>
    </>
  );
}

export default App;
