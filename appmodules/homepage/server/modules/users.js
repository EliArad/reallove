module.exports = function (registerModel, memberModel) {


  function userExists(id, callback) {

    registerModel.findById(id, function (err, user) {
      if (err) {
        //console.log('user ' + id + ' does not exists');
        callback(false);
      } else {
        if (user) {
          //console.log('user ' + id + ' does exists');
          callback(true);
        } else {
          //console.log('user ' + id + ' does not exists');
          callback(false);
        }
      }
    });
  }


  return {
    userExists: userExists
  }

}

