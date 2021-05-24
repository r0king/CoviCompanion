// const Discord = require('discord.js');
const regex = new RegExp;

const MongoClient = require('mongodb').MongoClient;

let data = {}
module.exports = {
  name: '/register',
  description: 'registeration',
  execute(msg, args) {
    console.log(msg.content);


    const details = [
      'Enter your Name:',
      'Enter your Phone Number:',
      'Enter your Age:',
      'Enter State:',
      'Enter Pincode:',
    ]
    const filter = (msg) => !msg.author.bot

    // const filterreg = (msg) => regex.test(msg.content)

    let counter = 0;
    let collector = msg.channel.createMessageCollector(filter, {
      max: details.length,
      time: 1000 * 200
    });

    msg.channel.send(details[counter])
    collector.on('collect', m => {
      if (counter < details.length) {
        msg.channel.send(details[++counter])
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
      userdetail = [];
      userdetail_send = '';
      collected.forEach((value) => {
        let detail = details[counter++].split(" ")
        // console.log(detail[detail.length - 1], value.content);

        userdetail.push(detail[detail.length - 1] + ' ' + value.content);
        userdetail_send += `\t${detail[detail.length - 1]} ${value.content}  \n`;
      })

        msg.channel.send(userdetail_send);

      msg.reply(`Thank you for registering!!`);
      data['id'] = msg.author.id;
      // console.log(userdetail)
      data["details"] = userdetail;
      console.log(data)
      
      dbWrite(msg.author.id)

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

async function dbWrite(id) {


  const client = new MongoClient(process.env.ATLAS, {
    useUnifiedTopology: true
  });

  try {

    await client.connect();
    console.log("[+] dataBase connected")
    await actOnData(client,id);
    // await listDatabases(client);

  } catch (e) {
    console.error(e);
    console.log("[-] dataBase error")
  } finally {
    console.log("[+] dataBase closing")
    await client.close();
  }

}

async function actOnData(client,id) {

  const dataBase = await client.db("Covid_UserTest");
  const collection = dataBase.collection("User01");
  const options = { upsert: true };

  console.log("[+] Creating user")
  console.log(console.ObjectID);

  collection.updateOne(
    {
    'id':id
  }, 
  { $set: {
    id:data.id,
    details:data.details
  }},
  options);
  let addressCollection = await collection.find({
    'id':id
  })
  // .then(items => {
  //   console.log(` ${items.length}`)
  //   items.forEach(console.log)
   
  // })
  // .catch( (err) =>{
  //   const inserted = collection.insertOne(data);
  // }
  // )
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

