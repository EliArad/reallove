'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var inMessagesSchema = new Schema({

    dated: {
      type: Date,
      default: Date.now
    },
    title: {
        type: String
    },
    messagebody: {
        type: String
    },
    read: {
        type:Boolean,
        default:false
    },
    rating: {
        type:Number
    },
    memberId : { type: mongoose.Schema.Types.ObjectId, ref: 'SiteMembers' },
    replaied: {
        type:Number,
        default:0
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    fromRegistrationId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'},
    toRegistrationId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'}
});


var inmessagesModel = mongoose.model('inMessages', inMessagesSchema);

module.exports =
{
   inmessagesModel : inmessagesModel
}
