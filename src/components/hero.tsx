import Image from "next/image";
import React from "react";
import profilePict from "../assets/whymie-logo-1.png"

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src={profilePict}
            className="object-cover object-center rounded"
            alt="Logo"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Indonesian Fusion Mie
          </h1>
          <p className="mb-8 leading-relaxed">
            Why choose WhyMie? and what is indonesia fusion mie?
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
