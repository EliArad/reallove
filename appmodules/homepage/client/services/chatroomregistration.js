'use strict';

app.factory('charoomRegistration', function ($cookieStore) {

    var chatroomMembers = [];

    function addChat(fromid, toid, fromidNickName) {
        var x = {
            fromid: fromid,
            toid: toid
        };

        var x1 = {
            fromid: fromid,
            toid: toid,
            fromidNickName: fromidNickName
        };

        chatroomMembers[x] = x1;
    }

    function removeChat(fromid, toid) {

        var x = {
            fromid: fromid,
            toid: toid
        };
        delete chatroomMembers[x];
    }

    function getChat(fromid, toid) {
        var x = {
            fromid: fromid,
            toid: toid
        };
        try {
            return chatroomMembers[x];
        } catch (err) {
            return undefined;
        }
    }

    return {
        addChat: addChat,
        removeChat: removeChat,
        getChat: getChat
    };

});