const sqlErrorHandler = require("./utils/handle-sql-error");
const EstablishmentModel = require("../models/establishment.model")

exports.checkIfExists = async (id) => {
    try {
        const establishment = await EstablishmentModel.findOne(id);
        return establishment;
    } catch (e) {
        sqlErrorHandler(e);
    }
}

exports.findAll = async () => {
    try {
        const establishments = await EstablishmentModel.find();
        return establishments;
    } catch (e) {
        sqlErrorHandler(e);
    }
}

exports.createEstablishment = async (description, cep, street, streetNumber, streetComplement, neighborhood, city, state) => {
    try {
        const establishment = EstablishmentModel({
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
        sqlErrorHandler(e);
    }
}

exports.updateEstablishment = async (id, description, cep, street, streetNumber, streetComplement, neighborhood, city, state) => {
    try {
        const establishment = EstablishmentModel.findByIdAndUpdate(id, {
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
        sqlErrorHandler(e);
    }
}

exports.deleteEstablishment = async (id) => {
    try {
        await EstablishmentModel.findByIdAndDelete(id);
    } catch (e) {
        sqlErrorHandler(e);
    }
}