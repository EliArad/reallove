/*jshint node:true */
'use_strict';

var express = require('express');
var jwt = require('jsonwebtoken');
var jwtauth = require('../common/jwtauth');

var notifyServer;
var membersModel;
var inacallarray = {};

var routes = function (app, notifyServer, membersModel) {

    app.post('/api/chat/SendChatRequest', jwtauth, function (req, res, next) {
        notifyServer.SendChatRequest(req.body.fromid, req.body.toid, req.body.torid);
        res.send("ok");
    });

    app.post('/api/chat/IamInCall', jwtauth, function (req, res, next) {
        console.log(req.body.inacall);
        console.log(req.body.fromid);
        if (req.body.inacall == true)
            inacallarray[req.body.fromid] = req.body.inacall;
        else
            delete inacallarray[req.body.fromid];
        res.send("ok");
    });

    app.post('/api/chat/IsUserInACall', jwtauth, function (req, res, next) {

        try {
            var x = inacallarray[req.body.fromid];
            console.log('IsUserInACall ' + x);
            if (x == undefined) {
                return res.send(false);
            }
            return res.send(x);
        } catch (e) {
            return res.send(false);
        }
    });

    app.post('/api/chat/UserAcceptMoveToChatRoom', jwtauth, function (req, res, next) {
        console.log('UserAcceptMoveToChatRoom');
        notifyServer.UserAcceptMoveToChatRoom(req.body.fromid, req.body.toid);

        membersModel.findOne({
            'registrationObjectId': req.body.toid
        }, ' nickName', function (err, member) {
            if (err) {
                res.status(500).send("middleware did not found the id" + err);
            } else if (member) {
                //console.log(member.nickName);
                res.send(member.nickName);
            } else {
                res.status(500);
            }
        });
    });

    return {
        routes: routes
    }
}

module.exports = routes;
