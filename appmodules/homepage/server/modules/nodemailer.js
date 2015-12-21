var nodemailer = require("nodemailer");
var guid = require('guid');


// create reusable transporter object using SMTP transport
var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'easwdev',
        pass: 'sheep3628290'
    }
});

function sendEmail(req, randomGuid, callback) {
    var mailOptions, host, link;

    host = req.get('host');
    //console.log("host " + host);
    link = "http://" + req.get('host') + "/verify?id=" + randomGuid;
    mailOptions = {
            to: req.body.to,
            from: 'easwdev@gmail.com', // sender
            subject: "Please confirm your Email account",
            html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
        }
        //console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        callback(error, response);
    });
}

module.exports = function (app, registrationModel, createNewMember) {

    var createNew = createNewMember;

    app.post('/api/send', function (req, res) {

        registrationModel.findOne({
            'email': req.body.to
        }, 'email userguid host password', function (err, member) {
            if (err)
                res.status(500).send("error here " + err);
            else if (member) {
                var randomGuid;
                //console.log("guid from member " + member.email);
                //console.log("guid from member " + member.userguid);
                var host = req.get('host');
                if (member.userguid == "undefined" || member.userguid == "") {
                    //console.log("save new guid to user");
                    randomGuid = guid.create();
                    member.host = "http://" + host;
                    member.userguid = randomGuid;

                    member.save(function (err) {
                        if (err)
                            return handleError(err);

                    })
                } else {
                    //console.log("guid is exists");
                    randomGuid = member.userguid;
                }
                sendEmail(req, randomGuid, function (error, response) {
                    //console.log("send email finshed");
                    if (error) {
                        //console.log(error);
                        res.status(500);
                        res.end("error");
                    } else {
                        //console.log("Message sent: ");
                        res.status(201);
                        res.end("sent");
                    }
                });
            } else {
                res.status(404).send('no registration found');
            }
        });
    });

    app.get('/verify', function (req, res) {
        //console.log(req.query.id);
        registrationModel.findOne({
            'userguid': req.query.id
        }, 'email userguid verified host', function (err, member) {
            if (err)
                res.status(500).send("error here " + err);
            else if (member) {

                //console.log(req.protocol + ":/" + req.get('host'));
                //if ((req.protocol + "://" + req.get('host')) == ("http://" + member.host)) {
                var thisHost = req.protocol + "://" + req.get('host');
                //console.log("thisHost : " + thisHost);
                //console.log("member.host : " + member.host);
                if (thisHost == member.host) {
                    //console.log("Domain is matched. Information is from Authentic email");
                    if (req.query.id == member.userguid) {
                        //console.log("email is verified");
                        member.verified = true;
                        member.save();
                        createNew.createNewMember(member._id);
                        //res.end("<h1>Email " + member.email + " is been Successfully verified");
                        res.status(200);
                        res.redirect('/#/');
                    } else {
                        //console.log("email is not verified");
                        //res.end("<h1>Bad Request</h1>");
                        res.status(200);
                        res.redirect('/#/');
                    }
                } else {
                    //res.end("<h1>Request is from unknown source");
                    res.status(200);
                    res.redirect('/#/');
                }
            }
        });
    });
};