const axios = require('axios')

module.exports = {
  name: 'checkslot',
  description: 'checkslot!',
  execute(msg, args) {
    msg.reply("pong");
    axios({
      method: 'get',
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/17`,
      headers: {
          'accept': 'application/json',
          'Accept-Language': 'en_US',
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
      }
  })
      .then(function (response) {
        if (response.data.districts !== undefined) {
         
        let alldistricts ='districts:\n'
            response.data.districts.forEach((k, v) => 
            { 
              alldistricts += `\t${k.district_id}: ${k.district_name} \n`;
              }
              );
              msg.channel.send(alldistricts);
            return {
                  status: true,
                  result: response.data.districts
              }
          } else {
              throw 'e'
          }
      })
      .catch(function (error) {
          return {
              status: false,
              message: "Sorry that's an error"
          }
      })

  },
};


async function dbWrite(id) {


  const client = new MongoClient(process.env.ATLAS, {
    useUnifiedTopology: true
  });

  try {

    await client.connect();
    console.log("[+] dataBase connected")
    await actOnData(client,id);

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

  console.log("[+] Looking for user")
  console.log(console.ObjectID);

  let addressCollection = await collection.find({
    'id':id
  })
  if (addressCollection.hasNext())
    return addressCollection.next();
  else 
    return 1;
}