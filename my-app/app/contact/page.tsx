import PageHerosection from "@/components/pages/common/pageherosection";
import ContactSection from "@/components/pages/contact/contactsection";
import FaqsSection from "@/components/pages/contact/faqssection";

import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <PageHerosection title1="Home" title2="Contact" link1="#" link2="#" />
      <ContactSection />
      <FaqsSection />
    </div>
  );
};

export default Contact;
