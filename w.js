const express = require("express");
const app = express();
const bodyParser = require("body-Parser");
const request = require("request");


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req , res)
{
    
    res.sendFile(__dirname+"/w.html");
});

app.post("/",function(req,res)
{
    var city1 = req.body.city;
    request(`https://api.weatherapi.com/v1/current.json?key=%2001b3052b0f4b4b4a95591526210909&q=${city1}`, function (error, response, body) {
        let data1 = JSON.parse(body);
    res.write("<h1>the weather condition in "+ city1+" is "+data1.current.condition.text+"</h1>");
    res.write("<h2>Also, the tempreature is : "+ data1.current.temp_c +" degree celsius </h2>");
});

});
app.listen(3000,function()
{
    console.log("the server is running");
});
