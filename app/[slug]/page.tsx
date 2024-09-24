import AddLink from "@/components/add-link";
import React from "react";
import Items from "@/components/items";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { requireUser } from "../require-user";
import ProfileCard from "@/components/profile-card";
import { GetUser } from "../actions";

const QRPage = async ({ params }: { params: any }) => {
  const signedUser = await requireUser();
  const getUser = await GetUser(params.slug);
  return (
    <>
      <div className="flex justify-center items-start w-screen h-screen py-24">
        <div className="flex flex-row gap-6 items-center min-w-[360px]">
          <ProfileCard user={getUser} />
          <Items slug={params.slug} />
        </div>
        {/* {signedUser && <LogoutLink>Log out</LogoutLink>} */}
      </div>
    </>
  );
};

export default QRPage;
