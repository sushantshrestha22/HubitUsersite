import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Props = {
  title1: string;
  link1: string;
  title2: string;
  link2: string;
};

const PageHerosection = (props: Props) => {
  return (
    <div className="bg-herosection bg-cover bg-no-repeat bg-center flex justify-center items-center max-sm:h-[30vh] md:h-[20vh] lg:h-[40vh]  relative">
      <div className="absolute top-0 bg-foreground/50 w-full h-full"></div>
      <div className="text-secondary max-sm:text-xl text-2xl uppercase z-10 tracking-wider leading-6 ">
        
        <Breadcrumb className="z-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{props.title1}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{props.title2}</BreadcrumbLink>
            </BreadcrumbItem>
           
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default PageHerosection;
