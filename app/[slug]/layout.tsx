import React from "react";
import { requireUser } from "../require-user";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) => {
  return <div>{children}</div>;
};

export default layout;
