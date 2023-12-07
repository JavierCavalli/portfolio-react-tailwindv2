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
          <div className="flex mx-auto home-titulo text-5xl text-start justify-start md:justify-start mb-10 p-5 2xl:justify-center">
            <h1 className="">About.</h1>
          </div>
          <p className="home-subtitulo-titulo pl-5 text-start 2xl:text-center">
            Work
          </p>
          <p className="home-subtitulo-sub pl-5 text-start underline 2xl:text-center">
            <a className="see-github" href="https://github.com/JavierCavalli">
              See Github
            </a>
          </p>
          <p className="home-subtitulo mb-5 pl-5 pr-5 2xl:w-[1000px]">
            I began working freelance 3 years ago doing single page application
            websites on fiverr and upwork, i was then hired by ReadySize as a
            front end developer, i had to migrate both the main application and
            admin dashboard from Angular to ReactJS based on a Figma prototype,
            in both projects i used <b>Typescript</b>, <b>Bootstrap</b> &{" "}
            <b>CSS</b>, i then integrated the GPT api to use it as a personal
            assistant, right now i'm doing the localization for different
            languages with FormatJS and working with ReactJS context in order to
            have a better management of the state and data of both projects.
          </p>
          <p className="home-subtitulo-titulo pl-5 text-start 2xl:text-end">
            Studies
          </p>
          <p className="home-subtitulo-sub pl-5 text-start underline 2xl:text-end">
            Courses & Certifications{" "}
          </p>
          <div className="home-subtitulo mb-5 pl-5">
            <ul className="text-start 2xl:text-end">
              <li>
                -UADE - Technical Degree in Software Development (Systems) -
                currently in progress
              </li>
              <li>-College degree (ReactJS / MySQL) - UTN</li>
              <li>
                -Complete web development Bootcamp - Udemy Angela Yu
                (HTML/CSS/JS/ReactJS/Mongo/REST API){" "}
              </li>
              <li>-Complete Javascript Course - Udemy Jonas Schmedtmann</li>
              <li>
                -Complete React Dev (Redux, Hooks, GraphQL) - Udemy Andrei
                Neagoie
              </li>
              <li>
                -Complete Next.js Developer: Zero to Mastery - Udemy Andrei
                Neagoie
              </li>
              <li>-React 101 - Code Acadey</li>
              <li>
                -Full Bootcamp FreeCodeCamp(JS/ReactJS/D3/Mongo/QA/Python data
                Analysis)
              </li>
              <li>
                -The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert -
                Udemy Colt Steel
              </li>
              <li>
                -Argentina Programa (2022) #SéProgramar y #YoProgramo (Angular /
                SQL)
              </li>
              <li>
                -Argentina Programa (2023) Fullstack BootCamp (VueJS / Firebase)
              </li>
              <li>-B2 First (C1 Level)</li>
            </ul>
          </div>
          <p className="home-subtitulo-titulo pl-5 text-start">
            Languages & Frameworks
          </p>
          <p className="home-subtitulo-sub pl-5 text-start underline">
            Languages & Frameworks i use frequently{" "}
          </p>
          <div className="text-base test-start grid pl-5 ">
            <div className="row flex gap-4">
              <div className="col flex ">
                <SiReact className="mt-1" />
                ReactJS
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
              Projects
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
