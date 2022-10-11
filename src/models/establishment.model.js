const mongoose = require("mongoose");
const autoIncrementModelID = require('../models/counter.model');

const EstablishmentSchema = new mongoose.Schema({
    _id: {type: Number, required: false, trim: true},
    description: {type: String, required: true, trim: true},
    cep: {type: String, required: true, trim: true},
    street: {type: String, required: true, trim: true},
    streetNumber: {type: String, required: true, trim: true},
    streetComplement: {type: String, required: false, trim: true},
    neighborhood: {type: String, required: true, trim: true},
    city: {type: String, required: true, trim: true},
    state: {type: String, required: true, trim: true}
})

EstablishmentSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('Establishments', this, next);
});

const Establishment = mongoose.model("Establishment", EstablishmentSchema);

module.exports = Establishment;