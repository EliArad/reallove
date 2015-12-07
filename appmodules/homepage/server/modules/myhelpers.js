var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var fs = require('fs');

function getImageList(id)
{
    var arr = [];
    for (var i = 1; i < 16; i++)
    {
      var path = './uploads/' + id.toString() + '/raw/' + i.toString() + '.jpg';
      //console.log(path);
      if (fs.existsSync(path)) {
        arr.push(true);
      } else {
        arr.push(false);
      }
    }
    return arr;
}

module.exports = {
  getImageList: getImageList
}
