"use client";
import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import Course1 from "@/app/assets/image/motiongraphics.png";
import Image, { StaticImageData } from "next/image";
import { ArrowBigDown } from "lucide-react";

type Props = {};

const StudentTestimonialSection = (props: Props) => {
  type Testimonial = {
    name: string;
    position: string;
    testimonial: string;
    image: StaticImageData;
  };

  const testimonials: Testimonial[] = [
    {
      name: "Sushant Shrestha",
      position: "Frontend Developer",
      testimonial:
        "The frontend development course was a game-changer for me! The hands-on projects and expert guidance helped me land a job as a React Developer. Highly recommended!",
      image: Course1,
    },
    {
      name: "Sushant Shrestha",
      position: "Frontend Developer",
      testimonial:
        "The frontend development course was a game-changer for me! The hands-on projects and expert guidance helped me land a job as a React Developer. Highly recommended!",
      image: Course1,
    },
    {
      name: "Sushant Shrestha",
      position: "Frontend Developer",
      testimonial:
        "The frontend development course was a game-changer for me! The hands-on projects and expert guidance helped me land a job as a React Developer. Highly recommended!",
      image: Course1,
    },
  ];

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "purple",
          color: "yellow",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "purple",
          color: "yellow",
          borderRadius: "50px",
        }}
        onClick={onClick}
      >
        <ArrowBigDown />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:px-36 p-10">
      <div className="w-full place-items-center">
        <div className="text-2xl font-bold">
          See What Our Students Say About Us?
        </div>
        <div className="text-xs md:text-base font-medium text-black/60 max-lg:line-clamp-6 w-[85%] text-center">
          "We provide industry-focused IT training with expert-led courses,
          hands-on projects, and globally recognized certifications to boost
          your career. Get started on your journey to success with our courses."
        </div>
      </div>
        <Slider {...settings} className="w-full">
          {testimonials.map((testimonial, index) => (
            <div className="place-items-center py-5 px-3" key={index}>
              <div className="relative bg-secondary border-2 shadow  grid grid-cols-1 md:grid-cols-3 gap-5 rounded-sm p-5 ">
                <div className="border-2 border-background ">
                  <Image
                    src={testimonial.image}
                    alt="testimonial"
                    className="w-full h-full"
                  />
                </div>
                <div className="col-span-2">
                  <div className="text-base font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {testimonial.position}
                  </div>
                  <div className="text-xs font-medium text-black/60 max-lg:line-clamp-6  text-justify">
                    {testimonial.testimonial}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default StudentTestimonialSection;
