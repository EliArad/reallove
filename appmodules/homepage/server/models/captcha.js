'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CaptchaSchema = new Schema({


    value: {
        type: String
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    registrationObjectId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'}
});


var captchaModel = mongoose.model('Captcha', CaptchaSchema);

module.exports = {
  captchaModel :captchaModel
};
