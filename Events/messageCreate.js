const Event = require("../Structures/Event");

module.exports = new Event("messageCreate", (client, message) => {
  if (!message.content.startsWith(client.Prefix)) {
    switch (message.content) {
      case "결아 안녕.":
        message.channel.send("안녕");
        break;
      case "인사.":
        message.reply("주인님 안녕하세요 😊");
        break;
      case "울어.":
        message.reply("응애 응애 응애 응애 응애 😥😥😥😥😥😥😥");
        break;
      case "결이 보지.":
        message.reply("👌");
        break;
      case "결이 자지.":
        message.reply("🤏");
        break;
      case "태균이 차단.":
        message.reply("나이스 ㅋㅋ");
        break;
      case "결이 죽어.":
        message.reply("씨발련이");
        break;
      case "아이번은 쓰레기다.":
        message.reply("ㅇㅈ ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ");
        break;
      default:
        break;
    }
  } else {
    const args = message.content.substring(client.Prefix.length).split(/ +/);

    const command = client.commands.find((cmd) => cmd.name == args[0]);

    if (!command) {
      if (args[0][0] === "!") return;
      return message.reply(`${args[0]}이 뭔데`);
    }

    command.run(message, args, client);
  }
});
