import PageHerosection from "@/components/pages/common/pageherosection";
import IndividualDescription from "@/components/pages/course/individual/description";
import ExploreOtherCoursesSection from "@/components/pages/course/individual/exploreothercourses";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
import React from "react";

type Params = {
  id: string;
};

const IndividualCourse = (params: Params) => {
;  return (
    <div>
      <PageHerosection title1="Home" title2="Courses" link1="#" link2="#" />
      <IndividualDescription />
      <ExploreOtherCoursesSection />
      <QuickCall />
      <StudentTestimonialSection />
    </div>
  );
};

export default IndividualCourse;
