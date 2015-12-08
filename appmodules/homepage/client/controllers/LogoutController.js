'use strict';

//(function() {


  app.controller('LogoutController', ['$scope','$state', 'authToken','$rootScope','socketioservice',
    function($scope,$state, authToken,$rootScope,socketioservice)
    {
      //console.log("logging out");
      socketioservice.disconnect().success(function (id) {

        authToken.RemoveToken();
        $state.go('login', {}, {reload: true});
        $rootScope.$broadcast("updateHeader", authToken.getToken());

      });

    }

  ]);

//}());

