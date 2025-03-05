import PageHerosection from "@/components/pages/common/pageherosection";
import CourseSection from "@/components/pages/course/coursesection";
import Pagination from "@/components/pages/course/pagination";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
import { fetchData } from "@/lib/query/query";
import React from "react";

type Props = {};

const CoursePage = async (props: Props) => {
  const courseData = await fetchData(`/courses`);
  return (
    <div>
      <PageHerosection title1="Home" title2="Course" link1="#" link2="#" />
      <CourseSection courses={courseData?.result} />
      {/* <Pagination courses={courseData?.result} /> */}
      <QuickCall />
      <StudentTestimonialSection />
    </div>
  );
};

export default CoursePage;
