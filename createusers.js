'use_strict'
var mongoose = require('mongoose'),
  _ = require('lodash');


var Chance = require('chance');
var chance = new Chance();
var mkdirp = require('mkdirp');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/reallove');

var guid = require('guid');
var membersModel = require('./appmodules/homepage/server/models/members').membersModel;
var registrationModule = require('./appmodules/homepage/server/models/registration');
var regSchema = registrationModule.regSchema;
var regModel = registrationModule.regModel;

var fsextera = require('fs.extra');


var user = {};
var randomGuid;

var member = {};


function copyFile(source, target) {
  return new Promise(function(resolve, reject) {
    var rd = fs.createReadStream(source);
    rd.on('error', reject);
    var wr = fs.createWriteStream(target);
    wr.on('error', reject);
    wr.on('finish', resolve);
    rd.pipe(wr);
  });
}



for (var i = 0 ; i < 115; i++)
{
   randomGuid = guid.create();
   user.password = "1";
   user.email = chance.email();
   user.verified = true;
   user.host = "http://localhost:8000";
   user.userguid = randomGuid;
   user.confirmPassword = true;
   user.provider = "";
   var userRegistration = new regModel(user);

   userRegistration.save(function(err, user)
   {

       member.registrationObjectId = user._id;
       member.whoami = "s simply dummy text of the printing and typesetting industry."
       member.whatdoisearch = "s simply dummy text of the printing and typesetting industry."
       member.needInitiaDetailsBase = false;
       member.needInitiaDetailsAll = false;
       member.nickName = chance.string({length: 5});
       member.gym = "פעם בשבוע";
       member.walking = "בעניין";
       member.everydayathom = "כן";
       member.cosher = "שומר";
       member.bmi = "באזור טוב";
       member.running  = "בעניין";
       member.jobtype = "שכיר";
       member.livingwith = "בדירה לבד";
       member.eatmeat = "כן";
       member.moutainbikes = "רוכב";
       member.cooking = "ברמה סבירה";
       member.bornday = chance.integer({min: 1, max: 31});;
       member.bornmonth = chance.integer({min: 1, max: 12});
       member.bornyear = chance.integer({min: 1930, max: 1944});
       member.education = "דוקטור";
       member.height = 185;
       member.religion = "יהודי";
       member.status = "רווק";
       member.numberofkids = 0;
       member.smoking= "לא";
       member.city = "תל אביב";
       member.religionbelong = "חילוני";
       var g =  ['אישה' , 'גבר'];
       member.gender = g[chance.integer({min: 0, max: 1})];

       var m = new membersModel(member);

       m.save(function(err, user)
       {
           var dirToCreateRaw = './uploads/' + user._id + "/raw/"
           mkdirp(dirToCreateRaw, function(err) {

             fsextera.copy('./uploads/565c54120d29c13e2554ad26/raw/1.jpg',dirToCreateRaw + '1.jpg', { replace: false }, function (err) {
               if (err) {
                 console.log("error copy file:" + err);
               } else {
                  console.log('Copied ok');
               }
             });

           });
       });



       console.log("creating.. " + user.email);
   });
}

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));


