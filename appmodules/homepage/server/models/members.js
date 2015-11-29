'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Members Schema
 */
var MembersSchema = new Schema({

    created: {
        type: Date,
        default: Date.now
    },
    /*
    dateofbirth: {
        type: Date,
        required: true
    },
    */
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    cityName: {
        type: String,
        trim: true
    },
    picture1: {
        type: String,
        trim: true
    },
    picture2: {
        type: String,
        trim: true
    },
    picture3: {
        type: String,
        trim: true
    },
    picture4: {
        type: String,
        trim: true
    },
    picture5: {
        type: String,
        trim: true
    },
    picture6: {
        type: String,
        trim: true
    },
    picture7: {
        type: String,
        trim: true
    },
    whoami: {
        type: String,
        trim: true
    },
    whatdoisearch: {
        type: String,
        trim: true
    },
    needInitiaDetails: {
      type: Boolean,
      default: false
    },
    restselection: [],
    //music:      [],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    registrationObjectId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'}
});




var membersModel = mongoose.model('SiteMembers', MembersSchema);

module.exports = {
  membersModel :membersModel

}
