import colors from "colors";
import readline from "readline/promises";
import { addUserMessage } from "./message.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
export async function userQuestion() {
  const userInput = await rl.question(colors.rainbow("You:"));
  addUserMessage(userInput);
  return userInput;
}

export async function checkExit(userInput: string) {
  const lowercaseInput = userInput.toLowerCase();
  if (
    lowercaseInput === "exit" ||
    lowercaseInput === "quit" ||
    lowercaseInput === "q"
  ) {
    process.exit();
  }
}
