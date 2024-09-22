import AddLink from "@/components/add-link";
import Link from "next/link";
import React from "react";
import { GetLinks } from "../actions";

const QRPage = async () => {
  const data = await GetLinks();
  console.log(data);
  return (
    <>
      <div className="flex justify-center items-start w-screen h-screen py-24">
        <div className="flex flex-col gap-6 items-center min-w-[360px]">
          {data.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="p-5 border-[1px] border-primary rounded-2xl w-full text-center"
            >
              {item.title}
            </Link>
          ))}
          <AddLink />
        </div>
      </div>
    </>
  );
};

export default QRPage;
