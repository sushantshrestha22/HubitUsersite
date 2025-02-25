import PageHerosection from "@/components/pages/common/pageherosection";
import PartnerSection from "@/components/pages/home/partnersection";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
import AboutPlacement from "@/components/pages/placement/aboutplacement";
import JobPlacementSection from "@/components/pages/placement/jobplacementsection";
import WokingProcessSection from "@/components/pages/placement/wokingprocesssection";
import React from "react";

type Props = {};

const Placement = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Placement" link1="#" link2="#" />
      <AboutPlacement />
      <WokingProcessSection />
      <JobPlacementSection />
      <QuickCall />
      <PartnerSection />
      <StudentTestimonialSection />
    </div>
  );
};

export default Placement;
