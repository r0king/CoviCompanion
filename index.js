
const Discord = require('discord.js');
// const WOKcommands = require('wokcommands');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

  console.log("\x1b[34m")
bot.login(TOKEN);
Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);

});


bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    console.info(`Called command: ${command}`);
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
