'use strict';

//(function() {


  app.controller('LogoutController', ['$scope','$state', 'authToken','$rootScope',
    function($scope,$state, authToken,$rootScope)
    {
      console.log("logging out");
      authToken.RemoveToken();
      $state.go('login', {}, {reload: true});
      $rootScope.$broadcast("updateHeader", authToken.getToken());

    }

  ]);

//}());

