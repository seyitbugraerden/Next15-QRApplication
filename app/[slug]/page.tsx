import AddLink from "@/components/add-link";
import React from "react";
import Items from "@/components/items";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { requireUser } from "../require-user";

const QRPage = async ({ params }: { params: any }) => {
  const signedUser = await requireUser();
  return (
    <>
      <div className="flex justify-center items-start w-screen h-screen py-24">
        <div className="flex flex-col gap-6 items-center min-w-[360px]">
          <Items slug={params.slug} />
          
          {signedUser && <LogoutLink>Log out</LogoutLink>}
        </div>
      </div>
    </>
  );
};

export default QRPage;
