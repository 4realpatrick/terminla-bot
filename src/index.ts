import { botAnwser } from "./bot.js";
import { checkExit, userQuestion } from "./user.js";
(async () => {
  try {
    console.log("你好，请问有什么可以帮到你的吗(输入exit、quit、q即可退出)");
    while (true) {
      const userInput = await userQuestion();
      checkExit(userInput);
      await botAnwser(userInput);
    }
  } catch (error) {
    console.log("error:", error);
  }
})();
