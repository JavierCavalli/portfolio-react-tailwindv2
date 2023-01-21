import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";

const Social = () => {
  return (
    <ul className="flex justify-center md:justify-start p-3">
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
  );
};

export default Social;
