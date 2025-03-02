import JobApplicationForm from "@/components/form/jobapplication/form";
import PageHerosection from "@/components/pages/common/pageherosection";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
import React from "react";

type Props = {};

const JobApplication = (props: Props) => {
  return (
    <div>
      <PageHerosection
        title1="Home"
        title2="Job Application Form"
        link1="#"
        link2="#"
      />
      <JobApplicationForm />
      <QuickCall />
      <StudentTestimonialSection />
    </div>
  );
};

export default JobApplication;
