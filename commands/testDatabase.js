
// const Database = require("@replit/database")
// const db = new Database()

// module.exports = function(print) {

//   db.set("Hey ", "There ").then(() => {
//     console.log("\x1b[32m", "[+] Database created");
//     console.log("\x1b[34m")
//   });
//   db.list().then(keys => {
//     console.log(keys)
//   });

//   db.get("Hey").then(value => {
//     console.log(print)
//   });

// };





// console.log("01");

// const MongoClient = require('mongodb').MongoClient;


// async function main() {


//   const client = new MongoClient(process.env.ATLAS, {
//     useUnifiedTopology: true
//   });

//   try {

//     await client.connect();
//     await actOnData(client);
//     await listDatabases(client);

//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }

// }
// async function actOnData(client) {

//   const dataBase = await client.db("Covid_UserTest");
//   const collection = dataBase.collection("User")
//   // const inserted =await  collection.insertOne(
//   //   {
//   //     "name":"Username",
//   //     "number" : 123456789,
//   //     "Address":[
//   //       1235234321,
//   //       "House",
//   //       "Village",
//   //       "District"

//   //     ]
//   //   }
//   // );
//   console.log(console.ObjectID);
//   let addressCollection = await collection.find({});
//   while (await addressCollection.hasNext()) {
//     let Address = await addressCollection.next();
//     console.log(Address);

//   }

//   let updateUser = await collection.updateOne({
//     "name": "Username"

//   }, {
//     "$set": {
//       "name": "Rkng"
//     },
//     // "$addToSet":{
//     //   "name" : "Username"
//     // },
//     // "$push":{
//     //   "Address" : [1,2,3,4,5,6]
//     // }
//   })
//   console.log(updateUser.modifiedCount);



// }

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// module.exports = {
//   main : main().catch(console.error)
// }


// console.log("Bad");