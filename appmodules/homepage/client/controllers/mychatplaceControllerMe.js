'use strict';

app.controller('mychatplaceControllerMe', ['$scope', '$state', 'authToken', 'socketioservice',
                                         'SessionStorageService', 'charoomRegistration', '$window', 'API',
  function ($scope, $state, authToken, socketioservice,
        SessionStorageService, charoomRegistration, $window, API)
    {


        $scope.title = "אתה משוחח עם";

        $scope.messages = [];


        socketioservice.RegisterIncomingMessage(incomingMessage);

        var curChat = charoomRegistration.getChat();
        if (curChat == undefined) {
            curChat = {};
        }
        try {
            $scope.title += ' ' + curChat.fromidNickName;
        } catch (e) {

        }

        $scope.onExit = function () {
            var tosave = {
                title: $scope.title,
                username: $scope.username,
                fromid: curChat.fromid,
                toid: curChat.toid
            }
            var s = JSON.stringify(tosave);
            SessionStorageService.setSessionStorage('chatplaceme', s);

            API.IamInCall(false, curChat.fromid);
            return;
        };

        $window.onbeforeunload = $scope.onExit;


        $scope.$on("$destroy", function () {
            API.IamInCall(false, curChat.fromid);
        });


        var g = SessionStorageService.getSessionStorage('chatplaceme');
        if (g != undefined) {
            var fromSave = JSON.parse(g);
            curChat.fromid = fromSave.fromid;
            curChat.toid = fromSave.toid;
            $scope.title = fromSave.title;
            $scope.username = fromSave.username;
        }

        API.IamInCall(true, curChat.fromid);


        function incomingMessage(fromid, message) {

            var picName = '/uploads/' + fromid + '/raw/' + 0 + '.jpg';

            $scope.messages.push({
                'username': 'him',
                'imageUrl': picName,
                'content': message
            });
        }

        $scope.username = ' ';



        $scope.sendMessage = function (message, username) {
            if (message && message !== '' && username) {
                var fromid = SessionStorageService.getSessionStorage('userid');
                var picName = '/uploads/' + fromid + '/raw/' + 0 + '.jpg';


                socketioservice.sendMessage(fromid,
                    curChat.toid,
                    message);

                $scope.messages.push({
                    'username': username,
                    'imageUrl': picName,
                    'content': message
                });


            }
        };
        $scope.visible = true;
        $scope.expandOnNew = false;

  }

]);
