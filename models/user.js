const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  phone: {type: String, required: true},
  password: {type: String, required: true}
}, {collection: 'users'});

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model;

