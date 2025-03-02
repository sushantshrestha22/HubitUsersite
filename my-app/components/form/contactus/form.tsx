"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  queries: string;
};

type Props = {};

const ContactUs = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data: any) => console.log(data));
  return (
    <div className=" w-full h-full">
      <form
        onSubmit={onSubmit}
        
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <Input
              {...register("fullName")}
              type="text"
              placeholder="Full Name"
              className="bg-background text-accent h-12 "
            />
          </div>
          <div>
            <Input
              {...register("phone")}
              type="text"
              placeholder="Phone Number"
              className="bg-background text-accent h-12 "
            />
          </div>
          <div className="md:col-span-2">
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="bg-background text-accent h-12 "
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              {...register("queries")}
              placeholder="Queries"
              className="bg-background text-accent h-36 "
            />
          </div>

          <div className="text-end md:col-span-2">
            <Button type="submit" className="h-12 shadow-lg" size="lg">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
