import AddLink from "@/components/add-link";
import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const QRPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user.id);
  return (
    <>
      <div className="flex justify-center items-start w-screen h-screen py-24">
        <div className="flex flex-col gap-6 items-center min-w-[360px]">
          <AddLink />
        </div>
      </div>
    </>
  );
};

export default QRPage;
