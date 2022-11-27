const { paramMustNotBeNull, notFound, notValid, noData, exists } = require("./utils/return-message");

exports.validateFields = (name, cpf, cep, street, streetNumber, neighborhood, city, state, email, mobileNumber) => {
    if (!name && !cpf && !cep && !street && !streetNumber && !neighborhood && !city && !state && !email && !mobileNumber) {
        throw paramMustNotBeNull("name, cpf, cep, street, streetNumber, neighborhood, city, state, email, mobileNumber");
    }
}

exports.validateIfExists = (customer) => {
    if (!customer) {
        throw notFound("Cliente");
    }
}

exports.validateNotNull = (customers) => {
    if (customers.length == 0) {
        throw noData("Cliente");
    }
}

exports.validateSameCpf = (customers) => {
    if (customers.length != 0) {
        throw exists("Cliente", "CPF");
    }
}

exports.validateCpf = (cpf) => {
    try {
        cpf = cpf.replace(/[^\d]+/g, "");
        if (cpf == "") throw notValid("CPF");
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 || (
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999"
          )) throw notValid("CPF");
    
        // Valida 1º digito
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(9))) throw notValid("CPF");
    
        // Valida 2º digito
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(10))) throw notValid("CPF");
        
        return true;
    } catch (e) {
        throw e;
    }
}