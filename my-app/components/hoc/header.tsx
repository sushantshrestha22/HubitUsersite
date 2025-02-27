import React from "react";
import Navbar from "./navbar";
import Logo from "@/app/assets/image/logo.png";
import Image from "next/image";
import { MdFitbit } from "react-icons/md";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-primary text-white w-full flex sticky top-0 z-50 shadow-xl">
      <div className="bg-secondary p-2 flex justify-center items-center gap-2 max-sm:w-[30%] w-[15%]">
        <Image src={Logo} alt="logoError" className="sm:h-24 w-32" />
      </div>
      <div className="relative bg-gradient-to-r from-primary to-accent w-full place-items-center  flex">
        <div className="absolute bg-clip-text sm:-left-14 -left-10 ">
          <MdFitbit className=" w-20 h-20 sm:w-36 sm:h-32 opacity-20 " />
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
