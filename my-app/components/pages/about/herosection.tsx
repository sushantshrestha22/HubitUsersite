import Image from "next/image";
import React from "react";
import AboutImage from "@/app/assets/image/aboutSection.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const AboutHeroSection = (props: Props) => {

  return (
    <div className="">
   
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 lg:gap-20  py-10 px-10  lg:px-36">
        <div className="relative">
          <div className="w-20 h-20 bg-background absolute right-0 z-10 max-sm:hidden"></div>
          <div className="w-20 h-20 bg-background absolute left-0 bottom-0 z-10 max-sm:hidden"></div>
          <Image src={AboutImage} alt="errorAboutImage" className="bg-cover w-full bg-no-repeat"/>
        </div>
        <div className="space-y-4 place-content-center">
          <h1 className="text-xl font-bold max-sm:text-center">Who We Are?</h1>
          <p className="text-xs md:text-sm text-justify font-medium text-black/60 max-lg:line-clamp-6">
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
            <Link href="/courses">
            <Button size="lg">Explore More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
