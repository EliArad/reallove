var mongoose = require('mongoose');
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var TankModel = mongoose.model('Tank', schema);

module.exports = TankModel;
