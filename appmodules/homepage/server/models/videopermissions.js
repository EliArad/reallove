'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var videoPermissionsSchema = new Schema({

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  datedGiven: {
    type: Date,
    default: Date.now
  },
  allow :{
     type:Boolean,
     index:true
  },
  tomemberrid : { type: mongoose.Schema.Types.ObjectId, ref: 'SiteMembers' },
  frommemberid : { type: mongoose.Schema.Types.ObjectId, ref: 'SiteMembers' },
  fromRegistrationId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'},
  toRegistrationId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'}
});

var videoPermissionsModel = mongoose.model('videopermissions', videoPermissionsSchema);

module.exports =
{
  videoPermissionsModel: videoPermissionsModel
}
