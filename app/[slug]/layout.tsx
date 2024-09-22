import React from "react";
import { GetUniqueCode } from "../actions";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) => {
  const data = await GetUniqueCode(params.slug);
  console.log(params.slug)
  console.log(data);
  return <div>{children}</div>;
};

export default layout;
