import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const FaqsSection = (props: Props) => {
  type FaqsProps = {
    question: string;
    answer: string;
  };

  const faqs: FaqsProps[] = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "We provide industry-focused IT training with expert-led courses, hands-on projects, and globally recognized certifications to boost your career. Our programs are designed to equip you with in-demand skills and real-world experience.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We provide industry-focused IT training with expert-led courses, hands-on projects, and globally recognized certifications to boost your career. Our programs are designed to equip you with in-demand skills and real-world experience.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We provide industry-focused IT training with expert-led courses, hands-on projects, and globally recognized certifications to boost your career. Our programs are designed to equip you with in-demand skills and real-world experience.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We provide industry-focused IT training with expert-led courses, hands-on projects, and globally recognized certifications to boost your career. Our programs are designed to equip you with in-demand skills and real-world experience.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We provide industry-focused IT training with expert-led courses, hands-on projects, and globally recognized certifications to boost your career. Our programs are designed to equip you with in-demand skills and real-world experience.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We provide industry-focused IT training with expert-led courses, hands-on projects, and globally recognized certifications to boost your career. Our programs are designed to equip you with in-demand skills and real-world experience.",
    },
  ];

  return (
    <div className="bg-secondary lg:px-36 p-10 space-y-10">
      <div className="w-full space-y-4 place-items-center">
        <h2 className="text-xl font-bold max-sm:text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-xs md:text-sm text-center text-black/60  max-lg:line-clamp-[8] w-[75%]">
          "We provide industry-focused IT training with expert-led courses,
          hands-on projects, and globally recognized certifications to boost
          your career. Our programs are designed to equip you with in-demand
          skills and real-world experience."
        </p>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => {
            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-primary to-accent text-secondary lg:px-10 px-5 rounded-md"
              >
                <AccordionTrigger color="text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsSection;
