'use_strict'

var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var myhelper = require('../modules/myhelpers');
var jwtauth = require('../common/jwtauth');

var onlineController = require('../controller/online')();

var router   = express.Router();
router.get('/IsOnlineUserById', jwtauth, onlineController.IsOnlineUserById);
router.get('/IsOnlineUser', jwtauth, onlineController.IsOnlineUser);


module.exports = router;
