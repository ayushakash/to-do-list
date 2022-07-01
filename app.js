const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
var items = [];

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

    res.render('index', {x: items});

});

app.post('/', (req, res) => {                     //to handle form post request

    var item = req.body.input;                      //req.body. name of input
    items.push(item);
    res.redirect('/');                              //to re render '/' route

});

app.listen(3000, () => {
    console.log("Server running at port 3000");
})