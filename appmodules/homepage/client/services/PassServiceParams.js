app.factory("PassServiceParams", function()
{
  var  Store = {};

  var StoreParam = function(paramName, data ) {
    Store[paramName] = data;
  }

  var GetParam = function(paramName ) {
    return Store[paramName];
  }

  return {
    StoreParam:StoreParam,
    GetParam:GetParam
  }

});
