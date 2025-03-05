import Image from "next/image";
import React from "react";
import LeftDesign from "@/app/assets/image/leftdesign.png";
import { Button } from "@/components/ui/button";
import Training from "@/app/assets/image/training.png";
import { MdModelTraining } from "react-icons/md";

type Props = {};

const TrainingService = (props: Props) => {
  type CourseProps = {
    title: string;
  };

  const courseData: CourseProps[] = [
    {
      title: "On-site",
    },
    {
      title: "Line-On -Line",
    },

    {
      title: "Blended Learning",
    },
    {
      title: "Self-Paced Learning",
    },
  ];

  return (
    <div className="relative grid md:grid-cols-2 gap-10 lg:px-36 p-10 place-items-center">
      <div className="absolute top-1/2 -translate-y-1/2  md:w-[40%]  lg:w-[20%] left-0 max-sm:hidden opacity-50">
        <Image
          src={LeftDesign}
          alt="errorAboutImage"
          className="bg-cover w-full bg-no-repeat"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 rotate-180 right-0 md:w-[40%]  lg:w-[20%] max-sm:hidden opacity-50">
        <Image
          src={LeftDesign}
          alt="errorAboutImage"
          className="bg-cover w-full bg-no-repeat"
        />
      </div>
      <div className="z-10 ">
        <div className="w-full space-y-8">
          <div className="space-y-2">
            <h1 className="text-xl font-bold max-sm:text-center">
              Training services we provide{" "}
            </h1>
            <p className="text-xs md:text-sm text-justify text-black/60  max-lg:line-clamp-[8]">
              "We provide industry-focused IT training with expert-led courses,
              hands-on projects, and globally recognized certifications to boost
              your career. Our programs are designed to equip you with in-demand
              skills and real-world experience."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
            {courseData.map((data, index) => (
              <div
                key={index}
                className={`w-full bg-secondary text-primary text-xs lg:text-sm font-semibold text-center p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-500 ease-in-out`}
              >
                {data.title}
              </div>
            ))}
          </div>
          <Button size="lg">Views More</Button>
        </div>
      </div>
      <div className=" w-full place-items-center relative">
        <div className="bg-primary text-secondary">

        </div>
        <div className="z-10 rounded-full border-4 border-primary p-2 h-full lg:w-[350px]  lg:h-[50vh] relative max-sm:hidden ">
          <Image
            src={Training}
            alt="ErrorImage"
            className="rounded-full w-full h-full object-cover"
          />

          <div className="border-4 border-primary rounded-full bg-background w-14 h-14 place-content-center place-items-center p-2 absolute -left-7 top-28">
            <MdModelTraining className="w-8 h-8 text-primary " />
          </div>
          <div className="border-4 border-primary rounded-full bg-background w-14 h-14 place-content-center place-items-center p-2 absolute left-0 top-3/4">
            <MdModelTraining className="w-8 h-8 text-primary " />
          </div>
          <div className="border-4 border-primary rounded-full bg-background w-14 h-14 place-content-center place-items-center p-2 absolute left-0 bottom-3/4">
            <MdModelTraining className="w-8 h-8 text-primary " />
          </div>
          <div className="border-4 border-primary rounded-full bg-background w-14 h-14 place-content-center place-items-center p-2 absolute -left-7 bottom-28">
            <MdModelTraining className="w-8 h-8 text-primary " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingService;
