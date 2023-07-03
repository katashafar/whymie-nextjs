import Image from "next/image";
import React from "react";
import profileLogo from "../assets/whymie logo 1.png"

const Header = () => {
  return (
    <header className="text-white bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white font-bold mb-4 md:mb-0">
          <Image src={profileLogo} alt="logo" width={100} height={100}></Image>
        </a>
        <a className="flex title-font font-medium items-center text-white font-bold mb-4 md:mb-0">
          <span className="ml-3 text-xl">WhyMie</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-xl font-bold text-base justify-center">
          <a className="mr-5 hover:text-yellow-400">About Us</a>
          <a className="mr-5 hover:text-yellow-400">Gallery</a>
          <a className="mr-5 hover:text-yellow-400">Franchise</a>
          <a className="mr-5 hover:text-yellow-400">R.O.I</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
