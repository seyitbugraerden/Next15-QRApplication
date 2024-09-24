"use client";
import { toast } from "sonner";
import { Button } from "./button";
import { useActionState } from "react";
import { ForExampleDemo } from "@/app/actions";

const FormSection = ({
  user,
  checkedValue,
}: {
  user: any;
  checkedValue: boolean;
}) => {
  const [state, formAction] = useActionState(ForExampleDemo, null);

  return (
    <div>
      <form
        action={formAction}
        className="w-full grid grid-cols-2 gap-12 xl:max-w-[70%] mx-auto"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            defaultValue={user.given_name}
            type="text"
            name="given_name"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/50 peer-focus:dark:text-white/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            defaultValue={user.family_name}
            type="text"
            name="surname"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/50 peer-focus:dark:text-white/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Surname
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            required
            defaultValue={user.username}
            type="text"
            name="username"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 peer"
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/50 peer-focus:dark:text-white/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            required
            defaultValue={user.email}
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 peer"
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/50 peer-focus:dark:text-white/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            required
            defaultValue={user.slug ? user.slug : undefined}
            type="text"
            name="slug"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 peer"
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/50 peer-focus:dark:text-white/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Slug
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <select
            id="underline_select"
            name="type"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="Organization Type" disabled>
              Organization Type
            </option>
            <option value="Personel">Personel</option>
            <option value="Company">Company</option>
          </select>
          <label
            htmlFor="floating_select"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/50 peer-focus:dark:text-white/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Organization Type
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            required
            defaultValue={user.slug ? user.slug : undefined}
            type="text"
            name="orgname"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 peer"
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white/50 peer-focus:dark:text-white/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Organization Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="inline-flex items-center me-5 cursor-pointer">
            <input
              required
              type="checkbox"
              className="sr-only peer"
              checked={checkedValue}
              onChange={() => {
                checkedValue
                  ? toast.success("Your Account Already Verified")
                  : toast.error("You Need to Verify Your Account");
              }}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white/50 active:border-0 active:outline-none focus:outline-none focus:border-0"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Verified Account
            </span>
          </label>
        </div>
        <Button
          className="w-full text-lg font-semibold col-span-2 border"
          variant={"default"}
          disabled={!checkedValue}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
