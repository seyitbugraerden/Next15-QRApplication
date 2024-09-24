import React from "react";
import Items from "@/components/items";
import { requireUser } from "../require-user";
import ProfileCard from "@/components/profile-card";
import { GetUser } from "../actions";
import AddLink from "@/components/add-link";
import { Plus } from "lucide-react";
import Link from "next/link";

const QRPage = async ({ params }: { params: any }) => {
  const signedUser = await requireUser();
  const getUser = await GetUser(params.slug);
  return (
    <>
      <div className="p-12">
        <div className="flex flex-col gap-6 items-center justify-center ">
          <ProfileCard user={getUser} state={params.slug} />

          <Items slug={params.slug} />
          {signedUser?.id === getUser?.id && (
            <Link
              href={`/${params.slug}/add`}
              className="flex justify-center items-center p-3 text-base font-bold rounded-lg bg-black/20 text-white/90 hover:bg-black/40 w-52"
            >
              <Plus /> Add New Link
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default QRPage;
