//YOU WOULD NEED THE BODY PARSER NODE MODULE TO GO INTO THE OBJECT DEFINED.

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var route = require('./routes/index.js')(app);


//this is to get the server to look into the views folder.
//the console log is to make sure the server is working and not breaking
//app.use(bodyParser.urlencoded());
// app.set('views', __dirname + '/views');
// console.log(__dirname);
// var bodyParser = require("body-parser");
//
// app.use(bodyParser.urlencoded({ extended: true}));
// //set the view engine to ejs
// app.set('view engine', 'ejs');
//
// //now do a "get" to render the ejs page that is wanted
// //this is now the "home page"
// //the / indicates that and it will render how it is set up in the file directory
// app.get("/", function(request, response){
//   response.render('index');
// });
//
// //now for the results page to render and send the answers?
// app.post("/results", function(request, response){
//   infologged = {
//     name: request.name,
//     cakes: request.cake,
//     circle:request.circle,
//     argue: request.argue
//
//   };
//   response.render('results',{user_data: infologged});
//   console.log(infologged);
// })
//


//this is to see if the server is listening
app.listen(8000, function(){
  console.log("8000 betches");
})
