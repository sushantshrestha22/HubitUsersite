import StudentEnrollmentForm from "@/components/form/studentenrollment/form";
import PageHerosection from "@/components/pages/common/pageherosection";
import QuickCall from "@/components/pages/home/quickcall";
import StudentTestimonialSection from "@/components/pages/home/studenttestimonialsection";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Contact" link1="#" link2="#" />
      <StudentEnrollmentForm />
      <QuickCall />
      <StudentTestimonialSection />
    </div>
  );
};

export default Contact;
