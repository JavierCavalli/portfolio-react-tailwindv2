import React from "react";
import { Link } from "react-router-dom";
import Social from "../SocialIcons/Social";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="text-center 2xl:mt-4 2xl:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid md:max-w-[900px] 2xl:h-full w-full h-full justify-center mx-auto bg-[#ffffff] mt-8 md:mt-12 2xl:mt-24">
        <div className="">
          <div className="flex mx-auto glitch home-titulo text-5xl text-start justify-center md:justify-start mb-5 p-3">
            <h1 className="glitch">
              <span aria-hidden="true">Javier Cavalli . FrontDev</span>
              Javier Cavalli . FrontDev
              <span aria-hidden="true">Javier Cavalli . FrontDev</span>
            </h1>
          </div>
          <p className="home-subtitulo mb-2 p-3">
            FullStack developer, Diseñador UX/UI y Ingeniero JavaScript con dos
            años de experiencia implementando aplicaciones Web. Me especializo
            en JavaScript y TypeScript principalmente en el framework React y
            NextJS, para los estilos se usar CSS, SASS, Bootstrap, Tailwind,
            librerias de animacion como FramerMotion Y GSAP y para el
            maquetado/diseño Figma. Para el Backend se usar SQL y
            MongoDB/FireBase(noSQL)
          </p>
          <p className="home-subtitulo mb-2 p-3">
            Los invito a ver algunos de mis{" "}
            <Link to="proyectos">
              <button className="px-4 py-1 bg-[#e5e5e5] text-[#454545] font-bold text-xs leading-tight rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out pt-[8px] pb-[4px]">
                Proyectos
              </button>{" "}
            </Link>
            mi{" "}
            <Link to="contact">
              <button className="px-4 py-1 bg-[#e5e5e5] text-[#454545] font-bold text-xs leading-tight rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out pt-[8px] pb-[4px]">
                Contacto
              </button>
            </Link>{" "}
            o mandarme un Mail a{" "}
            <b className="bold-text-2">javier.cavalli@gmail.com</b>
          </p>
          <div className="flex text-1xl mb-2 p-3 underline my-2">
            <Link to="/about" className="mr-3">
              Mas Sobre Mi
            </Link>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="my-auto arrow-right "
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
          <div className="mt-2 mb-4">
            <Social />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
