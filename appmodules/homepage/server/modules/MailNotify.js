var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var onlineUsers = require('./onlineUsers')();

var allClients = {};

var mailNotify = function (io) {


  io.on('connection', function(client) {
    console.log('a user connected');

    //client.broadcast.emit('user connected' , 1);

    client.on('online', function() {
      console.log('online');
    });

    client.on('forcedisconnect' , function (token)
    {
       console.log('forcedisconnect %s' , token);
       var id = jwt.verify(token, secret);
       //onlineUsers.remove(id);
       io.sockets.emit('userdisconnected', id.sub, token);
       client.disconnect();
    });

    client.on('sendMessage', function(fromid ,toid, message) {
       console.log('sendMessage ' + fromid + ' to id' + toid + ' message:' + message );
        var _client = allClients[toid];
        _client.sockets.emit('sendMessage', fromid, toid, message);
    });

    client.on('join', function(token) {
       console.log('join %s' , token);
       var id = jwt.verify(token, secret);
       //client.broadcast.emit('useridconnected' , id.sub);
       io.sockets.emit('useridconnected', id.sub, token);
       //onlineUsers.set(id,token);
       allClients[id.sub] = client;
    });
    client.on('disconnect', function() {
       console.log('Got disconnect!');
    });
  });

  return {
    onlineUsers:onlineUsers
  }

};

module.exports = mailNotify;
