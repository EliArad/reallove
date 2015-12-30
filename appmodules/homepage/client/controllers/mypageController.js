'use strict';

app.controller('mypageController', ['$scope', '$state', 'authToken', 'mypage', 'fileReader', 'myhttphelper', 'SessionStorageService',
  function ($scope, $state, authToken, mypage, fileReader, myhttphelper, SessionStorageService) {

    var minWidth = 640;
    var minHeight = 480;
    var msg1 = 'התמונות צריכות להיות בגודל של ' + minWidth + 'x' + minHeight + ' לפחות';

    $scope.content =
      [
        //{"content_type" : "image", "title" : "Image 00", "data" : "temp-photo.jpg"},
        //{"content_type" : "video", "title" : "Video 00", "data" : "http://player.vimeo.com/video/37176398"},
        //{"content_type" : "input", "title" : "Notes 00", "data" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}

      ];

    mypage.getmine().then(function (results) {

      $scope.content = [];
      for (var i = 0; i < results.data.length; i++) {

        var dir = './mypage/' + SessionStorageService.getSessionStorage('userid') + '/' + results.data[i].data.filename;
        var x = {
          "dated": results.data[i].dated,
          "content_type": results.data[i].data.content_type,
          "title": results.data[i].data.title,
          "data": results.data[i].data.data,
          "filename": dir

        }
        $scope.content.unshift(x);
      }
    });


    var ajaxUpload = function (result, filename) {

      var t = moment().format('MMMM Do YYYY, h:mm:ss a');
      var data =
      {
        "content_type": "image",
        "title": "",
        "data": result,
        "dated": t,
        "filename": filename
      };

      myhttphelper.doPost('/api/mypage/uploadpicture', data).
        then(successUpload).
        catch(errorUpload);

    }

    var ajaxUploadVideo = function (result, filename) {

      var t = moment().format('MMMM Do YYYY, h:mm:ss a');
      var data =
      {
        "content_type": "video",
        "title": "",
        "data": result,
        "dated": t,
        "filename": filename
      };


      myhttphelper.doPost('/api/mypage/uploadvideo', data).
        then(successUpload).
        catch(errorUpload);

    }

    function successUpload(response) {

    }

    function errorUpload(response) {

    }

    $('#file').change(function () {
      readImgUrlAndPreview(this);
      function readImgUrlAndPreview(input) {
        if (input.files && input.files[0]) {

          fileReader.readAsDataUrl(input.files[0], $scope)
            .then(function (result) {
              var i = new Image();
              i.onload = function () {

                if (i.width < minWidth || i.height < minHeight) {
                  var msg = msg1;
                  msg += '\n';
                  msg += 'התמונה היא בגודל ' + i.width + 'x' + i.height;
                  alert(msg);
                  return;
                }

                //$('#imagePreview').attr('src', e.target.result);
                var t = moment().format('MMMM Do YYYY, h:mm:ss a');
                var x = {
                  "content_type": "image",
                  "title": t,
                  "filename": result,
                  "dated": t
                };
                $scope.content.unshift(x);
                ajaxUpload(result, input.files[0].name);
              };
              i.src = result;
            });
        }
      }
    });


    $('#file1').change(function () {
      readImgUrlAndPreview(this);
      function readImgUrlAndPreview(input) {
        if (input.files && input.files[0]) {

          fileReader.readAsDataUrl(input.files[0], $scope)
            .then(function (result) {

              //$('#imagePreview').attr('src', e.target.result);
              var t = moment().format('MMMM Do YYYY, h:mm:ss a');
              var x = {
                "content_type": "video",
                "title": t,
                "filename": result,
                "dated": t
              };
              $scope.content.unshift(x);
              ajaxUploadVideo(result, input.files[0].name);


            });
        }
      }
    });


    $scope.AddPicture = function () {

      $('#file').click();


    }
    $scope.AddVideo = function () {
      $('#file1').click();
    }

    $scope.PostMessage = function () {

      if ($scope.messageToPost == undefined || $scope.messageToPost == '') {
        return;
      }
      var m = angular.copy($scope.messageToPost);

      m = m.replace(/\n/g, '<br />');

      var t = moment().format('MMMM Do YYYY, h:mm:ss a');
      var data =
      {
        "content_type": "label",
        "title": "",
        "data": m,
        "dated": t
      };

      $scope.content.unshift(data);

      mypage.add(data);

    };
  }

]);
