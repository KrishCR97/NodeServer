let http = require('http');
let fs = require('fs');
http.createServer((req,res)=>{
//MIME type
res.writeHead(200,{'content-Type' : 'text/html'});
var html = fs.readFileSync(__dirname + '/index.html');
res.end(html);
}).listen(4000,'127.0.0.1');
