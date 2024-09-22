"use server";
import { redirect } from "next/navigation";
import { requireUser } from "./require-user";
import prisma from "@/utils/db";

export const getUserFunction = async () => {
  const user = await requireUser();
  return user;
};

export const ForExampleDemo = async (prevState: any, formData: FormData) => {
  const user = await requireUser();

  const givenName = (formData.get("given_name") as string) || "";
  const surname = (formData.get("surname") as string) || ""; // Provide a default value for surname
  const username = (formData.get("username") as string) || "";
  const slug = (formData.get("slug") as string) || "";
  const type = (formData.get("type") as string) || ""; // Provide a default value for type
  const orgName = (formData.get("orgname") as string) || "";

  const response = await prisma.user.create({
    data: {
      id: user.id,
      email: user.email,
      name: givenName,
      surname: surname,
      username: username,
      slug: slug,
      type: type, // Ensure type is never null
      orgname: orgName,
    },
  });

  return redirect(`/${slug}`);
};
