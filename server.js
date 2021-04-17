const express = require("express");
const app = express();
const path = require('path');

const groceries = require("./data/groceries")
const cheap = groceries.lessThan10();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(req, res){
    res.send('<h1>Hey</h1>')
})

app.get("/home", function(req, res){
    res.render('home')
})

app.listen(3000, function(){
    console.log("listening on port 3000");
});