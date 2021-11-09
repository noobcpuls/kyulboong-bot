const Command = require("../Structures/Command");

module.exports = new Command({
  name: "ping",
  description: "shows the ping of the bot!",
  async run(message, args, client) {
    const msg = await message.reply(`결붕이 핑: ${client.ws.ping} ms.`);

    msg.edit(
      `결붕이 핑: ${client.ws.ping} ms.\n메세지 핑: ${
        msg.createdTimestamp - message.createdTimestamp
      } ms.`
    );
  },
});
