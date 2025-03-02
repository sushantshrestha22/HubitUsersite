import PageHerosection from "@/components/pages/common/pageherosection";
import SuccessfulStoriesSection from "@/components/pages/successful-stories/successfulstoriessection";
import React from "react";

type Props = {};

const SuccessFulStories = (props: Props) => {
  return (
    <div>
      <PageHerosection
        title1="Home"
        title2="SuccessFul Stories"
        link1="#"
        link2="#"
      />
      <SuccessfulStoriesSection />
    </div>
  );
};

export default SuccessFulStories;
