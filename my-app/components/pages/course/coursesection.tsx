import Image, { StaticImageData } from "next/image";
import React from "react";
import Course1 from "@/app/assets/image/motiongraphics.png";
import Course2 from "@/app/assets/image/webdevelopment.png";
import Course3 from "@/app/assets/image/react.png";
import { FaClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import PaginatedItems from "./pagination";
import CourseNav from "./coursenav";

type Props = {};

const CourseSection = (props: Props) => {
  type CourseProps = {
    image: StaticImageData;
    title: string;
    duration: number;
  };

  const courseData: CourseProps[] = [
    {
      image: Course1,
      title: "Motion Graphics & Video Editing",
      duration: 3,
    },
    {
      image: Course2,
      title: "Web-Development & Designing",
      duration: 3,
    },
    {
      image: Course3,
      title: "React,Node.js & Nest.js",
      duration: 3,
    },
    {
      image: Course1,
      title: "Motion Graphics & Video Editing",
      duration: 3,
    },
    {
      image: Course2,
      title: "Web-Development & Designing",
      duration: 3,
    },
    {
      image: Course3,
      title: "React,Node.js & Nest.js",
      duration: 3,
    },
  ];

  return (
    <div className="bg-secondary lg:px-36 p-10 space-y-10">
      <div className="">
        <CourseNav />
      </div>
      <div className="space-y-5 lg:space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {courseData.map((data, index) => (
            <div
              key={index}
              className={`w-full place-content-center place-items-center`}
            >
              <div className={``}>
                <div>
                  <Image
                    src={data.image}
                    alt="errorAboutImage"
                    className="bg-cover w-full h-32 md:h-40 lg:h-56 bg-no-repeat"
                  />
                </div>
                <div className=" p-4 border rounded-b-md bg-background space-y-2">
                  <div className="text-xs lg:text-sm font-semibold">
                    {data.title}
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm">
                    {" "}
                    <FaClock className="text-primary" />
                    {data.duration} months
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="w-full text-center col-span-3 ">
          <PaginatedItems />
        </div> */}
      </div>
    </div>
  );
};

export default CourseSection;
