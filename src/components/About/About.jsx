import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiGreensock,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { DiCss3, DiSass } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FiFramer, FiFigma } from "react-icons/fi";

const About = () => {
  return (
    <div className="text-center">
      <div className="grid md:max-w-[900px] w-full h-screen justify-center mx-auto bg-[#ffffff] mt-8 md:mt-12">
        <div className="">
          <div className="flex mx-auto home-titulo text-5xl text-start justify-start md:justify-start mb-10 p-3 2xl:justify-center">
            <h1 className="">Sobre Mi</h1>
          </div>
          <p className="home-subtitulo-titulo pl-3 text-start 2xl:text-center">
            Trabajo
          </p>
          <p className="home-subtitulo-sub pl-3 text-start underline 2xl:text-center">
            <a href="https://github.com/JavierCavalli">Ver Github</a>
          </p>
          <p className="home-subtitulo mb-5 pl-3 pr-3 2xl:w-[1000px]">
            Arranque a trabjar como freelance hace casi 2 años haciendo SPA con
            el stack FERN/MERN en plataformas como Fiverr y Upwork, hoy me
            encuentro trabajando para FitPrenda una empresa de talles argentina,
            me ocupo del frontend en el cual uso principalmente <b>React</b>,{" "}
            <b>Typescript</b>, <b>Bootstrap</b> y <b>CSS</b>. Me encuentro
            actualmente buscando nuevos desafios y estudiando nuevas
            tecnologias.
          </p>
          <p className="home-subtitulo-titulo pl-3 text-start 2xl:text-end">
            Estudios
          </p>
          <p className="home-subtitulo-sub pl-3 text-start underline 2xl:text-end">
            Certificaciones / Cursos{" "}
          </p>
          <div className="home-subtitulo mb-5 pl-3">
            <ul className="text-start 2xl:text-end">
              <li>-Diplomatura full stack ReactJS y SQL -UTN</li>
              <li>-Complete web development Bootcamp - Udemy Angela Yu</li>
              <li>-Complete Javascript Course - Udemy Jonas Schmedtmann</li>
              <li>
                -Complete React Dev (Redux, Hooks, GraphQL) - Udemy Andrei
                Neagoie
              </li>
              <li>-Full Bootcamp FreeCodeCamp</li>
              <li>-Argentina Programa #YoPprogramo / #SeProgramar 2022</li>
              <li>-B2 First (Nivel C1 - Ingles Nativo)</li>
            </ul>
          </div>
          <p className="home-subtitulo-titulo pl-3 text-start">Tecnologias</p>
          <p className="home-subtitulo-sub pl-3 text-start underline">
            Tecnologias que uso con frecuencia{" "}
          </p>
          <div className="text-base test-start grid pl-3 mb-4">
            <div className="row flex gap-4">
              <div className="col flex ">
                <SiReact className="mt-1" />
                React
              </div>
              <div className="col flex">
                <IoLogoJavascript className="mt-1" />
                JavaScript
              </div>
              <div className="col flex">
                <DiCss3 className="mt-1" />
                CSS
              </div>
            </div>
            <div className="row flex gap-4">
              <div className="col flex">
                <FaBootstrap className="mt-1" />
                BootStrap
              </div>
              <div className="col flex">
                <DiSass className="mt-1" />
                SASS
              </div>
              <div className="col flex">
                <SiTailwindcss className="mt-1" />
                TailwindCss
              </div>
            </div>
            <div className="row flex gap-4 ">
              <div className="col flex">
                <SiFirebase className="mt-1" />
                FireBase
              </div>
              <div className="col flex">
                <IoLogoNodejs className="mt-1" />
                NodeJs
              </div>
              <div className="col flex">
                <AiOutlineConsoleSql className="mt-1" />
                SQL
              </div>
            </div>
            <div className="row flex gap-4 ">
              <div className="col flex">
                <FiFramer className="mt-1" />
                FramerMotion
              </div>
              <div className="col flex">
                <SiGreensock className="mt-1" />
                GreenSock
              </div>
              <div className="col flex">
                <FiFigma className="mt-1" />
                Figma
              </div>
            </div>
          </div>
          <div className="flex">
            <a
              href="proyectos"
              className="home-subtitulo text-1xl mb-5 p-3 underline my-4"
            >
              Ver Proyectos
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
          <ul className="flex justify-center mb-2 md:justify-start p-3 2xl:justify-center">
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

export default About;
