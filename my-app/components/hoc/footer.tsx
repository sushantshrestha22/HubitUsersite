import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Logo from "@/app/assets/image/logo.png";
import Link from "next/link";
import GetInTouchForm from "../form/getintouch/form";
type Props = {};

const Footer = (props: Props) => {
  type Contact = {
    icon?: JSX.Element | string;
    value: string;
  };

  type QuickLink = {
    title: string;
    link: string;
  };
  type AdditionalLink = {
    title: string;
    link: string;
  };

  const contacts: Contact[] = [
    {
      icon: <FaPhoneAlt />,
      value: "079-520123,9868595584",
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

  const quickLinks: QuickLink[] = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Courses",
      link: "/courses",
    },
    {
      title: "Placements",
      link: "/placements",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Corporate Training",
      link: "/corporate-training",
    },
  ];
  const additionalLinks: AdditionalLink[] = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Courses",
      link: "/courses",
    },
    {
      title: "Placements",
      link: "/placements",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Job Application",
      link: "/job-application",
    },
  ];

  return (
    <div>
      <div className="bg-[#270820]  w-full lg:h-[60vh]  place-content-center  text-secondary p-10 lg:px-36 lg:py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-4 gap-10">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="text-lg font-bold">Contact</div>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div>{contact.icon}</div>
                  <div>{contact.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="place-items-center">
            <Image src={Logo} alt="logoError" className="sm:h-32 w-48" />
          </div>
        </div>
        <div className=" space-y-4 md:place-items-center">
          <div className="text-lg font-bold">Quick Link</div>
          <div className="space-y-4 md:place-items-center">
            {quickLinks.map((quickLink, index) => (
              <div key={index} className="">
                <Link href={quickLink.link} className="w-full">
                  <div>{quickLink.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" space-y-4 md:place-items-center">
          <div className="text-lg font-bold"> Additional Link</div>
          <div className="space-y-4 md:place-items-center">
            {additionalLinks.map((additional, index) => (
              <div key={index} className="">
                <Link href={additional.link} className="w-full">
                  <div>{additional.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" md:col-span-3 lg:col-span-2 space-y-4 ">
          <div className="text-lg font-bold">Get In Touch</div>
          <div>
            <GetInTouchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
