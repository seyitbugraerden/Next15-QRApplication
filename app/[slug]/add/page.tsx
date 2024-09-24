import { GetUser } from "@/app/actions";
import { requireUser } from "@/app/require-user";
import AddLink from "@/components/add-link";
import React from "react";

const AddNewElement = async () => {
  const signedUser = await requireUser();
  return <>{signedUser?.id && <AddLink />}</>;
};

export default AddNewElement;
