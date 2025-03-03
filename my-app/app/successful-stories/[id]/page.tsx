import PageHerosection from "@/components/pages/common/pageherosection";
import DescriptionSection from "@/components/pages/storiesdescription/descriptionsection";
import ExploreOther from "@/components/pages/storiesdescription/exploreother";
import React from "react";

type Props = {};

const SuccessfulStoriesDescription = (props: Props) => {
  return (
    <div>
      <PageHerosection
        title1="Home"
        title2="SuccessFul Stories"
        link1="#"
        link2="#"
      />
      <DescriptionSection />
      <ExploreOther />
    </div>
  );
};

export default SuccessfulStoriesDescription;
