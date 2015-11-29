'use strict';


app.controller('deletecardController', ['$scope','$state','authToken','myhttphelper',
    function($scope,$state,authToken,myhttphelper)
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


      myhttphelper.doGet('/api/getcaptch').
        then(sendResponseData).
        catch(sendResponseError);

      function sendResponseData(response)
      {
          $scope.captchcode = response.value;
      }
      function sendResponseError(response)
      {
        console.log(response);
      }

      $scope.submit = function(isValid)
      {

        myhttphelper.doPost('/api/deletepospondcard', {capdata : $scope.capdata}).
          then(sendResponseData1).
          catch(sendResponseError1);

        function sendResponseData1(response)
        {
          authToken.RemoveToken();
          console.log(response);
          $state.go('login', {}, {reload: true});
        }
        function sendResponseError1(response)
        {
          authToken.RemoveToken();
          console.log(response);
          $state.go('login', {}, {reload: true});
        }



      }
    }

  ]);
