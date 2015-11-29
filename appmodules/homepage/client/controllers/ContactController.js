'use strict';



  app.controller('ContactController', ['$scope','$state', 'authToken','$http','myConfig', 'appCookieStore','myhttphelper',
    function($scope,$state, authToken,$http,myConfig,appCookieStore,myhttphelper) {


      $scope.pageClass = 'page-contact';

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
            $state.go('main', {}, {reload: true});
            appCookieStore.set('lastContactusMessage' , $scope.ContactForm.freetext);

          }).error(function(result) {
              $scope.errorMessage = result;
              $scope.showErrorMessage = true;
          });
        }
     }
  ]);

