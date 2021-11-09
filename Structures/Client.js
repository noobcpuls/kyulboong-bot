const Discord = require("discord.js");

const intents = new Discord.Intents(32767);

const Event = require("./Event.js");

const fs = require("fs");

const config = require("../config.json");

class Client extends Discord.Client {
  constructor() {
    super({ intents });

    /**
     * @type {Discord.Collection<string, Command>}
     */
    this.commands = new Discord.Collection();

    this.Prefix = config.Prefix;
  }

  start(token) {
    fs.readdirSync("./Commands")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Command}
         */
        const command = require(`../Commands/${file}`);
        console.log(`Command ${command.name} loaded!`);
        this.commands.set(command.name, command);
      });

    fs.readdirSync("./Events")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Event}
         */
        const event = require(`../Events/${file}`);
        console.log(`Event ${event.event} is ready!`);
        this.on(event.event, event.run.bind(null, this));
      });

    this.login(process.env.TOKEN);
  }
}

module.exports = Client;
