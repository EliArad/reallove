'use strict';


  app.controller('HeaderController', ['$scope','$state', 'authToken','API',
    function($scope,$state, authToken,API)
    {
      $scope.isAuthenticated = authToken.isAuthenticated();

      $scope.$on("updateHeader", function(e, someInfoReceived){
        // do the necessary updates here
        $scope.isAuthenticated = authToken.isAuthenticated();


        API.getNumberOfMails().then(function(result){
          console.log(result);
          var numunreadmail = 0;
          result.forEach(function(entry) {
            //console.log(entry);
            if (entry.read == 0)
              numunreadmail++;
          });
          if (numunreadmail > 0)
            $scope.yougotmail = true;
          else
            $scope.yougotmail = false;
          $scope.numberofmails = numunreadmail;
        }).catch(function(result)  {
          console.log(result);
          $scope.yougotmail = false;
        });


      });




      API.getNumberOfMails().then(function(result){
        console.log(result);
        var numunreadmail = 0;
        result.forEach(function(entry) {
          //console.log(entry);
          if (entry.read == 0)
            numunreadmail++;
        });
        if (numunreadmail > 0)
          $scope.yougotmail = true;
        else
          $scope.yougotmail = false;
        $scope.numberofmails = numunreadmail;
      }).catch(function(result)  {
        console.log(result);
        $scope.yougotmail = false;
      });


    }
  ]);


