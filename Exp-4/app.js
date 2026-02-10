const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
  if(req.url==="/"){
    fs.readFile("index.html",(e,d)=>{
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(d);
    });
  }
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000")});
