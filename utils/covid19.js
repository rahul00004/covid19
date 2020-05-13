const request = require('request')

const covid19 = (callback) => {


  var options = {
      method: 'GET',
      url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
      headers: {
          'x-rapidapi-host':'corona-virus-world-and-india-data.p.rapidapi.com',
          'x-rapidapi-key': 'a8037d058cmsh9e50d963495fdc2p14795djsn58a6043bcc4d'
      },json:true

  }
  request(options,(error,{body}) => {

    if(error){
      callback('unable to connect',undefined)
    }

    else{
      callback(undefined,{

          total:body.total_values.confirmed,
          overall:body.total_values,
      statewise:body.state_wise,


})
}})

}

module.exports = covid19
