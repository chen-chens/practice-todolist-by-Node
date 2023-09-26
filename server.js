
const http = require('http')

const server = http.createServer((req, res)=> {
    console.log("req: ", req.url, req.method)
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*', // 接受跨域請求
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
        "Content-Type" : "application/json"
    }
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, headers)
        res.write(JSON.stringify({
            status: "success",
            data: ["Joanna", "David"]
        }))

    }else{
        res.writeHead(404, headers)
        res.write(JSON.stringify({
            status: "fail",
        }))    
    }
    res.end()
})

server.listen(8080, '127.0.0.1', () => console.log("Server is in your area !"))