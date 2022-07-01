const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
var items = [];
var error;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

    res.render('index', {
        x: items,
        y: error
    });

});

app.post('/', (req, res) => { //to handle form post request

    var item = req.body.input;
    if (item == 0) {

        error = "please enter data";
        res.redirect('/');

    } else {

        items.push(item);
        error = "";
        res.redirect('/');
    }

    

});

app.listen(3000, () => {
    console.log("Server running at port 3000");
})