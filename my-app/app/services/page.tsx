import PageHerosection from "@/components/pages/common/pageherosection";
import ServiceKeyStatistics from "@/components/pages/services/keystatistics";
import OurServiceSection from "@/components/pages/services/ourservicesection";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Services" link1="#" link2="#" />
      <OurServiceSection />
      <ServiceKeyStatistics />
    </div>
  );
};

export default Services;
