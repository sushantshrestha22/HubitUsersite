import StudentEnrollmentForm from "@/components/form/studentenrollment/form";
import PageHerosection from "@/components/pages/common/pageherosection";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      {" "}
      <PageHerosection title1="Home" title2="Contact" link1="#" link2="#" />
      <StudentEnrollmentForm />
    </div>
  );
};

export default Contact;
