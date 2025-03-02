import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
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
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
