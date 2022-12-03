exports.createEventSchema = {
    eventTypeId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Campo \"Tipo de Evento\" é obrigatório. Selecione uma das opções disponíveis"
    }, 
    customerId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Campo \"Cliente\" é obrigatório. Selecione uma das opções disponíveis"
    }, 
    establishmentId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Campo \"Estabelecimento\" é obrigatório. Selecione uma das opções disponíveis"
    }, 
    description : {
        notEmpty: true,
        errorMessage: "Campo \"Descrição\" é obrigatório"
    },
    startDate : {
        notEmpty: true,
        errorMessage: "Campo \"Data inicial\" é obrigatório"
    },
    finishDate : {
        notEmpty: true,
        errorMessage: "Campo \"Data final\" é obrigatório"
    },
    inviteList : {
        notEmpty: false
    }
}

exports.updateEventSchema = {
    id: {
        in: "params",
        isInt: true
    },
    eventTypeId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Campo \"Tipo de Evento\" é obrigatório. Selecione uma das opções disponíveis"
    }, 
    customerId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Campo \"Cliente\" é obrigatório. Selecione uma das opções disponíveis"
    }, 
    establishmentId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Campo \"Estabelecimento\" é obrigatório. Selecione uma das opções disponíveis"
    }, 
    description : {
        notEmpty: true,
        errorMessage: "Campo \"Descrição\" é obrigatório"
    },
    startDate : {
        notEmpty: true,
        errorMessage: "Campo \"Data inicial\" é obrigatório"
    },
    finishDate : {
        notEmpty: true,
        errorMessage: "Campo \"Data final\" é obrigatório"
    },
    inviteList : {
        notEmpty: false
    }
}

exports.getEventByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}