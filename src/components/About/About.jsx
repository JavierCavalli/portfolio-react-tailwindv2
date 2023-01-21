import React from "react";
import Social from "../SocialIcons/Social";
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
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid md:max-w-[900px] w-full h-screen justify-center mx-auto bg-[#ffffff] mt-8 md:mt-12">
        <div className="">
          <div className="flex mx-auto home-titulo text-5xl text-start justify-start md:justify-start mb-10 p-3 2xl:justify-center">
            <h1 className="">Sobre Mi.</h1>
          </div>
          <p className="home-subtitulo-titulo pl-3 text-start 2xl:text-center">
            Trabajo
          </p>
          <p className="home-subtitulo-sub pl-3 text-start underline 2xl:text-center">
            <a href="https://github.com/JavierCavalli">Ver Github</a>
          </p>
          <p className="home-subtitulo mb-5 pl-3 pr-3 2xl:w-[1000px]">
            Empecé a trabjar como freelance hace 2 años haciendo SPA con el
            stack FERN/MERN en las plataformas Fiverr y Upwork, hoy me encuentro
            trabajando para FitPrenda una empresa de talles argentina donde me
            ocupo del frontend en la cual uso principalmente <b>React</b>,{" "}
            <b>Typescript</b>, <b>Bootstrap</b> y <b>CSS</b>. Estoy buscando
            nuevos desafios y estudiando nuevas tecnologias para seguir
            formandome.
          </p>
          <p className="home-subtitulo-titulo pl-3 text-start 2xl:text-end">
            Estudios
          </p>
          <p className="home-subtitulo-sub pl-3 text-start underline 2xl:text-end">
            Certificaciones / Cursos{" "}
          </p>
          <div className="home-subtitulo mb-5 pl-3">
            <ul className="text-start 2xl:text-end">
              <li>-Diplomatura full stack ReactJS y SQL - UTN</li>
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
          <div className="text-base test-start grid pl-3 ">
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
          <div className="flex text-1xl mb-2 p-3 underline my-2">
            <Link to="/proyectos" className="mr-3">
              Ver Proyectos
            </Link>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="my-auto arrow-right mt-[5px]"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
          <div className="flex justify-center mb-4">
            <Social />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
