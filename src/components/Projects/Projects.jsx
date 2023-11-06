import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import Card from "../Card/Card";
import Social from "../SocialIcons/Social";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid md:max-w-[1000px] w-full h-screen justify-center mx-auto bg-[#ffffff] mt-8 md:mt-12">
        <div className="">
          <div className="flex mx-auto home-titulo text-5xl text-start justify-start md:justify-start mb-10 p-3 2xl:justify-center">
            <h1 className="">Projects.</h1>
          </div>
          <div className="grid grid-cols-1 md:gap-8 p-4 md:grid-cols-2 2xl:grid-cols-3 gap-y-8">
            {/* PROYECTO 1 */}
            <Card
              title="E-Commerce"
              subtitle="Store"
              img={project1}
              github="https://github.com/JavierCavalli/clothingapp-react"
              demo="https://gilded-brioche-5ea112.netlify.app/"
              text="E-Commerce Store where i learned how to use Redux, Styled Components and Stripe as paying method."
            />
            <Card
              title="Data"
              subtitle="App"
              img={project2}
              github="https://github.com/JavierCavalli/react-tw-data-app-main"
              demo="https://merry-cascaron-69cc7f.netlify.app/"
              text="Data App SPA made with ReactJS and TailwindCSS."
            />
            <Card
              title="Crypto"
              subtitle="Base"
              img={project3}
              github="https://github.com/JavierCavalli/crypto-react-firebase-main"
              demo="https://crypto-react-firebase-main.vercel.app/"
              text="Crypto App made to learn how to Fetch Data with Axios from FireBase"
            />
            <Card
              title="Orion"
              subtitle="Agencia"
              img={project4}
              github="https://github.com/JavierCavalli/agencia-react-main"
              demo="https://agenciavuelo-react-main.vercel.app/"
              text="SPA App made to learn React-Router"
            />
            <Card
              title="Crypto"
              subtitle="App"
              img={project5}
              github="https://github.com/JavierCavalli/Crypto-landingpage-main"
              demo="https://incomparable-crumble-735f3a.netlify.app/"
              text="Another Crypto App to better understand React Hooks"
            />
            <Card
              title="Expense"
              subtitle="Tracker"
              img={project6}
              github="https://github.com/JavierCavalli/expense-tracker-react-main"
              demo="https://aquamarine-nasturtium-4bf446.netlify.app/"
              text="Expense Tracker app made to practice JavaScrip/React logic (state, events, context, etc)"
            />
            <Card
              title="Shoes"
              subtitle="Website"
              img={project7}
              github="https://github.com/JavierCavalli/Landing-page-brand"
              demo="https://landing-page-brand.vercel.app/"
              text="Shoe Store App made to test CSS media queries"
            />
            <Card
              title="Dark/Light"
              subtitle="Mode"
              img={project8}
              github="https://github.com/JavierCavalli/dark-theme-main"
              demo="https://spontaneous-travesseiro-fade16.netlify.app/"
              text="App made to test a Dark/Light Theme with ReactJS"
            />
            {/* PROYECTO 1 FIN */}
          </div>
          <div className="flex text-1xl mb-2 p-4 underline my-2">
            <Link to="/contact" className="mr-3">
              Contact
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
          <div className="mb-4">
            <Social />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
