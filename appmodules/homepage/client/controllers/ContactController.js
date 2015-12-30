'use strict';



  app.controller('ContactController', ['$scope','$state', 'authToken','$http','myConfig',
                 'appCookieStore','myhttphelper','$timeout',
    function($scope,$state, authToken,$http,myConfig,appCookieStore,myhttphelper,$timeout) {


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

      $scope.ContactForm = {};
      $scope.showErrorMessage = false;

      $scope.updateText = function()
      {
        $scope.showErrorMessage = false;
      }

        $scope.submit = function(form)
        {
            var membersAPI = myConfig.url + "/api/commands/contactus/";

            var m = appCookieStore.get('lastContactusMessage');
            if (m == $scope.ContactForm.freetext)
            {
                $scope.errorMessage = "This message was already sent before";
                $scope.showErrorMessage = true;
                return;
            }

            $http.post(membersAPI, $scope.ContactForm).success(function(result) {
            $scope.changesuccess = true;

              appCookieStore.set('lastContactusMessage' , $scope.ContactForm.freetext);
              var cssUpdateTimer = $timeout(function () {
                $scope.changesuccess = false;
                $state.go('main', {}, {reload: true});
              }, 2800);
          }).error(function(result) {
              $scope.errorMessage = result;
              $scope.showErrorMessage = true;
          });
        };
     }
  ]);

