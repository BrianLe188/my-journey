export type Project = {
  id: string;
  name: string;
  thumbnail: string;
  key: string;
  description: string;
  link: string;
  status: string;
  techs: string[];
};

export type Timeline = {
  id: string;
  date: string;
  title: string;
  content: string | null;
};

export type MessageType = "ai" | "human";

export type Message = {
  _id: string;
  type: MessageType;
  message: string;
};

export type Messages = Array<Message>;

export type History = Message & { createdAt: string };

export type Histories = Array<History>;

export type AssistantConversation = {
  histories: Histories;
  messages: Messages;
};

export type MyToastType = "success" | "danger" | "warn";
