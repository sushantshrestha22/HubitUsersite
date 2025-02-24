import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import PlacementImage from "@/app/assets/image/aboutplacement.png";

type Props = {};

const AboutPlacement = (props: Props) => {
  return (
    <div className="flex flex-col-reverse gap-10  md:grid md:grid-cols-2 px-10 py-10 lg:px-36 place-content-center place-items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold max-sm:tet-center">
          What do we do for your placement?
        </h1>
        <p className="text-xs md:text-sm font-medium text-black/60 max-lg:line-clamp-[8]">
          Our company is committed to nurturing the next generation of talent by
          providing comprehensive internship opportunities for trainees. Through
          hands-on projects and mentorship from seasoned professionals, interns
          gain practical experience and valuable insights into our industry. We
          offer a supportive environment where they can contribute to meaningful
          work, enhance their skills, and build a strong foundation for their
          future careers. Our internships aim to inspire and empower trainees to
          grow both personally and professionally, setting them up for success
          in their chosen fields. Our internships aim to inspire and empower
          trainees to grow both personally and professionally, setting them up
          for success in their chosen fields.
        </p>
        <div>
          <Button size="lg">Apply now</Button>
        </div>
      </div>
      <div className="relative">
        <Image src={PlacementImage} alt="PlacementImage" className="  z-10" />
        <div className="w-[60%] h-[90%] rounded-t-full bg-gradient-to-r from-primary to-accent absolute bottom-0 right-0 -z-10  "></div>
      </div>
    </div>
  );
};

export default AboutPlacement;
