import React from "react";

const Card = (props) => {
  return (
    <a href="/" class="group relative block bg-black ">
      <img
        alt="Developer"
        src={props.img}
        class="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-50"
      />

      <div class="relative p-8">
        <p class="text-sm font-medium uppercase tracking-widest text-[#FFFFFF]">
          {props.title}
        </p>

        <p class="text-2xl font-bold text-white">{props.subtitle}</p>

        <div class="mt-64">
          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <a href={props.github}>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-[#FFFFFF] text-[#000000] font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out m-2"
              >
                {" "}
                GITHUB
              </button>
            </a>
            <a href={props.demo}>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-[#FFFFFF] text-[#000000] font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#000000] hover:text-[#FFFFFF] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-350 ease-in-out m-2"
              >
                {" "}
                DEMO
              </button>
            </a>
            <p class="text-sm text-white">{props.text}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
