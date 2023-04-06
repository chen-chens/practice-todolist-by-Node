
const http = require('http')

const server = http.createServer((req, res)=> {
    res.writeHead(200,{ "Content-Type" : "text/html" })
    res.write("Hello is in your area !")
    res.end()

})

server.listen(8080, '127.0.0.1', () => console.log("Server is in your area !"))