'use strict';

//(function() {


app.controller('mypicturesController', ['$scope', 'Registration', 'general','myConfig',
               'fileUpload','myhttphelper','appCookieStore','fileReader','authToken','$http',
    function($scope, Registration,general,myConfig,
             fileUpload,myhttphelper,appCookieStore,fileReader,authToken,$http) {



      var vm = this;
      $scope.showPicture1 = true;
      $scope.showPicture2 = true;
      $scope.showPicture3 = true;
      $scope.showPicture4 = true;
      $scope.showPicture5 = true;
      $scope.showPicture6 = true;
      $scope.showPicture7 = true;
      $scope.showPicture8 = true;
      $scope.showPicture9 = true;
      $scope.showPicture10 = true;
      $scope.showPicture11 = true;
      $scope.showPicture12 = true;
      $scope.showPicture13 = true;
      $scope.showPicture14 = true;

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



      $scope.enablePictureDisplay = function(index , del)
      {

        if (del == false) {
          myhttphelper.doPost('/api/deletepicture', {filenum: index}).
            then(deletePictureSuccess).
            catch(deletPictureError);
        }
        switch (index)
        {
          case 1:
            $scope.showPicture1 = del;
            break;
          case 2:
            $scope.showPicture2 = del;
            break;
          case 3:
            $scope.showPicture3 = del;
            break;
          case 4:
            $scope.showPicture4 = del;
            break;
          case 5:
            $scope.showPicture5 = del;
            break;
          case 6:
            $scope.showPicture6 = del;
            break;
          case 7:
            $scope.showPicture7 = del;
            break;
          case 8:
            $scope.showPicture8 = del;
            break;
          case 9:
            $scope.showPicture9 = del;
            break;
          case 10:
            $scope.showPicture10 = del;
            break;
          case 11:
            $scope.showPicture11 = del;
            break;
          case 12:
            $scope.showPicture12 = del;
            break;
          case 13:
            $scope.showPicture13 = del;
            break;
          case 14:
            $scope.showPicture14 = del;
            break;
          case 15:
            $scope.showPicture15 = del;
            break;
        }
      }

      function deletePictureSuccess(response)
      {

      }
      function deletPictureError(response)
      {

      }


      $scope.sliderConfig = {
        min: 200,
        max: 1300,
        step: 1
      }

      $scope.price = appCookieStore.get_wd("crpage_picturesize" , 200);
      $scope.pictureWidth = $scope.price+ 'px';
      $scope.pictureHeight = $scope.price+ 'px';

      $scope.setPrice = function() {
        $scope.pictureWidth = $scope.price+ 'px';
        $scope.pictureHeight = $scope.price+ 'px';
      }

      var setImageSrc = function(i , src)
      {

        switch (i)
        {
          case 1:
            $scope.imageSrc1 = src;
            break;
          case 2:
            $scope.imageSrc2 = src;
            break;
          case 3:
            $scope.imageSrc3 = src;
            break;
          case 4:
            $scope.imageSrc4 = src;
            break;
          case 5:
            $scope.imageSrc5 = src;
            break;
          case 6:
            $scope.imageSrc6 = src;
            break;
          case 7:
            $scope.imageSrc7 = src;
            break;
          case 8:
            $scope.imageSrc8 = src;
            break;
          case 9:
            $scope.imageSrc9 = src;
            break;
          case 10:
            $scope.imageSrc10 = src;
            break;
          case 11:
            $scope.imageSrc11 = src;
            break;
          case 12:
            $scope.imageSrc12 = src;
            break;
          case 13:
            $scope.imageSrc13 = src;
            break;
          case 14:
            $scope.imageSrc14 = src;
            break;
        }
      }


      var token1 = authToken.getToken();
      var membersAPI = myConfig.url + "/api/getuserid";
      $http.get(membersAPI).success(function(result) {

        vm.userid = result;
        for (var i = 1 ; i <= myConfig.MaxPicturesForMember ; i++)
        {
          var picName = '/uploads/' + vm.userid.toString() + '/raw/' + i.toString() + '.jpg';
          setImageSrc(i , picName);
        }
      }).error(function(result) {
        console.log(result);
      });




      $scope.fileNameChanged1 = function() {

        var fileInputElement = document.getElementById("fileInputElementfirst");
        $scope.uploadFile1(fileInputElement.files[0]);

      }

      $scope.fileNameChanged2 = function() {
        var fileInputElement = document.getElementById("fileInputElement2");
        $scope.uploadFile2(fileInputElement.files[0]);
      }
      $scope.fileNameChanged3 = function() {
        var fileInputElement = document.getElementById("fileInputElement3");
        $scope.uploadFile3(fileInputElement.files[0]);
      }

      $scope.fileNameChanged4 = function() {
        var fileInputElement = document.getElementById("fileInputElement4");
        $scope.uploadFile4(fileInputElement.files[0]);
      }
      $scope.fileNameChanged5 = function() {
        var fileInputElement = document.getElementById("fileInputElement5");
        $scope.uploadFile5(fileInputElement.files[0]);
      }
      $scope.fileNameChanged6 = function() {
        var fileInputElement = document.getElementById("fileInputElement6");
        $scope.uploadFile6(fileInputElement.files[0]);
      }
      $scope.fileNameChanged7 = function() {
        var fileInputElement = document.getElementById("fileInputElement7");
        $scope.uploadFile7(fileInputElement.files[0]);
      }

      $scope.fileNameChanged8 = function() {
        var fileInputElement = document.getElementById("fileInputElement8");
        $scope.uploadFile8(fileInputElement.files[0]);
      }

      $scope.fileNameChanged9 = function() {
        var fileInputElement = document.getElementById("fileInputElement9");
        $scope.uploadFile9(fileInputElement.files[0]);
      }

      $scope.fileNameChanged10 = function() {
        var fileInputElement = document.getElementById("fileInputElement10");
        $scope.uploadFile10(fileInputElement.files[0]);
      }

      $scope.fileNameChanged11 = function() {
        var fileInputElement = document.getElementById("fileInputElement11");
        $scope.uploadFile11(fileInputElement.files[0]);
      }
      $scope.fileNameChanged12 = function() {
        var fileInputElement = document.getElementById("fileInputElement12");
        $scope.uploadFile12(fileInputElement.files[0]);
      }

      $scope.fileNameChanged13 = function() {
        var fileInputElement = document.getElementById("fileInputElement13");
        $scope.uploadFile13(fileInputElement.files[0]);
      }

      $scope.fileNameChanged14 = function() {
        var fileInputElement = document.getElementById("fileInputElement14");
        $scope.uploadFile14(fileInputElement.files[0]);
      }

      $scope.fileNameChanged15 = function() {
        var fileInputElement = document.getElementById("fileInputElement15");
        $scope.uploadFile15(fileInputElement.files[0]);
      }

      var blobToBase64 = function(blob, cb) {
        var reader = new FileReader();
        reader.onload = function() {
          var dataUrl = reader.result;
          var base64 = dataUrl.split(',')[1];
          cb(base64);
        };
        reader.readAsDataURL(blob);
      };

      $scope.uploadFile1 = function (fileName, index) {
        $scope.progress = 0;
        console.log(fileName);
        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc1 = result;


            ImageTools.resize(fileName, {
              width: 80, // maximum width
              height: 80 // maximum height
            }, function(blob, didItResize) {
              console.log('didItResize:' + didItResize);
              // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
              //$scope.imageSrc1 = window.URL.createObjectURL(blob);

              blobToBase64(blob, function(base64)
              {
                ajaxUpload(base64,0);
              });
            });

            ImageTools.resize(fileName, {
              width: 250, // maximum width
              height: 250 // maximum height
            }, function(blob, didItResize) {
              console.log('didItResize:' + didItResize);
              // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
              //$scope.imageSrc1 = window.URL.createObjectURL(blob);

              blobToBase64(blob, function(base64)
              {
                ajaxUpload(base64,100);
              });
            });


            ajaxUpload(result,1);
          });
      };
      $scope.uploadFile2 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc2 = result;
            ajaxUpload(result,2);
          });
      };
      $scope.uploadFile3 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc3 = result;
            ajaxUpload(result,3);
          });
      };

      $scope.uploadFile4 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc4 = result;
            ajaxUpload(result,4);
          });
      };

      $scope.uploadFile5 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc5 = result;
            ajaxUpload(result,5);
          });
      };

      $scope.uploadFile6 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc6 = result;
            ajaxUpload(result,6);
          });
      };

      $scope.uploadFile7 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc7 = result;
            ajaxUpload(result,7);
          });
      };

      $scope.uploadFile8 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc8 = result;
            ajaxUpload(result,8);
          });
      };

      $scope.uploadFile9 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc9 = result;
            ajaxUpload(result,9);
          });
      };

      $scope.uploadFile10 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc10 = result;
            ajaxUpload(result,10);
          });
      };

      $scope.uploadFile11 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc11 = result;
            ajaxUpload(result,11);
          });
      };

      $scope.uploadFile12 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc12 = result;
            ajaxUpload(result,12);
          });
      };
      $scope.uploadFile13 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc13 = result;
            ajaxUpload(result,13);
          });
      };

      $scope.uploadFile14 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc14 = result;
            ajaxUpload(result,14);
          });
      };

      $scope.uploadFile15 = function (fileName, index) {
        $scope.progress = 0;

        fileReader.readAsDataUrl(fileName, $scope)
          .then(function(result) {
            $scope.imageSrc15 = result;
            ajaxUpload(result,15);
          });
      };

      $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
      });


      var ajaxUpload = function(result , number)
      {

        var data = {

          "images": result,
          "filenum": number,
          "token" : authToken.getToken()
        }

        myhttphelper.doPost('/api/upload' , data).
          then(successUpload).
          catch(errorUpload);
        /*

         var data = result;
         $.ajax({
         url: "/api/upload",
         type: 'post',
         data:{

         "images":data,
         "filenum": number,
         "token" : authToken.getToken()
         },
         success: function(){
         $(this).append("done");
         }
         });
         */
      }


      function successUpload(response)
      {
        $scope.enablePictureDisplay(response.picnum , true);
      }
      function errorUpload(response)
      {

      }

    }

]);


//}());
