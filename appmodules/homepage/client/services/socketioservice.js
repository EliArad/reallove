app.factory("socketioservice", function($rootScope,$http,authToken,myConfig)
{

    var socket = io.connect('http://localhost:8000');
    var onlineUsers = {};

    var updateCallback = null;
    var requestForChatCallback = null;

    //var socket = io.connect('http://localhost:8000',{'forceNew':true });



     socket.on('connect', function(data) {


      try {
         var token = authToken.getToken();
         //console.log("send token");
         socket.emit('join', token);
      }
      catch (err)
      {

      }
    });

    socket.on('useridconnected', function (id,token) {
       //console.log('User connected !!!!' + id);
       onlineUsers[id] = token;
       if (updateCallback != null)
          updateCallback('connected' , id);
    });

    socket.on('userdisconnected', function (id,token) {
        //console.log('userdisconnected !!!!' + id);
        try {
          delete onlineUsers[id];
          if (updateCallback != null)
             updateCallback('disconnect' , id);
        }
        catch(e)
        {

        }
    });


    socket.on('disconnect', function () {
        //console.log('disconnect try reconnect');
        socket.io.reconnecting = undefined; //<- false should be the initial value
        socket.io._reconnection = true;

    });

    //$rootScope.$emit('myEvent',  'a'  );
    socket.on('request_to_chat', function (fromid,toid, torid) {
       console.log('request_to_chat fromid: %s  torid %s ' , fromid,torid);
       var data = {
         fromid : fromid,
         toid: toid,
         torid:torid
       }
       //$rootScope.$emit('myEvent',data );
       requestForChatCallback(data);
    });

    function setRequestForChatCallback(c)
    {
       requestForChatCallback = c;
    }


    function setCallback(c)
    {
       updateCallback = c;
    }

    function isUserOnline(id)
    {
      try {
        var x = onlineUsers[id];
        //console.log('isUserOnline ' + x);
        if (x == undefined)
          return false;
        return true;
      }
      catch (e)
      {
         return false;
      }
    }

    function disconnect()
    {

      var membersAPI = myConfig.url + "/api/getuserid";
      return $http.get(membersAPI).success(function(id) {

        var token = authToken.getToken();
        //console.log('disconnect in service ' + token );
        socket.emit('forcedisconnect', token);
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
      });
    }

    function connect()
    {
       socket.connect();
    }

    function sendMessage(fromId, toid , message)
    {
       socket.emit('sendMessage', fromId, toid , message);
    }

    return{
      connect:connect,
      disconnect:disconnect,
      isUserOnline:isUserOnline,
      setCallback:setCallback,
      setRequestForChatCallback:setRequestForChatCallback
    }

});
