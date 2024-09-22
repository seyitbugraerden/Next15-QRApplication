"use client";
import { AddNewLink } from "@/app/actions";
import React, { useActionState } from "react";

const AddLink = () => {
  const [state, action] = useActionState(AddNewLink, null);
  return (
    <form
      action={action}
      className="p-5 border-[1px] border-primary rounded-2xl w-full text-center"
    >
      <input
        type="text"
        name="title"
        placeholder="title"
        className="border-[1px] border-white/30 py-2 px-3 mx-2 rounded-xl"
      />
      <input
        type="text"
        name="link"
        placeholder="link"
        className="border-[1px] border-white/30 py-2 px-3 mx-2 rounded-xl"
      />
      <button>Add Link</button>
    </form>
  );
};

export default AddLink;
