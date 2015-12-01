'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var MessagesSchema = new Schema({


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


var messagesModel = mongoose.model('Messages', MessagesSchema);

module.exports.messagesModel  = messagesModel;
