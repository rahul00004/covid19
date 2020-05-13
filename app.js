const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const app = express();
const covid19 = require("./utils/covid19")
const geocode = require("./utils/geocode")
const _ = require('lodash');
app.set('view engine', 'ejs');
var state
let totals = [];
var overall;
var statewise;
var data;
var total;
var state;
let st = []
let c = []
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function(req, res) {


console.log(req.query);
  covid19((error,data)=>{
     total = data.total
      // console.log(total);

     overall = data.overall
    statewise = data.statewise

c.pop()
  res.render("home", { confirmed: total, total_values: overall, state_wise: statewise,city:c.pop() });



});



})



app.post('/post',function (req,res) {

city = req.body.district;

city=_.startCase(_.camelCase(city))

geocode((error,data)=>{

state=data.state
state=_.startCase(_.camelCase(state))
console.log(state);
console.log(state);
covid19((error,data)=>{
  state=String(state)
  city=String(city)
  //console.log(city);
//console.log(state);

  statewise=data.statewise[state].district[city]
st.push(statewise)
c.push(city)
console.log(st[0]);


})

})

  res.render('post',{statewise:st[0],city:c[0]})


})





res.render("post"),{
  city:c.pop()
}


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is listening on port 3000");
})
