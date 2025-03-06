import PageHerosection from "@/components/pages/common/pageherosection";
import OurTeamSection from "@/components/pages/our-team/teamsection";
import React from "react";

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Our Team" link1="#" link2="#" />
      <OurTeamSection />
    </div>
  );
};

export default OurTeam;
