import React from "react";
import Image from "next/image";
import Course1 from "@/app/assets/image/motiongraphics.png";
import { RiMapPinUserFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { GoClockFill } from "react-icons/go";

type Props = {};

const IndividualDescription = (props: Props) => {
  return (
    <div className="lg:px-36 p-10 space-y-10 bg-secondary">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-sm:place-items-center">
        <div className="max-sm:place-items-center max-sm:col-span-2 lg:col-span-2">
          <Image
            src={Course1}
            alt="errorAboutImage"
            className="bg-cover bg-center w-full h-full bg-no-repeat "
          />
        </div>
        <div className="col-span-2 lg:col-span-4 md:col-span-3 flex flex-col justify-evenly gap-4">
          <div className=" p-4 lg:px-10 bg-gradient-to-r from-primary to-accent text-secondary rounded flex items-center justify-between">
            <h1>Sushant Shrestha</h1>
            <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold  text-secondary">
              <GoClockFill  className=" h-4 w-4" />
              <span>3 months</span>
            </div>
          </div>
          <div className=" border border-foreground/50 rounded">
            {/* <div className="flex max-sm:flex-col gap-4 items-center border-b border-foreground/50 p-4 lg:px-10">
              <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold  text-foreground/50">
                <RiVerifiedBadgeFill className="text-primary h-4 w-4" />
                <span>Frontend Developer</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-foreground/50">
                <RiMapPinUserFill className="text-primary h-4 w-4" />
                <span>Placement at HubIT pvt.ltd</span>
              </div>
            </div> */}
            <div className="p-4 lg:px-10 text-xs md:text-sm font-medium text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              molestias architecto est tenetur cum adipisci enim. Debitis
              molestias vitae quis minima facilis sapiente molestiae, ex
              dolorem, voluptates mollitia dicta dolores asperiores esse earum!
              Magni ipsum porro adipisci nam totam fugit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualDescription;
