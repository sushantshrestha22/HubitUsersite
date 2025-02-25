"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  phone: string;
  queries: string;
};

type Props = {};

const GetInTouchForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data: any) => console.log(data));
  return (
    <div className=" w-full">
      <form
        onSubmit={onSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <Input
          {...register("fullName")}
          type="text"
          placeholder="Full Name"
          className="bg-secondary text-accent h-12 col-span-1"
        />
        <Input
          {...register("phone")}
          type="text"
          placeholder="Phone Number"
          className="bg-secondary text-accent h-12 col-span-1 "
        />
        <Textarea
          {...register("queries")}
          placeholder="Queries"
          className="bg-secondary text-accent h-36 col-span-2"
        />
        <div className="col-span-2 text-end">
          <Button type="submit" variant="outline" className="h-12 shadow-lg" size="lg">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouchForm;
