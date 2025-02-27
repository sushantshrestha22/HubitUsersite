import React from "react";
import { MdModelTraining } from "react-icons/md";

type Props = {};

const ItSolutionSection = (props: Props) => {
  type ServicesProps = {
    title: string;
    description: string;
  };

  const servicesData: ServicesProps[] = [
    {
      title: "Software Development",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete. Designed syllabus focuing the sector as need of industries.",
    },
    {
      title: "IT Infrastructure & Cloud Solutions",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete. Designed syllabus focuing the sector as need of industries.",
    },
    {
      title: "Cybersecurity & Data Protection",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete. Designed syllabus focuing the sector as need of industries.",
    },
    {
      title: "IT Support & Managed Services",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete. Designed syllabus focuing the sector as need of industries.",
    },
    {
      title: "Digital Marketing & SEO",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete. Designed syllabus focuing the sector as need of industries.",
    },
    {
      title: "Business Automation & ERP Solutions",
      description:
        "Designed syllabus focuing the sector as need of industries demand in which our students can compete. Designed syllabus focuing the sector as need of industries.",
    },
  ];
  //   lg:px-36 p-10
  return (
    <div className=" relative">
      <div>
        <div className="absolute top-0 bg-serivesbackground bg-cover bg-center w-full h-full"></div>
        <div className="absolute top-0 bg-[#3A012D]/80 w-full h-full rounded-md"></div>
      </div>
      <div className="relative text-secondary lg:px-36 p-10">
        <div className="text-center text-white space-y-10 z-10">
          <div className="w-full place-items-center space-y-4 text-secondary">
            <h1 className="text-xl font-bold z-10">IT solutions we provide</h1>
            <p className="text-xs md:text-sm font-medium text-white/70 max-lg:line-clamp-6 w-[85%] text-center">
              "We provide industry-focused IT training with expert-led courses,
              hands-on projects, and globally recognized certifications to boost
              your career. Our programs are designed to equip you with in-demand
              skills and real-world experience."
            </p>
          </div>
          <div className="text-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center py-10 px-4 gap-4 border-x-2 border-b-2 border-secondary relative "
                >
                  <div className="absolute top-0 left-0 max-sm:w-[42%] w-[45%] border-t-2 border-secondary"></div>
                  <div className="absolute top-0 right-0 max-sm:w-[42%] w-[45%] border-t-2 border-secondary"></div>
                  <div className="flex items-center justify-center p-2 border-secondary border-2 rounded-full absolute -top-5 max-sm:w-[16%] w-[10%] ">
                    <MdModelTraining className=" text-secondary max-sm:h-7 max-sm:w-7  h-5 w-5 " />
                  </div>
                  <h1 className="text-lg font-semibold">{service.title}</h1>
                  <p className="text-sm text-center text-white/90">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItSolutionSection;
