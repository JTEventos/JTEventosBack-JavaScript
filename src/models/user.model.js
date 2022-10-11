const mongoose = require("mongoose");
const autoIncrementModelID = require('../models/counter.model');

const UserSchema = new mongoose.Schema({
    _id: {type: Number, required: false, trim: true},
    username: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
})

UserSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('Users', this, next);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;