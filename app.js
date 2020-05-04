const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const app = express();
const _ = require('lodash');
app.set('view engine', 'ejs');

let totals=[]


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home",{
    confirmed:totals[0]


  })
});

app.post("/", function(req, res){
var get= req.body.get

      var options = {
        method: 'GET',
        url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
        headers: {
          'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
          'x-rapidapi-key': 'a8037d058cmsh9e50d963495fdc2p14795djsn58a6043bcc4d'
        },

      };





    request(options,function(err,res,body){
            var data =JSON.parse(body)
          var total = data.total_values.confirmed
          console.log(total);
          res.redirect('/')
          });
          router.get("/", async(req, res) => {
            const obj = await fetchData()
            res.render("home", { obj });
          });

          function fetchData(){
            return fetch("http://localhost:3000")
                .then(res => res.json())
          }


      });






app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening on port 3000");
})
