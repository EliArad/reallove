'use strict';


app.controller('LoginController', ['$scope', '$state', 'authToken', '$cookieStore',
                 '$http', '$rootScope', 'myhttphelper', 'PassServiceParams', 'socketioservice', 'SessionStorageService',
    function ($scope, $state, authToken, $cookieStore, $http, $rootScope,
        myhttphelper, PassServiceParams, socketioservice, SessionStorageService)
    {

        $scope.pageClass = 'page-home';

        $scope.loginfailure = false;

        $scope.vm = this;

        $scope.vm.login = login;

        $scope.vm.user = {
            password: "",
            email: ""
        };

        $scope.vm.clearError = function () {
            $scope.loginfailure = false;
        }

        //$scope.vm.user.email =$cookieStore.get('login_user_name');
        function login() {

            authToken.RemoveToken();

            myhttphelper.doPost('/api/login', $scope.vm.user).
            then(sendResponseData).
            catch(sendResponseError);

            function sendResponseData(response) {

                PassServiceParams.StoreParam('userNickName', response.member.nickName);
                //$cookieStore.put('login_user_name' , $scope.vm.user.email);
                //console.log(response.token);
                authToken.setToken(response.token);
                //console.log("login:" + response.user._id);
                SessionStorageService.setSessionStorage('userid', response.user._id);
                $rootScope.$broadcast("updateHeader", authToken.getToken());
                socketioservice.connect();
                var rule = response.rule;
                $rootScope.$broadcast("userrule", rule);

                console.log(response.member.needInitiaDetailsBase);
                console.log(response.member.needInitiaDetailsAll);
                SessionStorageService.setSessionStorage('needInitiaDetailsBase', response.member.needInitiaDetailsBase);
                SessionStorageService.setSessionStorage('needInitiaDetailsAll', response.member.needInitiaDetailsAll);

                if (response.member.needInitiaDetailsBase == true || response.member.needInitiaDetailsAll == true) {
                    $state.go('memberdetails', {}, {
                        reload: true
                    });
                } else {
                    $state.go('main', {}, {
                        reload: true
                    });
                }
            }

            function sendResponseError(response) {
                console.log("error in login " + response);
                $scope.loginfailure = true;
            }

        }
    }

  ]);
