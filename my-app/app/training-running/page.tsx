import PageHerosection from "@/components/pages/common/pageherosection";
import TrainingRunnings from "@/components/pages/training-running/trainingrunning";
import React from "react";

type Props = {};

const TrainingRunningPage = (props: Props) => {
  return (
    <div>
      <PageHerosection
        title1="Home"
        title2="Training Running"
        link1="#"
        link2="#"
      />
      <TrainingRunnings />
    </div>
  );
};

export default TrainingRunningPage;
