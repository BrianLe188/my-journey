"use client";
import CVHtml from "./components/cv-html";
import { usePDF } from "react-to-pdf";

export default function Resume() {
  const { toPDF, targetRef } = usePDF({ filename: "LeVietAnh_CV.pdf" });

  return (
    <main className="container container-padding">
      <button className="relative z-40" onClick={() => toPDF()}>
        download
      </button>
      <CVHtml ref={targetRef} />
      <object
        width="100%"
        height="650"
        data="/assets/cv.pdf"
        type="application/pdf"
        className="relative z-40"
      ></object>
    </main>
  );
}
