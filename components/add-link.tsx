"use client";
import { AddNewLink } from "@/app/actions";
import React, { useActionState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import OutsideClickHandler from "react-outside-click-handler";

const AddLink = () => {
  const [state, action] = useActionState(AddNewLink, null);
  if (!state) {
    toast.error("Link can't be added");
  } else {
    toast.success("Link has been added");
  }
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/30">
      <OutsideClickHandler
        onOutsideClick={() => {
          alert("You clicked outside of this component!!!");
        }}
      >
        <form
          action={action}
          className="bg-[#135D66] flex flex-col p-16 gap-5 rounded-xl"
        >
          <div className="flex flex-col items-start">
            <span className="text-sm pb-2">Link Title</span>
            <Input
              type="text"
              name="title"
              placeholder="Link Title"
              className="py-2 bg-black/20 px-3 rounded-xl focus:outline-none active:outline-none min-w-[25vw] text-sm text-white/50"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm pb-2">Link Address</span>
            <Input
              type="text"
              name="link"
              placeholder="Link Address"
              className="py-2 bg-black/20 px-3 rounded-xl focus:outline-none active:outline-none min-w-[25vw] text-sm text-white/50"
            />
          </div>

          <Button className="hover:bg-black hover:text-white">Add Link</Button>
        </form>
      </OutsideClickHandler>
    </div>
  );
};

export default AddLink;
