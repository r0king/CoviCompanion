// const Discord = require('discord.js');

module.exports = {
  name: '!register',
  description: 'registeration',
  execute(msg, args) {
    console.log(msg.content);


    const details = [
      'Enter your Name.',
      'Enter your Phone Number',
      'Enter your Date of Birth',
      'Enter State',
      'Enter District',
    ]
    let filter = (msg) => !msg.author.bot;
    let counter = 0;
    let collector = msg.channel.createMessageCollector(filter, {
      max: details.length,
      time: 20000
    });

    msg.channel.send(details[counter])
    collector.on('collect', m => {
      if (counter < details.length) {
        m.channel.send(details[++counter])
      }
    })
    collector.on('end', collected => {
      console.log(`collected ${collected.size} messages`)
      // console.log(collected );
      let counter = 0;
     
      // console.log(collected.content);
      // console.log(collector);

      // while(collected.hasNext())
      // {
      //   let collect = collected.next();
      //   console.log(collect);
      // }
      collected.forEach((value) => {
        let detail = details[counter++].split(" ")
        console.log(detail[detail.length - 1], value.content);
        msg.channel.send(detail[detail.length - 1]  + ' '+value.content);
      })
    })
  },


}
