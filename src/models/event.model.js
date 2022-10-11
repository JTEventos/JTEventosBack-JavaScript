const mongoose = require("mongoose");
const autoIncrementModelID = require('../models/counter.model');

const EventSchema = new mongoose.Schema({
    _id: {type: Number, required: false, trim: true},
    eventTypeId: {type: Number, required: true, trim: true},
    customerId: {type: Number, required: true, trim: true},
    establishmentId: {type: Number, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    startDate: {type: String, required: true, trim: true},
    finishDate: {type: String, required: true, trim: true},
    inviteList: {type: String, required: true, trim: true}
})

EventSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('Events', this, next);
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;