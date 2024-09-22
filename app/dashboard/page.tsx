import FormSection from "@/components/ui/form-section";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import React from "react";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const { isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const checked = await isAuthenticated();
  const userid = user.email?.split("@")[0];
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900">
            <Image
              src="/Dynalogic.jpg"
              alt="intro"
              width={1920}
              height={1920}
              className="absolute top-0 left-0 filter brightness-[.4]"
            />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Mllenium Digital
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                QR Code Studio, kullanıcıların hızlı ve kolay bir şekilde
                kişiselleştirilebilir QR kodlar oluşturmasına olanak sağlar.
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] xl:w-full">
            <Image
              src="/logo.png"
              width={600}
              height={200}
              alt="logo"
              className="mx-auto"
            />
            <FormSection user={user} checkedValue={checked} />
          </div>
        </div>
      </div>

      {/* <QRCodePage state={userid} /> */}
    </>
  );
};

export default Dashboard;
