import AboutHeroSection from "@/components/pages/about/herosection";
import PageHerosection from "@/components/pages/common/pageherosection";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <PageHerosection title="About Us" />
      <AboutHeroSection />
    </div>
  );
};

export default page;
