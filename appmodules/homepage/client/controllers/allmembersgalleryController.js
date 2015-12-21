'use strict';

app.controller('allmembersgalleryController', ['$scope', '$state', 'authToken', '$window',
               'myhttphelper', 'dbsearch', 'myConfig', '$http', '$timeout', 'myutils',
               'appCookieStore', 'socketioservice', 'Idle', '$rootScope', 'SessionStorageService',
  function ($scope, $state, authToken, $window, myhttphelper, dbsearch,
            myConfig, $http, $timeout, myutils, appCookieStore, socketioservice,
            Idle, $rootScope, SessionStorageService)
        {

            var vm = this;
            vm.currentSentMessage = {};
            var cssUpdateTimer;
            var cssUpdateTimer1;
            $scope.allmembersthumb = [];
            vm.currentUserTotalPictures = 0;
            vm.currentUserAllPictures = [];
            var index = 0;
            var index1 = 0;
            vm.skipSize = 0;
            $scope.isOnline = false;

            $scope.$on('IdleStart', function () {
                // the user appears to have gone idle
                console.log('IdleStart');
                socketioservice.disconnect();
            });

            $scope.$on('IdleTimeout', function () {
                // the user has timed out (meaning idleDuration + timeout has passed without any activity)
                // this is where you'd log them
                //console.log('IdleTimeout');
                //console.log("logging out");
                socketioservice.disconnect().success(function (id) {

                    authToken.RemoveToken();
                    $state.go('login', {}, {
                        reload: true
                    });
                    $rootScope.$broadcast("updateHeader", authToken.getToken());
                    return;
                });

            });

            $scope.$on('IdleEnd', function () {
                // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
                console.log('IdleEnd');
                socketioservice.connect();
            });



            socketioservice.setCallback(connectionCallback);

            appCookieStore.set('mainview', 'gallery');

            myhttphelper.doGet('/isauth').
            then(sendResponseData1).
            catch(sendResponseError1);

            function sendResponseData1(response) {
                if (response != "OK") {
                    $state.go('login', {}, {
                        reload: true
                    });
                } else {
                    var n1 = SessionStorageService.getSessionStorage('needInitiaDetailsBase');
                    var n2 = SessionStorageService.getSessionStorage('needInitiaDetailsAll');

                    if (n1 == 'true' || n2 == 'true') {
                        $state.go('memberdetails', {}, {
                            reload: true
                        });
                    }
                }
            }

            function sendResponseError1(response) {
                $state.go('login', {}, {
                    reload: true
                });
            }

            function connectionCallback(status, id) {

                $scope.isOnline = socketioservice.isUserOnline(id);
                console.log('connectionCallback ' + $scope.isOnline);
                $scope.$digest();
            }


            dbsearch.setCriteria("none");
            dbsearch.getFirstNUserIds(100).
            then(UsersOk).
            catch(UsersError);


            function UsersOk(result) {

                var totalPictures = result.length;
                vm.skipSize = 100;
                for (var i = 0; i < result.length; i++) {
                    var picName = '/uploads/' + result[i].rid.toString() + '/raw/' + 100 + '.jpg';
                    var x = {
                        src: picName,
                        id: result[i].id,
                        rid: result[i].rid
                    }
                    $scope.allmembersthumb.push(x);
                }
            }

            function UsersError(result) {

            }

            $scope.lions = false;
            $scope.allthumberspictures = true;
            $scope.currentMemberToShow = {};

            $(function (j) {
                j("#cLeft").text("אותיות נשארו: 320");
                j(document).on('keypress', '#new_message', function () {
                    if (this.value.length > 500) {
                        return false;
                    }
                    j("#cLeft").text("אותיות נשארו: " + (320 - this.value.length));
                });
            });

            $scope.ClosePopup = function () {
                $scope.lions = false;
                $scope.allthumberspictures = true;
            }


            $scope.ShowMember = function (id, rid) {

                console.log(rid);
                $scope.isOnline = socketioservice.isUserOnline(rid);
                console.log($scope.isOnline);

                var membersAPI = myConfig.url + "/api/getuserinfoById";
                $http.post(membersAPI, {
                    'UserId': rid
                }).success(function (result) {
                    vm.userImageList = result.list;
                    vm.currentUserAllPictures = [];
                    var j = 0;
                    for (var i = 1; i < 16; i++) {
                        if (vm.userImageList[j] == true) {
                            vm.currentUserAllPictures.push('/uploads/' + rid.toString() + '/raw/' + i + '.jpg');
                        }
                        j++;
                    }
                    vm.currentUserTotalPictures = vm.currentUserAllPictures.length;
                    $scope.currentMemberToShow.src = vm.currentUserAllPictures[0];
                    if (vm.userImageList[1] == true) {
                        $scope.currentMemberToShow.src1 = vm.currentUserAllPictures[1];
                        index1 = 1;
                    } else {
                        $scope.currentMemberToShow.src1 = vm.currentUserAllPictures[0];
                    }
                    $scope.currentMemberToShow.id = id;
                    $scope.currentMemberToShow.rid = rid;
                    $scope.currentMemberToShow.member = result.member;
                    $scope.currentMemberToShow.member.age = myutils.getAge($scope.currentMemberToShow.member);
                    $scope.allthumberspictures = false;
                    $scope.lions = true;

                }).error(function (result) {
                    console.log(result);
                });
            }

            $scope.swiperight = function ($event) {
                console.log("swiperight");
                $scope.next();
            };
            $scope.swipeleft = function ($event) {
                previous();
            };

            $scope.notifyServiceOnChage = function () {
                console.log($scope.windowHeight);
            };

            var previous = function () {
                if (index > 0)
                    index = index - 1;
                else {
                    index = vm.currentUserTotalPictures - 1;
                }
                $scope.currentMemberToShow.src = vm.currentUserAllPictures[index];


                if (index1 > 0)
                    index1 = index1 - 1;
                else {
                    index1 = vm.currentUserTotalPictures - 1;
                }
                $scope.currentMemberToShow.src1 = vm.currentUserAllPictures[index1];

            }

            $scope.myStyle = {
                //"max-height": Math.min($window.innerHeight - 100, 700)
                "max-height": $window.innerHeight - 200
            };


            $scope.next = function () {
                //console.log('vm.currentUserTotalPictures %d', index);
                index = (index + 1) % vm.currentUserTotalPictures;
                $scope.currentMemberToShow.src = vm.currentUserAllPictures[index];

                index1 = (index1 + 1) % vm.currentUserTotalPictures;
                $scope.currentMemberToShow.src1 = vm.currentUserAllPictures[index1];
            }

            $scope.submit = function (isValid) {
                if (!isValid) {
                    console.log("not valid");
                } else {
                    if (vm.currentSentMessage.id == $scope.currentMemberToShow.id &&
                        vm.currentSentMessage.messagebody == $scope.messagebody) {


                        if (cssUpdateTimer1 != null)
                            $timeout.cancel(cssUpdateTimer1);

                        $scope.showMessageSendFailure = true;
                        document.getElementById('sendButton').innerHTML = 'לא נשלח';
                        document.getElementById('sendButton').style.color = 'red';
                        cssUpdateTimer1 = $timeout(function () {
                            $scope.showMessageSendFailure = false;
                            document.getElementById('sendButton').style.color = 'white';
                            document.getElementById('sendButton').innerHTML = 'שלח הודעה';
                        }, 1000)
                        return;
                    }

                    //console.log($scope.messagebody +  " to send to: " + $scope.currentMemberToShow.id);
                    var data = {
                        mb: $scope.messagebody,
                        title: $scope.title,
                        toid: $scope.currentMemberToShow.rid
                    }
                    myhttphelper.doApiPost('sendMessageToMember', data).then(function (response) {

                        if (cssUpdateTimer != null)
                            $timeout.cancel(cssUpdateTimer);

                        $scope.showMessageSendOk = true;
                        vm.currentSentMessage.id = $scope.currentMemberToShow.id;
                        vm.currentSentMessage.messagebody = $scope.messagebody;

                        document.getElementById('sendButton').style.color = 'lightgreen';
                        document.getElementById('sendButton').innerHTML = 'הודעה נשלחה';

                        cssUpdateTimer = $timeout(function () {
                            $scope.showMessageSendOk = false;
                            document.getElementById('sendButton').innerHTML = 'שלח הודעה';
                            document.getElementById('sendButton').style.color = 'white';
                        }, 1000);

                    }).catch(function (response) {
                        $scope.showMessageSendFailure = true;
                        document.getElementById('sendButton').style.color = 'lightred';
                        document.getElementById('sendButton').innerHTML = 'לא נשלח';
                    });
                }
            }


            $(window).scroll(function () {
                if ($scope.allthumberspictures == false) {
                    return;
                }
                if ($(window).scrollTop() + $(window).height() == $(document).height()) {

                    dbsearch.getNextNUserIds(100, vm.skipSize).then(function (result) {
                        //console.log("Get next: " + result);
                        var totalPictures = result.length;
                        if (totalPictures == 0) {
                            console.log("no more to present");
                            return;
                        }
                        vm.skipSize += 100;

                        for (var i = 0; i < result.length; i++) {
                            var picName = '/uploads/' + result[i].rid.toString() + '/raw/' + 100 + '.jpg';
                            var x = {
                                src: picName,
                                id: result[i].id,
                                rid: result[i].rid
                            }
                            $scope.allmembersthumb.push(x);
                            //$scope.$apply();
                        }
                    }).catch(function (result) {

                    });
                }
            });
  }
]).config(function (IdleProvider, KeepaliveProvider, myConfig) {
        // configure Idle settings
        IdleProvider.idle(myConfig.idletimeSeconds); // in seconds
        IdleProvider.timeout(myConfig.timeoutSeconds); // in seconds
        KeepaliveProvider.interval(2); // in seconds
    })
    .run(function (Idle) {
        // start watching when the app runs. also starts the Keepalive service by default.
        Idle.watch();
    });
