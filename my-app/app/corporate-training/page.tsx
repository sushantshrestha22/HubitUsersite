import PageHerosection from "@/components/pages/common/pageherosection";
import CorporateHerosection from "@/components/pages/corporate-training/corporateherosection";
import CorporateKeyStatistics from "@/components/pages/corporate-training/corporatekeystatistics";
import CorporatePartnerSection from "@/components/pages/corporate-training/corporatepartners";
import TrainingRunning from "@/components/pages/corporate-training/trainingrunning";
import UpcomingCorporateTraining from "@/components/pages/corporate-training/upcomingcorporatetraining";
import React from "react";

type Props = {};

const CorporateTraining = (props: Props) => {
  return (
    <div>
      <PageHerosection
        title1="Home"
        title2="Corporate-Training"
        link1="#"
        link2="#"
      />
      <CorporateHerosection />
      <CorporateKeyStatistics />
      <TrainingRunning />
      <CorporatePartnerSection />
      <UpcomingCorporateTraining />
    </div>
  );
};

export default CorporateTraining;
