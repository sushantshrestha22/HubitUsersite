"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  fullName: string;
  address: string;
  email: string;
  dob: string;
  gender: string;
  levelOfEducation: string;
  nameOfUni: string;
  graduation: string;
  skill: string;
  termsAndConditions: boolean;
  contact: string;
  resume: string; // File
  experience: string;
  company: string;
  portfolio: string;
  role: string;
  from: string;
  to: string;
  desiredJobRole: string;
  preferredJobLocation: string;
  expectedSalary: string;
};

type Props = {};

const JobApplicationForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data: any) => console.log(data));
  return (
    <div className=" w-full p-10 lg:px-36">
      <div className="place-content-center place-items-center bg-gradient-to-r from-primary to-accent text-secondary py-4 rounded-t-md">
        <h2 className="text-xl font-bold text-center">Job Application Form</h2>
        <p className="text-xs md:text-sm text-center text-white/60  max-lg:line-clamp-[8] w-[75%]">
          Fill out the form carefully. All Asterisks ( * ) fields are mandatory
          to fill-up.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-secondary p-10 rounded-b-md"
      >
        {/* Personal Information */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 col-span-2">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold ">Personal Information</h2>
          </div>

          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              {...register("fullName")}
              id="fullName"
              type="text"
              placeholder="Full Name"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              {...register("address")}
              id="address"
              type="text"
              placeholder="Address"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="contact">Contact</Label>
            <Input
              {...register("contact")}
              id="contact"
              type="text"
              placeholder="Contact"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Email"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              {...register("dob")}
              id="dob"
              type="date"
              placeholder="Date of Birth"
              className="h-12 bg-background text-accent"
            />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>

            <Select onValueChange={(value) => setValue("gender", value)}>
              <SelectTrigger className="h-12 bg-background" id="gender">
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent className="bg-background text-accent">
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Education/Skills */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 col-span-2">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold ">Education/Skills</h2>
          </div>
          <div>
            <Label htmlFor="levelOfEducation">Level of Education</Label>
            <Input
              {...register("levelOfEducation")}
              id="levelOfEducation"
              type="text"
              placeholder="Select your level of education"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="nameOfUni">Name of University/College*</Label>
            <Input
              {...register("nameOfUni")}
              id="nameOfUni"
              type="text"
              placeholder="Enter your name of university/College"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="graduation">Year of Graduation*</Label>
            <Input
              {...register("graduation")}
              id="graduation"
              type="text"
              placeholder="Enter your year of gradation"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="skill">Skills you have*</Label>
            <Input
              {...register("skill")}
              id="refrerral"
              type="text"
              placeholder="Enter multiple skills that you have"
              className="h-12 bg-background text-accent"
            />
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 col-span-2">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold ">Additional Details</h2>
          </div>
          <div>
            <Label htmlFor="resume">Upload Resume*</Label>
            <Input
              {...register("resume")}
              id="resume"
              type="file"
              placeholder="Upload your resume"
              className="h-12 bg-background text-accent pt-3"
            />
          </div>
          <div>
            <Label htmlFor="portfolio">Portfolio/LinkedIn URL*</Label>
            <Input
              {...register("portfolio")}
              id="portfolio"
              type="url"
              placeholder="Enter URL of your Portfolio/LinkedIn"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="experience">Work Experience*</Label>
            <Input
              {...register("experience")}
              id="experience"
              type="text"
              placeholder="Select your work experience"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="company">Previous Company Name*</Label>
            <Input
              {...register("company")}
              id="company"
              type="text"
              placeholder="Enter the name of the company that you have been working for past days"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            <div>
              <Label htmlFor="from">Duration(From)*</Label>
              <Input
                {...register("from")}
                id="from"
                type="date"
                placeholder="Start Date at Previous Company"
                className="h-12 bg-background text-accent"
              />
            </div>
            <div>
              <Label htmlFor="to">Duration(To)*</Label>
              <Input
                {...register("to")}
                id="to"
                type="date"
                placeholder="End Date at Previous Company"
                className="h-12 bg-background text-accent"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="role">Role*</Label>
            <Input
              {...register("role")}
              id="role"
              type="text"
              placeholder="What was your role in previous company"
              className="h-12 bg-background text-accent"
            />
          </div>
        </div>

        {/* Job Preference*/}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 col-span-2">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold ">Job Preference</h2>
          </div>
          <div>
            <Label htmlFor="desiredJobRole">Desired Job Role*</Label>
            <Input
              {...register("desiredJobRole")}
              id="desiredJobRole"
              type="text"
              placeholder="Enter desired job role you want"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="preferredJobLocation">
              Preferred Job Location*
            </Label>
            <Input
              {...register("preferredJobLocation")}
              id="preferredJobLocation"
              type="text"
              placeholder="Enter how you want to work in this company"
              className="h-12 bg-background text-accent"
            />
          </div>
          <div>
            <Label htmlFor="expectedSalary">Expected Salary*</Label>
            <Input
              {...register("expectedSalary")}
              id="expectedSalary"
              type="text"
              placeholder="Enter salary that you are expecting from this company"
              className="h-12 bg-background text-accent"
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center gap-2 col-span-2">
          <Input
            {...register("termsAndConditions")}
            type="checkbox"
            className="w-4 h-4"
            id="termsAndConditions"
          />
          <Label htmlFor="termsAndConditions">
            I agree to the terms and conditions
          </Label>
        </div>

        <Button type="submit" className="h-12 w-full col-span-2 ">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
