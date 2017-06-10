var express = require("express");
var app = express();
//this is to get the server to look into the views folder.
//the console log is to make sure the server is working and not breaking
app.set('views', __dirname + '/views');
console.log(__dirname);

//set the view engine to ejs
app.set('view engine', 'ejs');

//now do a "get" to render the ejs page that is wanted
//this is now the "home page"
//the / indicates that and it will render how it is set up in the file directory
app.get("/", function(request, response){
  response.render('index');
});

//now for the results page to render and send the answers?
app.post("/results", function(request, response){
  infologged = {
    name: request.name,
    died: request.died,
    circle:request.circle,
    argue: request.argue

  };
  response.render('results',{user_data: infologged});
  //console.log(user_data);
})



//this is to see if the server is listening
app.listen(8000, function(){
  console.log("8000 betches");
})
