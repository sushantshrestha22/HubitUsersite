import PageHerosection from "@/components/pages/common/pageherosection";
import ItSolutionSection from "@/components/pages/services/itsolutionsection";
import ServiceKeyStatistics from "@/components/pages/services/keystatistics";
import OurServiceSection from "@/components/pages/services/ourservicesection";
import TrainingService from "@/components/pages/services/trainingservice";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Services" link1="#" link2="#" />
      <OurServiceSection />
      <ServiceKeyStatistics />
      <TrainingService />
      <ItSolutionSection />
    </div>
  );
};

export default Services;
