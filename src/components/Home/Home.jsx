import React from "react";
import Social from "../SocialIcons/Social";

const Home = () => {
  return (
    <div className="text-center 2xl:mt-4 2xl:overflow-hidden">
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
            Frontend developer, Diseñador UX/UI y Ingeniero de JavaScript, con
            tres años de experiencia implementando aplicaciones Web. Me
            especializo en en JavaScript, principalmente en el framework
            React(tambien NextJS), para los estilos se usar CSS, SASS,
            Bootstrap, Tailwind y librerias de animacion como FramerMotion Y
            GSAP.
          </p>
          <p className="home-subtitulo mb-2 p-3">
            Working with my hands to make magic happen on the internet. View my
            Projects, Articles, Resumé, Contact Me, or send me an email at
            hellocodewonders@gmail.com.
          </p>
          <div className="flex">
            <a
              href="about"
              className="home-subtitulo text-1xl mb-2 p-3 underline my-2"
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
          <div className="mt-2 mb-4">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
