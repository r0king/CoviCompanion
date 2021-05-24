const axios = require('axios')

module.exports = {
    name: '/checkslot',
    description: 'checkslot!',
    execute(msg, args) {
        const MongoClient = require('mongodb').MongoClient;
        const client = new MongoClient(process.env.ATLAS, {
            useUnifiedTopology: true
        });
        let pincode = ''
        client.connect(err => {
            const collection = client.db("Covid_UserTest").collection("User01");
            collection.findOne({
                "id":msg.author.id
            }, function (err, result) {
                if (err) throw err;
                pincodeList = result.details[4].split(' ');
                pincode = pincodeList[1];
                client.close();

        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        date = dd + '-' + mm + '-' + yyyy;

        if (args.length !== 0) {
            date = args;
        }

        axios({
                method: 'get',
                url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`,
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en_US',
                    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
                }
            })
            .then(function (response) {
                console.log(pincode)
                if (response.data.sessions !== undefined) {
                    console.log(response.data.sessions);

                    if (response.data.sessions.length === 0) {
                        
                        msg.reply('NO VACCINATION CENTER IS AVAILABLE FOR BOOKING!!')
                        exit(0);
                    }

                    response.data.sessions.forEach((k, v) => {
                        let allsessions = '\nDoses available:\n'
                        allsessions += ` First dose available :${k.available_capacity_dose1}\n Second dose available :${k.available_capacity_dose2} \n Total dose :${k.available_capacity}\n`;
                        if (k.available_capacity === 0) {
                            msg.channel.send(`For ${k.min_age_limit}+ \nSLOT NOT AVAILABLE!!\n`)
                        } else if (k.available_capacity !== 0) {
                            msg.channel.send(`\nFor ${k.min_age_limit}+  ${allsessions} `)
                            msg.reply('\nSLOT AVAILABLE!!, To register please click on this link to go the official CO-WIN site : https://www.cowin.gov.in/home')
                        }
                    });

                } else {
                    print("Error")
                    throw 'e'
                }
            })
            .catch(function (error) {
                return {
                    status: false,
                    message: "Sorry that's an error"
                }
            })

            });
        });




    },
};