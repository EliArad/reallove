var jwt = require('jsonwebtoken');
var secret = require('./config').secret;



module.exports = function(req, res, next) {

  //console.log("jwtauth");

  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    req.body.token = bearerToken;
    req.foundToken = true;
    //console.log("found token:" +  req.body.token);
    try {
      var decoded = jwt.verify(req.body.token, secret);
      req.idFromToken = decoded.sub;
      //console.log("the user id from the token is: " + decoded.sub);
      return next();
    }
    catch (err)
    {
      //console.log("error 1 in jwtauth " + err);
      return  res.redirect(500, '/#/login');
      //return next();
    }
  } else {
     //console.log("no bearerHeader is undefined");
     return  res.redirect(500, '/#/login');
  }

};
