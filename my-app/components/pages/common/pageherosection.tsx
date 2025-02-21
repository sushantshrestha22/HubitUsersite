import React from "react";

type Props = {
  title: string;
};

const PageHerosection = (props: Props) => {
  return (
    <div className="bg-herosection bg-cover bg-no-repeat bg-center flex justify-center items-center max-sm:h-[30vh] md:h-[20vh] lg:h-[40vh]  relative">
      <div className="absolute top-0 bg-foreground/50 w-full h-full"></div>
      <div className="text-secondary max-sm:text-xl text-2xl uppercase z-10 tracking-wider leading-6 ">
        {props.title}
      </div>
    </div>
  );
};

export default PageHerosection;
