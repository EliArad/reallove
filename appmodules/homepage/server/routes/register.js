'use_strict'

var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var myhelper = require('../modules/myhelpers');


var routes = function (registerController, regModel) {

    var Router = express.Router();

    // middleware for the register
    Router.use('/:registerId', function (req, res, next) {
            //console.log("register middleware " + req.params.registerId);
            var d = new Date();
            console.log(d);
            var decoded = jwt.verify(req.params.registerId, secret);

            regModel.findById(decoded.sub, function (err, reguser) {
                if (err) {
                    console.log("registration middleware 2 " + err);
                    res.status(500).send(err);
                } else if (reguser) {
                    console.log("middleware1");
                    req.reguser = reguser; // here we are adding the book result to the request which will be availeable to the routing
                    next();
                } else {
                    console.log("registration middleware 1");
                    res.redirect(500, '/#/login');
                }
            });
        }),



        Router.route('/').
    get(registerController.all).
    delete(registerController.deleteAll).
    post(registerController.create);

    Router.route('/:registerId').
    get(registerController.show).
    delete(registerController.destroy);


    return {
        routes: Router
    };
};

module.exports = routes;