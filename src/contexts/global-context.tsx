"use client";
import { init } from "@/utils/pinecone";
import { ReactNode, createContext, useEffect, useState } from "react";
import type {
  AssistantConversation,
  Messages,
  Histories,
  MessageType,
} from "@/utils/types";
import { firstAssistantMessage } from "@/utils/constant";

export const GlobalContext = createContext({
  showChatWithAI: false,
  handleToggleChatWithAI: () => {},
  assistantConversation: {
    histories: [] as Histories,
    messages: [] as Messages,
  },
  handleAddMessageIntoConversation: (
    m: string,
    t: MessageType,
    k: keyof AssistantConversation
  ) => {},
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [showChatWithAI, setShowChatWithAI] = useState(false);
  const [assistantConversation, setAssistantConversation] =
    useState<AssistantConversation>({
      histories: [],
      messages: [firstAssistantMessage],
    });

  useEffect(() => {
    init();
  }, []);

  function handleAddMessageIntoConversation(
    message: string,
    type: MessageType,
    key: keyof AssistantConversation
  ) {
    setAssistantConversation((state) => ({
      ...state,
      [key]: [...state[key], { message, type }],
    }));
  }

  function handleToggleChatWithAI() {
    setShowChatWithAI((state) => !state);
  }

  return (
    <GlobalContext.Provider
      value={{
        showChatWithAI,
        handleToggleChatWithAI,
        assistantConversation,
        handleAddMessageIntoConversation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
