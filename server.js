
const http = require('http')

const server = http.createServer((req, res)=> {
    console.log("req: ", req.url, req.method)
    const headers = {
        "Content-Type" : "text/html"
    }
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, headers)
        res.write("Hello is in your area/index !")

    }else if(req.url === '/' && req.method === 'DELETE'){
        res.writeHead(200, headers)
        res.write("I want to delete something !")
        
    }else{
        res.writeHead(404, headers)
        res.write("Not Found 404 !")
    }
    res.end()
})

server.listen(8080, '127.0.0.1', () => console.log("Server is in your area !"))