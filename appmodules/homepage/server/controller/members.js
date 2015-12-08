'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');



module.exports = function(membersModel) {

    return {

        /**
         * Create a member
         */
        create: function(req, res,next)
        {

          if (req.foundToken == false)
          {
            console.log("not authorized");
            next();
            return;
          }

          var newmember = new membersModel(req.body);
            //newmember.user = req.user;
            console.log("create" + newmember);

            // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
            membersModel.findOne({ 'email': newmember.email }, 'email', function (err, member) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the new member'
                    });
                }
                if (member != null) {
                    return res.status(500).json({
                        error: 'member ' + newmember.email + " already exists"
                    });
                } else {
                    newmember.save(function(err) {
                        if (err) {
                            return res.status(500).json({
                                error: 'Cannot save the new member'
                            });
                        }
                        /*
                         Watsons.events.publish({
                         action: 'created',
                         user: {
                         name: req.user.name
                         },
                         url: config.hostname + '/scripts/' + watson._id,
                         name: watson.title
                         });
                         */
                        res.json(newmember);
                    });
                }
            })
        },

        deleteAll : function(req, res,next)
        {
          if (req.foundToken == false)
          {
            console.log("not authorized");
            next();
            return;
          }

          //console.log("delete all " + req);

            membersModel.remove({ }, function (err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot remove all members'
                    });
                }
            });
            res.status(204).send('Removed');
        },

        patch: function(req, res, next)
        {
          if (req.foundToken == false)
          {
            console.log("not authorized");
            next();
            return;
          }

          console.log("patch " + req);

            // take the mamber from the findById middleware
            var member = req.member;
            member = _.extend(member, req.body);

            member.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot update the member'
                    });
                }
                /*
                 Watsons.events.publish({
                 action: 'updated',
                 user: {
                 name: req.user.name
                 },
                 name: watson.title,
                 url: config.hostname + '/scripts/' + watson._id
                 });
                 */
                // return the member
                res.json(member);
            });

        },


        update: function(req, res,next)
        {
          if (req.foundToken == false)
          {
            console.log("not authorized");
            next();
            return;
          }

            console.log("update  " + req.body.member.nickName);

            // take the mamber from the findById middleware
            var member = req.member;
            member = _.extend(member, req.body.member);
            console.log(member.nickName);

            member.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot update the member'
                    });
                }
                /*
                Watsons.events.publish({
                    action: 'updated',
                    user: {
                        name: req.user.name
                    },
                    name: watson.title,
                    url: config.hostname + '/scripts/' + watson._id
                });
                */
                // return the member
                res.json(member);
            });

        },
        /**
         * Delete an member
         */
        destroy: function(req, res,next)
        {

          if (req.foundToken == false)
          {
            console.log("not authorized");
            next();
            return;
          }

          // again, this is our middleware member that got from findById
            var member = req.member;
            member.remove(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the member'
                    });
                }
                /*
                Watsons.events.publish({
                    action: 'deleted',
                    user: {
                        name: req.user.name
                    },
                    name: watson.title
                });
                */
                res.status(204).send('Removed');
            });

        },
        /**
         * Show a specific member by id
         */
        show: function(req, res,next)
        {
          if (req.foundToken == false)
          {
            console.log("not authorized");
            return next();
          }
          console.log("show member");
          // why member ? it is our middleware findById that was injected into the request :)
          res.json({member:req.member});

        },
        all: function(req, res,next)
        {
            console.log("member all");
            if (req.foundToken == false)
            {
                console.log("not authorized");
                next();
                return;
            }
            console.log("get all");
            membersModel.find(function(err, membersResults) {
            //membersModel.find({}).sort('-created').populate('user', 'name username').exec(function(err, membersResults) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the members'
                    });
                }
                console.log(membersResults);
                res.json(membersResults)
            });
        }
    };
}
