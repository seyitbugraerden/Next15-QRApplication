import FormSection from "@/components/ui/form-section";
import Image from "next/image";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { CheckUserSlug } from "../actions";

const Dashboard = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  const checked = await isAuthenticated();
  const checkUser = await CheckUserSlug(user.id);
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
