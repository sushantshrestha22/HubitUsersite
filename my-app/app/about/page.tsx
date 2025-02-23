import AboutHeroSection from "@/components/pages/about/herosection";
import KeyStatistics from "@/components/pages/about/keystatistics";
import MissionVisionSection from "@/components/pages/about/missionvisionsection";
import TeamSection from "@/components/pages/about/teamsection";
import PageHerosection from "@/components/pages/common/pageherosection";
import PartnerSection from "@/components/pages/home/partnersection";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
import Weprovide from "@/components/pages/home/weprovide";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="About" link1="#" link2="#" />
      <AboutHeroSection />
      <KeyStatistics />
      <Weprovide />
      <MissionVisionSection />
      <TeamSection />
      <QuickCall />
      <PartnerSection />
      <StudentTestimonialSection />
    </div>
  );
};

export default page;
