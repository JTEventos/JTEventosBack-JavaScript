exports.validateFields = (name, cep, street, streetNumber, neighborhood, city, state) => {
    if (!name && !cep && !street && !streetNumber && !neighborhood && !city && !state) {
        const err = {status: 400, msg: "One of following params must not be null: name, cep, street, streetNumber, neighborhood, city, state"};
        throw err;
    }
}
