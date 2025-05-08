import React from "react";

const NavBar = () => {
  return (
    <div className="bg-[#010e02] w-fit rounded-full overflow-hidden flex justify-between items-center mx-auto fixed top-3 left-1/2 -translate-x-1/2">
      <div className="p-2 flex-shrink-0">
        <img
          src="https://placehold.co/400"
          alt="My Logo"
          className="w-10 h-10 object-contain"
        />
      </div>
      <nav className="bg-[#010e02] text-white p-4">
        <ul className="flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-[#F472B6] transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-[#F472B6] transition">
            Skills
          </li>
          <li className="cursor-pointer hover:text-[#F472B6] transition">
            About
          </li>
          <li className="cursor-pointer hover:text-[#F472B6] transition">
            Projects
          </li>
          <li className="cursor-pointer hover:text-[#F472B6] transition">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
