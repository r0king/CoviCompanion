const Discord = require('discord.js')

module.exports = {
    name: '/help',
    description: 'Help!',
    execute(msg, args) {
     
        const embed = new Discord.MessageEmbed()
        .setTitle('CoviCompanion Help Commands')
        .setColor(0x3480eb)
        .setDescription('Basic Commands\n /register : To Enter User Details \n /checkslot : To find slot availability \n /notifyon : To enable hourly notification \n /notifyoff : To disable hourly notifications \n /help : List of all possible commands \n\n Extra Commands:\n /checkslot [dd-mm-yyyy] : To check slot availability for that date \n /notifyon [dd-mm-yyyy] : To enable hourly notifications for slot availability for that date ');
        msg.channel.send(embed);
    },
  };
  