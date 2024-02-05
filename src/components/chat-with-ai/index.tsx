"use client";
import { ChatIcon } from "@/assets/icons";
import { GlobalContext } from "@/contexts/global-context";
import { Button } from "flowbite-react";
import { useContext } from "react";

export default function ChatWithAI() {
  const { showChatWithAI, handleToggleChatWithAI } = useContext(GlobalContext);

  return (
    <div className="fixed right-3 bottom-3 z-50">
      <Button
        className="rounded-full py-2 my-bg-gradient"
        onClick={handleToggleChatWithAI}
      >
        {!showChatWithAI ? (
          <div className="flex gap-2 items-center">
            <ChatIcon />
            <p>Hỏi trợ lý AI</p>
          </div>
        ) : (
          <ChatIcon />
        )}
      </Button>
    </div>
  );
}
