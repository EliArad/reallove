/*jshint node:true */
'use_strict';

var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var myhelper = require('../modules/myhelpers');
var jwtauth = require('../common/jwtauth');

var lastonlineModel = require('../models/lastonline').LastonlineModel;
var onlineController = require('../controller/online')(lastonlineModel);

var router   = express.Router();
router.post('/IsOnlineUserById', jwtauth, onlineController.IsOnlineUserById);
router.get('/IsOnlineUser', jwtauth, onlineController.IsOnlineUser);


module.exports = router;
