import React from "react";

type Props = {};

const CorporateKeyStatistics = (props: Props) => {
  type CorporateKeyStatisticsProps = {
    title: string;
    value: number;
  };

  const corporateKeyStatisticsData: CorporateKeyStatisticsProps[] = [
    {
      title: "Training Accomplished",
      value: 150,
    },
    {
      title: "Training Running",
      value: 0,
    },
    {
      title: "Upcoming Training",
      value: 10,
    },
  ];
  return (
    <div className="z-10 w-full grid max-sm:grid-cols-1 grid-cols-3  px-10 py-10 bg-gradient-to-r from-primary to-accent lg:px-36 max-sm:gap-5 gap-10 ">
      {corporateKeyStatisticsData.map((data, index) => (
        <div
          key={index}
          className={`w-full place-content-center place-items-center`}
        >
          <div
            className={`bg-secondary rounded-md w-full  shadow place-content-center place-items-center max-sm:h-20 h-32 `}
          >
            <div className="max-sm:text-lg text-2xl font-semibold text-primary flex">
              {data.value}
            </div>
            <div className="max-sm:text-xs text-base ">{data.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CorporateKeyStatistics;
