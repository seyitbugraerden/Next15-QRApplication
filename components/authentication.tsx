import { Metadata } from "next";
import Image from "next/image";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default async function AuthenticationPage() {
  return (
    <>
      <div className="relative h-screen  items-center justify-center grid lg:grid-cols-2 lg:px-0 max-w-[95%] mx-auto lg:max-w-full">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
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
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:w-[350px]">
            <Image src="/logo.png" width={600} height={200} alt="logo" />
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Millenium Digital
              </h1>
              <p className="text-sm text-muted-foreground">
                First of All You have to create an account
              </p>
            </div>
            <LoginLink postLoginRedirectURL="/dashboard">
              <Button
                className="w-full font-semibold text-lg hover:bg-white hover:text-black duration-300"
                variant={"default"}
              >
                Sign in
              </Button>
            </LoginLink>
            <RegisterLink postLoginRedirectURL="/api/auth/creation">
              <Button
                className="w-full text-lg font-semibold hover:bg-white hover:text-black duration-300"
                variant={"outline"}
              >
                Sign up
              </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </>
  );
}
