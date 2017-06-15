//--------------------------------------------------------------------
// console.log(1/0)
var express = require('express');
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Schema = mongoose.Schema;
var session = require("express-session");
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: "11111"}))
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/messages");

//-----------------DB SCHEMAS------------------------------------

var Message_time = new mongoose.Schema({
  name: {type: String, required: true, minlengh: 2},
  message: {type: String, required: true, minlengh: 25},
  comments: { type: Array}
}, {timestamps: true});

mongoose.model("Message", Message_time);
var Message = mongoose.model("Message");

//----------------------ROUTES/---------------------------------

app.get("/", function(request, response) {
  Message.find({}, function(err, messages){
    if(err){
      console.log("Something went horribly wrong, do not panic.");
      console.log(err);
      request.session.errors = Message.errors;
      response.render("index", {errors:request.session.errors});
    }
    else{
      console.log("Gotchu bruh");
      console.log(messages);
      console.log(request.session.errors);
      response.render("index", {messages: messages, errors:request.session.errors});
    }
  })
})
//-----------------------MESSAGE PORTION------------
app.post("/postMessages", function(request, response){
  console.log("POST DATA", request.body);

  var messagetwo = new Message({name: request.body.name, message: request.body.message});

  messagetwo.save(function(err){
    if(err){
      console.log("We can fix this, just wait a bit...");
      console.log(err);
      request.session.errors = messagetwo.errors;
      response.redirect("/");
    }
    else{
      console.log("We gotchur message");
      request.session.errors = {};
      response.redirect("/");
    }
  })
})
//-------------------------COMMENT PORTION-------------
app.post("/comment", function(request, response){
  console.log("POST DATA", request.body);

  request.session.errors = {};

  if(request.body.name.length < 2 || request.body.comment.length < 25){
    console.log(request.session.errors);
    if (request.body.name.length < 2){
      request.session.errors.name = {message: "Name be too short."};
      console.log(request.session.errors);
    }
    if(request.body.comment.length < 10){
     request.session.errors.comment = {message: "Comment length must be 25 or more characters."};
     console.log(request.session.errors);
   }
   response.redirect("/");
  }
  else {
    Message.update({ _id: request.body.messageId}, {$push: {comments: {name:request.body.name, comment: request.body.comment}}}, function(err){
     if(err){
       console.log("something went wrong");
       console.log(err);
       request.session.errors = Message.errors;
       response.redirect("/");
     }
     else{
       console.log("comment added");
       request.session.errors = {};
       response.redirect("/");
      }
    })
  }
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
