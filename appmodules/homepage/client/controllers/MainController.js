'use strict';


app.controller('MainController', ['$scope','$state','authToken','myhttphelper',
    function($scope,$state,authToken,myhttphelper)
    {

      $scope.pageClass = 'page-home';

      myhttphelper.doGet('/isauth').
        then(sendResponseData).
        catch(sendResponseError);


      function sendResponseData(response)
      {
        if (response != "OK")
        {
            $state.go('login', {}, {reload: true});
        }
      }
      function sendResponseError(response)
      {
        $state.go('login', {}, {reload: true});
      }

    }

  ]);
