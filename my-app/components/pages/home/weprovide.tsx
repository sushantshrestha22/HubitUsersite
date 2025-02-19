import { StaticImageData } from "next/image";
import Course1 from "@/app/assets/image/motiongraphics.png";
import Course2 from "@/app/assets/image/webdevelopment.png";
import Course3 from "@/app/assets/image/react.png";
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
    <div className=" lg:px-36 p-10 space-y-10">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center space-y-2 hover:border border-primary box-border h-56"
            >
              {/* <img src={course.image.src} alt={course.title} /> */}
              <MdModelTraining className="text-primary h-10 w-10"/>
              <div className="text-medium font-semibold">{course.title}</div>
              <div className="text-sm text-center">{course.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weprovide;
