"use client";
import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import Course1 from "@/app/assets/image/motiongraphics.png";
import { FaQuoteLeft } from "react-icons/fa";

type Props = {};

const SuccessfulSection = (props: Props) => {
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
          display: "none",
          background: "black",
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
          display: "none",
          background: "black",
          color: "yellow",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="lg:px-36 px-10 py-10 space-y-10">
      <div className="w-full place-items-center">
        <div className="text-2xl font-bold ">Our Successful Stories</div>
        <div className="text-xs md:text-base font-medium text-black/60 max-lg:line-clamp-6 w-[85%] text-center">
          "We provide industry-focused IT training with expert-led courses,
          hands-on projects, and globally recognized certifications to boost
          your career. Our programs are designed to equip you with in-demand
          skills and real-world experience."
        </div>
      </div>
      <Slider {...settings} className="w-full">
        {testimonials.map((testimonial, index) => (
          <div className="place-items-center pt-10 px-3" key={index}>
            <div className="relative flex flex-col items-center py-10 bg-secondary border-2 shadow rounded-sm  space-y-2 ">
              <FaQuoteLeft className="absolute -top-2 left-10 text-xl text-primary" />
              <div className="border-2 border-background absolute -top-12 rounded-full">
                <Image
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-20 h-20 rounded-full "
                />
              </div>

              <div className="text-base font-semibold pt-5">{testimonial.name}</div>
              <div className="text-sm font-semibold text-primary">{testimonial.position}</div>
              <div className="text-xs font-medium text-black/60 max-lg:line-clamp-6 w-[85%] text-center">
                {testimonial.testimonial}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SuccessfulSection;
