let http = require('http');
let fs = require('fs');
http.createServer((req,res)=>{
//MIME type
res.writeHead(200,{'content-Type' : 'application/json'});
if(req.url == "/api"){
    var obj = {
        nickName : "Kishon",
        lastName : "Mucherla"
    };
    res.end(JSON.stringify(obj));
}
else if(req.url == "/"){
    res.writeHead(200,{'content-Type' : 'text/html'});
    var html = fs.readFileSync(__dirname + "/index.html");
    res.end(html);

}
res.writeHead(404);
res.end(404+"");
console.log(req);
// fs.createReadStream(__dirname + '/index.html').pipe(res);
// html = html.replace('{msg}',"Kishon");
// res.end(html);
}).listen(4000,'127.0.0.1');
