const Client = require("./Structures/Client.js");

const Command = require("./Structures/Command.js");

// const config = require("./config.json");

const client = new Client();

client.start(process.env.TOKEN);
