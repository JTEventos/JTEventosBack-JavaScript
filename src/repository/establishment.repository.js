const mongoErrorHandler = require("./utils/handle-mongo-error");
const EstablishmentModel = require("../models/establishment.model")

exports.checkIfExists = async (id) => {
    try {
        const establishment = await EstablishmentModel.findById(id);
        return establishment;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findAll = async () => {
    try {
        const establishments = await EstablishmentModel.find();
        return establishments;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.createEstablishment = async (description, cep, street, streetNumber, streetComplement, neighborhood, city, state) => {
    try {
        const establishment = await EstablishmentModel({
            description: description,
            cep: cep,
            street: street,
            streetNumber: streetNumber,
            streetComplement: streetComplement,
            neighborhood: neighborhood,
            city: city,
            state: state
        })
        await establishment.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.updateEstablishment = async (id, description, cep, street, streetNumber, streetComplement, neighborhood, city, state) => {
    try {
        const establishment = await EstablishmentModel.findByIdAndUpdate(id, {
            description: description,
            cep: cep,
            street: street,
            streetNumber: streetNumber,
            streetComplement: streetComplement,
            neighborhood: neighborhood,
            city: city,
            state: state
        });
        await establishment.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.deleteEstablishment = async (id) => {
    try {
        await EstablishmentModel.findByIdAndDelete(id);
    } catch (e) {
        mongoErrorHandler(e);
    }
}