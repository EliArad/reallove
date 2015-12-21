'use strict';


app.controller('HeaderController', ['$scope', '$state', 'authToken', 'API',
                                    'PassServiceParams', 'appCookieStore','socketioservice',
    function ($scope, $state, authToken, API, PassServiceParams, appCookieStore,socketioservice)
    {
      $scope.NumberOfOnlineUsers = '';
        $scope.isAuthenticated = authToken.isAuthenticated();

        API.getNickName().then(function (result) {
            $scope.hellousername = ' שלום  ' + result;
            $scope.userName = ' שלום  ' + result;
        });

      $scope.$on("logoutnow", function (e, someInfoReceived) {

          API.Logout();

          socketioservice.disconnect().success(function (id) {
            authToken.RemoveToken();
            $state.go('login', {}, {
              reload: true
            });

            $scope.isAuthenticated = false;
            $scope.hellousername = '';
          });
      });



      API.GetNumberUsersOnline(function (err , result){

        if (err == "ok") {
          var n = parseInt(result);
          if (n > 0) {
            $scope.showOnline = true;
            $scope.NumberOfOnlineUsers ='אונליין: '  + n;
          } else {
            $scope.showOnline = false;
          }
        } else {
          $scope.showOnline = false;
        }
      });

        //ui-sref="partyDetail()"
        $scope.partyDetail = function () {
            try {
                var r = appCookieStore.get('mainview');
                switch (r) {
                case 'gallery':
                    $state.go('galleryall', {}, {
                        reload: true
                    });
                    break;
                case 'bigcardsview':
                    $state.go('fullpagecardlist', {}, {
                        reload: true
                    });
                    break;
                case 'smallcardsview':
                    $state.go('main', {}, {
                        reload: true
                    });
                    break;
                }
            } catch (err) {

            }
        }

      $scope.$on("onlinecount", function (e, someInfoReceived) {

        //console.log('onlinecount from header controller ' + someInfoReceived);
        if (someInfoReceived > 0) {
          $scope.showOnline = true;
          $scope.NumberOfOnlineUsers = 'Online:' + someInfoReceived;
        } else {
          $scope.showOnline = false;
        }
        $scope.$digest();
      });

      $scope.$on("userrule", function (e, rule) {
          if (rule == 1) {
             $scope.isAdmin = true;
          } else {
            $scope.isAdmin = false;
          }
      });

        $scope.$on("updateHeader", function (e, someInfoReceived) {
            // do the necessary updates here
            $scope.isAuthenticated = authToken.isAuthenticated();


            $scope.hellousername = ' שלום  ' + PassServiceParams.GetParam('userNickName');


            API.getNumberOfMails().then(function (result) {
                //console.log(result);
                var numunreadmail = 0;
                result.forEach(function (entry) {
                    //console.log(entry);
                    if (entry.read == 0)
                        numunreadmail++;
                });
                if (numunreadmail > 0)
                    $scope.yougotmail = true;
                else
                    $scope.yougotmail = false;
                $scope.numberofmails = numunreadmail;
            }).catch(function (result) {
                //console.log(result);
                $scope.yougotmail = false;
            });
        });


        $scope.hellousername = PassServiceParams.GetParam('userNickName');


        API.getNumberOfMails().then(function (result) {
            console.log(result);
            var numunreadmail = 0;
            result.forEach(function (entry) {
                //console.log(entry);
                if (entry.read == 0)
                    numunreadmail++;
            });
            if (numunreadmail > 0)
                $scope.yougotmail = true;
            else
                $scope.yougotmail = false;
            $scope.numberofmails = numunreadmail;
        }).catch(function (result) {
            console.log(result);
            $scope.yougotmail = false;
        });


    }
  ]);
