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
    default: Date.now,
    index: true
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
  nickName: {
    type: String,
    trim: true
  },
  gym: {
    type: String,
    trim: true,
    index: true
  },
  walking: {
    type: String,
    trim: true,
    index: true
  },
  licenseandcar: {
    type: String,
    trim: true,
    index: true
  },
  everydayathom: {
    type: String,
    trim: true,
    index: true
  },
  cosher: {
    type: String,
    trim: true,
    index: true
  },
  bmi: {
    type: String,
    trim: true
  },
  running: {
    type: String,
    trim: true,
    index: true
  },
  jobtype: {
    type: String,
    trim: true
  },
  livingwith: {
    type: String,
    trim: true,
    index: true
  },
  eatmeat: {
    type: String,
    trim: true,
    index: true
  },
  moutainbikes: {
    type: String,
    trim: true,
    index: true
  },
  cooking: {
    type: String,
    trim: true,
    index: true
  },
  bornday: {
    type: Number,
    trim: true,
    index: true
  },
  bornmonth: {
    type: Number,
    trim: true,
    index: true
  },
  bornyear: {
    type: Number,
    trim: true,
    index: true
  },
  zodiacsign: {
    type: String,
    trim: true,
    index: true
  },
  education: {
    type: String,
    trim: true,
    index: true
  },
  height: {
    type: Number,
    index: true
  },
  religion: {
    type: String,
    trim: true,
    index: true
  },
  status: {
    type: String,
    trim: true,
    index: true
  },
  numberofkids: {
    type: String,
    trim: true,
    index: true
  },
  smoking: {
    type: String,
    trim: true,
    index: true
  },
  city: {
    type: String,
    trim: true
  },
  religionbelong: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    trim: true,
    index: true
  },
  isOnline: {
    type: Boolean,
    default:false
  },
  blocked: {
    type: Boolean,
    default: false
  },
  videoOption: {
      type:Number,
      default:1
  },
  videoloaded: {
    type:Boolean,
    default:false
  },
  profilePicLoaded: {
    type:Boolean,
    default:false
  },
  numOfPicturesLoaded: {
    type:Number,
    default:0
  },

  selectedpasstime: [],
  selectedfood: [],
  selectedlang: [],
  restselection: [],
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  registrationObjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'registrations'
  }
});


var membersModel = mongoose.model('SiteMembers', MembersSchema);

module.exports = {
  membersModel: membersModel

}
