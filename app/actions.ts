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
  const email = (formData.get("email") as string) || "";
  const surname = (formData.get("surname") as string) || "";
  const username = (formData.get("username") as string) || "";
  const slug = (formData.get("slug") as string) || "";
  const type = (formData.get("type") as string) || "";
  const orgName = (formData.get("orgname") as string) || "";

  const response = await prisma.user.create({
    data: {
      id: user.id,
      email: email,
      name: givenName,
      surname: surname,
      username: username,
      slug: slug,
      type: type,
      orgname: orgName,
    },
  });

  return redirect(`/${slug}`);
};

export const GetUniqueCode = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  return user;
};
