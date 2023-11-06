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
              <span aria-hidden="true">Javier Cavalli . {"<Dev />"}</span>
              Javier Cavalli . {"<Dev />"}
              <span aria-hidden="true">Javier Cavalli . {"<Dev />"}</span>
            </h1>
          </div>
          <p className="home-subtitulo mb-2 p-3">
            FullStack developer with three years of experience currently working
            for{" "}
            <a
              className="px-4 py-1 bg-[#e5e5e5] text-[#454545] font-bold text-xs leading-tight rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out pt-[8px] pb-[4px]"
              href="https://readysize.ai/"
            >
              ReadySize
            </a>
            , I specialize in JavaScript, primarily in the ReactJS framework.
            For styling i can work with CSS, SASS, Bootstrap & TailwindCSS, i've
            worked with animation libraries such as FramerMotion or Gsap. For
            the backend i use MySQL(with node and express), i have also done
            some small projects with MongoDB, and Firebase (noSQL).
          </p>
          <p className="home-subtitulo mb-2 p-3">
            Here are some of my{" "}
            <Link to="proyectos">
              <button className="px-4 py-1 bg-[#e5e5e5] text-[#454545] font-bold text-xs leading-tight rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out pt-[8px] pb-[4px]">
                Projects
              </button>{" "}
            </Link>
            and my{" "}
            <Link to="contact">
              <button className="px-4 py-1 bg-[#e5e5e5] text-[#454545] font-bold text-xs leading-tight rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out pt-[8px] pb-[4px]">
                Contact
              </button>
            </Link>
            {" info"}
            <br />
            you can send me an email at:{" "}
            <b className="bold-text-2">javier.cavalli@gmail.com</b>
          </p>
          <div className="flex text-1xl mb-2 p-3 underline my-2">
            <Link to="/about" className="mr-3">
              About
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
