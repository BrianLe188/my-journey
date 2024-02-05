import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { CONDENSE_PROMPT, QA_PROMPT } from "./constant";
export let fullChain: any;

export async function init() {
  const pinecone = new Pinecone({
    apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY!,
  });
  const pineconeIndex = pinecone.Index(process.env.NEXT_PUBLIC_PINECONE_INDEX!);
  const llm = new ChatOpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
    modelName: "gpt-3.5-turbo",
    temperature: 0,
  });
  const embedding = new OpenAIEmbeddings({
    openAIApiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
  });
  const vectorStore = await PineconeStore.fromExistingIndex(embedding, {
    pineconeIndex,
  });
  fullChain = ConversationalRetrievalQAChain.fromLLM(
    llm,
    vectorStore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
      returnSourceDocuments: false, //The number of source documents returned is 4 by default
    }
  );
}
