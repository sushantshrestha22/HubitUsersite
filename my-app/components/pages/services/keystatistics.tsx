import { Plus } from "lucide-react";
import React from "react";
import { FaPlus } from "react-icons/fa";

type Props = {};

const ServiceKeyStatistics = (props: Props) => {
  interface HeroSectionProps {
    title: string;
    value: number;
  }

  const heroSectionData: HeroSectionProps[] = [
    {
      title: "Happy Cilent",
      value: 1000,
    },
    {
      title: "Development Team",
      value: 1000,
    },
    {
      title: "Project Completed",
      value: 1000,
    },

    {
      title: "Years of Experience",
      value: 1000,
    },
    
  ];
  return (
    <div className="z-10 w-full grid grid-cols-2 md:grid-cols-4 px-10 py-10 bg-gradient-to-r from-primary to-accent lg:px-36 max-sm:gap-5 gap-10 ">
      {heroSectionData.map((data, index) => (
        <div
          key={index}
          className={`w-full place-content-center place-items-center`}
        >
          <div
            className={`rounded-md w-full place-content-center place-items-center max-sm:h-20 h-32 `}
          >
            <div className="max-sm:text-lg text-2xl font-semibold text-secondary flex">
              {data.value}
              <FaPlus className="h-4 w-4" />
            </div>
            <div className="max-sm:text-xs text-base text-secondary">{data.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceKeyStatistics;
