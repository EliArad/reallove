'use strict';

//Articles service used for articles REST endpoint
app.factory('Members', ['$resource',
  function($resource) {
    return $resource('api/members/:memberId', {
      memberId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
