import PageHerosection from "@/components/pages/common/pageherosection";
import CorporateHerosection from "@/components/pages/corporate-training/corporateherosection";
import React from "react";

type Props = {};

const CorporateTraining = (props: Props) => {
  return (
    <div>
      <PageHerosection
        title1="Home"
        title2="Corporate-Training"
        link1="#"
        link2="#"
      />
      <CorporateHerosection />
    </div>
  );
};

export default CorporateTraining;
