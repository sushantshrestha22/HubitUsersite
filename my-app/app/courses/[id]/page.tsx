import PageHerosection from "@/components/pages/common/pageherosection";
import IndividualDescription from "@/components/pages/course/individual/description";
import ExploreOtherCoursesSection from "@/components/pages/course/individual/exploreothercourses";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
import { fetchData } from "@/lib/query/query";
import React from "react";

type PostPageProps = {
  params: { id: string };
};

const IndividualCourse = async ({ params }: PostPageProps) => {
  const { id } = params;

  const individualCourseData = await fetchData(`/courses/${id}`);
  const courseData = await fetchData(`/courses`);


  return (
    <div>
      <PageHerosection title1="Home" title2="Courses" link1="#" link2="#" />
      <IndividualDescription courses={individualCourseData?.result} />
      <ExploreOtherCoursesSection courses={courseData?.result} />
      <QuickCall />
      <StudentTestimonialSection />
    </div>
  );
};

export default IndividualCourse;
