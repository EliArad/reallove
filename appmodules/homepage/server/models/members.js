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
    whoami: {
        type: String,
        trim: true
    },
    whatdoisearch: {
        type: String,
        trim: true
    },
    needInitiaDetailsBase: {
      type: Boolean,
      default: true
    },
    needInitiaDetailsAll: {
      type: Boolean,
      default: true
    },
    nickName : {
      type: String,
      trim: true
    },
    gym : {
      type: String,
      trim: true
    },
    walking : {
      type: String,
      trim: true
    },
    licenseandcar : {
      type: String,
      trim: true
    },
    everydayathom : {
      type: String,
      trim: true
    },
    cosher : {
      type: String,
      trim: true
    },
    bmi : {
      type: String,
      trim: true
    },
    running : {
      type: String,
      trim: true
    },
    jobtype : {
      type: String,
      trim: true
    },
    livingwith : {
      type: String,
      trim: true
    },
    eatmeat : {
      type: String,
      trim: true
    },
     moutainbikes : {
        type: String,
        trim: true
    },
    cooking : {
      type: String,
      trim: true
    },
    bornday : {
      type: Number,
      trim: true
    },
    bornmonth : {
      type: Number,
      trim: true
    },
    bornyear : {
      type: Number,
      trim: true
    },
    zodiacsign : {
      type: String,
      trim: true
    },
    education : {
      type: String,
      trim: true
    },
    height : {
      type: Number
    },
    religion : {
      type: String,
      trim: true
    },
    status : {
        type: String,
        trim: true
    },
    numberofkids : {
      type: String,
      trim: true
    },
    smoking : {
      type: String,
      trim: true
    },
    city : {
        type: String,
        trim: true
    },
    religionbelong : {
      type: String,
      trim: true
    },
    gender : {
        type: String,
        trim: true
    },

    selectedpasstime :   [],
    selectedfood : [],
    selectedlang : [],
    restselection: [],
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
