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

export const MY_EMAIL = "anhkun123456@gmail.com";
export const MY_PHONE = "828030359";
export const MY_NAME_VN = "Lê Việt Anh";
export const MY_NAME_EN = "Viet Anh Le";
export const MY_WEBSITE_LINK = "https://my-journey-tau.vercel.app/";
export const MY_ADDRESS = "Da Nang, Vietnam";
export const MY_ROLE = "Web Developer";
export const CV = {
  objective: [
    "With over 1 year of experience as a Web Developer using Nodejs, Reactjs, and Nextjs, along with 6 months of freelance experience. I am always open to new technologies.",
    "My career goal is to become a Software Architect in the future. Therefore, I am always striving to learn and improve my skills in software architecture, as well as to acquire knowledge about the latest technologies in this field.",
  ],
  educations: [
    {
      u_name: "Duy Tan University",
      from: 2019,
      to: 2024,
      major: "Software Engineering",
    },
  ],
  skills: {
    languages: ["Typescript", "Javascript"],
    backend: ["Nodejs", "Nestjs", "Expressjs", "GraphQL", "RabbitMQ", "gRPC"],
    frontend: ["Reactjs", "Nextjs", "Tailwindcss"],
  },
  work_experiences: [
    {
      c_name: "Dinotech Company",
      from: "03/2023",
      to: "Now",
      position: "Fullstack Developer",
      responsibilities: [
        "Develop web applications using Reactjs, Nextjs Nodejs, and MongoDB.",
        "Apply Langchain, OpenAI and Pinecone vector database technology to build systems for customers.",
        "Write unit tests.",
        "Optimize product performance according to customer requirements",
        "Meeting and communicating with customers.",
        "Write API documentation for members.",
        "Mentor for a group of 3 interns.",
      ],
      projects: [
        {
          p_name: "Typera",
          technologies: [
            "Reactjs",
            "Tailwindcss",
            "Nodejs",
            "Langchain",
            "OpenAI",
            "Pinecone",
          ],
          urls: ["https://app.typera.ai", "https://typera.ai"],
          descriptions: [
            "AI-powered writing assistant! Get ready to boost your creativity and productivity. Generate blog post ideas about emerging trends in renewable energy. Review this paragraph for grammatical errors: [insert paragraph].",
            "Support chat to ask about the content of pdf, txt files and summarize video content.",
          ],
        },
        {
          p_name: "Vdiarybook",
          technologies: ["Nextjs", "Tailwindcss", "PrimeReact", "Nodejs"],
          urls: ["https://vdiarybook.com/"],
          descriptions: [],
        },
      ],
    },
    {
      c_name: "Bizverse",
      from: "09/2022",
      to: "11/2022",
      position: "Nodejs Developer Internship",
      responsibilities: [
        "Apply graphQL technology to create APIs.",
        "Communicate with frontend members to guide API usage.",
        "Learn concepts and how to apply graphQL to your system.",
      ],
      projects: [
        {
          p_name: "RentAll",
          technologies: ["Reactjs", "Nodejs", "GraphQL", "Sequelize"],
          urls: ["https://rentall.bizverse.world/"],
          descriptions: [
            "A commercial platform for accommodation services, where service providers can register and rent out their products and services, and buyers can register to use the service.",
            "A technical solution to entrepreneurs for launching their own rental marketplace platform faster into the market. It is equipped with essential features to run a marketplace where customers can share their properties and also goods easily.",
          ],
        },
      ],
    },
  ],
};
