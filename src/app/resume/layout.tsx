import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lê Việt Anh",
  description:
    "Resume của Việt Anh, đây là nơi mình chia sẽ về thông tin cá nhân, kinh nghiệm làm việc và nhiều thông tin khác dành cho việc tuyển dụng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
