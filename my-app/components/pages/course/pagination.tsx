"use client";
import Image from "next/image";
import Course1 from "@/app/assets/image/motiongraphics.png";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

import React, { useState } from "react";

type Props = {
  courses: {
    title: string;
    duration: string;
    image: string;
  }[];
};

const Pagination =  (props: Props) => {
  const { courses } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  type FormData = {
    title: string;
    duration: string;
    image: string;
  };

  return (
    <div className="space-y-5 lg:space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {currentCourses.map((data: FormData, index: number) => (
          <div
            key={index}
            className={`w-full place-content-center place-items-center`}
          >
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
                  {/* <FaClock className="text-primary" /> */}
                  {data.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full text-center col-span-3 ">
      <PaginatedItems />
    </div> */}
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
