const { paramMustNotBeNull, notFound } = require("./utils/return-message");

exports.validateFields = (name, cpf, cep, street, streetNumber, neighborhood, city, state, email, mobileNumber) => {
    if (!name && !cpf && !cep && !street && !streetNumber && !neighborhood && !city && !state && !email && !mobileNumber) {
        throw paramMustNotBeNull("name, cpf, cep, street, streetNumber, neighborhood, city, state, email, mobileNumber");
    }
}

exports.validateIfExists = (customer) => {
    if (customer !== 1) {
        throw notFound("Cliente");
    }
}

exports.validateCpf = (cpf) => {
    try {
        cpf = cpf.replace(/[^\d]+/g, "");
        if (cpf == "") return false;
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
          )) return false;
    
        // Valida 1º digito
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(9))) return false;
    
        // Valida 2º digito
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(10))) return false;
    
        return true;
    } catch (e) {
        console.trace(e);
    }
}