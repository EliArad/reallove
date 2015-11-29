'use strict';

//(function() {


  app.controller('HeaderController', ['$scope','$state', 'authToken',
    function($scope,$state, authToken)
    {
        $scope.isAuthenticated = authToken.isAuthenticated();


      //header ctrl
      $scope.$on("updateHeader", function(e, someInfoReceived){
        // do the necessary updates here
        $scope.isAuthenticated = authToken.isAuthenticated();
      });
    }



  ]);

//}());
