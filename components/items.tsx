import prisma from "@/app/utils/db";
import Link from "next/link";
import React from "react";
import AddLink from "./add-link";
import { requireUser } from "@/app/require-user";

const Items = async ({ slug }: { slug: any }) => {
  try {
    const user = await requireUser();
    const userData = await prisma.user.findUnique({
      where: { slug: slug },
    });
    if (!userData) {
      return <div>User not found</div>;
    }

    const userLinks = await prisma.link.findMany({
      where: {
        userId: userData.id,
      },
    });
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {userLinks?.map((item) => (
            <Link
              className="flex justify-center items-center p-3 text-base font-bold rounded-lg bg-black/20 text-white/90 hover:bg-black/40 w-52 h-12 text-nowrap"
              key={item.id}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching user data or links:", error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};

export default Items;
