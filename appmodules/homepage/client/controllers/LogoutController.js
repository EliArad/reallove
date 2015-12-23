'use strict';

//(function() {


app.controller('LogoutController', ['$scope', '$state', 'authToken', '$rootScope', 'socketioservice', 'API',
    function ($scope, $state, authToken, $rootScope, socketioservice, API)
    {

        API.Logout();

        socketioservice.disconnect(function(err) {
            authToken.RemoveToken();
            $state.go('login', {}, {
                reload: true
            });
            $rootScope.$broadcast("updateHeader", authToken.getToken());
        });


    }
  ]);

//}());
