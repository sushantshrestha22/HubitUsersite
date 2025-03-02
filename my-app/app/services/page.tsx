import TeamSection from "@/components/pages/about/teamsection";
import PageHerosection from "@/components/pages/common/pageherosection";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
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
      {/* <OurServiceSection /> */}
      <TrainingService />
      <ServiceKeyStatistics />
      <ItSolutionSection />
      <TeamSection />
      <QuickCall />
      <StudentTestimonialSection />
    </div>
  );
};

export default Services;
