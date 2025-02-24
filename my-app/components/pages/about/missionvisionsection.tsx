import React from "react";
import { GiConvergenceTarget } from "react-icons/gi";
import { GoGoal } from "react-icons/go";

type Props = {};

const MissionVisionSection = (props: Props) => {
  type Data = {
    title: string;
    description: string;
    icons?: JSX.Element;
  };

  const data: Data[] = [
    {
      title: "Our Mission",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete.Designed syllabus focuing the sector as need of industries demand in which our students can compete. Designed syllabus focuing the sector as need of industries demand in which our students can compete.",
      icons: <GoGoal className="text-secondary h-10 w-10" />,
    },
    {
      title: "Our Vision",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete.Designed syllabus focuing the sector as need of industries demand in which our students can compete. Designed syllabus focuing the sector as need of industries demand in which our students can compete.",
      icons: <GiConvergenceTarget className="text-secondary h-10 w-10" />,
    },
  ];

  return (
    <div className="bg-missionvisionbackground md:h-[30vh] lg:h-[50vh] bg-cover text-secondary place-content-center place-items-center p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:px-10 lg:px-32 gap-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-x-2 border-b-2 border-secondary  w-full relative p-10 flex flex-col gap-4"
        >
          <div className="absolute top-0 left-0 w-[40%] md:w-[40%]  lg:w-[45%] border-t-2 border-secondary"></div>
          <div className="absolute top-0 right-0 w-[40%] md:w-[40%]  lg:w-[45%] border-t-2 border-secondary"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2   text-center">
            {item.icons}
          </div>
          <div className="text-lg font-semibold text-center">{item.title}</div>
          <p className="text-xs xl:text-sm text-justify">{item.description}</p>
        </div>
      ))}
      
    </div>
  );
};

export default MissionVisionSection;
