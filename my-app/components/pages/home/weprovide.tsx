import Image, { StaticImageData } from "next/image";
import Course1 from "@/app/assets/image/motiongraphics.png";
import Course2 from "@/app/assets/image/webdevelopment.png";
import Course3 from "@/app/assets/image/react.png";
import LeftDesign from "@/app/assets/image/leftdesign.png";
import React from "react";
import { MdModelTraining } from "react-icons/md";

type Props = {};

const Weprovide = (props: Props) => {
  type CourseProps = {
    image: StaticImageData;
    title: string;
    description: string;
  };

  const courseData: CourseProps[] = [
    {
      image: Course1,
      title: "Expert-Led Training",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete.",
    },
    {
      image: Course2,
      title: "Expert-Led Training",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete.",
    },
    {
      image: Course3,
      title: "Expert-Led Training",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete.",
    },
    {
      image: Course3,
      title: "Expert-Led Training",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete.",
    },
    {
      image: Course3,
      title: "Expert-Led Training",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete.",
    },
    {
      image: Course3,
      title: "Expert-Led Training",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete.",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute top-1/3  md:w-[40%]  lg:w-[20%] left-0 max-sm:hidden">
        <Image
          src={LeftDesign}
          alt="errorAboutImage"
          className="bg-cover w-full bg-no-repeat"
        />
      </div>
      <div className="absolute top-1/3 rotate-180 right-0 md:w-[40%]  lg:w-[20%] max-sm:hidden">
        <Image
          src={LeftDesign}
          alt="errorAboutImage"
          className="bg-cover w-full bg-no-repeat"
        />
      </div>
      <div className="lg:px-36 p-10 space-y-10 ">
        <div className="w-full place-items-center">
          <div className="text-2xl font-bold">What We Provide </div>
          <div className="text-xs md:text-base font-medium text-black/60 max-lg:line-clamp-6 w-[85%] text-center">
            "We provide industry-focused IT training with expert-led courses,
            hands-on projects, and globally recognized certifications to boost
            your career. Our programs are designed to equip you with in-demand
            skills and real-world experience."
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {courseData.map((course, index) => (
              <div
                key={index}
                className="bg-white z-10 p-4 rounded-lg shadow flex flex-col items-center justify-center space-y-2 hover:border-2 hover:border-primary hover:transition-all hover:ease-in-out duration-700 box-border h-52"
              >
                <MdModelTraining className="text-primary h-10 w-10" />
                <div className="text-medium font-semibold">{course.title}</div>
                <div className="text-xs lg:text-sm text-center ">
                  {course.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weprovide;
