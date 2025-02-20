"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  phone: string;
};

type Props = {};

const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data: any) => console.log(data));
  return (
    <div className=" w-full">
      <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Input
          {...register("fullName")}
          type="text"
          placeholder="Full Name"
          className="bg-secondary text-accent h-12"
        />
        <Input
          {...register("phone")}
          type="text"
          placeholder="Phone Number"
          className="bg-secondary text-accent h-12"
        />
        <Button type="submit" variant="outline" className="h-12 shadow-lg">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
