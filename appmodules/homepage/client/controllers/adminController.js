'use strict';

app.controller('adminController', ['$scope', '$state', 'authToken','admin',
  function ($scope, $state, authToken,admin)
  {

      $scope.logoutAllUsers = function()
      {
          admin.logoutAllUsers();
      }
  }

]);
