import { fetchData } from "@/lib/query/query";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const courseData = await fetchData(`/courses`);
  console.log(courseData.result);

  return <div>page</div>;
};

export default page;
