'use strict';

app.controller('mychatplaceControllerNotMe', ['$scope', '$state', 'authToken', 'socketioservice',
                                         'SessionStorageService', 'charoomRegistration',
                                              '$window', '$location', '$anchorScroll', 'API',
  function ($scope, $state, authToken, socketioservice,
        SessionStorageService, charoomRegistration, $window,
        $location, $anchorScroll, API)
    {


        $scope.title = "אתה משוחח עם";

        $scope.messages = [];

        socketioservice.RegisterIncomingMessage(incomingMessage);

        $scope.curChat = charoomRegistration.getChat();
        if ($scope.curChat == undefined) {
            $scope.curChat = {};
        }
        try {
            $scope.title += ' ' + curChat.fromidNickName;
        } catch (e) {

        }

        $scope.onExit = function () {
            $scope.curChat = charoomRegistration.getChat();
            if ($scope.curChat.fromid == '')
                return 'ee';
            if ($scope.curChat.fromid == null)
                return "null";
            var tosave = {
                title: $scope.title,
                username: $scope.username,
                fromid: $scope.curChat.fromid,
                toid: $scope.curChat.toid
            }
            var s = JSON.stringify(tosave);
            SessionStorageService.setSessionStorage('chatplacemenotme', s);
            return;
        };

        $window.onbeforeunload = $scope.onExit;


        var g = SessionStorageService.getSessionStorage('chatplacemenotme');

        if (g != undefined) {
            var fromSave = JSON.parse(g);
            $scope.curChat.fromid = fromSave.fromid;
            $scope.curChat.toid = fromSave.toid;
            $scope.title = fromSave.title;
            $scope.username = fromSave.username;
        }


        SessionStorageService.setSessionStorage('incall', $scope.curChat.fromid);
        API.IamInCall(true, $scope.curChat.fromid);

        function incomingMessage(fromid, message) {

            var picName = '/uploads/' + fromid + '/raw/' + 0 + '.jpg';

            $scope.messages.push({
                'username': ' ',
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
                    $scope.curChat.toid,
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
