import Link from "next/link";
import React from "react";

const QRPage = () => {
  return (
    <>
      <div className="flex justify-center items-start w-screen h-screen py-24">
        <div className="flex flex-col gap-6 items-center min-w-[360px]">
          <Link
            href={"/"}
            className="p-5 border-[1px] border-primary rounded-2xl w-full text-center"
          >
            Youtube
          </Link>
          <Link
            href={"/"}
            className="p-5 border-[1px] border-primary rounded-2xl w-full text-center"
          >
            Youtube
          </Link>
        </div>
      </div>
    </>
  );
};

export default QRPage;
