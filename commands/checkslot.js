const axios = require('axios')

module.exports = {
  name: 'checkslot',
  description: 'checkslot!',
  execute(msg, args) {
    
    pincode = "683579";
    date = "24-05-2021"
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
          if (response.data.sessions !== undefined) {


          let allsessions = 'Doses available:\n'
          response.data.sessions.forEach((k, v) => {
            allsessions += ` First dose available :${k.available_capacity_dose1}\n Second dose available :${k.available_capacity_dose2} \n Total dose :${k.available_capacity}\n`;          
          }
          );
          msg.channel.send(allsessions);
              return {
                  status: true,
                  result: response.data.sessions
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

