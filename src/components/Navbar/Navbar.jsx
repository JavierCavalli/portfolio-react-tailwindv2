import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isOpen, setOpen] = useState(false);

  return (
    /* MEMU */
    <div className="flex w-full h-full mt-2 px-3 justify-between md:justify-around bg-[#ffffff] text-[#000000]">
      <a href="/" className="titulo text-4xl">
        JC.
      </a>

      {/* menu */}
      <ul className="hidden md:flex font-semibold">
        <li className="px-4 cursor-pointer text-[25px]">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 cursor-pointer text-[25px]">
          <Link to="about">About</Link>
        </li>
        <li className="px-4 cursor-pointer text-[25px]">
          <Link to="skills">Skills</Link>
        </li>
        <li className="px-4 cursor-pointer text-[25px]">
          <Link to="work">Work</Link>
        </li>
        <li className="px-4 cursor-pointer text-[25px]">
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-20">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center z-10"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work">
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
