var express = require('express');
var app = express();

// This responds with 'Hello World' on the homepage
app.get('/', function (req, res) {
    console.log("There is GET request for the homepage!");
    res.send('Here is the GET Method!');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("A POST request for the homepage is accessed.");
    res.send("Here is te POST Method");
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send("This is Page Listing");
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send("Patter Match Page");
})

// ANOTHER ROUTE (PROFILE)
app.get('/profile', function (req, res) {
    console.log("Profile found!");
    res.send(`
    <html style='background-color: blue;'>
        <h1 style='font-size: 48px; color:white; text-align:center; padding-top:50px'>I am Ethan James G. Gonzales</h1>
    </html>
    `);
    // res.send("I am Ethan James G. Gonzales");
})

var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

