'use strict';

app.controller('myvideoController', ['$scope','$state', 'authToken','myhttphelper','$sce','fileReader','$window','video',
  function($scope,$state, authToken,myhttphelper,$sce,fileReader,$window,video)
  {
    var vm = this;
    $scope.pageClass = 'page-home';

    $scope.showVideo = true;


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
      var fileName = "./uploadvideo/" + '5654210ebf01f0e2787525c7' + '/raw/1.mp4';
      vm.videosource

      vm.config = {
        sources: [
          {src: $sce.trustAsResourceUrl(fileName), type: "video/mp4"}
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
          poster: "http://www.videogular.com/assets/images/videogular.png"
        }
      };

      vm.config.tracks = undefined;
      vm.config.loop = false;
     // vm.config.preload = true;
    }

    var fileName = "./uploadvideo/" + '5654210ebf01f0e2787525c7' + '/raw/1.mp4';
    //video.addSource('mp4', fileName);


    $scope.$on('$destroy', function() {
      //$scope.API.videoElement[0].src = '';
      //vm.API.videoElement[0].src = '';
      vm.API.clearMedia();
    });


    vm.playVideo = function(e)
    {

      vm.API.play();
      var fileName = "./uploadvideo/" + '5654210ebf01f0e2787525c7' + '/raw/1.mp4';
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
          poster: "http://www.videogular.com/assets/images/videogular.png"
        }
      };

      vm.config.tracks = undefined;
      vm.config.loop = false;
      vm.config.preload = true;
    };


    $scope.fileNameChanged1 = function() {

      var fileInputElement = document.getElementById("fileInputElement1");
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

      console.log(result);
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
        console.log(response);
    }
    function errorUpload(response)
    {
      console.log(response);
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

