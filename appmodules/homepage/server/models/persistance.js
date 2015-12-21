'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var PersistanceSchema = new Schema({

    loginDate: {
        type: Date
    },
    logoutDate: {
        type: Date
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    registrationObjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'registrations'
    }
});


var PersistanceModel = mongoose.model('Persistance', PersistanceSchema);

module.exports = {
    PersistanceModel: PersistanceModel
};