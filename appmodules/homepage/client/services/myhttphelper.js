app.factory("myhttphelper", function($http, $q,myConfig){


    var doApiPost = function(command, params)
    {
      var url = myConfig.url + "/api/" + command;
      return $http.post(url,params).
                        then(sendResponseData).
                        catch(sendResponseError)

    }
    var doPost = function(command, params)
    {

        return $http.post(command,params).
            then(sendResponseData).
            catch(sendResponseError)

    }
    var doGet = function(command)
    {
        return $http.get(command).
            then(sendResponseData).
            catch(sendResponseError)
    }
    var doPut = function(command)
    {
        return $http.put(command).
            then(sendResponseData).
            catch(sendResponseError)
    }
    function sendResponseData(response)
    {
        //console.log(response);
        return response.data;
    }
    function sendResponseError(response)
    {
        //console.log("error from send " + response);
        return $q.reject("error from send " + response.status);
    }
    return{
        doApiPost:doApiPost,
        doPost: doPost,
        doGet: doGet
    };
});
