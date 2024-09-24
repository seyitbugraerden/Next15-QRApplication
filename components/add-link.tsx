"use client";
import { AddNewLink } from "@/app/actions";
import React, { useActionState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

const AddLink = () => {
  const [state, action] = useActionState(AddNewLink, null);
  if (!state) {
    toast.error("Link can't be added");
  } else {
    toast.success("Link has been added");
  }
  return (
    <form
      action={action}
      className="p-5 border border-white/50 rounded-2xl w-full text-center flex flex-row items-center gap-4"
    >
      <Input
        type="text"
        name="title"
        placeholder="title"
        className="border-[1px] border-white/30 py-2 bg-transparent px-3 mx-2 rounded-xl focus:outline-none active:outline-none"
      />
      <Input
        type="text"
        name="link"
        placeholder="link"
        className="border-[1px] border-white/30 py-2 bg-transparent px-3 mx-2 rounded-xl focus:outline-none active:outline-none"
      />
      <Button>Add Link</Button>
    </form>
  );
};

export default AddLink;
