import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center px-6">
      {/* Left: Image + Social Icons */}
      <div className="md:w-1/3 w-full flex flex-col items-center">
        <img
          src="https://placehold.co/400"
          alt="my-img"
          className="w-60 h-60 object-contain rounded-full shadow-lg"
        />
        <ul className="flex gap-6 justify-center mt-6 text-2xl text-white">
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">
            <FaGithub />
          </li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">
            <FaXTwitter />
          </li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">
            <FaLinkedin />
          </li>
        </ul>
      </div>

      {/* Right: Text */}
      <div className="md:w-2/3 w-full text-center md:text-left">
        <h1 className="text-4xl font-extrabold mb-4">
          Hello, I'm <span className="text-pink-400">Your Name</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-xl">
          I’m a full-stack developer crafting modern web experiences using the
          PERN stack. Passionate about performance, clean UI, and solving
          real-world problems through code.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
