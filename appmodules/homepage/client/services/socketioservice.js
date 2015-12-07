app.factory("socketioservice", function($http)
{

    var socket = io.connect('http://localhost:8000');
    socket.on('connect', function(data) {

      console.log("connection IO ok");
      try {
        var token = authToken.getToken();
        socket.emit('join', token);
      }
      catch (err)
      {

      }
    });

    socket.on('watsonnotify', function (data) {
      console.log('watsonnotify');
    });

    socket.on('disconnect', function () {
      console.log('disconnect');
    });
    function init()
    {

    }
    return{
      init:init
    }

});
