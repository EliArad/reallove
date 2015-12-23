'use strict';


var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var onlineUsers = require('../modules/onlineUsers')();

module.exports = function (lastonlineModel) {


  return {


    IsOnlineUserById: function (req, res, next) {

      lastonlineModel.findOne({registrationObjectId : req.body.id}).exec(function (err, results) {
           if (err)
           {
              res.sendStatus(500);
           } else {
             if (results)
                res.send(results.isOnline);
             else
               res.send(false);
           }
      });
    },
    IsOnlineUser: function (req, res, next) {

      lastonlineModel.findOne({registrationObjectId : req.idFromToken}).exec(function (err, results) {
        if (err)
        {
          res.sendStatus(500);
        } else {
          if (results)
            res.send(results.isOnline);
          else
            res.send(false);
        }
      });
    }
  }
};
