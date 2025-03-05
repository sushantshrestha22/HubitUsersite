"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Course1 from "@/app/assets/image/motiongraphics.png";
import { FaClock } from "react-icons/fa";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

import CourseNav from "./coursenav";
import Link from "next/link";

type Props = {
  courses: {
    id: string;
    title: string;
    duration: string;
    image: string;
  }[];
};

const CourseSection = (props: Props) => {
  const { courses } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  type FormData = {
    id: string;
    title: string;
    duration: string;
    image: string;
  };

  return (
    <div className="bg-secondary lg:px-36 p-10 space-y-10">
      <div className="">
        <CourseNav />
      </div>
      <div className="space-y-5 lg:space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {currentCourses.map((data: FormData, index: number) => (
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
                        className="bg-cover w-full h-32 md:h-40 lg:h-56 bg-no-repeat"
                      />
                    ) : (
                      <img
                        src={`${data?.image}`}
                        alt="errorImage"
                        className="bg-cover w-full h-32 md:h-40 lg:h-56 bg-no-repeat"
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
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CourseSection;
