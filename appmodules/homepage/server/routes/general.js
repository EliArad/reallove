var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var lwip = require('lwip');
var jwtauth = require('../common/jwtauth');


var routes = function (app)
{

  var router   = express.Router();

  router.route('/roateMyPicture').
    post(function (req, res, next)
    {
        //console.log(req.body.id);
        //console.log('/api/general/roateMyPicture: ' + req.idFromToken);

       filename = './uploads/' + req.idFromToken + "/raw/" + req.body.id + '.jpg';
       console.log(filename);
       lwip.open(filename, function (err, image) {

        image.batch().rotate(90, 'white').writeFile(filename, function (err) {
           if (err)
           {
               res.send("error");
           } else {
               res.send("ok");
           }
        });
      });
    });

  /*
  router.post('/roateMyPicture', jwtauth, function (req, res)
  {
    console.log(req.body.id);
    console.log('/api/general/roateMyPicture: ' + req.idFromToken);

    res.send("ok");
    return;

    lwip.open(demofile, function (err, image) {

      // check err...
      // define a batch of manipulations and save to disk as JPEG:
      image.batch().rotate(90, 'white').writeFile(demofile, function (err) {
        console.log(err);
      });
    });

  });
*/

  return {
    routes: router
  }
}

module.exports = routes;
