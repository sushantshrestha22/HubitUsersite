import PageHerosection from "@/components/pages/common/pageherosection";
import CourseSection from "@/components/pages/course/coursesection";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
import React from "react";

type Props = {};

const CoursePage = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Course" link1="#" link2="#" />
      <CourseSection />
      <QuickCall />
      <StudentTestimonialSection />
    </div>
  );
};

export default CoursePage;
