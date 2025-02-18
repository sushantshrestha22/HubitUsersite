import React from "react";
import Navbar from "./navbar";
import Logo from "@/app/assets/image/logo.png";
import Image from "next/image";
import { MdFitbit } from "react-icons/md";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-primary text-white w-full flex ">
      <div className="bg-secondary p-2 flex justify-center items-center gap-2 max-sm:w-[30%] w-[15%]">
        <Image src={Logo} alt="logoError" className="h-20 w-32" />
      </div>
      <div className="relative bg-gradient-to-r from-primary to-accent w-full place-items-center  flex">
        <div className="absolute bg-clip-text -left-8  bg-gradient-to-r from-pink-500 to-violet-500">
          <MdFitbit className="w-20 h-20 opacity-20 " />
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
