const express  = require("express");
const {spawn} = require('child_process');
const bodyParser = require("body-parser");
const path = require("path");
const drum = require(__dirname + "/drum.js");

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

app.get('/drums', (req, res) => {
    
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['script1.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });

    //<a href="https://www.onemotion.com/drum-machine/" target="_blank"></a>
     // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.write(dataToSend);
     res.send("https://www.onemotion.com/drum-machine/");
     //res.send();
    });
   });

app.post("/register", function (request, response) {
   response.sendFile(__dirname + "/home.html"); 
});





app.listen(3000, function() {
    console.log("Server started on port 3000");
});