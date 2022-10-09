exports.validateFields = (name, cpf, cep, street, streetNumber, neighborhood, city, state, email, mobileNumber) => {
    if (!name && !cpf && !cep && !street && !streetNumber && !neighborhood && !city && !state && !email && !mobileNumber) {
        const err = {status: 400, msg: "One of following params must not be null: name, cpf, cep, street, streetNumber, neighborhood, city, state, email, mobileNumber"};
        throw err;
    }
}
