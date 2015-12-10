'use strict';


  app.controller('LoginController', ['$scope','$state', 'authToken', '$cookieStore',
                 '$http','$rootScope', 'myhttphelper','PassServiceParams','socketioservice','SessionStorageService',
    function($scope,$state, authToken,$cookieStore,$http,$rootScope,
             myhttphelper,PassServiceParams,socketioservice,SessionStorageService)
    {

      $scope.pageClass = 'page-home';

      $scope.loginfailure = false;

      $scope.vm = this;

      $scope.vm.login  = login;

      $scope.vm.user = {
        password: "",
        email: ""
      };
      //$scope.vm.user.email =$cookieStore.get('login_user_name');
      function login () {

        authToken.RemoveToken();

        myhttphelper.doPost('/login' , $scope.vm.user).
            then(sendResponseData).
            catch(sendResponseError);

        function sendResponseData(response)
        {
          PassServiceParams.StoreParam('userNickName' , response.member.nickName);
          //$cookieStore.put('login_user_name' , $scope.vm.user.email);
          authToken.setToken(response.token);
          //console.log("login:" + response.user._id);
          SessionStorageService.setSessionStorage('userid', response.user._id);
          $rootScope.$broadcast("updateHeader", authToken.getToken());

          socketioservice.connect();

          if (response.member.needInitiaDetails == true)
          {
            $state.go('newmember', {}, {reload: true});
          } else {
            $state.go('main', {}, {reload: true});
          }
        }
        function sendResponseError(response)
        {
            console.log("error in login " + response);
            $scope.loginfailure = true;
        }

      }
    }

  ]);



