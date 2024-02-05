import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./loading.scss";
import "react-toastify/dist/ReactToastify.css";
import { ThemeModeScript } from "flowbite-react";
import Navbar from "@/components/navbar";
import ChatWithAI from "@/components/chat-with-ai";
import ChatContainer from "@/components/chat-container";
import GlobalContextProvider from "@/contexts/global-context";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lê Việt Anh",
  description:
    "Porfolio của Việt Anh, đây là nơi mình chia sẽ quá trình mình xây dựng những dự án của khách hàng. Mình sẽ nói về kiến trúc và giới thiệu về dự án.",
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
        <GlobalContextProvider>
          <div className="my-bg-gradient-2 h-[45rem] w-[45rem] rounded-full fixed opacity-50 -left-40"></div>
          <div className="my-bg-gradient-2 h-[45rem] w-[45rem] rounded-full fixed opacity-50 -right-40 -bottom-80"></div>
          <Navbar />
          {children}
          <ChatWithAI />
          <ChatContainer />
          <ToastContainer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
