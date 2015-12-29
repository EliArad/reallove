"use strict";
app.factory("mypage", function($http,myConfig) {

  function add(data) {
    var membersAPI = myConfig.url + "/api/mypage/add";
    return $http.post(membersAPI, {'data':data});
  }

  function getmine() {
    var membersAPI = myConfig.url + "/api/mypage/getmine";
    return $http.get(membersAPI);
  }

  return {
    add:add,
    getmine:getmine
  };
});
