let http = require("http");
let url = require("url");


let server = http.createServer((request,response)=>
{ 
    response.setHeader("Access-Control-Allow-Origin","*");
    let dabba = url.parse(request.url,true);
    if(dabba.pathname="/ping")
    {
        response.end("Me Zinda hu");
    }
}
);

server.listen(9000,()=>{console.log("Server Is Active.....")})