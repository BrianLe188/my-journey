/* eslint-disable @next/next/no-img-element */
"use client";
import { GlobalContext } from "@/contexts/global-context";
import { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import Message from "../message";
import type { MessageType } from "@/utils/types";
import { SendIcon } from "@/assets/icons";
import ScrollToBottom from "react-scroll-to-bottom";
import { fullChain } from "@/utils/pinecone";
import { toast } from "react-toastify";

export default function ChatContainer() {
  const {
    showChatWithAI,
    assistantConversation: { messages, histories },
    handleAddMessageIntoConversation,
  } = useContext(GlobalContext);
  const [message, setMessage] = useState("");

  function handleSubmitMessage(message: string) {
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      handleAddMessageIntoConversation(trimmedMessage, "human", "messages");
      handleSendMessageToAssistant(trimmedMessage);
      setMessage("");
    }
  }

  async function handleSendMessageToAssistant(question: string) {
    try {
      const answer = await fullChain.call({
        question,
        chat_history: histories.join("\n") || [],
      });
      if (answer) {
        handleAddMessageIntoConversation(answer.text, "ai", "messages");
        handleAddMessageIntoConversation(question, "ai", "histories");
        handleAddMessageIntoConversation(answer.text, "ai", "histories");
      }
    } catch (error) {
      console.log(error);
      toast.error("Đã xãy ra sự cố gì đó, vui lòng thông cảm ạ!");
    }
  }

  return (
    <div
      className={twMerge(
        "fixed z-40 right-10 bottom-20 bg-white shadow-lg p-3 rounded-tr-[7rem] rounded-tl-md rounded-bl-3xl w-4/5 h-96 md:h-[30rem] md:w-[25rem] duration-500 transition-all border overflow-hidden chat-container",
        !showChatWithAI && "h-0 w-0 md:h-0 md:w-0 bottom-6 right-6"
      )}
    >
      {showChatWithAI && (
        <section className="flex flex-col relative h-full">
          <ScrollToBottom className="flex flex-col h-5/6 overflow-y-auto">
            {messages.map((item, index) => (
              <div key={item._id} className="mt-4 first:mt-0">
                <Message
                  type={item.type as MessageType}
                  content={item.message}
                  showIcon={
                    index >= 1 ? item.type !== messages[index - 1].type : true
                  }
                />
              </div>
            ))}
          </ScrollToBottom>
          <div className="absolute bottom-0 w-full flex gap-3 items-center p-2">
            <input
              type="text"
              className="w-full rounded-md border-gray-200"
              placeholder="Câu hỏi của bạn"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmitMessage(message);
                }
              }}
            />
            <button onClick={() => handleSubmitMessage(message)}>
              <SendIcon />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
