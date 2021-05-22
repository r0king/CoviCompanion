// const Discord = require('discord.js');
const regex = new RegExp;
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

async function dbWrite(userData) {


  const client = new MongoClient(process.env.ATLAS, {
    useUnifiedTopology: true
  });

  try {

    await client.connect();
    await actOnData(client);
    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

}

async function actOnData(client) {

  const dataBase = await client.db("Covid_UserTest");
  // const collection = dataBase.collection("User")
  const inserted =await  collection.insertOne(
    userData
  );
  console.log(console.ObjectID);
  let addressCollection = await collection.find({});
  while (await addressCollection.hasNext()) {
    let Address = await addressCollection.next();
    console.log(Address);

  }

  // let updateUser = await collection.updateOne({
  //   "name": "Username"

  // }, {
  //   "$set": {
  //     "name": "Rkng"
  //   },
  //   // "$addToSet":{
  //   //   "name" : "Username"
  //   // },
  //   // "$push":{
  //   //   "Address" : [1,2,3,4,5,6]
  //   // }
  // })
  // console.log(updateUser.modifiedCount);



}

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
    const filter = (msg) => !msg.author.bot && msg.author.bot === msg.author.bot

    // const filterreg = (msg) => regex.test(msg.content)

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
      data = {}
      userdetail = [];
      collected.forEach((value) => {
        let detail = details[counter++].split(" ")
        // console.log(detail[detail.length - 1], value.content);

        userdetail.push(detail[detail.length - 1] + ' ' + value.content);

        msg.channel.send(detail[detail.length - 1] + ' ' + value.content);
      })

      msg.reply(`Thank you for registering!!`);
      // console.log(userdetail)
      data[msg.author.id] = userdetail;
      console.log(data)
      dbWrite(data)
      // var userData = fs.readFileSync('data.json');
      // var jsonObj = JSON.parse(userData);
      // jsonObj.push(data)
      // var newData = JSON.stringify(myObject);
      // fs.writeFile('data.json', newData, err => {

      //   if (err) throw err;

      //   console.log("[+] Added user ");
      // });
    })

  },


}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};