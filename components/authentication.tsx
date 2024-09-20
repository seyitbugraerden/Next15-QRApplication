import { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
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
                &ldquo;QR Code Studio, kullanıcıların hızlı ve kolay bir şekilde
                kişiselleştirilebilir QR kodlar oluşturmasına olanak
                sağlar."&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Image src={logo} alt="logo" />
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Millenium Digital
              </h1>
              <p className="text-sm text-muted-foreground">
                First of All You have to create an account
              </p>
            </div>
            <LoginLink postLoginRedirectURL="/api/auth/creation">
              <Button
                className="w-full font-semibold text-lg"
                variant={"default"}
              >
                Sign in
              </Button>
            </LoginLink>
            <RegisterLink postLoginRedirectURL="/api/auth/creation">
              <Button
                className="w-full text-lg font-semibold"
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
