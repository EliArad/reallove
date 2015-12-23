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
    return new Promise(function (resolve, reject) {
        var rd = fs.createReadStream(source);
        rd.on('error', reject);
        var wr = fs.createWriteStream(target);
        wr.on('error', reject);
        wr.on('finish', resolve);
        rd.pipe(wr);
    });
}


function createUser(nickName, gender, mail)
{
  randomGuid = guid.create();
  user.password = "1";
  if (mail == undefined)
     user.email = chance.email();
  else
    user.email = mail;

  user.verified = true;
  user.host = "http://192.168.22.32:8000";
  user.userguid = randomGuid;
  user.confirmPassword = true;
  user.provider = "";
  var userRegistration = new regModel(user);

  userRegistration.save(function (err, user) {


    member.registrationObjectId = user._id;
    member.whoami = "s simply dummy text of the printing and typesetting industry."
    member.whatdoisearch = "s simply dummy text of the printing and typesetting industry."
    member.needInitiaDetailsBase = false;
    member.isOnline = false;
    member.needInitiaDetailsAll = false;
    if (nickName == undefined) {
      member.nickName = chance.string({
        length: 5
      });
    } else {
       member.nickName = nickName;
    }
    member.gym = "פעם בשבוע";
    member.walking = "בעניין";
    member.everydayathom = "כן";
    member.cosher = "שומר";
    member.bmi = "באזור טוב";
    member.running = "בעניין";
    member.jobtype = "שכיר";
    member.livingwith = "בדירה לבד";
    member.eatmeat = "כן";
    member.moutainbikes = "רוכב";
    member.cooking = "ברמה סבירה";
    member.bornday = chance.integer({
      min: 1,
      max: 31
    });;
    member.bornmonth = chance.integer({
      min: 1,
      max: 12
    });
    member.bornyear = chance.integer({
      min: 1930,
      max: 1944
    });
    member.education = "דוקטור";
    member.height = 185;
    member.religion = "יהודי";
    member.status = "רווק";
    member.numberofkids = 0;
    member.smoking = "לא";
    member.city = "תל אביב";
    member.religionbelong = "חילוני";
    member.licenseandcar = 'יש לי רישיון ורכב';

    member.gender = gender;

    var m = new membersModel(member);

    m.save(function (err, user) {
      var dirToCreateRaw = './uploads/' + m.registrationObjectId + "/raw/"
      console.log(dirToCreateRaw);
      mkdirp(dirToCreateRaw, function (err) {

        var fileName = './infra/m' + (picnum + 1) + '.jpg';
        fsextera.copy(fileName, dirToCreateRaw + '1.jpg', {
            replace: false
          },
          function (err) {
            if (err) {
              console.log("error copy file:" + err);
            } else {
              console.log('Copied ok');
            }
          });


        fsextera.copy(fileName, dirToCreateRaw + '0.jpg', {
            replace: false
          },
          function (err) {
            if (err) {
              console.log("error copy file:" + err);
            } else {
              console.log('Copied ok');
            }
          });



        fsextera.copy(fileName, dirToCreateRaw + '100.jpg', {
            replace: false
          },
          function (err) {
            if (err) {
              console.log("error copy file:" + err);
            } else {
              console.log('Copied ok');
            }
          });

        picnum = (picnum + 1) % 8;

      });
    });

    console.log("creating.. " + user.email);
  });
}


var picnum = 1;
var g = ['אישה', 'גבר'];
for (var i = 0; i < 20; i++) {
  //createUser(undefined , g[1], undefined);
}

//createUser('amit' , g[1], 'amit@amit.com');
//createUser('nataly' , g[1], 'nataly@nataly.com');

//createUser('noam' , g[1], 'noam@noam.com');
createUser('amir' , g[1], 'amir@amir.com');
//createUser('shamay' , g[1], 'shamay@shamay.com');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
