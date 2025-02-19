import AboutSection from "@/components/pages/home/aboutSection";
import Course from "@/components/pages/home/course";
import HeroSection from "@/components/pages/home/herosection";
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
    </div>
  );
};

export default Home;
