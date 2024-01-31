import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeModeScript } from "flowbite-react";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} bg-white`}>
        <div className="my-bg-gradient-2 h-[45rem] w-[45rem] rounded-full fixed opacity-50 -left-40"></div>
        <div className="my-bg-gradient-2 h-[45rem] w-[45rem] rounded-full fixed opacity-50 -right-40 -bottom-80"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
