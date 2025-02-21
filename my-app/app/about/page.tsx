import AboutHeroSection from "@/components/pages/about/herosection";
import KeyStatistics from "@/components/pages/about/keystatistics";
import PageHerosection from "@/components/pages/common/pageherosection";
import Weprovide from "@/components/pages/home/weprovide";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <PageHerosection title="About Us" />
      <AboutHeroSection />
      <KeyStatistics />
      <Weprovide />
    </div>
  );
};

export default page;
