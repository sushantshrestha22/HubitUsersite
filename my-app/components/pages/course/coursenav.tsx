"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { IoMdSearch } from "react-icons/io";

type Props = {};

const CourseNav = (props: Props) => {
  const [search, setSearch] = React.useState(false);

  type CourseNavItem = {
    name: string;
    value: string;
  };

  const courseNavItems: CourseNavItem[] = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Web Development",
      value: "Web-Development",
    },
    {
      name: "App Development",
      value: "App-Development",
    },
    {
      name: "Graphic Designing",
      value: "Graphic Designing",
    },
    {
      name: "UI/UX Designing",
      value: "UI/UX Designing",
    },
    {
      name: "Networking",
      value: "Networking",
    },
    {
      name: "App Development",
      value: "App-Development",
    },
    {
      name: "Graphic Designing",
      value: "Graphic Designing",
    },
    {
      name: "Networking",
      value: "Networking",
    },
    {
      name: "App Development",
      value: "App-Development",
    },
    {
      name: "Graphic Designing",
      value: "Graphic Designing",
    },
  ];

  return (
    <div className="flex gap-4 items-center justify-end">
      <div className=" bg-gradient-to-r flex gap-4 from-primary to-accent text-secondary p-2 rounded-md lg:h-[8vh] overflow-scroll overflow-y-hidden scrollbar-hide w-[70px]  hover:w-[6000px] transition-all duration-700  max-sm:hidden">
        {courseNavItems.map((item, index) => {
          return (
            // <div
            //   className={`px-4 py-2 text-xs rounded bg-secondary text-primary font-medium text-center  place-content-center ${
            //     index === 0 ? "" : "min-w-40"
            //   } `}
            //   key={index}
            // >
            <div
              className={`px-4 py-2 text-xs rounded font-medium text-center  place-content-center ${
                index === 0 ? "bg-secondary text-primary" : "min-w-36"
              } `}
              key={index}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <Input
        type="search"
        placeholder="Search"
        className="h-12 p-4 bg-secondary  "
      />

      {/* <div
        className="flex items-center cursor-pointer border h-full p-2 rounded place-content-center place-items-center"
        onClick={() => setSearch(!search)}
      >
        <IoMdSearch className="w-8 h-8" />
      </div> */}
    </div>
  );
};

export default CourseNav;
