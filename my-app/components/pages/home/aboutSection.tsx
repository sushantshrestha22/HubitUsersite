import Image from "next/image";
import React from "react";
import AboutImage from "@/app/assets/image/aboutSection.png";
import { Button } from "@/components/ui/button";

type Props = {};

const AboutSection = (props: Props) => {
  interface HeroSectionProps {
    title: string;
    value: number;
  }

  const heroSectionData: HeroSectionProps[] = [
    {
      title: "Year we were Found",
      value: 1000,
    },
    {
      title: "Our Employee",
      value: 1000,
    },
    {
      title: "Our Students",
      value: 1000,
    },

    {
      title: "Job Placements",
      value: 1000,
    },
    {
      title: "Projects Finished",
      value: 1000,
    },
  ];
  return (
    <div className="relative">
      <div className=" lg:absolute -top-24 z-10 w-full grid max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 pt-10 lg:px-36 max-sm:gap-5 gap-10 ">
        {heroSectionData.map((data, index) => (
          <div
            key={index}
            className={`w-full place-content-center place-items-center`}
          >
            <div
              className={`bg-secondary rounded-md w-full  shadow place-content-center place-items-center max-sm:h-20 h-32 `}
            >
              <div className="max-sm:text-lg text-2xl font-semibold text-primary">
                {data.value}
              </div>
              <div className="max-sm:text-xs text-base ">{data.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 lg:pt-28 py-10 px-10 lg:px-36 ">
        <div className="relative">
          <div className="w-20 h-20 bg-background absolute right-0 z-10 max-sm:hidden"></div>
          <div className="w-20 h-20 bg-background absolute left-0 bottom-0 z-10 max-sm:hidden"></div>
          <Image
            src={AboutImage}
            alt="errorAboutImage"
            className="bg-cover w-full bg-no-repeat"
          />
        </div>
        <div className="space-y-4 place-content-center ">
          <h2 className="text-xl font-bold max-sm:text-center">Who We Are?</h2>
          <p className="text-xs md:text-sm text-justify text-black/60  max-lg:line-clamp-[8]">
            Welcome to our HUB IT Group Pvt.Ltd. We have started our service
            journey from 2017 for then till now it has been a wonderful journey.
            We are thrilled to have you visiting our website and learning more
            about our institution. At our cooperation, we believe that
            information technology is the backbone of any successful
            organization, and we are committed to providing the highest quality
            education and training,services and tech support to every aspect of
            life. We understand that the IT industry is constantly changing, and
            our goal is to stay ahead of the curve by providing our clients with
            the skills and knowledge they need to succeed in today's digital
            age.
          </p>
          <div className="md:space-x-4 max-md:space-y-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="ghost">
              See More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
