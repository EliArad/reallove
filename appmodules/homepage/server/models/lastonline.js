'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var LastonlineSchema = new Schema({


    isOnline: {
       type:Boolean
    },
    lastOnline: {
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


var LastonlineModel = mongoose.model('Lastonline', LastonlineSchema);

module.exports = {
    LastonlineModel: LastonlineModel
};
