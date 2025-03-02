import ContactUs from "@/components/form/contactus/form";
import Image from "next/image";
import React from "react";
import ContactImage from "@/app/assets/image/contact.png";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoMail } from "react-icons/io5";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import Link from "next/link";

type Props = {};

const ContactSection = (props: Props) => {
  type Contact = {
    icon?: JSX.Element | string;
    value: string;
  };

  type SocialMedia = {
    icon: JSX.Element;
    url: string;
  };

  const socialMedia: SocialMedia[] = [
    {
      icon: <FaFacebookF className="h-8 w-8" />,
      url: "https://www.facebook.com/",
    },
    {
      icon: <IoLogoWhatsapp className="h-8 w-8" />,
      url: "https://www.whatsapp.com/",
    },
    {
      icon: <FaXTwitter className="h-8 w-8" />,
      url: "https://www.twitter.com/",
    },
    {
      icon: <FaLinkedinIn className="h-8 w-8" />,
      url: "https://www.linkedin.com/",
    },
  ];
  const contacts: Contact[] = [
    {
      icon: <FaPhoneAlt />,
      value: "079-520123, 9868595584",
    },
    {
      icon: <IoMail />,
      value: "traininghubit@gmail.com",
    },
    {
      icon: <FaLocationDot />,
      value: "Finance Chowk-8, Butwal",
    },
  ];
  return (
    <div className="sm:grid sm:grid-cols-4 lg:grid-cols-5 p-10 lg:px-36 place-content-center ">
      <div className="relative col-span-2">
        <Image src={ContactImage} alt="errorImage" className="" />
        <div className="absolute top-0 left-0 w-full h-full text-secondary place-content-center place-items-center  sm:space-y-10  ">
          <div className="bg-[#270820]/50 w-[90%] sm:w-[75%]  rounded-lg lg:px-10 p-5 flex flex-col gap-4 sm:gap-10">
            {contacts.map((data, index) => (
              <div key={index} className="flex items-center gap-5">
                <span className="bg-white/40 h-10 w-10 rounded place-content-center place-items-center">
                  {data.icon}
                </span>
                <span className="max-sm:w-[75%] break-words">{data.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#270820]/50 w-[90%] sm:w-[75%]  rounded-lg lg:px-10 p-5 flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <span className="bg-white/40 h-10 w-10 rounded place-content-center place-items-center">
                <GoClockFill />
              </span>
              <span>
                <div>Working Hours</div>
                <div>Sunday-Friday,10am-6pm</div>
              </span>
            </div>
          </div>
          <div className="flex gap-4 max-lg:hidden">
            {socialMedia.map((data, index) => (
              <div key={index} className={``}>
                <div className="relative group">
                  <Link href={data.url}>
                    <div
                      className={`flex items-center justify-center w-full h-12 rounded-md hover:text-primary`}
                    >
                      {data.icon}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="  space-y-4 place-content-center lg:col-span-3 col-span-2 bg-secondary rounded-r-lg p-10">
        <h1 className="text-xl font-bold max-sm:text-center">Get In Touch</h1>
        <p className="text-xs md:text-sm  font-medium text-black/60 max-lg:line-clamp-6">
          If you have any question then fill the form below.
        </p>
        <div className="">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
