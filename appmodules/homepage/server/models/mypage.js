'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var mypageSchema = new Schema({

    dated: {
      type: Date,
      default: Date.now,
      index:true
    },
    data: {
        type: Object
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    RegistrationId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'}
});


var mypageModel = mongoose.model('mypage', mypageSchema);

module.exports =
{
  mypageModel : mypageModel
}
