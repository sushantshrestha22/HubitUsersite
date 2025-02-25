import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { PiCopyrightThin } from "react-icons/pi";

type Props = {};

const SubFooter = (props: Props) => {
  type SocialMedia = {
    icon: JSX.Element;
    url: string;
  };

  const socialMedia: SocialMedia[] = [
    {
      icon: <FaFacebookF className="h-4 w-4" />,
      url: "https://www.facebook.com/",
    },
    {
      icon: <IoLogoWhatsapp className="h-4 w-4" />,
      url: "https://www.whatsapp.com/",
    },
    {
      icon: <FaXTwitter className="h-4 w-4" />,
      url: "https://www.twitter.com/",
    },
    {
      icon: <FaLinkedinIn className="h-4 w-4" />,
      url: "https://www.linkedin.com/",
    },
  ];

  return (
    <div className="bg-[#270820] text-secondary h-full w-full border-t p-5 lg:px-36 flex max-sm:flex-col items-center sm:justify-between gap-4">
      <div className="flex max-sm:flex-col items-center gap-4 ">
        <p className="text-xs md:text-sm font-medium text-white/60 flex items-center">
          Copyright
          <span>
            <PiCopyrightThin />
          </span>
          2025, Hub IT All rights reserved
        </p>

        <div className="flex gap-4 max-lg:hidden">
          {socialMedia.map((data, index) => (
            <div key={index} className={``}>
              <div className="relative group">
                <Link href={data.url}>
                  <div
                    className={`flex items-center justify-center w-full h-12 rounded-md`}
                  >
                    {data.icon}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-2 sm:gap-4">
        <p className="text-xs md:text-sm font-medium text-white/60 max-sm:text-center">
          Terms of Service
        </p>
        <p className="text-xs md:text-sm font-medium text-white/60 max-sm:text-center">
          Privacy Policy
        </p>
        <p className="text-xs md:text-sm font-medium text-white/60 max-sm:text-center">
          License Agreement
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
