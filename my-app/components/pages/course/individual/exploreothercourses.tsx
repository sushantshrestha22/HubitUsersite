import Image from "next/image";
import React from "react";
import Course1 from "@/app/assets/image/motiongraphics.png";
import { FaClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  courses: {
    id: string;
    title: string;
    duration: string;
    image: string;
  }[];
};

const ExploreOtherCoursesSection = (props: Props) => {
  return (
    <div className="bg-secondary lg:px-36 p-10 space-y-10">
      <div className="w-full space-y-4 place-items-center">
        <h2 className="text-xl font-bold max-sm:text-center">
          Explore Other Courses
        </h2>
        <p className="text-xs md:text-sm text-center text-black/60  max-lg:line-clamp-[8] w-[75%]">
          "We provide industry-focused IT training with expert-led courses,
          hands-on projects, and globally recognized certifications to boost
          your career. Our programs are designed to equip you with in-demand
          skills and real-world experience."
        </p>
      </div>
      <div className="space-y-5 lg:space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {props?.courses?.slice(0, 3).map((data, index) => (
            <div
              key={index}
              className={`w-full place-content-center place-items-center`}
            >
              <Link href={`/courses/${data.id}`}>
                <div className={``}>
                  <div>
                    {data?.image === "undefined" ? (
                      <Image
                        src={Course1}
                        alt="errorImage"
                        className="object-cover w-full h-32 md:h-40 lg:h-56 object-no-repeat object-center"
                      />
                    ) : (
                      <img
                        src={`${data?.image}`}
                        alt="errorImage"
                        className="object-cover w-full h-32 md:h-40 lg:h-56 object-no-repeat object-center"
                      />
                    )}
                  </div>
                  <div className=" p-4 border rounded-b-md bg-background space-y-2">
                    <div className="text-xs lg:text-sm font-semibold">
                      {data.title}
                    </div>
                    <div className="flex items-center gap-2 text-xs lg:text-sm">
                      {" "}
                      <FaClock className="text-primary" />
                      {data.duration} 
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full text-end col-span-3">
          <Link href="/courses">
            <Button size="lg" variant="ghost">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreOtherCoursesSection;
