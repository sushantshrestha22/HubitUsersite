import React from "react";
import TeamMember from "@/app/assets/image/teammember.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

type Props = {};

const OurTeamSection = (props: Props) => {
  type CourseProps = {
    image: StaticImageData;
    name: string;
    designation: string;
  };

  const topManagementData: CourseProps[] = [
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
  ];

  const developmentData: CourseProps[] = [
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
  ];

  const instructors: CourseProps[] = [
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
  ];
  const othersStaffs: CourseProps[] = [
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
    {
      image: TeamMember,
      name: "Sushant Shrestha",
      designation: "Frontend Developer",
    },
  ];

  return (
    <div className="lg:px-36 p-10 space-y-10">
      <div className="space-y-10">
        {" "}
        <div className="w-full place-items-center ">
          <h1 className="text-xl font-bold">Top Management</h1>
        </div>
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={`w-full row-span-2 `}>
              <div className="relative group h-[90%]">
                <Image
                  src={TeamMember}
                  alt="errorAboutImage"
                  className="bg-cover bg-center w-full  h-full object-cover bg-no-repeat rounded-t-md"
                />

                <div className="group-hover:block hidden transition-colors ease-in-out duration-700 absolute bg-black top-0 w-full h-full bg-opacity-50 text-secondary place-content-center place-items-center rounded-t-md">
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
                </div>
              </div>
              <div className=" p-4 rounded-b-md  shadow bg-secondary">
                <div className="text-xs lg:text-sm font-bold">data.name</div>
                <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-primary">
                  data.designation
                </div>
              </div>
            </div>
            {topManagementData.map((data, index) => (
              <div key={index} className={`w-full`}>
                <div className="relative group">
                  <Image
                    src={data.image}
                    alt="errorAboutImage"
                    className="bg-cover bg-center w-full md:h-[30vh] lg:h-[40vh] bg-no-repeat rounded-t-md"
                  />

                  <div className="group-hover:block hidden transition-colors ease-in-out duration-700 absolute bg-black top-0 w-full h-full bg-opacity-50 text-secondary place-content-center place-items-center rounded-t-md">
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
                  </div>
                </div>
                <div className=" p-4 rounded-b-md  shadow bg-secondary">
                  <div className="text-xs lg:text-sm font-bold">
                    {data.name}
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-primary">
                    {data.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* development team */}
      <div className="space-y-10">
        {" "}
        <div className="w-full place-items-center ">
          <h1 className="text-xl font-bold">Development Team</h1>
        </div>
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {developmentData.map((data, index) => (
              <div key={index} className={`w-full`}>
                <div className="relative group">
                  <Image
                    src={data.image}
                    alt="errorAboutImage"
                    className="bg-cover bg-center w-full md:h-[30vh] lg:h-[40vh] bg-no-repeat rounded-t-md"
                  />

                  <div className="group-hover:block hidden transition-colors ease-in-out duration-700 absolute bg-black top-0 w-full h-full bg-opacity-50 text-secondary place-content-center place-items-center rounded-t-md">
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
                  </div>
                </div>
                <div className=" p-4 rounded-b-md  shadow bg-secondary">
                  <div className="text-xs lg:text-sm font-bold">
                    {data.name}
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-primary">
                    {data.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructors */}
      <div className="space-y-10">
        {" "}
        <div className="w-full place-items-center ">
          <h1 className="text-xl font-bold">Instructors</h1>
        </div>
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {instructors.map((data, index) => (
              <div key={index} className={`w-full`}>
                <div className="relative group">
                  <Image
                    src={data.image}
                    alt="errorAboutImage"
                    className="bg-cover bg-center w-full md:h-[30vh] lg:h-[40vh] bg-no-repeat rounded-t-md"
                  />

                  <div className="group-hover:block hidden transition-colors ease-in-out duration-700 absolute bg-black top-0 w-full h-full bg-opacity-50 text-secondary place-content-center place-items-center rounded-t-md">
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
                  </div>
                </div>
                <div className=" p-4 rounded-b-md  shadow bg-secondary">
                  <div className="text-xs lg:text-sm font-bold">
                    {data.name}
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-primary">
                    {data.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Others Staffs */}
      <div className="space-y-10">
        {" "}
        <div className="w-full place-items-center ">
          <h1 className="text-xl font-bold">Others Staffs</h1>
        </div>
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {othersStaffs.map((data, index) => (
              <div key={index} className={`w-full`}>
                <div className="relative group">
                  <Image
                    src={data.image}
                    alt="errorAboutImage"
                    className="bg-cover bg-center w-full md:h-[30vh] lg:h-[40vh] bg-no-repeat rounded-t-md"
                  />

                  <div className="group-hover:block hidden transition-colors ease-in-out duration-700 absolute bg-black top-0 w-full h-full bg-opacity-50 text-secondary place-content-center place-items-center rounded-t-md">
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
                  </div>
                </div>
                <div className=" p-4 rounded-b-md  shadow bg-secondary">
                  <div className="text-xs lg:text-sm font-bold">
                    {data.name}
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-primary">
                    {data.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
