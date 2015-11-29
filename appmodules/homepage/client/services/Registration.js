'use strict';

//Articles service used for articles REST endpoint
app.factory('Registration', ['$resource',
  function($resource) {
    return $resource('api/register/:registerId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
