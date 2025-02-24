import PageHerosection from "@/components/pages/common/pageherosection";
import AboutPlacement from "@/components/pages/placement/aboutplacement";
import React from "react";

type Props = {};

const Placement = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Placement" link1="#" link2="#" />
      <AboutPlacement />
    </div>
  );
};

export default Placement;
