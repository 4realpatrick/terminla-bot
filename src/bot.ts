import OpenAI from "openai";
import colors from "colors";
import ora from "ora";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { addBotMessage, messages } from "./message.js";

dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), "../.env"),
});

const openai = new OpenAI({
  baseURL: "https://api.chatanywhere.tech/v1",
  apiKey: process.env.OPENAI_KEY,
});

const loading = ora({
  text: "正在努力🤔思考...\r",
  discardStdin: false,
});

export async function botAnwser(userInput: string) {
  loading.start();
  const completionStream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
  });
  loading.stop();
  process.stdout.write(colors.bold.green("TBOT: "));
  let answer = "";
  for await (const chunk of completionStream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
    answer += chunk.choices[0]?.delta?.content || "";
  }
  addBotMessage(answer);
  console.log(`\n 当前时间：${new Date().toLocaleTimeString()}`);
}
