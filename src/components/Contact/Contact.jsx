import React from "react";
import Social from "../SocialIcons/Social";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <motion.div
      className="text-center 2xl:overflow-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid md:max-w-[900px] w-full h-full justify-center mx-auto bg-[#ffffff] mt-8 md:mt-12">
        <div className="">
          <div className="flex mx-auto home-titulo text-5xl text-start justify-start md:justify-start mb-4 p-3 2xl:justify-start ">
            <h1 className="">Contact.</h1>
          </div>
          <p className="home-subtitulo mb-5 p-3 ">
            If you wish to get in touch with me, you can send me a message in
            this section or an email at:{" "}
            <span className="bold-text">javier.cavalli@gmail.com</span>
          </p>
          {/* ACA ARRANCA EL FORM */}
          <div>
            <form
              method="POST"
              action="https://getform.io/f/4c86c42d-baf6-4f48-a6ed-f5c544caea0c"
              className="flex flex-col max-w-[600px] w-full p-3"
            >
              <div className="grid gap-4 w-full py-2">
                <div className="flex flex-col mb-3">
                  <input
                    className="border-[1px]  rounded-sm pl-3 pt-[8px] pb-[8px] flex border-gray-200"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2 mb-3">
                <input
                  className="border-[1px] rounded-sm pl-3 pt-[8px] pb-[8px] flex border-gray-200"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col py-2">
                <textarea
                  className="border-[1px] rounded-sm pl-3 pt-[8px] pb-[8px] border-gray-200"
                  rows="3"
                  type="text"
                  name="message"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <div className="justify-center items-center mx-auto pt-2">
                <button className="inline-block px-6 py-2.5 bg-[#FFFFFF] text-[#000000] font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out m-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* ACA TERMINA EL FORM */}
          <div className="flex text-1xl mb-2 p-4 underline my-2">
            <Link to="/" className="mr-3">
              Home
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

export default Contact;
