app.service('fileUpload', ['$http', function ($http)
{

  this.post = function(file, uploadUrl){
    var fd = new FormData();
    fd.append('file', file);
    $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
    })
      .success(function(){
      })
      .error(function(){
      });
  }
}]);
