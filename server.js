const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Javascript');
})

server.listen(PORT, (err) => {
    if(err) {
        return console.error("Error", err)
    }
    console.log(`Listening on port ${PORT}`)
})

//To run the server, enter: node server.js