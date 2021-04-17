const express = require("express");
const app = express();
const path = require('path');

const groceriesDb = require("./data/groceries-db")

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(req, res){
    res.send('<h1>Hey</h1>')
})

app.get("/home", function(req, res){
    res.render('home')
})

app.get("/groceries", function(req, res){
    res.render('groceries/index', {
        groceryList: groceriesDb.getAll()
    });
});

app.listen(3000, function(){
    console.log("listening on port 3000");
});