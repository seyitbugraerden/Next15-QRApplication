import React from "react";

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
