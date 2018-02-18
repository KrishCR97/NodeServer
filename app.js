let http = require('http');
let fs = require('fs');
http.createServer((req,res)=>{
//MIME type
res.writeHead(200,{'content-Type' : 'text/html'});
fs.createReadStream(__dirname + '/index.html').pipe(res);
// html = html.replace('{msg}',"Kishon");
// res.end(html);
}).listen(4000,'127.0.0.1');
