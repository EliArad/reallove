'use strict';

//(function() {


  app.controller('YouGotAMailController', ['$scope','$state', 'authToken','myhttphelper',
                  'picturesManager','API','$uibModal','$log','$rootScope',
                  '$timeout','$window','myConfig','$http','PassServiceParams',
    function($scope,$state, authToken,myhttphelper,
             picturesManager,API,$uibModal,$log,$rootScope,$timeout,
             $window,myConfig,$http,PassServiceParams)
    {

      var vm = this;
      vm.myemails = [];
      var cssUpdateTimer;
      var cssUpdateTimer1;
      $scope.currentMemberToShow = {};

      myhttphelper.doGet('/isauth').
        then(sendResponseData1).
        catch(sendResponseError1);


      function sendResponseData1(response)
      {
        if (response != "OK")
        {
          $state.go('login', {}, {reload: true});
        } else {
          start();
        }
      }
      function sendResponseError1(response)
      {
        $state.go('login', {}, {reload: true});
      }


      $scope.error = {
        title:    "DialogDemoCtrl",
        message:  "some error message"
      };

      $scope.opts = {
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        resolve: {
          error: function () {
            return $scope.error;
          }
        },
        templateUrl:  'dialog_template.html',
        controller: 'TestDialogController'
      };

      $scope.myStyle = {
        "max-width" : $window.innerWidth,
        "max-height" : $window.innerHeight - 100
      };
      $scope.animationsEnabled = true;
      $scope.openuserprofile = function (mail) {

        PassServiceParams.StoreParam('memberProfileToShow' , mail);
        $state.go('memberprofile', {}, {reload: true});

      }

      $scope.open = function (mail) {


        $scope.items = mail;// [mail.title, mail.from, mail.messagebody];

        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'YouGotAMailController',
          scope: $scope, // <-- I added this
          size: 100,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });


        $scope.ok = function () {

          modalInstance.close($scope.selected.item);
        };

        $scope.closemodal = function () {

          modalInstance.dismiss('cancel');
        };

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

      $(function(j) {
        j("#cLeft").text("אותיות נשארו: 320");
        j(document).on('keypress', '#new_message', function() {
          if (this.value.length > 500) {
            return false;
          }
          j("#cLeft").text("אותיות נשארו: " + (320 - this.value.length));
        });
      });

      $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
      };

      $scope.showinbox = function()
      {
            API.getNumberOfMails().then(function(result){
              vm.myemails = result;

              vm.numunreadmail = 0;
              vm.myemails.forEach(function(entry) {
                entry.from = entry.memberId.nickName;
                var picName =  '/uploads/' + entry.fromRegistrationId.toString() + '/raw/' + 0 + '.jpg';
                //console.log(picName);
                entry.imagesrc = picName;

                if (entry.read == 0)
                  vm.numunreadmail++;
              });
              if (vm.numunreadmail > 0)
                $scope.yougotmail = true;
              else
                $scope.yougotmail = false;
              $scope.numberofmails = vm.numunreadmail;
            }).catch(function(result)  {
              console.log(result);
              $scope.yougotmail = false;
            });

      }
      $scope.showsenditems = function()
      {

        vm.myemails = [];
        return;
          API.getNumberOfMails().then(function(result){
            vm.myemails = result;

            vm.numunreadmail = 0;
            vm.myemails.forEach(function(entry) {
              entry.from = entry.memberId.nickName;
              var picName =  '/uploads/' + entry.fromRegistrationId.toString() + '/raw/' + 0 + '.jpg';
              //console.log(picName);
              entry.imagesrc = picName;

              if (entry.read == 0)
                vm.numunreadmail++;
            });
            if (numunreadmail > 0)
              $scope.yougotmail = true;
            else
              $scope.yougotmail = false;
            $scope.numberofmails = vm.numunreadmail;
          }).catch(function(result)  {
            console.log(result);
            $scope.yougotmail = false;
          });
      }
      function start()
      {
         picturesManager.getProfilePictureSourcePath(function (pic)
         {
             vm.myProfilePicture = pic;
         });


        API.getNumberOfMails().then(function(result){
          vm.myemails = result;

          vm.numunreadmail = 0;
          vm.myemails.forEach(function(entry) {
            entry.from = entry.memberId.nickName;
            var picName =  '/uploads/' + entry.fromRegistrationId.toString() + '/raw/' + 0 + '.jpg';
            //console.log(picName);
            entry.imagesrc = picName;

            if (entry.read == 0)
              vm.numunreadmail++;
          });
          if (vm.numunreadmail > 0)
            $scope.yougotmail = true;
          else
            $scope.yougotmail = false;
          $scope.numberofmails = vm.numunreadmail;
        }).catch(function(result)  {
          console.log(result);
          $scope.yougotmail = false;
        });
      }


      $scope.submit = function(isValid, mail) {
        if (!isValid) {
          console.log("not valid");
        } else {

          //console.log($scope.messagebody +  " to send to: " + $scope.currentMemberToShow.id);
          var data = {
            mb: $scope.messagebody,
            title: $scope.title,
            toid: mail.fromRegistrationId
          }
          myhttphelper.doApiPost('sendMessageToMember', data).then(function (response) {


            if (cssUpdateTimer != null)
              $timeout.cancel(cssUpdateTimer);

            $scope.showMessageSendOk = true;
            document.getElementById('sendButton').style.color = 'lightgreen';
            document.getElementById('sendButton').innerHTML = 'הודעה נשלחה';

            cssUpdateTimer = $timeout(function () {
              $scope.showMessageSendOk = false;
              document.getElementById('sendButton').innerHTML = 'שלח הודעה';
              document.getElementById('sendButton').style.color = 'white';
              $scope.closemodal();
            }, 2000);

          }).catch(function (response) {

            $scope.showMessageSendFailure = true;
            document.getElementById('sendButton').style.color = 'lightred';
            document.getElementById('sendButton').innerHTML = 'לא נשלח';
          });
        }
      }
    }// thecontroller closing
  ]);

