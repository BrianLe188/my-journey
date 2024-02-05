import type { Message } from "./types";

export const firstAssistantMessage: Message[] = [
  {
    _id: "the_first_message",
    type: "ai",
    message:
      'Xin chào! Tôi là <b>"Trợ lý AI của Việt Anh"</b>. Những câu trả lời đã được cậu ấy duyệt rồi bạn nhé.',
  },
  {
    _id: "the_second_message",
    type: "ai",
    message: `<p>Ví du:</p><ul><li>- Bạn hãy giới thiệu một chút về bản thân?</li><li>- Bạn có bao nhiêu năm kinh nghiệm rồi?</li><li>- Những dự án mà bạn đã và đang làm là gì?</li></ul>`,
  },
];

export const QA_PROMPT = `You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say you don't know and please send email to anhkun123456@gmail.com. DO NOT try to make up an answer.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

{context}

Question: {question}
Helpful answer in Vietnamese:`;

export const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.
Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;
