'use_strict'

var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var myhelper = require('../modules/myhelpers');
var jwtauth = require('../common/jwtauth');
var inmailModel = require('../models/inmessages').inmessagesModel;
var outmailModel = require('../models/outmessages').outmessagesModel;
var membersModel = require('../models/members').membersModel;
var mailController = require('../controller/mail')(inmailModel,outmailModel,membersModel );


var router   = express.Router();
router.get('/getnumberofmails', jwtauth, mailController.getnumberofmails);

module.exports = router;
