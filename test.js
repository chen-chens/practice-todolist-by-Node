// require 模組：CommonJS 寫法
// import 模組：ES6 module 寫法

const http = require('http')

const server = http.createServer((req, res) => {
    const method = req.method
    const reqUrl = req.url
    const responseHeader = {
        "Content-Type" : "text/html"
    }

    // 辨認 Client-Side req 是否正確
    if(reqUrl === "/" && method === "GET"){
        res.writeHead(200, responseHeader)
        res.write("This is GET Method!")
    }else if(reqUrl === "/" && method === "PUT"){
        res.writeHead(200, responseHeader)
        res.write("This is Put Method!")
    }else{
        res.writeHead(400, responseHeader)
        res.write("404 Not Found!")
    }
    res.end()
})

server.listen(8080, 'localhost', () => {
    console.log("Sever is running ...")
})


