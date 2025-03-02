import JobApplicationForm from "@/components/form/jobapplication/form";
import PageHerosection from "@/components/pages/common/pageherosection";
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
    </div>
  );
};

export default JobApplication;
