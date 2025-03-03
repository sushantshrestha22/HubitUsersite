import Image, { StaticImageData } from "next/image";
import TeamMember from "@/app/assets/image/teammember.png";
import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RiMapPinUserFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const ExploreOther = (props: Props) => {
  type CourseProps = {
    image: StaticImageData;
    name: string;
    designation: string;
    placement: string;
  };

  const courseData: CourseProps[] = [
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
      placement: "Placement at Hub IT pvt.ltd",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
      placement: "Placement at Hub IT pvt.ltd",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
      placement: "Placement at Hub IT pvt.ltd",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
      placement: "Placement at Hub IT pvt.ltd",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
      placement: "Placement at Hub IT pvt.ltd",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
      placement: "Placement at Hub IT pvt.ltd",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
      placement: "Placement at Hub IT pvt.ltd",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
      placement: "Placement at Hub IT pvt.ltd",
    },
  ];
  return (
    <div className="lg:px-36 p-10 space-y-10">
      {" "}
      <div className="w-full place-items-center space-y-4">
        <h1 className="text-xl font-bold">Explore Other Stories</h1>
        <p className="text-xs md:text-sm font-medium text-black/60 max-lg:line-clamp-6 w-[85%] text-center">
          "We provide industry-focused IT training with expert-led courses,
          hands-on projects, and globally recognized certifications to boost
          your career. Our programs are designed to equip you with in-demand
          skills and real-world experience."
        </p>
      </div>
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courseData.map((data, index) => (
            <div key={index} className={`w-full`}>
              <div className="relative group">
                <Image
                  src={data.image}
                  alt="errorAboutImage"
                  className="bg-cover bg-center w-full md:h-[30vh] lg:h-[40vh] bg-no-repeat rounded-t-md"
                />

                {/* <div className="group-hover:block hidden transition-colors ease-in-out duration-700 absolute bg-black top-0 w-full h-full bg-opacity-50 text-secondary place-content-center place-items-center rounded-t-md">
                    <div className="grid-cols-2 gap-2 grid w-[30%]">
                      <Link href="#">
                        <FaXTwitter className="h-8  w-8 " />
                      </Link>
                      <Link href="#">
                        <IoLogoWhatsapp className="h-8  w-8 " />
                      </Link>
                      <Link href="#">
                        <FaFacebookF className="h-8  w-8 " />
                      </Link>
                      <Link href="#">
                        <FaLinkedinIn className="h-8  w-8  " />
                      </Link>
                    </div>
                  </div> */}
              </div>
              <div className=" p-4 rounded-b-md  shadow bg-secondary">
                <div className="text-xs lg:text-sm font-bold">{data.name}</div>
                <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-primary ">
                  <RiVerifiedBadgeFill />
                  {data.designation}
                </div>
                <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-foreground/50">
                  <RiMapPinUserFill /> {data.placement}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-end col-span-3">
          <Link href="/successful-stories">
            <Button size="lg" variant="ghost">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreOther;
