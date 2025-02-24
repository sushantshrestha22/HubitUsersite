import React from "react";
import JobplacementImage from "@/app/assets/image/jobplacement.png";
import { MdModelTraining } from "react-icons/md";
import Image from "next/image";

type Props = {};

const JobPlacementSection = (props: Props) => {
  return (
    <div className=" space-y-10 bg-secondary p-10 lg:px-36">
      {" "}
      <div className="space-y-4 place-items-center">
        <h1 className="text-xl font-bold max-sm:text-center">
          Why Choose Our Job Placement Service
        </h1>
        <p className="text-xs md:text-sm text-center text-black/60  max-lg:line-clamp-[8] w-[75%]">
          "We provide industry-focused IT training with expert-led courses,
          hands-on projects, and globally recognized certifications to boost
          your career. Our programs are designed to equip you with in-demand
          skills and real-world experience."
        </p>
      </div>
      <div className=" flex max-sm:place-content-center max-sm:gap-5">
        <div className="flex flex-col gap-5 sm:gap-10 justify-center max-sm:w-full w-[40%]">
          <div className="flex w-full items-center relative sm:-right-10">
            <div className="bg-primary rounded-full w-full justify-center items-center gap-4 p-4 text-secondary text-xs lg:text-sm  flex">
              <MdModelTraining className="h-6 w-6" />
              Expert-Led Training
            </div>
            <div className=" h-1 w-full bg-primary max-sm:hidden"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="bg-primary rounded-full w-full justify-center items-center gap-4 p-4 text-secondary text-xs lg:text-sm  flex">
              <MdModelTraining className="h-6 w-6" />
              Expert-Led Training
            </div>
            <div className=" h-1 w-full bg-primary max-sm:hidden"></div>
          </div>
          <div className="flex w-full items-center relative sm:-right-10">
            <div className="bg-primary rounded-full w-full justify-center items-center gap-4 p-4 text-secondary text-xs lg:text-sm  flex">
              <MdModelTraining className="h-6 w-6" />
              Expert-Led Training
            </div>
            <div className=" h-1 w-full bg-primary max-sm:hidden"></div>
          </div>
        </div>
        <div className="bg-secondary z-10 rounded-full max-sm:hidden ">
          <Image
            src={JobplacementImage}
            alt="PlacementImage"
            className="border-4 border-primary rounded-full p-4 z-10 w-full lg:h-[50vh] bg-cover "
          />
        </div>
        <div className="flex flex-col gap-5 sm:gap-10 justify-center max-sm:w-full w-[40%]">
          <div className="flex w-full items-center relative sm:-left-10">
            <div className=" h-1 w-full bg-primary max-sm:hidden"></div>
            <div className="bg-primary rounded-full w-full justify-center items-center gap-4 p-4 text-secondary text-xs lg:text-sm  flex">
              <MdModelTraining className="h-6 w-6" />
              Expert-Led Training
            </div>
          </div>
          <div className="flex w-full items-center">
            <div className=" h-1 w-full bg-primary max-sm:hidden"></div>
            <div className="bg-primary rounded-full w-full justify-center items-center gap-4 p-4 text-secondary text-xs lg:text-sm  flex">
              <MdModelTraining className="h-6 w-6" />
              Expert-Led Training
            </div>
          </div>
          <div className="flex w-full items-center  relative sm:-left-10">
            <div className=" h-1 w-full bg-primary max-sm:hidden"></div>
            <div className="bg-primary rounded-full w-full justify-center items-center gap-4 p-4 text-secondary text-xs lg:text-sm  flex">
              <MdModelTraining className="h-6 w-6" />
              Expert-Led Training
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPlacementSection;
