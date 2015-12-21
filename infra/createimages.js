var http = require('http');
var fs = require("fs");


var request = require("request");

request("http://dummyimage.com/600x400/000/fff.jpg&text=1", function (error, response, body) {

    console.log(response.body);

    fs.writeFile('1.jpg', response.body, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("ok");
        }
    });

});