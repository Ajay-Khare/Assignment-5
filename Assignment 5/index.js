const express = require("express");
const app = express();

app.get("/welcome", (req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" })
    res.end("Welcome to Dominos!")
})

app.get("/contact", (req, res) => {
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify({ phone: '18602100000', email: 'guestcaredominos@jublfood.com' }));
})

app.get("/*", (req, res) => {
    res.writeHead(404)
    res.end("page not found")
})
app.listen(3000, () => {
    console.log("server is reunning on port 3000")
})