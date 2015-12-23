/*jshint node:true */
'use_strict';

var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var jwtauth = require('../common/jwtauth');

module.exports = function (notify) {

  var adminController = require('../controller/admin')(notify);

  var router = express.Router();
  router.get('/logoutAllUsers', jwtauth, adminController.logoutAllUsers);

  return {
    router:router
  };

}
