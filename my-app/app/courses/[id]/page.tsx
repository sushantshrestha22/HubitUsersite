import PageHerosection from "@/components/pages/common/pageherosection";
import IndividualDescription from "@/components/pages/course/individual/description";
import ExploreOtherCoursesSection from "@/components/pages/course/individual/exploreothercourses";
import React from "react";

type Props = {};

const IndividualCourse = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Courses" link1="#" link2="#" />
      <IndividualDescription />
      <ExploreOtherCoursesSection />
    </div>
  );
};

export default IndividualCourse;
