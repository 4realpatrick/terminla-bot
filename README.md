# terminal-bot

如何使用该机器人？
去到下方链接，点击申请内测免费 key
https://github.com/chatanywhere/GPT_API_free?tab=readme-ov-file

在得到 key 之后，在项目的根目录下，创建一个名为.env 的文件，并在文件中填入你的 key，格式如下
OPENAI_KEY=your_secret_key

然后，安装依赖
pnpm i

安装完成后，执行 pnpm run build

最后执行 pnpm link --global

如果控制台没有错误，那么恭喜你，你可以在任何地方使用 terminal-bot 命令开始使用 chatgpt 了
