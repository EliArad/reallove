'use strict';


app.controller('MainController', ['$scope','$state','authToken','myhttphelper','dbsearch','myutils','appCookieStore',
    function($scope,$state,authToken,myhttphelper,dbsearch,myutils,appCookieStore)
    {
      var vm = this;
      $scope.pageClass = 'page-home';
      $scope.allmembersthumb = [];
      $scope.allthumberspictures = true;






      appCookieStore.set('mainview' , 'smallcardsview');

      myhttphelper.doGet('/isauth').
        then(sendResponseData).
        catch(sendResponseError);


      function sendResponseData(response)
      {
        if (response != "OK")
        {
            $state.go('login', {}, {reload: true});
        }
      }
      function sendResponseError(response)
      {
        $state.go('login', {}, {reload: true});
      }

      dbsearch.setCriteria("none");
      dbsearch.getFirstNUserProfiles(100).
        then(UsersOk).
        catch(UsersError);


      function UsersOk(result)
      {
        var totalPictures = result.length;
        vm.skipSize = 100;
        for (var i = 0; i < result.length;i++) {
          console.log(result[i]);
          var picName =  '/uploads/' + result[i].registrationObjectId.toString() + '/raw/' + 100 + '.jpg';
          var x = {
            src: picName,
            id: result[i].id,
            rid: result[i].registrationObjectId,
            profile:result[i]
          }

          x.profile.age  = myutils.getAge(result[i].created);
          $scope.allmembersthumb.push(x);
        }
      }

      function UsersError(result)
      {

      }


      $(function(j) {
        j("#cLeft").text("אותיות נשארו: 320");
        j(document).on('keypress', '#new_message', function() {
          if (this.value.length > 500) {
            return false;
          }
          j("#cLeft").text("אותיות נשארו: " + (320 - this.value.length));
        });
      });


      $scope.ShowMember = function(id,rid)
      {


        var membersAPI = myConfig.url + "/api/getuserinfoById";
        $http.post(membersAPI, {'UserId':rid}).success(function(result) {
          vm.userImageList = result.list;
          vm.currentUserAllPictures = [];
          var j = 0;
          for (var i = 1; i < 16 ; i++)
          {
            if (vm.userImageList[j] == true) {
              vm.currentUserAllPictures.push('/uploads/' + rid.toString() + '/raw/' + i + '.jpg');
            }
            j++;
          }
          vm.currentUserTotalPictures = vm.currentUserAllPictures.length;
          $scope.currentMemberToShow.src = vm.currentUserAllPictures[0];
          if (vm.userImageList[1] == true)
          {
            $scope.currentMemberToShow.src1 = vm.currentUserAllPictures[1];
          } else {
            $scope.currentMemberToShow.src1 = vm.currentUserAllPictures[0];
          }
          $scope.currentMemberToShow.id = id;
          $scope.currentMemberToShow.rid = rid;
          $scope.currentMemberToShow.member = result.member;
          $scope.currentMemberToShow.member.age = myutils.getAge($scope.currentMemberToShow.member);
          $scope.allthumberspictures = false;
          $scope.lions = true;

        }).error(function(result) {
          console.log(result);
        });
      }










    } // the controller closing
  ]);
