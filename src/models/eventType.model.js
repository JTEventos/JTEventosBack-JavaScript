const mongoose = require("mongoose");
const autoIncrementModelID = require('../models/counter.model');

const EventTypeSchema = new mongoose.Schema({
    _id: {type: Number, required: false, trim: true},
    description: {type: String, required: true, trim: true}
})

EventTypeSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('EventTypes', this, next);
});

const EventType = mongoose.model("EventType", EventTypeSchema);

module.exports = EventType;