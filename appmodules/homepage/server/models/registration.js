'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//var bcrypt = require('bcrypt-nodejs');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;



/**
 * Registration Schema
 */
var RegistrationSchema = new Schema({

    created: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    userguid: {
      type: String,
      trim: true
    },
    verified: {
       type: Boolean,
       default: false
    },
    host: {
      type: String,
      trim: true,
      default: ""
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: 'user'
    },
    provider: String,
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});


/**
 * Validations
 */

RegistrationSchema.path('password').validate(function(content) {
    return !!content;
}, 'Content cannot be blank');

RegistrationSchema.path('email').validate(function(content) {
    return !!content;
}, 'What do i search cannot be blank');

RegistrationSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
}
RegistrationSchema.methods.toJSON = function ()
{
  //console.log("delete password..");
  var user = this.toObject();
  delete user.password;
  return user;
}

RegistrationSchema.methods.comparePassword = function(candidatePassword, cb)
{
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

RegistrationSchema.statics.findByUsername = function (username, cb) {
    this.findOne({ username: username }, cb);
}

RegistrationSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});



module.exports = {
   regModel : mongoose.model('registrations', RegistrationSchema),
   regSchema: RegistrationSchema
}
