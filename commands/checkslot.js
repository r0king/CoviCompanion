const axios = require('axios')

module.exports = {
  name: 'checkslot',
  description: 'checkslot!',
  execute(msg, args) {
    msg.reply('pong');
  },
};
async function testState() {
  const allstates = await getStates()
  console.log(allstates)
}
// testState();

async function getStates() { /* https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/Metadata%20APIs/states */

  console.log("01")
  let states = axios({
    method: 'get',
    url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en_US',
      
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
  

    }
  }
  )
    .then(function(response) {

      console.log("02")
      console.log(response)
      if (response.data.states !== undefined) {
        return {
          status: true,
          result: response.data.states
        }
      } else {
        throw 'e'
      }
    })
    .catch(function(error) {

      console.log("03")
      return {
        error:error,
        status: false,
        message: "Sorry that's an error"
      }
    })

  console.log("04")
  return states;

}

console.log("05")