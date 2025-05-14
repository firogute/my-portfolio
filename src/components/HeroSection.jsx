import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto flex gap-4 items-center px-4">
      <div className="w-1/3">
        <img
          src="https://placehold.co/400"
          alt="my-img"
          className="w-full h-auto object-contain"
        />
        <div className="w-full mt-4">
          <ul className="flex gap-4 justify-center">
            <li>
              <FaGithub />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-2/3">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          voluptate magni quaerat voluptatibus error culpa?
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
