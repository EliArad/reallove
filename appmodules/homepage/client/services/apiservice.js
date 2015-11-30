app.factory("API", function($http,$q,myConfig)
{
    var selectedfood = [];
    var selectedlang = [];
    var selectedpasstime = [];

    function saveSelectedlang(d)
    {
      selectedlang = d;
    }
    function getSelectedlang()
    {
      return selectedlang;
    }

    function saveSelectedpasstime(d)
    {
      selectedpasstime = d;
    }
    function getSelectedpasstime()
    {
      return selectedpasstime;
    }

    function saveSelectedfood(d)
    {
      selectedfood = d;
    }
    function getSelectedfood()
    {
      return selectedfood;
    }


    function getImageList(callback)
    {
      var pictures = [];

      var membersAPI = myConfig.url + "/api/getimagelist";
      $http.get(membersAPI).then(function(result) {
        var userImageList = result.data.list;
        var id = result.data.id;
        //console.log(id);
        var j = 0;
        for (var i = 1; i < 16 ; i++)
        {
          if (userImageList[j] == true) {
            pictures.push('/uploads/' + id.toString() + '/raw/' + i + '.jpg');
          }
          j++;
        }
        callback(true, pictures);
      }).catch(function (result) {
        callback(false, null);
      });
    }

  return {
    getImageList:getImageList,
    saveSelectedfood:saveSelectedfood,
    getSelectedfood:getSelectedfood,
    saveSelectedlang:saveSelectedlang,
    getSelectedlang:getSelectedlang,
    saveSelectedpasstime:saveSelectedpasstime,
    getSelectedpasstime:getSelectedpasstime
  }


});
