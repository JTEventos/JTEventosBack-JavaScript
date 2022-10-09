exports.validateFields = (description) => {
    if (!description) {
        const err = {status: 400, msg: "One of following params must not be null: description"};
        throw err;
    }
}
