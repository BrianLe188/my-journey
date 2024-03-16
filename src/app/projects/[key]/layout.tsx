/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

export default function ProjectLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="bg-[#fbfbfb]">
      <div className="container container-padding">
        <h1 className="m-auto !w-4/5 lg:!w-3/5 relative z-40 text-center font-semibold text-lg">
          Đây là phần sẽ nói về cách mà mình tiếp cận và phân tích theo từng
          khoảng thời gian, từ khi tham gia dự án
        </h1>
        <img
          className="w-auto mt-5 h-24 m-auto relative z-40"
          src="/assets/images/analysis.png"
          alt="analysis"
        />
        {children}
      </div>
    </div>
  );
}
