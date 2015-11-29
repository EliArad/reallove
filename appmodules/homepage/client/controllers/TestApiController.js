'use strict';

//(function() {


app.controller('TestApiController', ['$scope', 'Registration', 'general','myhttphelper',
    function($scope, Registration,general,myhttphelper) {



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

      $scope.testSendEmail = function()
      {
        var mailParams = {
          to: "easp13@gmail.com"
        };
        general.sendMail(mailParams).
          then(sendResponseData).
          catch(sendResponseError);
      }

      function sendResponseData(response)
      {
           alert(response);

      }
      function sendResponseError(response)
      {
        alert(response);
      }

      $scope.firstName = "eeeee";
    }

]);


//}());
