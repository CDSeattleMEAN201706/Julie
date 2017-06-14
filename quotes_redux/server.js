
var express = require('express');

var app = express();

var mongoose = require('mongoose');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/quotes');
var quotesSchema = new mongoose.Schema({
  name: String,
  quote: String
});

var Quote = mongoose.model('secondpage', quotesSchema);

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})
//show the reusults page
app.get('/secondpage', function(req, res) {
  Quote.find({},function(err, results){
    if(err) {console.log(err);}
    res.render('secondpage', {secondpage: results});
  });
});

app.post('/secondpage', function(req, res){
  Quote.create(req.body, function(err){
    if(err){ console.log(err);}
    res.redirect('/secondpage');
  });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
