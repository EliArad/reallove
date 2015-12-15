'use strict';

app.controller('GlobalController', ['$scope', '$state', 'authToken', 'API', 'PassServiceParams',
                                    'appCookieStore', '$rootScope',
                                    'SessionStorageService', 'socketioservice', 'charoomRegistration',
  function ($scope, $state, authToken, API, PassServiceParams,
        appCookieStore, $rootScope, SessionStorageService, socketioservice, charoomRegistration) {


        var m_vm = this;
        var index = 0;
        $scope.size = 0;

        var busyForAMoment = false;

        socketioservice.setRequestForChatCallback(requestForChat);
        socketioservice.setAcceptChatCallback(acceptChat);

        function acceptChat(data) {

            //console.log(data);
            charoomRegistration.addChat(data.toid,
                data.fromid,
                'ddddddddd');

            $state.go('mychatplacesnotme', {}, {
                reload: false
            });
        }

        function requestForChat(data) {
            if (busyForAMoment == true) {
                return;
            }
            busyForAMoment = true;

            API.getuserinfoById(data.fromid, function (vm) {
                $rootScope.currentUserTotalPictures = vm.currentUserTotalPictures;
                $rootScope.currentUserAllPictures = vm.currentUserAllPictures;
                $rootScope.member = vm.currentMemberToShow.member;

                //console.log($scope.currentMemberToShow.member.nickName);
                document.getElementById('age').innerHTML = vm.currentMemberToShow.member.age;
                document.getElementById('nickName').innerHTML = vm.currentMemberToShow.member.nickName;
                document.getElementById('status').innerHTML = vm.currentMemberToShow.member.status;
                document.getElementById('numberofkids').innerHTML = vm.currentMemberToShow.member.numberofkids;

                if (vm.currentMemberToShow.member.gender == 'גבר')
                    document.getElementById('wantToSpeak').innerHTML = 'מעוניין לשוחח';
                else
                    document.getElementById('wantToSpeak').innerHTML = 'מעוניינת לשוחח איתך';

                document.getElementById('religion').innerHTML = vm.currentMemberToShow.member.religion;
                document.getElementById('city').innerHTML = vm.currentMemberToShow.member.city;
                document.getElementById('livingwith').innerHTML = vm.currentMemberToShow.member.livingwith;
                document.getElementById('jobtype').innerHTML = vm.currentMemberToShow.member.jobtype;

                document.getElementById('gym').innerHTML = vm.currentMemberToShow.member.gym;
                document.getElementById('walking').innerHTML = vm.currentMemberToShow.member.walking;
                document.getElementById('height').innerHTML = vm.currentMemberToShow.member.height;
                document.getElementById('everydayathom').innerHTML = vm.currentMemberToShow.member.everydayathom;
                document.getElementById('cosher').innerHTML = vm.currentMemberToShow.member.cosher;
                document.getElementById('zodiacsign').innerHTML = vm.currentMemberToShow.member.zodiacsign;
                document.getElementById('cooking').innerHTML = vm.currentMemberToShow.member.cooking;

                document.getElementById('imgsrc').src = vm.currentUserAllPictures[0];

                $('#myModalReauestChat').modal('show');
            });
        }

        $("#myModalReauestChat").on("hidden.bs.modal", function () {
            console.log("closing");
            busyForAMoment = false;
        });


        $scope.swiperight = function ($event) {
            //console.log("swiperight");
            $scope.next();
        };
        $scope.swipeleft = function ($event) {
            previous();
        };


        var previous = function () {
            if (index > 0)
                index = index - 1;
            else {
                index = $scope.currentUserTotalPictures - 1;
            }
            $rootScope.currentMemberToShow.src = m_vm.currentUserAllPictures[index];

        }

        $scope.next = function () {
            index = (index + 1) % $rootScope.currentUserTotalPictures;
            document.getElementById('imgsrc').src = $rootScope.currentUserAllPictures[index];
        }

        $scope.MoveToChatRoom = function () {
            $('#myModalReauestChat').modal('hide');
            var fromid = SessionStorageService.getSessionStorage('userid');
            API.UserAcceptMoveToChatRoom(fromid, $rootScope.member.registrationObjectId, function (err, nickName) {
                if (err == "ok") {
                    //console.log(nickName);
                    charoomRegistration.addChat(fromid,
                        $rootScope.member.registrationObjectId,
                        nickName);

                    busyForAMoment = false;
                    $state.go('mychatplacesme', {}, {
                        reload: false
                    });
                }
            });
        }
  }
]);