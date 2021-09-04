const express  = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.get("/register", function(request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.get("/home", function(request, response) {
    response.sendFile(__dirname + "/home.html");
});

app.post("/register", function(request, response) {
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // let myReadStream = fs.createReadStream(__dirname + "/home.html", "utf8");
    // myReadStream.pipe(response);
             ///continue from here
});








app.listen(3000, function() {
    console.log("Server started on port 3000");
});