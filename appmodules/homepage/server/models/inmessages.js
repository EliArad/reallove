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
    messagebody: {
        type: String
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
