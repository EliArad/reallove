'use strict';


var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;

module.exports = function (notify) {

  var notifyIO = notify;

  return {

    logoutAllUsers: function (req, res, next) {

        notifyIO.logoutAll();
        res.send("ok");
    }
  }
};
