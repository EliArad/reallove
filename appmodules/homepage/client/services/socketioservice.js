app.factory("socketioservice", function ($rootScope, $http, authToken, myConfig) {

  var socket = io.connect(myConfig.url);
  var onlineUsers = {};

  var updateCallback = null;
  var requestForChatCallback = null;
  var acceptChatCallback = null;
  var incomingMessageFunctionCallback = null;

  //var socket = io.connect(myConfig.url',{'forceNew':true });

  socket.on('connect', function (data) {


    try {
      var token = authToken.getToken();
      console.log("send join");
      socket.emit('join', token);
    } catch (err) {

    }
  });


  socket.on('logoutall', function () {
    $rootScope.$broadcast("logoutnow");
  });

  socket.on('testconnection', function () {

  });


  socket.on('onlinecount', function (count) {
    console.log('onlinecount:' + count);
    $rootScope.$broadcast("onlinecount", count);
  });

  socket.on('useridconnected', function (id, token) {
    console.log('User connected !!!!' + id);
    onlineUsers[id] = token;
    if (updateCallback != null)
      updateCallback('connected', id);
  });

  socket.on('userdisconnected', function (id, token) {
    //console.log('userdisconnected !!!!' + id);
    try {
      delete onlineUsers[id];
      if (updateCallback != null)
        updateCallback('disconnect', id);
    } catch (e) {

    }
  });

  socket.on('disconnect', function () {
    //console.log('disconnect try reconnect');
    socket.io.reconnecting = undefined; //<- false should be the initial value
    socket.io._reconnection = true;

  });

  //$rootScope.$emit('myEvent',  'a'  );
  socket.on('request_to_chat', function (fromid, toid, torid) {
    console.log('request_to_chat fromid: %s  torid %s ', fromid, torid);
    var data = {
      fromid: fromid,
      toid: toid,
      torid: torid
    }
    //$rootScope.$emit('myEvent',data );
    requestForChatCallback(data);
  });

  socket.on('chat_accpeted_move_to_chat_room', function (fromid, toid) {
    console.log('chat_accpeted_move_to_chat_room fromid: %s  toid %s ', fromid, toid);
    var data = {
      fromid: fromid,
      toid: toid
    }
    acceptChatCallback(data);
  });

  socket.on('sendMessage', function (fromid, toid, message) {
    console.log('got send message to me! from %s : %s', fromid, message);
    try {
      incomingMessageFunctionCallback(fromid, message);
    } catch (err) {
      console.log(err);
    }
  });

  function setAcceptChatCallback(c) {
    acceptChatCallback = c;
  }

  function setRequestForChatCallback(c) {
    requestForChatCallback = c;
  }

  function RegisterIncomingMessage(c) {
    incomingMessageFunctionCallback = c;
  }

  function setCallback(c) {
    updateCallback = c;
  }

  function isUserOnlineById(id, callback) {

    var membersAPI = myConfig.url + "/api/online/IsOnlineUserById";
    return $http.post(membersAPI , {id:id}).then(function (online) {

      callback('ok',online);

    }).catch(function (err) {
        callback(err, false);
    });
  }

  function isUserOnline(id, callback) {

    var membersAPI = myConfig.url + "/api/online/IsOnlineUser";
    return $http.get(membersAPI).then(function (online) {
      if (callback != undefined)
        callback('ok',online);

    }).catch(function (err) {
      if (callback != undefined)
          callback(err,online);
    });
  }

  function disconnect(callback) {

    var membersAPI = myConfig.url + "/api/getuserid";
    return $http.get(membersAPI).success(function (id) {

      var token = authToken.getToken();
      //console.log('disconnect in service ' + token );
      socket.emit('forcedisconnect', token);
      if (callback != null && callback != undefined)
         callback('ok');
      /*
       try {
       delete onlineUsers[id];
       console.log('delete online user');
       }
       catch (e)
       {

       }
       socket.disconnect();
       */
    }).catch(function (err) {
      callback(err);
    });
  }

  function connect() {
    socket.connect();
  }

  function sendMessage(fromId, toid, message) {
    socket.emit('sendMessage', fromId, toid, message);
  }

  return {
    connect: connect,
    disconnect: disconnect,
    isUserOnline: isUserOnline,
    setCallback: setCallback,
    setRequestForChatCallback: setRequestForChatCallback,
    sendMessage: sendMessage,
    RegisterIncomingMessage: RegisterIncomingMessage,
    setAcceptChatCallback: setAcceptChatCallback,
    isUserOnlineById:isUserOnlineById

  }

});
