import React from "react";
import Items from "@/components/items";
import { requireUser } from "../require-user";
import ProfileCard from "@/components/profile-card";
import { GetUser } from "../actions";
import AddLink from "@/components/add-link";

const QRPage = async ({ params }: { params: any }) => {
  const signedUser = await requireUser();
  const getUser = await GetUser(params.slug);
  return (
    <>
      <div className="xl:max-w-[1140px] mx-auto bg-black/30 border border-[#135D66] backdrop-blur-xl p-12">
        <div className="flex flex-col gap-6 items-center min-w-[360px]">
          <ProfileCard user={getUser} state={params.slug} />
          <Items slug={params.slug} />
          {signedUser?.id === getUser?.id && <AddLink />}
        </div>
      </div>
    </>
  );
};

export default QRPage;
