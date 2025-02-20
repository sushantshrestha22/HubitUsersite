import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const DiscountSection = (props: Props) => {
  return (
    <div className="bg-discountbackground h-[40vh] md:h-[30vh] lg:h-[50vh] bg-cover text-secondary place-content-center place-items-center px-5 space-y-4">
      {" "}
      <div className="text-xl md:text-4xl font-semibold text-center">
        Early Bird Discount: Get 20% OFF on all courses!
      </div>
      <div className="text-base md:text-2xl font-medium">
        Refer a Friend & Get ₹2000 Cashback!
      </div>
      <div className="max-sm:space-y-4 md:space-x-4 text-center flex flex-col md:flex-row">
        <Button size="lg">Online Admission</Button>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default DiscountSection;
