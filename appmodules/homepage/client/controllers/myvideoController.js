'use strict';

app.controller('myvideoController', ['$scope','$state', 'authToken','myhttphelper',
               '$sce','fileReader','$window','video','API','SessionStorageService',
  function($scope,$state, authToken,myhttphelper,$sce,fileReader,$window,video,API,SessionStorageService)
  {
    var vm = this;
    $scope.pageClass = 'page-home';

    $scope.showVideo = true;
    vm.showwaitcircle = false;


    vm.API = null;
    vm.currentTime = 0;
    vm.totalTime = 0;
    vm.state = null;
    vm.volume = 1;
    vm.isCompleted = false;
    vm.seeking = {
      currentTime: 0,
      duration: 0
    };
    vm.seeked = {
      currentTime: 0,
      duration: 0
    };

    $scope.videooption1 = true;
    $scope.savevideooptions1 = function()
    {
       API.saveVideoOption(1).then(function (result) {

       }).catch(function (result) {

       });
    }
    $scope.savevideooptions2 = function()
    {
        API.saveVideoOption(2).then(function (result) {

        }).catch(function (result) {

        });
    }
    $scope.savevideooptions3 = function()
    {
        API.saveVideoOption(3).then(function (result) {

        }).catch(function (result) {

        });
    }

    API.getVideoOption().then(function(value){

      switch (value.data)
      {
        case '1':
          $scope.videooption1 = true;
          $scope.videooption2 = false;
          $scope.videooption3 = false;
         break;
        case '2':
          $scope.videooption1 = false;
          $scope.videooption2 = true;
          $scope.videooption3 = false;
          break;
        case '3':
          $scope.videooption1 = false;
          $scope.videooption2 = false;
          $scope.videooption3 = true;
          break;
      }
    }).catch(function(value){

    });


    document.getElementById("videodiv").style.width = ($window.innerWidth - 500)+ 'px';
    document.getElementById("videodiv").style.height = ($window.innerHeight - 200) + 'px';

    vm.myStyle = {
      "max-width" : $window.innerWidth,
      "width" : $window.innerWidth,
      "max-height" : $window.innerHeight - 100,
      "height" : $window.innerHeight - 100
    };

    vm.onPlayerReady = function (API) {
      vm.API = API;
      playCurrentOnDisk(1);
    };

    vm.onError = function (event) {
      console.log("VIDEOGULAR ERROR EVENT");
      console.log(event);
    };

    vm.onCompleteVideo = function () {
      vm.isCompleted = true;
    };

    vm.onUpdateState = function (state) {
      vm.state = state;
    };

    vm.onUpdateTime = function (currentTime, totalTime) {
      vm.currentTime = currentTime;
      vm.totalTime = totalTime;
    };

    vm.onSeeking = function (currentTime, duration) {
      vm.seeking.currentTime = currentTime;
      vm.seeking.duration = duration;
    };

    vm.onSeeked = function (currentTime, duration) {
      vm.seeked.currentTime = currentTime;
      vm.seeked.duration = duration;
    };

    vm.onUpdateVolume = function (newVol) {
      vm.volume = newVol;
    };


    vm.onUpdatePlayback = function (newSpeed) {
      vm.API.playback = newSpeed;
    };

    function playCurrentOnDisk(userId)
    {
      var uid = SessionStorageService.getSessionStorage('userid');
      var fileName = "./uploadvideo/" + uid + '/raw/1.mp4';
      vm.videosource = fileName;

      vm.config = {
        sources: [
          {src: $sce.trustAsResourceUrl(fileName), type: "video/mp4"}
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
          //poster: "http://www.videogular.com/assets/images/videogular.png"
        }
      };

      vm.config.tracks = undefined;
      vm.config.loop = false;
     // vm.config.preload = true;
    }

    var uid = SessionStorageService.getSessionStorage('userid');
    var fileName = "./uploadvideo/" + uid + '/raw/1.mp4';



    $scope.$on('$destroy', function() {
      //$scope.API.videoElement[0].src = '';
      //vm.API.videoElement[0].src = '';
      vm.API.clearMedia();
    });

    vm.deleteVideo = function()
    {
        API.deleteVideo().then(function(result){

        }).catch(function(result){

        });
    }

    vm.playVideo = function(e)
    {

      vm.API.play();

      var uid = SessionStorageService.getSessionStorage('userid');

      var fileName = "./uploadvideo/" + uid + '/raw/1.mp4';
      vm.videosource = fileName;

    }
    vm.stopVideo = function()
    {
      vm.API.stop();
    }

    vm.changeSource = function (result) {
      vm.config = {
        sources: [
          {src: $sce.trustAsResourceUrl(result), type: "video/mp4"}
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
          //poster: "http://www.videogular.com/assets/images/videogular.png"
        }
      };

      vm.config.tracks = undefined;
      vm.config.loop = false;
      vm.config.preload = true;
    };


    $scope.fileNameChanged1 = function() {

      var fileInputElement = document.getElementById("fileInputElement1");
      var size = fileInputElement.files[0].size / (1024 * 1024);
      if (size > 50)
      {
        alert ('מקסימום גודל קובץ להעלות הוא 50 מגה');
        return;
      }
      vm.showwaitcircle = true;
      $scope.uploadFile1(fileInputElement.files[0]);
    }

    $scope.uploadFile1 = function (fileName, index) {
      $scope.progress = 0;
      fileReader.readAsDataUrl(fileName, $scope)
        .then(function(result) {
          vm.changeSource(result);
          ajaxUpload(result,1);
        });
    };

    var ajaxUpload = function(result , number)
    {
      var data = {

        "images": result,
        "filenum": number,
        "token" : authToken.getToken()
      }

      myhttphelper.doPost('/api/uploadvideo' , data).
        then(successUpload).
        catch(errorUpload);
    }

    function successUpload(response)
    {
        vm.showwaitcircle = false;
        //console.log(response);
    }
    function errorUpload(response)
    {
      vm.showwaitcircle = false;
      alert (response);
    }

    myhttphelper.doGet('/isauth').
      then(sendResponseData1).
      catch(sendResponseError1);

    function sendResponseData1(response)
    {
      if (response != "OK")
      {
        $state.go('login', {}, {reload: true});
      }
    }
    function sendResponseError1(response)
    {
      $state.go('login', {}, {reload: true});
    }
  }

]);

