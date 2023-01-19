import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";

const Home = () => {
  return (
    <div className="text-center">
      <div className="grid md:max-w-[1270px] w-full h-full justify-center items-center mx-auto bg-[#FFFDFC]">
        <div className="mt-20">
          <div className="flex mx-auto glitch home-titulo text-6xl mb-10 text-start">
            <h1 className="glitch">
              <span aria-hidden="true">Javier Cavalli . FrontDev</span>
              Javier Cavalli . FrontDev
              <span aria-hidden="true">Javier Cavalli . FrontDev</span>
            </h1>
          </div>
          <p className="home-subtitulo text-1xl mb-5">
            Frontend developer, UX architect and Javascript engineer,
            Photochromic Lens enthusiast, practicing minimalist, and Pop Music &
            Jazz lover in search of flow.
          </p>
          <p className="home-subtitulo text-1xl mb-5">
            Working with my hands to make magic happen on the internet. View my
            Projects, Articles, Resumé, Contact Me, or send me an email at
            hellocodewonders@gmail.com.
          </p>
          <p className="home-subtitulo text-1xl mb-5">Mas de mi</p>
          <ul className="flex">
            <li className="mr-4">
              <FaLinkedinIn size="25px" />
            </li>
            <li className="mx-4">
              <FaGithub size="25px" />
            </li>
            <li className="mx-4">
              <FaInstagram size="25px" />
            </li>
            <li className="mx-4">
              <AiOutlineMail size="25px" />
            </li>
            <li className="mx-4">
              <AiOutlineFileText size="25px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
