import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import HeaderDemo from "@/components/header-template";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Your Free QR Code",
  description: "Generate your QR Code and send people who wants to see",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#003C43] text-white w-screen h-screen">
        <HeaderDemo />
        <main>{children}</main>
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
