const app = require('http'); // built in module to create server and to serve client requests
const currenciesData = require("./currencies.json");
const PORT =8081;

const server = app.createServer((req,res)=>{
    const { headers, method, url } = req;
    // Set response status code and response headers
   switch(url){
    case "/":
        res.write('<h1>Currency Database</h1>'); // response send to client
        
        res.end();  
        break;
    
    case "/currencies":
        const response = currenciesData.data;
       // console.log(currenciesData.data)
       res.writeHead(200, {'content-type':"application/json"})
        res.write(JSON.stringify(response));
        res.statusCode = 200;
        res.end();
        break;
    
    case "/currencies/:symbol":
    
        res.end("dynamic routing")
        break;
    default:
        res.statusCode = 404;
        res.end();
   }
   

})

server.listen(PORT, ()=>{console.log(`Server is listening at ${PORT}`)})