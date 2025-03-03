import PageHerosection from "@/components/pages/common/pageherosection";
import IndividualDescription from "@/components/pages/course/individual/description";
import React from "react";

type Props = {};

const IndividualCourse = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Courses" link1="#" link2="#" />
      <IndividualDescription />
    </div>
  );
};

export default IndividualCourse;
