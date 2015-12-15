var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var onlineUsers = require('./onlineUsers')();
var jwtauth = require('../common/jwtauth');
var allClients = {};

var mailNotify = function (io) {


    io.on('connection', function (client) {
        console.log('a user connected ' + client.id);

        //client.broadcast.emit('user connected' , 1);


        client.on('forcedisconnect', function (token) {
            console.log('forcedisconnect %s', token);
            var id = jwt.verify(token, secret);
            //onlineUsers.remove(id);
            io.sockets.emit('userdisconnected', id.sub, token);
            client.disconnect();
        });

        client.on('sendMessage', function (fromid, toid, message) {
            console.log('sendMessage ' + fromid + ' to id' + toid + ' message:' + message);
            try {
                //console.log(allClients);
                var clientid = allClients[toid];
                if (clientid != undefined) {
                    io.sockets.connected[clientid].emit('sendMessage', fromid, toid, message);
                } else {
                    console.log('On sendMessage _client[%s] is not define', toid);
                }
            } catch (err) {
                console.log(err);
            }
        });

        client.on('join', function (token) {
            //console.log('join %s' , token);
            var id = jwt.verify(token, secret);
            //client.broadcast.emit('useridconnected' , id.sub);
            io.sockets.emit('useridconnected', id.sub, token);
            console.log('user %s is online', id.sub);
            allClients[id.sub] = client.id;
        });
        client.on('disconnect', function () {
            console.log('Got disconnect!');
        });
    });

    function SendChatRequest(fromid, toid, torid) {
        console.log('SendChatRequest from id: %s   to id %s', fromid, torid);
        var clientid = allClients[torid];
        console.log('clientid: ' + clientid);
        if (clientid != undefined)
            io.sockets.connected[clientid].emit('request_to_chat', fromid, toid, torid);
    }


    function UserAcceptMoveToChatRoom(fromid, toid) {
        var clientid = allClients[toid];
        console.log('UserAcceptMoveToChatRoom: ' + clientid);
        if (clientid != undefined)
            io.sockets.connected[clientid].emit('chat_accpeted_move_to_chat_room', fromid, toid);
    }

    return {
        onlineUsers: onlineUsers,
        SendChatRequest: SendChatRequest,
        UserAcceptMoveToChatRoom: UserAcceptMoveToChatRoom
    }
};

module.exports = mailNotify;