import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import CorporateImage from "@/app/assets/image/corporateimage.png";

type Props = {};

const CorporateHerosection = (props: Props) => {
  return (
    <div className="flex flex-col-reverse gap-10  md:grid md:grid-cols-2 px-10 py-10 lg:px-36 place-content-center place-items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold max-sm:tet-center">
          What is corporate training?
        </h1>
        <p className="text-xs md:text-sm text-justify font-medium text-black/60 max-lg:line-clamp-[8]">
          Corporate training is an essential investment for companies looking to
          improve employee skills, productivity, and job satisfaction. Through
          targeted programs and workshops, organizations can enhance their
          workforce's knowledge and capabilities, ensuring they stay competitive
          in a rapidly changing business landscape. Effective corporate training
          also fosters a culture of continuous learning and development, leading
          to higher employee retention rates and better overall performance. By
          equipping employees with the latest industry insights and best
          practices, companies can drive innovation and achieve long-term
          success.
        </p>
        <div>
          <Button size="lg">Apply now</Button>
        </div>
      </div>
      <div className="relative">
        <Image src={CorporateImage} alt="PlacementImage" className="  z-10" />
      </div>
    </div>
  );
};

export default CorporateHerosection;
