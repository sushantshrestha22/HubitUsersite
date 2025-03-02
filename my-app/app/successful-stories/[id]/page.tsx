import PageHerosection from "@/components/pages/common/pageherosection";
import DescriptionSection from "@/components/pages/storiesdescription/descriptionsection";
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
    </div>
  );
};

export default SuccessfulStoriesDescription;
