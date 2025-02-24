import ContactForm from "@/components/form/contact/form";
import React from "react";

type Props = {};

const QuickCall = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-accent to-primary h-[50vh]  md:h-[25vh] lg:h-[30vh] text-secondary px-10 lg:px-36 grid lg:grid-cols-2">
      <div className="place-content-center place-items-start space-y-2">
        <h1 className="text-lg lg:text-xl font-bold">Let Us Give you A Quick Call!</h1>
        <p className="text-xs font-medium">
          Leave Us Your Contact Number So Our Administrative Can Contact You As
          Soon As Possible.
        </p>
      </div>
      <div className="place-content-center place-items-center w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default QuickCall;
