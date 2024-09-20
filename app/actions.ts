import { requireUser } from "./require-user";
import prisma from "@/utils/db";

export const getUserFunction = async () => {
  const user = await requireUser();
  return user;
};

export const CreateUserFunction = async () => {
  const user = await requireUser();
  const response = await prisma.user.create({
    data: {
      id: user.id,
      email: user.email,
      element: "deneme",
    },
  });
  return;
};

export const createHoppy = async (prevState: any, formData: FormData) => {
  console.log(formData);
};
