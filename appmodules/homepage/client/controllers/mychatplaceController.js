'use strict';

app.controller('mychatplaceController', ['$scope','$state', 'authToken',
  function($scope,$state, authToken)
  {

    var allOnline = sessionStorage.getItem("allonlineIds");

    var vm = this;
    vm.title = "talking with";
    vm.messages = [

    ];

    vm.username = 'אני';

    vm.sendMessage = function(message, username) {
      if(message && message !== '' && username)
      {
          var id = "566408969e8d1b71d0982d20";
          var picName =  '/uploads/' + id + '/raw/' + 0 + '.jpg';
          vm.messages.push({
            'username': username,
             'imageUrl' : picName,
            'content': message
          });
      }
    };
    vm.visible = true;
    vm.expandOnNew = true;




  }

]);

