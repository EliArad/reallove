'use_strict'

var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var myhelper = require('../modules/myhelpers');


 var routes = function (membersController, membersModel, registerController,regModel) {

     var membersRouter = express.Router();


        // middleware for the members, find the id of the member using the token decoded.sub
         membersRouter.use('/members/:memberId', function (req , res , next) {

           try {
             console.log("req.body.member " + req.body.member.nickName);
           }
           catch (e)
           {

           }
         var d = new Date();
         console.log(d);
         try {
             var decoded = jwt.verify(req.params.memberId, secret);
             console.log("the user id from the token is: " + decoded.sub);
             membersModel.findOne({'registrationObjectId': decoded.sub}, function (err, member) {
                 if (err) {
                     res.status(500).send("middleware did not found the id" + err);
                     next();
                 }
                 else if (member) {
                     req.member = member;
                     console.log("found member " + req.member);
                     next();
                 } else {
                     res.redirect(500, '/#/login');
                 }
             });
         }
         catch(err)
         {
             console.log("membersRouter.use: " + err);
             res.status(500);
             res.redirect(500, '/#/login');
         }
     }),


     membersRouter.route('/members').
         get(membersController.all).
         delete(membersController.deleteAll).
         post(membersController.create).
         put(membersController.update);

         membersRouter.route('/members/:memberId').
             get(membersController.show).
             put(membersController.update).
             delete(membersController.destroy).
             patch(membersController.patch);



    return {
        routes:membersRouter
    };
};

module.exports = routes;
