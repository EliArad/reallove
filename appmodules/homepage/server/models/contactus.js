'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Members Schema
 */
var ContactusSchema = new Schema({

    created: {
        type: Date,
        default: Date.now
    },
    phoneNumber: {
        type: String
    },
    freetext: {
        type: String
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    registrationObjectId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'}
});




var contactusModel = mongoose.model('Contactus', ContactusSchema);

module.exports = {
    contactusModel :contactusModel

}
