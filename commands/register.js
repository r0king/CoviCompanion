// const Discord = require('discord.js');

module.exports = {
  name: '!register',
  description: 'registeration',
  execute(msg, args) {
    console.log(msg.content);


    const details = [
      'Enter your Name:',
      'Enter your Phone Number:',
      'Enter your DOB:',
      'Enter State:',
      'Enter Pincode:',
    ]
    let filter = (msg) => !msg.author.bot;
    let counter = 0;
    let collector = msg.channel.createMessageCollector(filter, {
      max: details.length,
      time: 1000 * 20
    });

    msg.channel.send(details[counter])
    collector.on('collect', m => {
      if (counter < details.length) {
        m.channel.send(details[++counter])
        // var x = msg.content;
        // if(counter === 1){
        //   if (isNaN(x))
        //   {
        //     msg.reply('Please input a number')
        //     return false;
        //   }
        // }
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

      msg.reply(`Thank you for registering!!`);
    })
  },


}
