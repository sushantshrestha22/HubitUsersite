import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdModelTraining } from "react-icons/md";
import { SiBuiltbybit } from "react-icons/si";
import Development from "@/app/assets/image/training.png";
import Training from "@/app/assets/image/development.png";

type Props = {};

const OurServiceSection = (props: Props) => {
  type ServicesProps = {
    image: StaticImageData;
    icon?: JSX.Element;
    title: string;
    description: string;
  };

  const servicesData: ServicesProps[] = [
    {
      image: Development,
      icon: <MdModelTraining className="h-10 w-10"/>,
      title: "Training Services",
      description:
        "Professional IT Training Services Enhance your skills with our expert-led IT training programs. We offer comprehensive courses in web development, UI/UX design, programming, and more, tailored for beginners and professionals. Gain hands-on experience, industry insights, and certification to boost your career. ",
    },
    {
      image: Training,
      icon: <SiBuiltbybit className="h-10 w-10 "/>,
      title: "Software Development",
      description:
        "Custom Software Development Services We build innovative, scalable, and user-friendly software solutions tailored to your business needs. From web and mobile applications to enterprise systems, our expert team ensures high performance, security, and seamless user experience. ",
    },
  ];

  return (
    <div className="lg:px-36 p-10 space-y-10">
      <div className="w-full place-items-center space-y-4">
        <h1 className="text-xl font-bold">Services We Provide</h1>
        <p className="text-xs md:text-sm font-medium text-black/60 max-lg:line-clamp-6 w-[85%] text-center">
          "We provide industry-focused IT training with expert-led courses,
          hands-on projects, and globally recognized certifications to boost
          your career. Our programs are designed to equip you with in-demand
          skills and real-world experience."
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {servicesData.map((data, index) => (
          <div key={index} className="w-full relative rounded-md">
            <Image src={data.image} alt="errorAboutImage" className="max-sm:h-[30vh] rounded-md"  />
            <div className="absolute top-0 bg-[#3A012D]/80 w-full h-full rounded-md"></div>
            <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white space-y-2 w-full">
              <div className="place-items-center w-full">{data.icon}</div>
              <div className="text-center text-xs lg:text-base font-bold ">{data.title}</div>
              <div className="text-center text-xs lg:text-sm w-full px-5 md:px-10 lg:px-20">{data.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServiceSection;
