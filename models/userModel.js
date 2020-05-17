const mongoose = require('mongoose');
const { Schema } = mongoose;
const userModel = new Schema({
    email: { type: String },
    name: { type: String },
    password: { type: String },
    roles: { type: Array }

});
module.exports = mongoose.model('user', userModel);