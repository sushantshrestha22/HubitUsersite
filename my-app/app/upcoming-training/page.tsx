import PageHerosection from "@/components/pages/common/pageherosection";
import UpcomingTraining from "@/components/pages/upcoming-training/upcomingtraining";
import React from "react";

type Props = {};

const UpcomingTrainingPage = (props: Props) => {
  return (
    <div>
      <PageHerosection
        title1="Home"
        title2="Upcoming Training"
        link1="#"
        link2="#"
      />
      <UpcomingTraining />
    </div>
  );
};

export default UpcomingTrainingPage;
