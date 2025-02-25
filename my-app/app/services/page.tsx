import PageHerosection from "@/components/pages/common/pageherosection";
import OurServiceSection from "@/components/pages/services/ourservicesection";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Services" link1="#" link2="#" />
      <OurServiceSection />
    </div>
  );
};

export default Services;
