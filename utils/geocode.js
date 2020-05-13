const request = require('request')
const geocode = (callback) =>{










var options = {
    method: 'GET',
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=qn8jlNzCVGG8athO0OyPJnit4FGwlykd',
    qs:{location:city}
  ,json:true

}


request(options,(error,{body}) => {

  if(error){
    callback('unable to connect',undefined)
  }

  else{
    callback(undefined,{

    state:body.results[0].locations[0].adminArea3


})
}})
}


module.exports =geocode
