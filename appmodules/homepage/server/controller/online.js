'use strict';


var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var onlineUsers = require('../modules/onlineUsers')();

module.exports = function () {


  return {


    IsOnlineUserById: function (req, res, next) {
       var x = onlineUsers.isOnline(req.body.id);
       res.send(x);
    },
    IsOnlineUser: function (req, res, next) {

       var x = onlineUsers.isOnline(req.idFromToken);
       res.send(x);
    }


  }
};
