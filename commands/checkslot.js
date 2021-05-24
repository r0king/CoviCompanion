const axios = require('axios')

module.exports = {
  name: 'checkslot',
  description: 'checkslot!',
  execute(msg, args) {
    var pin = 683576;
    var date = "24-05-2021";
    axios({
      method: 'get',
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en_US',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
      }
    })
      .then(function(response) {

        let cl = response.data.sessions;

        cl.forEach(function(item,index){
          
          console.log(item);
        
        });
       
      })
      .catch(function(error) {
        console.log(error);
        return {
          status: false,
          message: "Sorry that's an error"
        }
      })

  },
};

