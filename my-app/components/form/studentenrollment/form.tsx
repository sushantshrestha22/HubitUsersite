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
  nameOfSchool: string;
  course: string;
  referral: string;
  termsAndConditions: boolean;
  contact: string;
};

type Props = {};

const StudentEnrollmentForm = (props: Props) => {
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
        <h2 className="text-xl font-bold text-center">
          Student Enrollment Registration Form
        </h2>
        <p className="text-xs md:text-sm text-center text-white/60  max-lg:line-clamp-[8] w-[75%]">
          Fill out the form carefully for registration. All Asterisks ( * )
          fields are mandatory to fill-up.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-secondary p-10 rounded-b-md"
      >
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
          <Label htmlFor="levelOfEducation">Level of Education</Label>
          <Input
            {...register("levelOfEducation")}
            id="levelOfEducation"
            type="text"
            placeholder="Level of Education"
            className="h-12 bg-background text-accent"
          />
        </div>
        <div>
          <Label htmlFor="nameOfSchool">Name of School</Label>
          <Input
            {...register("nameOfSchool")}
            id="nameOfSchool"
            type="text"
            placeholder="Name of School"
            className="h-12 bg-background text-accent"
          />
        </div>
        <div>
          <Label htmlFor="course">Course</Label>
          <Input
            {...register("course")}
            id="course"
            type="text"
            placeholder="Course"
            className="h-12 bg-background text-accent"
          />
        </div>
        <div>
          <Label htmlFor="referral">Referral Name</Label>
          <Input
            {...register("referral")}
            id="refrerral"
            type="text"
            placeholder="Referral Name"
            className="h-12 bg-background text-accent"
          />
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <Input
            {...register("termsAndConditions")}
            type="checkbox"
            className="w-4 h-4"
            id="termsAndConditions"
          />
          <Label htmlFor="termsAndConditions">Terms and Conditions</Label>
        </div>

        <Button type="submit"  className="h-12 w-full col-span-2 ">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default StudentEnrollmentForm;
