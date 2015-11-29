'use strict';

  app.controller('HelpController', ['$scope','$state', 'authToken','myhttphelper',
      function($scope,$state, authToken,myhttphelper)
      {

        $scope.pageClass = 'page-home';

        myhttphelper.doGet('/isauth').
          then(sendResponseData1).
          catch(sendResponseError1);


        function sendResponseData1(response)
        {
          if (response != "OK")
          {
            $state.go('login', {}, {reload: true});
          }
        }
        function sendResponseError1(response)
        {
          $state.go('login', {}, {reload: true});
        }

      }

  ]);


