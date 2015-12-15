'use strict';


app.controller('HeaderController', ['$scope', '$state', 'authToken', 'API', 'PassServiceParams', 'appCookieStore',
    function ($scope, $state, authToken, API, PassServiceParams, appCookieStore)
    {
        $scope.isAuthenticated = authToken.isAuthenticated();

        API.getNickName().then(function (result) {
            $scope.hellousername = ' שלום  ' + result;
            $scope.userName = ' שלום  ' + result;
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