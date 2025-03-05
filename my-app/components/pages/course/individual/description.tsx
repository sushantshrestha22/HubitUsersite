import React from "react";
import Image from "next/image";
import Course1 from "@/app/assets/image/motiongraphics.png";
import { GoClockFill } from "react-icons/go";

interface Course {
  id: string;
  title: string;
  duration: string;
  image: string;
  description: string;
}

type IndividualDescriptionProps = {
  courses: Course;
};

const IndividualDescription = async (props: IndividualDescriptionProps) => {
  const { courses } = props;

  console.log(props.courses.title);

  return (
    <div className="lg:px-36 p-10 space-y-10 bg-secondary">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-sm:place-items-center">
        <div className="max-sm:place-items-center max-sm:col-span-2 lg:col-span-2">
          {courses?.image === "undefined" ? (
            <Image
              src={Course1}
              alt="errorImage"
              className="object-cover w-full h-full object-center object-no-repeat"
            />
          ) : (
            <img
              src={`${courses?.image}`}
              alt="errorImage"
              className="object-cover w-full h-full object-center object-no-repeat"
            />
          )}
        </div>
        <div className="col-span-2 lg:col-span-4 md:col-span-3 flex flex-col justify-evenly gap-4">
          <div className=" p-4 lg:px-10 bg-gradient-to-r from-primary to-accent text-secondary rounded flex items-center justify-between">
            <h1>{courses?.title}</h1>
            <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold  text-secondary">
              <GoClockFill className=" h-4 w-4" />
              <span>{courses?.duration}</span>
            </div>
          </div>
          <div className=" border border-foreground/50 rounded">
            <div
              className="p-4 lg:px-10 text-xs md:text-sm font-medium text-black/60"
              dangerouslySetInnerHTML={{
                __html: courses?.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualDescription;
