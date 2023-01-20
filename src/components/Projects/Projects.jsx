import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";
import project1 from "../../assets/project1.png";

const Projects = () => {
  return (
    <div className="text-center">
      <div className="grid md:max-w-[1000px] w-full h-screen justify-center mx-auto bg-[#ffffff] mt-8 md:mt-12">
        <div className="">
          <div className="flex mx-auto home-titulo text-5xl text-start justify-start md:justify-start mb-10 p-3 2xl:justify-center">
            <h1 className="">Proyectos</h1>
          </div>
          <div className="grid grid-cols-1 md:gap-16 p-4 md:grid-cols-2">
            {/* PROYECTO 1 */}
            <a href="/" class="group relative block bg-black">
              <img
                alt="Developer"
                src={project1}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div class="relative p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-[#FFFFFF]">
                  E-Commerce
                </p>

                <p class="text-2xl font-bold text-white">Store</p>

                <div class="mt-64">
                  <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <a href="https://github.com/JavierCavalli/clothingapp-react">
                      <button
                        type="button"
                        class=" inline-block px-6 py-2.5 bg-[#FFFFFF] text-[#000000] font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out m-2"
                      >
                        {" "}
                        GITHUB
                      </button>
                    </a>
                    <a href="https://gilded-brioche-5ea112.netlify.app/">
                      <button
                        type="button"
                        class=" inline-block px-6 py-2.5 bg-[#FFFFFF] text-[#000000] font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out m-2"
                      >
                        {" "}
                        DEMO
                      </button>
                    </a>
                    <p class="text-sm text-white">
                      E-Commerce para la compra venta de vestimenta.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* PROYECTO 1 FIN */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
