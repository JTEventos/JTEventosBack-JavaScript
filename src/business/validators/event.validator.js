exports.validateFields = (eventTypeId, customerId, establishmentId, description, startDate, finishDate) => {
    if (!eventTypeId && !customerId && !establishmentId && !description && !startDate && !finishDate) {
        const err = {status: 400, msg: "One of following params must not be null: eventTypeId, customerId, establishmentId, description, startDate, finishDate"};
        throw err;
    }
}
