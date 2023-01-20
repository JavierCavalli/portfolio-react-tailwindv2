import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="text-center">
      <div className="grid md:max-w-[900px] w-full h-screen justify-center mx-auto bg-[#ffffff] mt-8 md:mt-12">
        <div className="">
          <div className="flex mx-auto glitch home-titulo text-5xl text-start justify-center md:justify-start mb-5 p-3">
            <h1 className="glitch">
              <span aria-hidden="true">Javier Cavalli . FrontDev</span>
              Javier Cavalli . FrontDev
              <span aria-hidden="true">Javier Cavalli . FrontDev</span>
            </h1>
          </div>
          <p className="home-subtitulo mb-5 p-3">
            Frontend developer, Diseñador de UX/UI y Ingeniero de JavaScript,
            Photochromic Lens enthusiast, practicing minimalist, and Pop Music &
            Jazz lover in search of flow.
          </p>
          <p className="home-subtitulo mb-5 p-3">
            Working with my hands to make magic happen on the internet. View my
            Projects, Articles, Resumé, Contact Me, or send me an email at
            hellocodewonders@gmail.com.
          </p>
          <div className="flex">
            <a
              href="about"
              className="home-subtitulo text-1xl mb-5 p-3 underline my-4"
            >
              Mas Sobre Mi
            </a>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="my-auto arrow-right"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
          <ul className="flex justify-center mb-2 md:justify-start p-3">
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

export default Projects;
