var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == "/welcome") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.end("Welcome to Dominos!")
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ phone: '18602100000', email: 'guestcaredominos@jublfood.com' }));
    }
    else {
        res.writeHead(404)
        res.end("page not found")
    }
}
httpServer.listen(3000, () => {
    console.log("server is listening at port 3000")
})

module.exports = httpServer;