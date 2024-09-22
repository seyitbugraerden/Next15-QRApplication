import AddLink from "@/components/add-link";
import React from "react";
import Items from "@/components/items";

const QRPage = async ({ params }: { params: any }) => {
  return (
    <>
      <div className="flex justify-center items-start w-screen h-screen py-24">
        <div className="flex flex-col gap-6 items-center min-w-[360px]">
          <Items slug={params.slug} />
          <AddLink />
        </div>
      </div>
    </>
  );
};

export default QRPage;
