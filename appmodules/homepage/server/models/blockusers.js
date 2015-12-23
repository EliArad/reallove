'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var blockedUsersSchema = new Schema({

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  memberObjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SiteMembers'
  },
  RegistrationId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'}
});

var blockedUsersModel = mongoose.model('blockedusers', blockedUsersSchema);

module.exports =
{
  blockedUsersModel : blockedUsersModel
}
