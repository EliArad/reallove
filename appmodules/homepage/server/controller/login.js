var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var _regmodel;
var _membermodel;
exports.setModel = function(regmodel,membermodel)
{
    _regmodel = regmodel;
    _membermodel = membermodel;
}

exports.login = function(req, res)
{

    //console.log("login");
    var email = req.body.email || '';
    var password = req.body.password || '';

    //console.log(password);

    if (email == '' || password == '') {
        return res.sendStatus(401);
    }

    _regmodel.findOne({email: email}, '-userguid', function (err, user) {
        if (err) {
            return res.status(401).json({
                error: err
            });
        }
        if (!user)
        {
          return res.status(401).json({
            error: "Attempt failed to login with " + email
          });
        }

        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                return res.status(401).json({
                    error: err
                });
            }
            if (!isMatch) {
                return res.status(401).json({
                    error: "Attempt failed to login with " + user.email
                });
            }

            var payload  =  {
                iss: req.hostname,
                sub:user._id
            }

            console.log(user._id);

            // also after login lets return the member information as well.
            _membermodel.findOne({ 'registrationObjectId':user._id }, function (err, member) {
                if (err) {
                    console.log(err);
                    return res.status(401).json({
                        error: err
                    });
                }
                else if (!member) {
                    // create new member
                    console.log("member does not exists , creating new one");
                    member  = new _membermodel();
                    member.registrationObjectId = user._id;
                    member.needInitiaDetails = true;
                    delete member._id;
                    member.save(function(err) {

                    });
                }
                delete user._id;
                delete user.email;

                var token = jwt.sign(payload, secret, {expiresInMinutes: 60 * 5});
                res.json(
                    {
                        token: token,
                        user: user,
                        member: member
                    }
                );
            });
        });

    });
};
