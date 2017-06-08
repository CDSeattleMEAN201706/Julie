var fs = require('fs'),
    http = require('http'),
    port = 6789;

var server = http.createServer(function server(request, response){
  var file;

  switch (request.url){
    case "/": file = "index.html"
    break;

    case "/ninjas": file = "ninjas.html"
    break;

    case "/dojo/new": file = "dojo.html"
    break;

    default: file = null;
    break;
  }

    if(file !== null) {
        fs.readFile(`static/${file}`, 'utf8', function (errors, contents){
          if (errors) {console.log(errors);}
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
      } else {
        response.writeHead(404);
        response.end('File not found!!!');
      }
    });
server.listen(port,function(){
  console.log("Running on port:", port);
});
// print to terminal window
//console.log("Running in localhost at port 5000");
