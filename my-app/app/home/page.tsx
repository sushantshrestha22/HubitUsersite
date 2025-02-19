import AboutSection from "@/components/pages/home/aboutSection";
import HeroSection from "@/components/pages/home/herosection";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Home;
