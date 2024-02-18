import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable @next/next/no-img-element */
export default function Message({
  type,
  content,
  showIcon = true,
}: {
  type: "ai" | "human";
  content: string | ReactNode;
  showIcon: boolean;
}) {
  return (
    <div
      className={twMerge("flex gap-2", type === "human" && "flex-row-reverse")}
    >
      <img
        src={type === "ai" ? "/assets/images/AI.png" : "/assets/images/man.png"}
        alt={type}
        className={twMerge("w-10 h-10 rounded-full", !showIcon && "invisible")}
      />
      <div
        className={twMerge(
          "max-w-[75%] rounded-xl p-2",
          type === "ai" ? "rounded-tr-3xl" : "rounded-tl-3xl",
          type === "ai" ? "my-bg-gradient-2" : "bg-gray-50 border"
        )}
      >
        {typeof content === "string" ? (
          <div
            className="text-xs"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          content
        )}
      </div>
    </div>
  );
}
