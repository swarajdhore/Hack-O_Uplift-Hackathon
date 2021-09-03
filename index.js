const express  = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({ extendex:true}));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

app.get("/register", function(request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.get("/home", function(request, response) {
    response.sendFile(__dirname + "/home.html");
});

app.post("/register", function(request, response) {
    response.sendFile(__dirname + "/home.html");                          ///continue from here
});








app.listen(3000, function() {
    console.log("Server started on port 3000");
});