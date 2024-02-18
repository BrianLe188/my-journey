"use client";
import { DownloadIcon } from "@/assets/icons";
import CVHtml from "./components/cv-html";
import { usePDF } from "react-to-pdf";
import { toast } from "react-toastify";

export default function Resume() {
  const { toPDF, targetRef } = usePDF({ filename: "LeVietAnh_CV.pdf" });

  return (
    <main className="container container-padding">
      <div className="flex gap-3 mb-3 relative z-40">
        <button
          className="relative z-40"
          onClick={() => {
            toPDF();
            toast.success("Cảm ơn đã quan tâm CV của tôi");
          }}
        >
          <DownloadIcon />
        </button>
        <div className="flex gap-2">
          <button disabled className="cursor-not-allowed">
            <img
              className="w-auto h-6 hover:scale-110 transition-all duration-500"
              src="/assets/images/vietnam.png"
            />
          </button>
          <button disabled className="cursor-not-allowed">
            <img
              className="w-auto h-6 hover:scale-110 transition-all duration-500"
              src="/assets/images/united-kingdom.png"
            />
          </button>
        </div>
      </div>
      <CVHtml ref={targetRef} />
    </main>
  );
}
