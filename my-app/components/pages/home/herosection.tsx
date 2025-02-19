import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
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
    <div className="w-full lg:h-[80vh] md:h-[40vh] relative ">
      <div className="relative bg-herosection text-secondary bg-cover bg-no-repeat bg-center h-full max-sm:py-10 flex items-center">
        <div className="bg-black h-full absolute top-0 w-full bg-opacity-70"></div>
        <div className="z-10 md:w-[65%] px-10 lg:px-36 space-y-4">
          <div className="text-xl md:text-4xl font-semibold">
            IT Training Institute in Nepal
          </div>
          <p className="text-xs md:text-base font-medium ">
            "Join our expert-led courses and gain hands-on skills to thrive in
            the digital world. Enroll today and take the first step toward a
            successful tech career!"
          </p>
          <div className="max-sm:space-y-4  md:space-x-4 ">
            <Button size="lg">Online Admission</Button>
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className=" lg:absolute -bottom-32 z-10 w-full grid md:grid-cols-3 lg:grid-cols-5 p-10 lg:px-36 gap-10 ">
        {heroSectionData.map((data, index) => (
          <div
            className="bg-secondary rounded-md w-full shadow place-content-center place-items-center h-40  "
            key={index}
          >
            <div className="text-4xl font-semibold text-primary">
              {data.value}
            </div>
            <div className="text-lg ">{data.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
