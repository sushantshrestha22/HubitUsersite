import AboutSection from "@/components/pages/home/aboutSection";
import Course from "@/components/pages/home/course";
import DiscountSection from "@/components/pages/home/discountsection";
import HeroSection from "@/components/pages/home/herosection";
import PartnerSection from "@/components/pages/home/partnersection";
import Weprovide from "@/components/pages/home/weprovide";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Course />
      <Weprovide />
      <DiscountSection/>
      <PartnerSection />
    </div>
  );
};

export default Home;
