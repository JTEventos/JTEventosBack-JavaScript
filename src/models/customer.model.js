const mongoose = require("mongoose");
const autoIncrementModelID = require('../models/counter.model');

const CustomerSchema = new mongoose.Schema({
    _id: {type: Number, required: false, trim: true},
    name: {type: String, required: true, trim: true},
    cpf: {type: String, required: true, trim: true},
    cep: {type: String, required: true, trim: true},
    street: {type: String, required: true, trim: true},
    streetNumber: {type: String, required: true, trim: true},
    streetComplement: {type: String, required: false, trim: true},
    neighborhood: {type: String, required: true, trim: true},
    city: {type: String, required: true, trim: true},
    state: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    mobileNumber: {type: String, required: true, trim: true},
    phoneNumber: {type: String, required: false, trim: true}
})

CustomerSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('Customers', this, next);
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;