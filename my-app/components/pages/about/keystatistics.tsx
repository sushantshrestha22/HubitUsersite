import React from "react";

type Props = {};

const KeyStatistics = (props: Props) => {
  interface HeroSectionProps {
    title: string;
    value: number;
  }

  const heroSectionData: HeroSectionProps[] = [
    {
      title: "Year we were Found",
      value: 1000,
    },
    {
      title: "Our Employee",
      value: 1000,
    },
    {
      title: "Our Students",
      value: 1000,
    },

    {
      title: "Job Placements",
      value: 1000,
    },
    {
      title: "Projects Finished",
      value: 1000,
    },
  ];
  return (
    <div className="z-10 w-full grid max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 py-10 bg-gradient-to-r from-primary to-accent lg:px-36 max-sm:gap-5 gap-10 ">
      {heroSectionData.map((data, index) => (
        <div
          key={index}
          className={`w-full place-content-center place-items-center`}
        >
          <div
            className={`bg-secondary rounded-md w-full  shadow place-content-center place-items-center max-sm:h-20 h-32 `}
          >
            <div className="max-sm:text-lg text-2xl font-semibold text-primary">
              {data.value}
            </div>
            <div className="max-sm:text-xs text-base ">{data.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyStatistics;
