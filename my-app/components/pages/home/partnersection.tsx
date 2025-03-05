import Image, { StaticImageData } from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Khalti from "@/app/assets/image/khalti.png";

export default function PartnerSection() {
  type Partners = {
    name: string;
    logo: StaticImageData;
  };

  const partners: Partners[] = [
    {
      name: "Khalti",
      logo: Khalti,
    },
    {
      name: "Khalti",
      logo: Khalti,
    },
    {
      name: "Khalti",
      logo: Khalti,
    },
    {
      name: "Khalti",
      logo: Khalti,
    },
    {
      name: "Khalti",
      logo: Khalti,
    },
    {
      name: "Khalti",
      logo: Khalti,
    },
  ];

  return (
    <div className="py-10 space-y-10 bg-secondary">
      <div className="w-full place-items-center max-sm:place-content-center flex md:px-20 lg:px-52">
        <div className="flex items-center w-full max-sm:hidden">
          <div className="h-2 w-2 rounded-full bg-black/20"></div>
          <div className="border border-black/20 w-full"></div>
        </div>
        <h1 className="text-xl font-bold md:w-[70%] lg:w-[35%] text-center">Our Partners</h1>
        <div className="flex items-center w-full max-sm:hidden">
          <div className="border border-black/20 w-full"></div>
          <div className="h-2 w-2 rounded-full bg-black/20"></div>
        </div>
      </div>
      <Marquee className="px-10 lg:px-36" speed={50} pauseOnHover={true}>
        <div className="grid grid-cols-6 gap-10 px-5">
          {partners.map((partner, index) => (
            <div className="flex " key={index}>
              <Image
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="h-20"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
