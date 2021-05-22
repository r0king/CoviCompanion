const axios = require('axios')

// const {
//     getStates,
//     getListofDistricts,
//     findByPin,
//     findByDistrict,
//     calendarByPin,
//     calendarByDistrict
// } = require('./cowinapi')

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

// const axios = require('axios')
// const {
//     getStates,
//     getListofDistricts,
//     findByPin,
//     findByDistrict,
//     calendarByPin,
//     calendarByDistrict
// } = require('./cowinapi')
// module.exports = {
//   name: 'checkslot',
//   description: 'checkslot!',
//   execute(msg, args) {
//     msg.reply("pong");
//     axios({
//       method: 'get',
//       url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
//       headers: {
//           'accept': 'application/json',
//           'Accept-Language': 'en_US',
//           'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
//       }
//   })
//       .then(function (response) {
//           if (response.data.states !== undefined) {
//             let allstates ='States:\n\t'
//             response.data.states.forEach((k, v) => 
//             { 
//               allstates += `\t${v}: ${k.state_name} \n`;
//               }
//               );
//               msg.channel.send(allstates);
//             return {
//                   status: true,
//                   result: response.data.states
//               }
//           } else {
//               throw 'e'
//           }
//       })
//       .catch(function (error) {
//           return {
//               status: false,
//               message: "Sorry that's an error"
//           }
//       })

//   },
// };