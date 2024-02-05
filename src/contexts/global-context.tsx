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
import PageLoading from "@/components/page-loading";

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
  theFirstAccess: true,
  handleToggleTheFirstAccess: () => {},
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
      messages: [...firstAssistantMessage],
    });
  const [theFirstAccess, setTheFirstAccess] = useState(true);

  useEffect(() => {
    // init();
    const pageLoadingTimeout = setTimeout(() => setTheFirstAccess(false), 4500);

    return () => {
      clearTimeout(pageLoadingTimeout);
    };
  }, []);

  function handleToggleTheFirstAccess() {
    setTheFirstAccess((state) => !state);
  }

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

  if (theFirstAccess) {
    return <PageLoading />;
  }

  return (
    <GlobalContext.Provider
      value={{
        showChatWithAI,
        handleToggleChatWithAI,
        assistantConversation,
        handleAddMessageIntoConversation,
        theFirstAccess,
        handleToggleTheFirstAccess,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
