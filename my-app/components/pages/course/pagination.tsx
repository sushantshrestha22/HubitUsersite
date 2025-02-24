import { Button } from "@/components/ui/button";
import React from "react";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

type Props = {};

const PaginatedItems = (props: Props) => {


  
  return (
    <div className=" w-full space-x-4 ">
      <Button>
        {/* <GiPreviousButton className="h-10 " /> */}
        prev
      </Button>
      <Button className="" variant="outline">
        1 of 3
      </Button>

      <Button>
        {/* <GiNextButton className="" />

         */}
        next
      </Button>
    </div>
  );
};

export default PaginatedItems;
