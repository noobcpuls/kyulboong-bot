const Event = require("../Structures/Event");

module.exports = new Event("ready", (client) => {
  console.log("The kyulboong-bot is ready! ✔");
  client.user.setActivity("자12위", { type: "PLAYING" });
});
